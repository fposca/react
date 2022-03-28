import React, { useEffect, useState } from "react";
import ItemList from "../containers/Itemlist"


import "./styles.css"


const ItemlistContainer = ({greetings}) => {

    const [products, setProducts] = useState([]);

    const stock=10;

    useEffect(()=> {
     
      ( async ()=> {
          try {
              const response = await fetch('/data.json');
             
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
        <ItemList 
        products={products}
        stock={stock}/>
        </div>
        </>
    

  )
}

export default ItemlistContainer;