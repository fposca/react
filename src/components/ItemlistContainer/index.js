import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itemlist from "../containers/Itemlist";


import "./styles.css"


const ItemlistContainer = ({greetings}) => {

    const [products, setProducts] = useState([]);
    const {id} = useParams ()
    const stock=10;

    useEffect(()=> {
     
      ( async ()=> {
          try {
              const response = await fetch('https://rickandmortyapi.com/api/character/');
             
              const data = await response.json();
             
              setProducts(data);
          } catch (error) {
              console.log(error);
          }
      })()
  
  }, [])



  return (
      <>
   
        <h1 className="bienvenido">{greetings}</h1>
        <div className="contenedor-card">
        <Itemlist 
        products={products}
        stock={stock}/>
        </div>
        </>
    

  )
}

export default ItemlistContainer;