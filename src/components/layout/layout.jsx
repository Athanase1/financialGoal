import React, { useState } from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import "../styles/styles.css"
export default function LayOut(){
   const [displayNav, setDisplayNav] = useState(false)
    function handleClick(){
       setDisplayNav(!displayNav)
    }
    return(
        <div className="layout">
            <Header displayNav={displayNav} onClick={handleClick}/>
            <main className=" over-flow-hidden w-100  flex-grow-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}