import React, { useContext, useState, useEffect } from 'react'

import Chekout from '../Chekout';
import { Shop } from '../Context/ShopProvider';


function Cart() {
    const { cart, removeItem, clear, sumaTotal } = useContext(Shop);

    const [suma, setSuma] = useState();
    const [modal, setModal]= useState(false);
    const handleRemove = (id) => {
      removeItem(id);
    }
    const handleClear = () => {
      clear();
    }

  const handleCheckout = () =>{
      setModal(true)
  }


  const handleClose = () =>{
    setModal(false)
}

    useEffect(()=> {
        setSuma(sumaTotal())
      }, [sumaTotal])
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
                <div><span className='cantidad'>Precio: {row.price}</span></div>
                
               
               
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
      <div><span className='cantidad2'>Total: $ {suma}</span></div>

      <div ><button className='button button5 spacer' onClick={handleCheckout}>Ir al checkout</button>
     {modal ? <Chekout handleClose = {handleClose} cart = {cart} total = {suma}/>: null }
     </div>
     
      </>
    )
  }
  
  export default Cart;