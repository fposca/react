import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({personaje}) => {

    const [quantity, setQuantity] = React.useState(0)

    const handleAdd = (quantity) => {
        console.log(quantity);
        setQuantity(quantity);
    }

    const handleTerminate = () => {
        console.log("Terminó la compra")
    }

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
            style ={{
                width: '400px',
            }}
            alt="personaje-img"
            />
            <div>
                <h1>Name: {personaje.name}</h1>
                <h2>Species: {personaje.species}</h2>
                {quantity === 0 ? 
                    <ItemCount stock={10} onAdd={handleAdd}/> 
                    :
                    <Link to="/Cart" style={{textDecoration: 'none'}}>
                                    
                              
                    <button className="button button5" onClick={handleTerminate}>Finalizar compra</button>      </Link> 
                }
            </div>
        </div>
    )
}

export default ItemDetail