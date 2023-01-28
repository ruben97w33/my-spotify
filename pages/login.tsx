import React from "react";
import { NextPage } from "next";
import { signIn, useSession, getProviders } from "next-auth/react";
import { server } from "../config";
import { GetServerSidePropsContext } from "next";
import Header from "../components/Header";
import Image from "next/image";

const LoginPage: NextPage<any> = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="h-screen w-full grid grid-cols-2">
        <div className="flex items-center justify-center bg-gray-300 bg-opacity-50">
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button
                className="bg-green-500 px-6 py-3 flex items-center space-x-3 rounded-full text-white text-xl"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                <div className="relative h-8 w-8">
                  <Image src="/images/logo-white.png" fill alt="logo" />
                </div>
                <div>Login with {provider.name}</div>
              </button>
            </div>
          ))}
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/bg-login.jpg"
            fill
            alt="music world"
            className="object-cover bg-center"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
