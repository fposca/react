import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail'

const ItemDetailContainer = () => {

    const [personaje, setPersonaje] = useState({})

    const {id} = useParams();

    useEffect(()=> {

        ( async ()=> {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                console.log(response);
                const data = await response.json();
                console.log(data);
                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id])

    console.log(personaje);

    return (
        <div style={{
            width: '600px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ItemDetail personaje={personaje}/>
        </div>
    )
}

export default ItemDetailContainer