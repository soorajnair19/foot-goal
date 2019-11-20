import React, { Component } from 'react';
import ref from '../assets/ref.png';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import '../App.css'

class Referee extends Component {
    render() {

        return (
            <div>
                <div className="App-header">
                    <Header />
                </div>

                <div class="column left" >
                <h3><b> The match officials for Matchweek 13 of the 2019/20 Premier League season have been appointed.</b>
                </h3>
                <p> 
                <br />
                <img src={ref} alt="Mike Dean" /> <br />  <br />
                    <b>Saturday 23 November</b> <br />
                    <b>16:00</b> <br />
                    <b>WHU v TOT</b> <br />
                    <b>Referee:</b> Michael Oliver. <br />
                    <b>Assistants:</b> Stuart Burt, Simon Bennett. <br />
                    <b>Fourth official:</b> Robert Jones. <br />
                    <b>VAR: </b>Andre Marriner. <br />
                    <b>Assistant VAR:</b> Andy Halliday. <br /> <br />
        
                    <b>Saturday 23 November</b> <br />
                    <b>16:00</b> <br />
                    <b>BOU v WOL </b><br />
                    <b>Referee: Simon Hooper.</b> <br />
                    <b>Assistants: Simon Beck, Derek Eaton.</b> <br />
                    <b>Fourth official: Anthony Coggins.</b> <br />
                    <b>VAR:</b> Lee Mason. <br />
                    <b>Assistant VAR:</b> Mark Scholes. <br /> <br />
        
                    <b>Sunday 24 November</b> <br />
                    <b>22:00</b> <br />
                    <b>SHU v MUN </b><br />
                    <b>Referee: Andre Marriner.</b> <br />
                    <b>Assistants: Simon Long, Sian Massey-Ellis.</b> <br />
                    <b>Fourth official: Andy Madley. </b><br />
                    <b>VAR: Graham Scott. </b><br />
                    <b>Assistant VAR: Stephen Child.</b> <br /> <br />
        </p></div>
        <div class="column right" >
                   <Navbar />
                    
                   </div> 
            </div>
        )
    }
}
export default Referee
