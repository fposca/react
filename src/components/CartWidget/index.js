import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartIcon from '../assets/cartIcon'


const CartWidget = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='width'>
    <CartIcon onClick={() => navigate('/cart')} />
    </div>
    </>
  )
}

export default CartWidget