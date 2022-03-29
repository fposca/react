import { useState, useEffect } from "react"
import React from "react"
import ItemDetail from "../ItemDetail"


const ItemDetailContainer = () => {

  const [personaje, setPersonaje] = useState({})
  useEffect(()=> {
     
    ( async ()=> {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/3');
           
            const data = await response.json();
           
            setPersonaje(data);
        } catch (error) {
            console.log(error);
          }
        })()
    
    }, [])

  return (
    <>
        <ItemDetail personaje={personaje}/>
            
        </>
  )
}

export default ItemDetailContainer