import { createContext, useState, useEfect } from "react";

export const Shop = createContext();
const ShopProvider = ({children}) => {

const [estadoA, setEstadoA] = useState ("estado inicial");
const [estadoB, setEstadoB] = useState ("estado inicial");

    return (
    <Shop.Provider value ={{
        estadoA, setEstadoA,  estadoB, setEstadoB, 
    }}>
        {children}

    </Shop.Provider>
        )
}
    
export default ShopProvider