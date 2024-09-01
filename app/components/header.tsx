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
      <nav className="flex w-full max-w-screen-lg items-center justify-between overflow-hidden px-12 py-4 font-bold">
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
            isMenuOpen ? "h-[200px]" : "h-0 p-0"
          } absolute left-0 top-full box-border flex w-full flex-col items-center justify-end gap-4 overflow-hidden bg-primary p-4 text-center text-xl font-normal transition-all md:static md:flex md:h-auto md:flex-row md:items-center`}
        >
          <li>
            <a
              className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-background after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#">
              Sobre
            </a>
          </li>
          <li>
            <a
              className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-background after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#">
              Soluções
            </a>
          </li>
          <li>
            <a
              className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-background after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#">
              Palestras
            </a>
          </li>
          <li>
            <a
              className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-background after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#">
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
