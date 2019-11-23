import React, {Component} from 'react';
import tots from '../assets/tots.PNG';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import '../App.css'
class Alan extends Component{
    render () {

    return (
        <div>
       <div className="App-header">
        <Header />
       </div> 
       <div class="column left" >
       <h3><b> Progress of Leicester midfielder James Maddison has stood out  <br /> for Premier League Champion as he selects his Team of the Season so far.</b><br /><br />
                </h3>
                <img src={tots} alt="Team of the Season" /> <br />  <br /> 
    <p> Dean Henderson (SHU)  <br />
    What an impact the on-loan goalkeeper from Manchester United has had for the Blades. <br /> He dominates his penalty area, is a good communicator and the stats dont lie -<br /> five clean sheets so far is an impressive return. A real safe pair of hands.
    <br /> <br />
   
    Trent Alexander-Arnold (LIV)  <br />
    If last season was promising, this one has started even better for the Liverpool full-back.  <br /> The powerful attacking runs he makes and deadly deliveries are a forward's dream. And to think he's still only 21.
    <br /> <br />
    John Egan (SHU) <br />
    One of the unsung heroes so far for a Sheffield United team who have been the Premier League's surprise package. <br /> He goes about his business effectively and with the minimum of fuss. A real leader at the back.
    <br /> <br />
    Caglar Soyuncu (LEI) <br />
    The centre-half's attributes were perfectly summed up in Leicester City's 2-0 win at Crystal Palace earlier this month.  <br />He netted the all-important opening goal and helped keep a clean sheet with another solid and reliable defensive showing.
    <br /> <br />
    Andrew Robertson (LIV) <br /> 
    Along with Alexander-Arnold, the Scotland international has started this season brilliantly.  <br />He shows incredible energy driving up and down the left flank and regularly weighs in with an assist.
    <br /> <br />

    Fabinho (LIV) <br />
    An all-action defensive midfielder whose tackling and sheer work-rate tracking back hands  <br /> full-backs Alexander-Arnold and Robertson the licence to bomb forward. Efficient and effective in and out of possession, <br />he is rarely drawn out of position.
    <br /> <br />
    Kevin De Bruyne (MCI)
    The pass master supreme. On his day, and it usually is, no other player can come near his intelligent,  <br />wide range of deliveries. Sensational.
    <br /> <br />
    James Maddison (LEI) <br />
    The midfielder's all-round touch and technique have been outstanding. <br /> Last season he was beginning to show his quality but this year he has really blossomed under the guidance of Rodgers.
    <br /> <br />
    Sadio Mane (LIV) <br />
    Earned a share of the Golden Boot in 2018/19 and is an early contender again with seven goals so far. <br /> He is deceptively tough to knock off the ball, produces moments of outrageous skill and has pace to burn. A game changer.
    <br /> <br />
    Tammy Abraham (CHE) <br />
    He could and probably should have scored more! Even so, it's hard to believe this is his first <br /> full Premier League season with Chelsea. He is handsomely repaying the trust placed in him by Frank Lampard.
    <br /> <br />
    Jamie Vardy (LEI) <br />
    Vardy is just getting better and better. Although 31, he is showing no sign of slowing up  <br />and is as quick as ever. Add to that his ability to get in good positions and a clinical touch in front of goal,<br /> and you can see why he is so important to Leicester.
    <br /> <br />
    Manager: Chris Wilder (SHU) <br />
    Sheff Utd have taken the Premier League by storm and that is down to Wilder's courage <br /> in sticking to his beliefs. He lets his players express themselves, which they clearly enjoy,<br /> and the benefits are there for all to see so far.</p> </div>

    <div class="column right" >
                   <Navbar />
                    
                   </div> 
                   <div className="App-footer">
                         <Footer />
                        </div> 
    </div>
    )
    }}

    export default Alan
