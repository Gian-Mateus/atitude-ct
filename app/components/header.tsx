"use client"
import { useState } from "react";
import LogoIcon from "./svg/logo-icon";
import { AlignJustify } from "lucide-react";

export default function _Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex min-w-full justify-center bg-primary text-background">
      <nav className="flex w-full max-w-screen-lg justify-between px-12 py-4 font-bold items-center">
        <div>
          <a href="/" className="flex items-center gap-x-4">
            <LogoIcon fill="#fff" opacity="1" width="45" height="45" />
            <h1 className="text-3xl font-bold">
              ATITUDE
              {/* <small className="font-normal text-lg pl-2">
              Consultoria e Treinamento
              </small> */}
            </h1>
          </a>
        </div>
        <button
          className="flex h-8 w-8 items-center md:hidden"
          onClick={handleToggleMenu}
        >
          <AlignJustify />
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full gap-4 bg-primary p-4 text-xl font-normal md:static md:flex md:items-center text-center flex-col md:flex-row justify-end transition-all`}
        >
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Soluções</a>
          </li>
          <li>
            <a href="#">Palestras</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
