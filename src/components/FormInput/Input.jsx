import React from "react";

import './Input.css'

export default function Input(props){
    const onInputChangeHandler = (e)=>{
        let value = e.target.value;
        console.log(value);
        props.onChangeHandler(value)
    }
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="input-container">
            <form action="" className="input-form" onSubmit={searchSubmitHandler}>
                <input placeholder={props.placeholder} type="search" className="search-input" onInput={onInputChangeHandler} />
            </form>
        </div>
    )
}