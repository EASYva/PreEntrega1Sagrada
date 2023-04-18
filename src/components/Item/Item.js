import "./Item.css";
import React from "react";

const Item = ({info}) => {
  return (
    <a href="#" className="article">
      <p className="title">{info.name}</p>
      <img 
        src= {info.img}/>
        <div className="description">    
      <p > PRECIO: $ {info.price}</p>
      <p> DESCRIPCION : {info.description}</p>
        </div>
    </a>
  );
};
export default Item;
