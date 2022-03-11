import Head from 'next/head';

const Home = () => {
  const title = `Tem... \nmas acabou`;

  return (
    <>
      <Head>
        <title>Tem... mas acabou.</title>
      </Head>
      <main className="grid place-items-center h-screen">
        <div className="sm:max-4/12 pl-6 pr-4 grid">
          <h1 className="text-5xl mb-3 whitespace-pre-line">{title}</h1>
          <span className="text-base">O histórico de compras do Apezinho.</span>
          <button
            className="w-full max-w-xs bg-yellow-400 text-lg font-semibold	text-gray-900 rounded-md px-2 py-4 mt-12 hover:bg-yellow-300 transition ease-in-out"
            onClick={() => console.log('click')}
          >
            Entrar
          </button>
          <button
            className="text-left text-sm py-2 mt-2 underline"
            onClick={() => console.log('Create account')}
          >
            Ou crie uma nova conta.
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
