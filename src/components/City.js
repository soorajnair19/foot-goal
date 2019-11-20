import React, { Component } from 'react';
import city from '../assets/mci.jpg';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import '../App.css'



class City extends Component {
    render() {

    return (
        <div>
        <div className="App-header">
            <Header />
        </div>
        <div class="column left" >

        <h3><b> There have been four occasions when a team with an eight-point lead have been overtaken, <br />with Man City responsible for two such comebacks.</b>
                </h3><br />
    <p>
  
    <img src={city} alt="Manchester City" /> <br />  <br />

        Liverpool took a big step towards winning their first Premier League title with a 3-1 victory over Manchester City,<br /> moving eight points clear at the top of the table and nine above the reigning champions.<br /><br />

    Only two other teams have ever have been so far in front at such an early stage,<br /> with Manchester United leading by nine points in 1993/94 and Man City lying eight points ahead in 2017/18. <br />Both sides went on to finish first.<br /><br />
    
    But Liverpool's pursuers, and particularly Pep Guardiola's Man City,<br /> also have cause for optimism as they seek to battle back and lift the PL Trophy themselves.<br /><br />
    
    There have been four occasions when a team with at least an eight-point lead have been overtaken, <br />and the Citizens have been responsible for the last two of those comebacks.<br /><br />
    
    One of the turnarounds took place last season in a similar scenario,<br /> as Guardiola's side chased down leaders Liverpool.<br /><br />
    
    City lay 10 points behind the Reds at the end of December, <br />with a match in hand, before beating Jurgen Klopp's men 2-1 at the Etihad Stadium<br /> in January and finishing with 14 wins in a row to retain their title by one point.</p> </div>
    <div class="column right" >
                   <Navbar />
                    
                   </div> 
     </div>
    )
    }
    }
    export default City
