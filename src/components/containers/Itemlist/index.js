import React, { useEffect, useState } from "react";
import ItemCount from '../../ItemCount';


import "./styles.css"


const Itemlist = ({greeting} ) => {
    const [products, setProducts] = useState ([]);

    useEffect(()=> {
        (async () => {
        const response = await fetch ('../data.json');
        const data = await response.json()
        console.log(data);
        setProducts(data);

        })()
    }, [])

    console.log (products);

    const ondAdd = (stock) => {
        console.log( `Se agregaron ${stock}`);
      }
     
    
    return (
        <>

        <div className="bienvenido">{greeting}</div>
               <div  className="contenedor-card">{products.map(prod => {
        return <ItemCount stock={10} onAdd={ondAdd} products={prod}/>
        })}
        
</div>


        </>
       
    )
}

export default Itemlist;