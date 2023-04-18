import './ItemCount.css'
import React,{useEffect, useState} from 'react';

export const ItemCount = ({initial,stock, onAdd}) => {    
const [count,setCount] = useState(parseInt(initial));

const decreaseCount = () =>{
    setCount(count - 1);
}
const incrementCount = () =>{
    setCount(count + 1);
}
useEffect (() => {
    setCount(parseInt(initial));
},[initial]);
return (
    <div className='counter'>
        <button disabled={count >=stock} onClick={incrementCount}  > + </button>
        <span> {count} </span>
        <button disabled={count <=0}onClick={decreaseCount}> - </button>
        <div>
            <button disabled={stock <= 0} onClick={()=> onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>
)
};

export default ItemCount;