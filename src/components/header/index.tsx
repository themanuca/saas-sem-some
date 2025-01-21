"use client"
import Link from "next/link";
import iconeTitulo from "../../../public/iconeTitulo.svg"
import Image from "next/image";
import { useState } from "react";



export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <header className="fixed w-full top-0 bg-white shadow-md px-4 py-3 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href={"/"}>
            <div className="flex items-center gap-2">
            <Image
                src={"/iconeTitulo.svg"}
                alt={"Ícone"}
                width={40}
                height={38}
                priority
            />
            <span className="text-xl font-bold text-gray-800">
                Com Todo Amor
            </span>
            </div>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-gray-700 font-semibold">
            <li>
              <Link href="/#sobre" scroll={true} className="hover:text-pink-500">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/#comoFunciona" scroll={true} className="hover:text-pink-500">
                Como funciona ?
              </Link>
            </li>
            <li>
              <Link href="/#planos" scroll={true} className="hover:text-pink-500">
                Planos
              </Link>
            </li>
            <li>
              <Link href="/#feedbacks" scroll={true} className="hover:text-pink-500">
                Feedbacks
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-2 bg-white border-t border-gray-200">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li>
              <Link
                href="/#sobre"
                scroll={true}
                className="hover:text-pink-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#comoFunciona"
                scroll={true}
                className="hover:text-pink-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona ?
              </Link>
            </li>
            <li>
              <Link
                href="/#planos"
                scroll={false}
                className="hover:text-pink-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
            </li>
            <li>
              <Link
                href="/#feedbacks"
                scroll={false}
                className="hover:text-pink-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Feedbacks
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
    )
}