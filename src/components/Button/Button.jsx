import React from "react";

import './Button.css'

export default function Button(props){
    return(

        <div className="button-container">
            <button onClick={()=>props.onClickHandler("product")}>{props.title}</button>
        </div>
        
    )
}