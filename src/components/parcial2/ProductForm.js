import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (event) => {
    setProductName(event.target.value);
    console.log(productName);
  };

  const handleAddClick = () => {
    if (productName.trim() !== "") {
      onAddProduct(productName);
      setProductName("");
    }
  };

  return (
    <div>
      <div>
        <label>Ingrese el nombre del producto</label>
      </div>
      <div>
        <input type="text" value={productName} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={handleAddClick}>Agregar</button>
      </div>
    </div>
  );
};
export default ProductForm;
