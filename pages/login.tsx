import React from "react";
import { NextPage } from "next";
import { signIn, useSession, getProviders } from "next-auth/react";
import { server } from "../config";
import { GetServerSidePropsContext } from "next";
import Header from "../components/Header";

const LoginPage: NextPage<any> = ({ providers }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Header />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            className="bg-green-500 px-4 py-2 rounded-full text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoginPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders();
  console.log(providers);
  return {
    props: {
      providers,
    },
  };
}
