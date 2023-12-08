import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import React from "react";

const pageProdutos = () => {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-row">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default pageProdutos;
