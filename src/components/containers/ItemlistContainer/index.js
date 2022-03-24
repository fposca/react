import React from "react";
import ItemCount from '../../ItemCount';
import "./styles.css"


const ItemlistContainer = ({greeting} ) => {
    const ondAdd = (stock) => {
        console.log( `Se agregaron ${stock}`);
      }
     
    
    return (
        <><div className="bienvenido">{greeting}</div>
        <div className="contenedor-card">
        <ItemCount stock={10} onAdd={ondAdd} id="1"></ItemCount>
        <ItemCount stock={5} onAdd={ondAdd} id="1"></ItemCount>

        <ItemCount stock={15} onAdd={ondAdd} id="1"></ItemCount>
        </div>
 
      
       

        </>
       
    )
}

export default ItemlistContainer;