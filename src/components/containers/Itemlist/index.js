import React from 'react'
import ItemCount from '../../ItemCount'

const ItemList = ({products,stock}) => {


  return (
    <>
            
                {products.map(prod => {
                     return <ItemCount 
                     products={prod}
                     stock={stock}/>
                })}
            
        </>
  )
}

export default ItemList