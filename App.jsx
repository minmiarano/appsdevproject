import React from "react";
import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

export default function App() {
  const products = [
    {
      id: 2,
      image: "/images/women-flat-shoes.webp",
      name: "Street Wear",
      price: 1290,
      description: "Perfect for casual outings and everyday fashion."
    },
    {
      id: 3,
      image: "/images/tommys.webp",
      name: "Trail Shoes",
      price: 1590,
      description: "Durable build for hiking and outdoor adventures."
    },
    {
      id: 4,
      image: "/images/mens-shoes.jpg",
      name: "Classic White",
      price: 890,
      description: "Minimalist design, timeless and clean."
    },
    {
      id: 5,
      image: "/images/black-vans-shoes.avif",
      name: "Classic White",
      price: 890,
      description: "Good for students regardless of their status and age."
    },
    {
      id: 6,
      image: "/images/Own_the_Game_3_Shoes_White_IF4565_01_standard.avif",
      name: "Classic White",
      price: 1890,
      description: "Timeless and one of a kind with wonderful design CPC exclusive."
    }
  ];

  const handleBuy = (productName) => {
    console.log(`Buy Now clicked: ${productName}`);
  };

  return (
    <div className="container">
      <h1 className="title">Mini E-Commerce Shop</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onBuy={() => handleBuy(product.name)}
          />
        ))}
      </div>
    </div>
  );
}
