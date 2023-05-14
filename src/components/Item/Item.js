import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import React, {useState, useContext} from "react";
import { useCartContext } from "../../context/CartContext";

const Item = ({info}) => {
  // const nombre = useContext(CartContext);

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(info, quantity);
  }
  return (
      // <Link to = {`/detalle/${info.id}`} className="film">
    <article className="main">
      <p className="title">{info.name}</p>
      <img 
        src= {info.img}/>
        <div className="description">    
      <p> PRECIO: $ {info.price}</p>
      <p> DESCRIPCION : {info.description}</p>
        </div>
        <div>
        { 
        goToCart 
        ? <Link to = '/cart'>Finalizar Compra</Link>
        : <ItemCount initial={0} stock={10} onAdd={onAdd}/>
        }
        </div>
        

    </article>
    /* </Link> */
  );
};
export default Item;
