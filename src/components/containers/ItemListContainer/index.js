import React, { useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./styles.css"
import { Shop } from '../../Context/ShopProvider';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const {estadoA} = useContext(Shop);
    const { id } = useParams() //Siempre trae un string
    const navigate = useNavigate();

    console.log(id);

    /* const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`);
    } */

    useEffect(() => {
        //IIFE
        (async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                console.log(response);
                const data = await response.json();
                console.log(data);
                const personajes = data.results;
                if (!id) {
                    setProducts(personajes);
                } else {
                    //Filtrar según el id
                    const personajesFiltrados = personajes.filter(personaje => personaje.species === id)
                    console.log(personajesFiltrados);
                    setProducts(personajesFiltrados);
                }
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id]) //Colocamos el id como dependencia, para que cada vez que haya un nuevo id, se ejecute nuevamente.

   // console.log(products);
    console.log(estadoA);

    return (
        <div>
            <h2>{greeting}</h2>
            {/* NOTA: Llamar a ItemList para que haga el map */}
            {products.length !== 0 ?
           <div className='container-card'>
                    {products.map(product => {
                        return <>
                        <div key={product.name}
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate(`/item/${product.id}`)} className='card' >
                        <div >
                            {product.name}
                        </div> <div><img className="imagen-round " src={product.image} /></div>
                        <div className="specie" >{product.species} </div>
                        </div></>
                        
                    })}
               </div>
                :
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default ItemListContainer