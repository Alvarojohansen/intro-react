import React from "react";

const Cart = ({ products, onProductClick }) => {
  const handleProductClick = (productName) => {
    onProductClick(productName);
  };

  return (
    <div>
      
      <div>
        {/* funcion para cargar los productos y poder apretarlo en caso de querer borrarlo */}
        {products.map((product, index) => (
          <h3 key={index} onClick={() => handleProductClick(product)}>
            {product}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Cart;
