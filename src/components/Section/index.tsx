export const Section = () => {
  return (
    <section className="min-h-screen bg-blue-800 flex justify-center items-center bg-burstsMobile bg-bannerMobile lg:bg-bursts bg-190% lg:bg-banner">
      <div className="flex justify-center items-center flex-col gap-14 w-3/4 text-center lg:py-48">
        <h1 className="text-5xl lg:text-9xl font-bold text-green-500">
          Escutar muda tudo
        </h1>
        <p className="text-green-500 font-semibold text-base">
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão
          de crédito.
        </p>
        <button className="bg-green-500 text-blue-800 font-semibold py-3 px-6 rounded-3xl hover:bg-green-400 hover:scale-105">
          BAIXE O SPOTIFY FREE
        </button>
      </div>
    </section>
  );
};
