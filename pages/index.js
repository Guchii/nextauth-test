import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="flex justify-between items-center bg-white text-slate-900 p-8 w-3/4 mx-auto">
        <h1 className="font-bold text-xl uppercase">Guchii</h1>

        <div
          className="rounded-full bg-slate-800 text-white px-8 py-2 text-sm font-bold active:scale-95 cursor-pointer duration-150 select-none"
          onClick={() => signIn()}
        >
          Sign In
        </div>
      </div>
      <div className="w-3/4 mx-auto py-8 text-4xl font-bold">
        {session ? (
          <>You're signed in, Thanks.</>
        ) : (
          <>You're not signed in. DO IT!!!!</>
        )}
      </div>
    </div>
  );
}
