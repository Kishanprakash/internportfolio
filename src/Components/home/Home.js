import React from "react";
import'./Home.css';
import Aboutus from "../Aboutus/Aboutus";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
function home(){
    return(
        <>
        <div>
             <h1>KISHAN</h1>
        </div>
       <Aboutus/>
       <Skills/>
       <Contact/>
   </> );
}
export default home