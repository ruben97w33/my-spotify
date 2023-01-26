import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { MdAddBox } from "react-icons/md";
import { RiChatHeartLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";

const SideBar: FunctionComponent = () => {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <div className="bg-black text-gray-400 fixed left-0 top-0 h-full w-60 lg:p-6">
      <Link href="/">
        <div className="w-[129px] relative h-[2.4rem]">
          <Image
            src="/images/spotify-logo-branca-white.png"
            alt="logo-spotify"
            fill
          />
        </div>
      </Link>

      <div className="mt-[36px] space-y-[15px]">
        <div>
          <button
            onClick={() => signOut()}
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <BiLogOut size="1.6rem" />
              <div className="text-sm font-semibold">Logout</div>
            </div>
          </button>
        </div>
        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <AiFillHome size="1.6rem" />
              <div className="text-sm font-semibold">Inicio</div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <FiSearch size="1.6rem" />
              <div className="text-sm font-semibold">Buscar</div>
            </div>
          </Link>
        </div>

        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <VscLibrary size="1.6rem" />
              <div className="text-sm font-semibold">Tu Biblioteca</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-[36px] text-white space-y-[15px]">
        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <MdAddBox size="1.6rem" />
              <div className="text-sm font-semibold">Crear playlist</div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors ease-linear duration-150">
            <div className="flex items-center space-x-[17px]">
              <RiChatHeartLine size="1.6rem" />
              <div className="text-sm font-semibold">Buscar</div>
            </div>
          </Link>
        </div>
        <div className="h-[0.07px] bg-gray-400"></div>
        <div className="text-sm font-semibold text-gray-400 hover:text-white hover:cursor-pointer transition-colors ease-linear duration-150">
          Mi playlist n.1
        </div>
      </div>
    </div>
  );
};

export default SideBar;
