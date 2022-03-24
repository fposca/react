import React from "react";
import "./styles.css"


const stock ="0";
const NavbarComponent = () => {
   

    return (
        <> <header className="header">
    
        <a href="#" className="logo"></a>
     
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
       
        <nav className="nav">
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Empresa</a> </li>
                <li><a href="#"><div className="carrito"><div className="something">{stock}</div></div> </a></li>
            </ul>
        </nav>
    </header>

        </>
       
    )
}

export default NavbarComponent;