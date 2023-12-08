import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="p-28">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-64 md:w-80">
        <Image src="/coxinha.jpg" width={400} height={400} alt="coxinha" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Coxinha Líder</h2>
            <div className="flex items-center">
              <span className="ml-1">Categoria</span>
            </div>
          </div>
          <p className="text-gray-700 mt-2">Descrição curta do produto.</p>
          <div className="mt-4 flex justify-between flex-col gap-5">
            <span className="text-gray-600  font-semibold">R$9,00</span>
            <button className="bg-main w-full hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
