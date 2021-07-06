import React from 'react';
import {Route } from 'react-router-dom'
import '../styles/Footer.css'
const Footer = () => {
    return ( 
        <div>
            <h3>Stopka</h3>
            <Route path="/" render={(props) => (
               <p>Jesteś na <span>stronie głównej</span></p>
            )} />
             <Route path="/:path" exact render={(props) => (
            <>
               <p>Jesteś na <span>{props.match.params.path}</span></p>
               <p>Jesteś na <span>{props.match.path}</span></p>
               <p>Jesteś na <span>{props.match.url}</span></p>
            </>

            )} /> 
             <Route path="/:path/:id" exact render={(props) => (
            <>
               <p>Jesteś na <span>{props.match.params.id}</span></p>
               <p>Jesteś na <span>{props.match.path}</span></p>
               <p>Jesteś na <span>{props.match.url}</span></p>
            </>
            
            )} />  


        </div>
     );
}
 
export default Footer;