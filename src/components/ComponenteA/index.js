import React from "react";
import "./styles.css"

const ComponenteA = () => {
    
    return (
        <> <header className="header">
    
        <a href="#" className="logo">FP</a>
     
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
       
        <nav className="nav">
            <ul className="menu">
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Blog</a> </li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>

        </>
       
    )
}

export default ComponenteA;