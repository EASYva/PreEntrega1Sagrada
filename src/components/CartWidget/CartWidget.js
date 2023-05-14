import carrito from "./assets/carrito.svg";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./CartWidget.css";


const CartWidget = () => {
  const { cart, totalProducts } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
      <div className="text"> 
        <p >NO HAY ELEMENTOS EN EL CARRITO :(</p>
        <Link to="/">Hacer Compras</Link>
      </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
  <p className="Total">TOTAL: {totalProducts()} </p>
    <Link to="/checkout"> <button className="Button">GENERAR ORDEN</button> </Link>
    </>
 );
 };

export default CartWidget;
