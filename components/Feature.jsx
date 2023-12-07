import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Nossos</h2>
      <h2 className="text-6xl font-bold pt-2">
        Principais <span className="text-main">Produtos</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        exercitationem maiores minima temporibus quidem, suscipit adipisci,
        necessitatibus saepe at que recusandae aperiam odio sequi fugiat ipsa?
        Omnis suscipit blanditiis optio illum!
      </p>
      <Dash />
      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-16">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="imagem destaque"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Salada de Camarão</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              suscipit, quibusdam laudantium ipsum consequuntur dolor
              necessitatibus porro?
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="imagem destaque 2"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Maçã Recheada</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              suscipit, quibusdam laudantium ipsum consequuntur dolor
              necessitatibus porro?
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="imagem destaque 3"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Lamen</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              suscipit, quibusdam laudantium ipsum consequuntur dolor
              necessitatibus porro?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
