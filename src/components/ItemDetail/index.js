import React from 'react'

const ItemDetail = ({personaje}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '90%',
            
        }}>
            <img  className='border'
            src={personaje.image}
            alt="personaje-img"
            />
            <div>
                <h1>Name: {personaje.name}</h1>
                <h2>Species: {personaje.species}</h2>
            </div>
        </div>
    )
}

export default ItemDetail