import React from "react";

import './Input.css'

export default function Input(props){
    const onInputChangeHandler = (e)=>{
        let value = e.target.value;
        console.log(value);
        props.onChangeHandler(value)
    }
    return (
        <div className="input-container">
            <input placeholder={props.placeholder} type="search" className="search-input" onInput={onInputChangeHandler} />
        </div>
    )
}