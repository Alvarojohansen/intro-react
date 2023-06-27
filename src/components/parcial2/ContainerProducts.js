import React, { useState } from "react";
import ProductForm from "./ProductForm";
import Cart from "./Cart";

const ContainerProducts = () => {
  const [productList, setProductList] = useState(["Silla" , "Mesa", "Divan"]);

  const handleAddProduct = (productName) => {
    setProductList([...productList, productName]);
  };

  const handleRemoveProduct = (productName) => {
    const updatedList = productList.filter(
      (product) => product !== productName
    );
    setProductList(updatedList);
  };

  return (
    <div>
      <div>
        <ProductForm onAddProduct={handleAddProduct} />
      </div>
      <div>
        <Cart products={productList} onProductClick={handleRemoveProduct} />
      </div>
    </div>
  );
};

export default ContainerProducts;
