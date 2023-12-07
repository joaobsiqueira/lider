import React from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <span className="text-3xl md:text-5xl font-bold text-red-500">
          Líder
        </span>
        <ul className="md:flex hidden gap-12 items-center font-semibold text-xl">
          <Link href="/pages/Produtos">
            <li>Produtos</li>
          </Link>
          <li>Contato</li>
          <li>Filiais</li>
          <button className="bg-main text-white px-6 py-2 rounded-2xl">
            Cadastre-se
          </button>
        </ul>
        <IoMenu className="md:hidden text-main" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
