import React from 'react'
import "./styles.css"

const ItemDetail = ({personaje}) => {


  return (
    <>
            <div className='card'>
              <div className='tit'>{personaje.name}</div>
              <div className='status'>{personaje.status}</div>
              <img src={personaje.image}></img>
            </div>
            
        </>
  )
}

export default ItemDetail