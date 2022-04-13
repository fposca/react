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
   {cart.length > 0 ?
      <div className='titulo'>Carrito de compras</div>

     : <div className='empty'>CARRITO VACIO</div>
}
        <div className='card-list-2'>
      <div className='widthi'>Imagen</div>
      <div className='widthi'>Nombre</div>
      <div className='widthi'>Especie</div>
      <div className='widthi'>Cantidad</div>
      <div className='widthi'>Precio</div>
      <div className='widthi'>Eliminar</div>

        </div>
         <div className='contenedor-card'>
       
         
            {cart.map((row) => (
              <div  className='card-list'
                key={row.name}
              
              >
              <div className='widthi'><img className="imagen-round " src={row.image} /></div>
                <div className='widthi'>{row.name}</div>
                <div className='widthi'>{row.species}</div>
                <div className='widthi'><span >{row.quantity}</span></div>
                <div className='widthi'><span >{row.price}</span></div>
                
           
               
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
     

      <div ><button className='button button5 spacer min' onClick={handleCheckout}>Ir al checkout</button>
     {modal ? <Chekout handleClose = {handleClose} cart = {cart} total = {suma}/>: null }
     </div>
     <hr className='line4'/>
     <div><span className='cantidad2'>Total: $ {suma}</span></div>
     <span className='absolute'>{suma}</span>
     

      </>
     
    )
  }
  
  export default Cart;