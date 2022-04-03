import React from "react";
import "./styles.css"
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';


const stock ="0";
const NavbarComponent = () => {
   

    return (
        <> <header className="header">
    
       
        <Link to="/" style={{textDecoration: 'none'}}>
        <div className="logo">  </div> 
                    </Link>

       
     
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
       
        <nav className="nav">
            <ul className="menu">
                <li> <Link to="/" style={{textDecoration: 'none'}}>
                        All
                    </Link></li>
                <li>  <Link to="/category/Alien" style={{textDecoration: 'none'}}>
                                    Alien
                                </Link></li>
                                <li>  <Link to="/category/Human" style={{textDecoration: 'none'}}>
                                    Human
                                </Link></li>
                <li><a href="#">  <CartWidget/> <div className="something">{stock}</div> </a></li>
            </ul>
           
        </nav>
     
    </header>
   

        </>
       
    )
}

export default NavbarComponent;