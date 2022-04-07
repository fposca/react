import React, { useContext } from 'react'
import { Shop } from '../Context/ShopProvider';

function Cart() {
    const { cart, removeItem, clear } = useContext(Shop);
  
    const handleRemove = (id) => {
      removeItem(id);
    }
    const handleClear = () => {
      clear();
    }
    return (
      <>
      <div className='titulo'>Carrito de compras</div>
         <div className='contenedor-card'>
       
      
            {cart.map((row) => (
              <div  className='card'
                key={row.name}
              
              >
                <div >
                  {row.name}
                </div>
                <div >{row.species}</div>
                <div ><img className="imagen-round " src={row.image} /></div>
                <div><span className='cantidad'>Cantidad: {row.quantity}</span></div>
               
                <div >
                  <div onClick={() => handleRemove(row.id)}>
                  <div className='borrar'></div>
                  </div>
                </div>
              </div>
            ))}
          
      
      </div>
      <div variant="outlined" onClick={handleClear}>
     <div className='inline'> <span>Borrar todo</span> <span className='borrar2'></span></div>
      </div>
     
      </>
    )
  }
  
  export default Cart;