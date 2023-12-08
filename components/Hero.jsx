import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[500px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10 opacity-80"
        src="/hero2.png"
        width={1000}
        height={600}
      ></Image>
      <NavBar />
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
          <p className="uppercase font-medium">A Líder das panificadoras!</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Comida <span className="text-main ">Deliciosa</span>
          </h2>
          <p className="text-gray-700 text[14px] sm:text-[16px] ">
            Um bom dia, começa na Padaria Líder! <br /> Venha conhecer uma de
            nossas unidades
          </p>
          <Link href="/pages/Produtos">
            <button className="bg-main text-white px-6 py-4 rounded-3xl text-[14px] sm:text-[14px]">
              Ver Mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
