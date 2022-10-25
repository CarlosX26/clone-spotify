import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import logo from "../../assets/img/spotify-logo.png";

export const Footer = () => (
  <footer className="bg-black flex flex-col gap-16  relative py-16 px-4 lg:px-24 lg:h-530px  lg:flex-row">
    <img className="max-w-full w-32 h-10" src={logo} alt="logo__spotfy" />

    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-6">EMPRESA</h4>
      <ul className="flex flex-col gap-6">
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Sobre"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Empregos"
          >
            Empregos
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#For the Record"
          >
            For the Record
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-6">COMUNIDADES</h4>
      <ul className="flex flex-col gap-6">
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Para Artistas"
          >
            Para Artistas
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Desenvolvedores"
          >
            Desenvolvedores
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Publicidade"
          >
            Publicidade
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Investidores"
          >
            Investidores
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Fornecedores"
          >
            Fornecedores
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-gray-400 text-xs font-semibold mb-6">LINKS ÚTEIS</h4>
      <ul className="flex flex-col gap-6">
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Suporte"
          >
            Suporte
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Player da Web"
          >
            Player da Web
          </a>
        </li>
        <li>
          <a
            className="text-white font-normal hover:text-green-500"
            href="#Aplicativo móvel grátis"
          >
            Aplicativo móvel grátis
          </a>
        </li>
      </ul>
    </div>

    <div className="flex gap-4 h-14 lg:absolute lg:top-16 lg:right-24 ">
      <a href="#instagram" className="bg-gray-700 p-4 rounded-full">
        <BsInstagram className="text-white text-2xl hover:text-green-500" />
      </a>
      <a href="#twitter" className="bg-gray-700 p-4 rounded-full">
        <BsTwitter className="text-white text-2xl  hover:text-green-500" />
      </a>
      <a href="#facebook" className="bg-gray-700 p-4 rounded-full">
        <FaFacebookF className="text-white text-2xl hover:text-green-500" />
      </a>
    </div>
  </footer>
);
