import carrito from './assets/carrito.svg'
import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartImage = () =>{
const {totalProducts} = useCartContext();


return(
    <div className='cart-widget'>
        <img src={carrito} alt="cart-widget"/>
        <span>{totalProducts() || ''}</span>
          
    
    </div>
)
}

export default CartImage;