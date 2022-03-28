import React, { useState } from "react";
import "./styles.css"



const ItemCount = ({products,stock}) => {

  
  const [quantity, setQuantity] = useState(1)
  

  const handleDecrement = () => {
    if (quantity > 1 ){
      setQuantity(quantity - 1)
    }
  }
  const add =()=>{
   console.log (`Se agrego ${quantity} unidad/es del producto seleccionado al carrito`) 
 
}

  const handleAdd = () => {
    
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }
  
  return (
    <>  <div className="card">
    <div className="id">{products.id}</div>
    <div className="titulo">{products.title}</div>
    
    <div><img className="imagen" src={products.image} /></div>
    <div className="precio">$ {products.price}</div>
      <div className="buttons">
        <button className="button button4" onClick={handleDecrement}>-</button>
        <div className="counter"> {quantity}</div>
        <button className="button button5" onClick={handleAdd}>+</button>
      </div>
      <button onClick={add} className="button buttonAdd">ADD</button>

    </div></>
   
  )
}
export default ItemCount;