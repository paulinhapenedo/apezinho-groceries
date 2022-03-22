import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const title = `Tem... \nmas acabou`;

const Home = () => {
  const router = useRouter();
  const { status } = useSession();
  const isUserLoggedIn = status === 'authenticated';
  const callbackUrl = `${process.env.NEXT_PUBLIC_URL}/groceries`;

  const onClickButton = () =>
    isUserLoggedIn ? router.push(callbackUrl) : signIn('google', { callbackUrl });

  return (
    <>
      <Head>
        <title>Tem... mas acabou.</title>
      </Head>
      <main className="grid place-items-center h-screen">
        <div className="sm:max-4/12 pl-4 pr-4 grid">
          <h1 className="text-5xl mb-3 whitespace-pre-line">{title}</h1>
          <span className="text-base">O histórico de compras do Apezinho.</span>
          <button
            className="w-full max-w-xs bg-yellow-400 text-lg font-semibold	text-gray-900 rounded-md px-2 py-4 mt-12 hover:bg-yellow-300 transition ease-in-out"
            onClick={onClickButton}
          >
            Entrar
          </button>
          {isUserLoggedIn && (
            <button className="text-left text-sm py-2 mt-2 underline" onClick={() => signOut()}>
              Deslogar
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
