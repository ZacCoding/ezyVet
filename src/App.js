import React from "react";
import ShoppingList from "./components/ShoppingList"
import ShoppingCart from "./components/ShoppingCart"
import Total from "./components/ShoppingCartTotal"
import "./styles.css";

export default function EzyVetApp() {
  return (
    <div className="ezyVet-app">
      <h2>Shopping Products</h2>
      <ShoppingList />
      <h2>Shopping Cart</h2>
      <ShoppingCart />
      <Total />
    </div>
  );
}