import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/classformex">ClassFormEx</Link>
            <Link to="/usertable">UserTable</Link>
            <Link to="/calender">Calender</Link>
            <Link to="/reactcalender">ReactCalender</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
export default Menu;