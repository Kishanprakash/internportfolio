import React from "react";
import './Contact.css';
import i1 from '../images/tom.png'
function Contact(){
    return(
    <div className="changetype">
        
            <p >Mobile :884563210</p>
            <img src={i1} id="kis"></img>
            
            <form action="">
                <div className="raam">
    <h2 align="center">REGISTRATION FORM</h2>
    </div>
    <table align="center">
<caption><strong> Fill in the blanks</strong></caption>

            
      <tr>          
    <td><label>Name:</label></td>
    <td><input type="text" id="name" placeholder="Enter your name" required></input></td></tr>
    <tr>
        <td><label>phone no</label></td>
        <td><input type="text" id="phone no" value="+91" size="2" placeholder="Enter ur no"required></input>
       <input type="text" id="phone" size="10"></input></td>
    </tr>
    <tr>
        <td><label>Email id</label></td>
        <td><input type="text" id="email" placeholder="type here"></input></td>
    </tr>
</table></form>
    </div>
    );
}
export default Contact;