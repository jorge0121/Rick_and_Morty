import React from "react";
import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";


export default function NavBar({onSearch}){
    return(
        <div className={style.StyleNavBar}>

            <SearchBar onSearch={onSearch}/>
            <Link className={style.link} to='/about'>About</Link>
            <Link className={style.link} to='/home'>Home</Link>

        </div>
    )
}