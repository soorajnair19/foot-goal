import React from "react";
import '../App.css'


import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

function Navbar() {
    return (
        <div>
     <Link to="/">Home</Link>
        <h2>PL Tweets</h2>
      </div>
    );
  }
  export default Navbar;


{/* <div class="column right" >
                   
                    
                    </div> */}