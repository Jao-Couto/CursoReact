import { useState } from "react";
import {FaPlusCircle} from 'react-icons/fa';
import "./Header.css"

function Header(props){
    const showDropdown = () => {
        props.setDropdown("show");
        document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    return  <header className="header">
        <h2>To-do</h2>
        <FaPlusCircle style={{marginRight: "50px"}} onClick={showDropdown()}></FaPlusCircle>
    </header>
}
export default Header