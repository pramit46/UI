import React from "react";

import './Navbar.css';

export default function Navbar(props){
    const onMouseOverHandler=()=>{
        // props.expandOptions(options)
    }
    return(
        <div className="navbar-container">
            <ul className="navbar-list">
                {props.navItems.map((item)=><li className="navbar-list-item" onMouseOver={()=>{props.expandOptions(item.options)}}>{item.name}</li>)}
            </ul>
        </div>
    )
}