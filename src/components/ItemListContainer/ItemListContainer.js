import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
const products = [
  {
      id:1,
      name: "Iphone 12",
      price: 10000,
      category: "celular",
      img: "https://tienda.antel.com.uy/razuna/assets/1/DD4F296114664C8BB4F646C566B13C83/img/2E87F6DD138B4C619A4A826DD483C885/iPhone12-1_2E87F6DD138B4C619A4A826DD483C885.jpg",
      stock: 20,
      description: "Description de Iphone 12"
  },
  {
      id:2,
      name: 'Iphone 13',
      price: 12000,
      category: 'celular',
      img: "https://tienda.movistar.com.uy/media/catalog/product/cache/dfa77e5d2ffb51dcb2201ee01ed04853/i/p/iphone-14-plus-min.png",
      stock: 10,
      description: 'Description de Iphone 13'
  },
];


const ItemListContainer = ({texto}) => { 
  const [data, setData] = useState([]);
  
  useEffect(() =>{ 
const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000);
});

getData.then(res => setData(res));

  },[]);
const onAdd = (cantidad) => {
  console.log(`Compraste ${cantidad} unidades`);
}
  return (
    <div className="item-container">
      {/* <h1> greeting={texto}</h1> */}
      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
      <ItemList data = {data}/>
    </div>
  );
  }
export default ItemListContainer;
