import { createContext, useState } from 'react';

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    /* const [estadoA, setEstadoA] = useState("Estado inicial de A");
    const [estadoB, setEstadoB] = useState("Estado inicial de B"); */

    /* const fnDelContext = (a, b) => {
        return (a ** b);
    } */

    const [cart, setCart] = useState([]);

    const addCart = (product, quantityToAdd) => {

        const producto = isInCart(product);
        console.log(producto);
        if (producto) {
            producto.quantity += quantityToAdd;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
            //Deberíamos agregar la cantidad al producto existente
        } else {
            //Agregamos un nuevo objeto al carrito
            setCart([...cart, { ...product, quantity: quantityToAdd }]);
        }

    }
    const removeItem = (id) => {
        const cartFiltrado = cart.filter(elemento => elemento.id !== id);
        setCart(cartFiltrado);
    }
    const clear = () => {
        setCart([]);
    }
//funcionm para que se juestre el numerito en el carrito
    const conteoItems = () => {
        const suma = cart.reduce((acc, item) => acc += (item.quantity), 0)
        return suma;
    }

    //Función auxiliar que me determina si el producto está o no en el cart
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    const sumaTotal = () => {
        const suma = cart.reduce((acc, item) => acc += (item.price * item.quantity), 0)
        return suma;
    }

    return (
        <Shop.Provider value={{
            cart, addCart, removeItem, clear, sumaTotal, conteoItems 
        }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;