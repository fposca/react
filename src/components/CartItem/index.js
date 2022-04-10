import React from 'react';


const CartItem = ({ item }) => {
    return (
        <div className='cartItem'>
            <img className='imagen' src={item.image} alt="cart-img" width={'100px'} />
            <h2>Cantidad: {item.quantity}</h2>
            <h2 style={{width: "20%"}}>{item.name}</h2>
            <h2>${item.price}</h2>
            <button className='btn btn-large btn-danger'>X</button>
        </div>
    )
}

export default CartItem;