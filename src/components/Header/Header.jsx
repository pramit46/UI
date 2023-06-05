import React, { useState } from "react";
import Input from "../FormInput/Input";
import LoginRegister from "../LoginRegister/LoginRegister";
import Navbar from "../Navbar/Navbar";
import {Link} from 'react-router-dom';

import './Header.css'
import icons from "../../constants/icons";

export default function Header(props){
    const testItems = [
        {
            name:"test1",
            link:"some://href",
            options:["a1","a2","a3","a4"]
        },
        {
            name:"test2",
            link:"some://href",
            options:["b1","b2","b3","b4"]
        },
        {
            name:"test3",
            link:"some://href",
            options:["c1","c2","c3","xc4"]
        }
    ];
    const [activeOptions,setActiveOptions] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchKeyword,setSearchKeyword] = useState("");
    const [loginVisible,setLoginVisible] = useState(false);
    const usersOptionClickHandler = (execute)=>{
        //check if user logged in
        if(execute)
        props.setLoginVisible(true);
        // if user logged in
        //navigate to profile page
    }

    function OptionModal (props) {
        return(
            <div className="modal" onMouseOut={()=>{setModalVisible(false)}} >
                <ul className="modal-list">
                    {props.options.map((item)=><li>{item}</li>)}
                </ul>
                
            </div>
        )
    }

    return(
        <div className="header-container">
            <div className="modal-container">
                {modalVisible && <OptionModal mouseOutHandler = {()=>{console.log("wtf");setModalVisible(false)}} options={activeOptions}/>}
            </div>
            <div className="header-logo">
                
            </div>
            <div className="header-navigation">
                <div className="header-search-bar">
                    <Input placeholder={"Search"} onChangeHandler={setSearchKeyword}/>
                    <div className="users-stuff" onClick={()=>usersOptionClickHandler(false)}>
                        <div className="cart-icon-access">
                            <Link to="/cart" className="cart-link">
                                {icons.cart}
                            </Link>
                        </div>
                        <div className="user-cion-access">
                        <Link to="/user" className="user-page-link">
                                {icons.user}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-navbar">
                    <Navbar expandOptions={(options)=>{setActiveOptions(options);setModalVisible(true)}} navItems={testItems}/>
                </div>
            </div>
            
        </div>
    )
}

