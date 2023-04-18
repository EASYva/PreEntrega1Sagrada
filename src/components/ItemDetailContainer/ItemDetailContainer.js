import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useEffect, useState} from "react";

const product = [
    {
        id:1,
        name: "Iphone 12",
        price: 10000,
        category: "celular",
        img: "https://tienda.antel.com.uy/razuna/assets/1/DD4F296114664C8BB4F646C566B13C83/img/2E87F6DD138B4C619A4A826DD483C885/iPhone12-1_2E87F6DD138B4C619A4A826DD483C885.jpg",
        stock: 20,
        description: "Description de Iphone 12"
    },
    
  ];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(product);
    }, 3000);
    });
getData.then(res => setData(res));
},[]);
    return(
        <ItemDetail data = {data}/>
    );
}


export default ItemDetailContainer;