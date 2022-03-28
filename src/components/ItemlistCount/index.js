import React,{useState} from 'react';


const ItemCount = ({products,stock}) => {
    
const [initial, setInitial]=useState(1);

const add =()=>{
    if(stock>0) alert(`Se agrego ${initial} unidad/es del producto seleccionado al carrito`);
    else alert("no hay stock disponible")
}
const plus =()=>{
    if(initial<stock)setInitial(initial+1);
    
    
}
console.log(products)
const min =()=>{
    if (initial>1)setInitial(initial-1);
}
return (
      <>
      <div className="card">
      
      
      
   
<div className="buttons">

  <button className="button button4" onClick={min}>-</button>
  <div className="counter"> {initial}</div>
  <button className="button button5" onClick={plus}>+</button>
</div>
<button onClick={add} className="button buttonAdd">ADD</button>

</div>
      </>
    

  )
}

export default ItemCount