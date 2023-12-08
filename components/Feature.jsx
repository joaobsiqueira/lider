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
        Do encantador ao prático, do inovador ao clássico, cada produto é
        resultado de um comprometimento constante com a qualidade, o design e a
        satisfação do cliente. Explore esta seleção e descubra por que esses
        itens têm conquistado tantos corações e se destacado entre tantas opções
        disponíveis. Seja bem-vindo(a) a esta coleção especial, onde a
        popularidade se alia à qualidade para oferecer uma experiência única e
        encantadora a cada escolha.
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
              A Padaria Líder brilha com sua salada de camarão, um prato que une
              a frescura dos camarões selecionados cuidadosamente com a
              crocância dos vegetais. Uma explosão de sabores, onde o mar se
              encontra com a terra, em cada garfada. Uma verdadeira celebração
              de frescor e qualidade, servida com excelência na Padaria Líder.
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
              "Na Padaria Líder, a maçã recheada é a combinação perfeita de
              simplicidade e sabor. Maçãs cuidadosamente selecionadas, recheadas
              com nozes, passas e canela, assadas para criar uma explosão de
              sabores. Uma doçura equilibrada, servida com a dedicação
              característica da padaria."
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
            <h2 className=" font-medium text-xl">Frango Cereja</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              "Na Padaria Líder, o frango cereja é uma explosão de sabores.
              Frango suculento, delicadamente preparado, ganha um toque especial
              com cerejas que adicionam um contraste doce e ácido. Uma
              combinação memorável de sabores, servida com maestria na padaria."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
