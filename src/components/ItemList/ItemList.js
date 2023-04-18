import Item from "../Item/Item"
import React from "react";

    const ItemList =({data = []}) => {
        return (
            data.map(producto => <Item key={producto.id} info ={producto}/>)
        );
    }
    export default ItemList;