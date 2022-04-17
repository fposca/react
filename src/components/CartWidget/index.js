
import { useNavigate } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'


import { Shop } from '../Context/ShopProvider';
import CartIcon from '../assets/cartIcon'


const CartWidget = () => {
  const navigate = useNavigate()
  const {conteoItems} = useContext(Shop);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(()=> {
    setCantidadTotal(conteoItems())
  }, [conteoItems])

  return (
    <>
    <div className='width'>
    {/* <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}> */}
    <CartIcon onClick={() => navigate('/cart')} />
    {cantidadTotal!==0 && <p className='absolute'>{cantidadTotal}</p>}

    </div>
    {/* </div> */}
    </>
  )
}

export default CartWidget