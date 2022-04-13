
import React, {  useState } from 'react'
import "./styles.css"
import {db} from '../../Firebase/config'
import { addDoc, collection } from 'firebase/firestore';

const Chekout = ({handleClose, cart, total}) => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const onSubmit =(e) => {
        e.preventDefault();
        console.log('Se submitio');
        console.log(nombre, direccion);
        if (nombre ==="" || direccion ==="") {
            return
        }
        const order = {
            buyer: {
                nombre: nombre,
                direccion: direccion
            },
            items:         cart
            ,
            total:total,
            createdAt : new Date ().toLocaleString()

        }
        console.log(order);
        const orderCollection = collection (db, 'orders');
        addDoc(orderCollection, order).then (({id})=> alert(`ordern generada con id ${id}`))

        
    }
    return (
        <> 
       <div className="modalContainer">
           <div className="modal">Generá tu orden
           <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre" id="nombre" value ={nombre} onChange={e => setNombre (e.target.value)}/>
            <input  type="text"  placeholder="Direccion" value ={direccion} onChange={e => setDireccion (e.target.value)} id="direccion"/>
         
            <button className='button button4 space min' type="submit">Enviar</button>
           </form>

           <div className="close" onClick={handleClose} >X</div>

          
           </div>
        
       </div>
    

        </>
       
    )
}

export default Chekout;