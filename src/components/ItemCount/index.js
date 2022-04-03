import React, { useState } from "react";
import "./styles.css"


const ItemCount = ({stock, onAdd}) => {

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
      if (quantity > 1) {
          setQuantity(quantity - 1);
      }
  }

  const handleAdd = () => {
      if (quantity < stock) {
          setQuantity(quantity + 1);
      }
  }
  
  return (
    <>  <div className="card2">
    
    
    
  
  
      <div className="buttons">
        <button className="button button4" onClick={handleDecrement}>-</button>
        <div className="counter"> {quantity}</div>
        <button className="button button5" onClick={handleAdd}>+</button>
      </div>
      <button onClick={()=> onAdd(quantity) } type="button" className="button buttonAdd">ADD</button>

    </div></>
   
  )
}
export default ItemCount;