import React, { useContext } from 'react';
import ItemCount from '../ItemCount';
import {  useNavigate } from 'react-router-dom';
import { Shop } from '../Context/ShopProvider';

const ItemDetail = ({personaje}) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = React.useState(0)
    const {addCart} = useContext(Shop);


    const handleAdd = (quantity) => {
        console.log(quantity);
        setQuantity(quantity);
    }


    const handleTerminate = () => {
        navigate('/cart');
        console.log("Terminó la compra");
        addCart(personaje, quantity);
    }
    
    const buy = () => {
        navigate('/');
    }

    return (
       <div className='content'>
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
            <div className='debajo'>
                <h1>Name: {personaje.name}</h1>
                <h2>Species: {personaje.species}</h2>
                {quantity === 0 ? 
                    <ItemCount stock={personaje.stock} onAdd={handleAdd}/> 
                    :
                  <div>
                    <button className="button button5 mar"   onClick={(handleTerminate) } >Comprar</button>
                    <button className="button button5"   onClick={(buy) } >Navegar</button> 
                   
                       </div>
                }
            </div>
        </div>
        </div>
    )
}

export default ItemDetail