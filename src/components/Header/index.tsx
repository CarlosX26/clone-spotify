import logo from "../../assets/img/spotify-logo.png";

export const Header = () => {
  return (
    <header className="w-full h-20 bg-black flex justify-between items-center px-4 py-5 lg:px-24">
      <img className="max-w-full w-32 h-10" src={logo} alt="logo__spotfy" />
      <button className="flex flex-col gap-1 md:hidden">
        <span className="bg-white inline-block h-1 w-6"></span>
        <span className="bg-white inline-block h-1 w-6"></span>
        <span className="bg-white inline-block h-1 w-6"></span>
      </button>
      <nav className="hidden md:flex md:items-center md:gap-10">
        <a
          href="#Premium"
          className="text-white font-bold hover:text-green-500"
        >
          Premium
        </a>
        <a
          href="#Suporte"
          className="text-white font-bold hover:text-green-500"
        >
          Suporte
        </a>
        <a href="#Baixar" className="text-white font-bold hover:text-green-500">
          Baixar
        </a>
        <span className="w-px h-5 bg-white"></span>
        <a
          href="#Inscrever-se"
          className="text-white font-bold hover:text-green-500"
        >
          Inscrever-se
        </a>
        <a href="#Entrar" className="text-white font-bold hover:text-green-500">
          Entrar
        </a>
      </nav>
    </header>
  );
};
