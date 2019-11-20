import React, {Component} from 'react';
import logo from './logo.svg';
import mci from './assets/mci.jpg'
import ref from './assets/ref.png';
import tots from './assets/tots.PNG';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  
  import Header from './components/Header';
  import Navbar from './components/Navbar';
  import Alan from './components/Alan';
  import City from './components/City';
  import Referee from './components/Referee';
  import './App.css';


  class App extends Component {
    render() {
      
        return (
         
            <Router>
                <Switch>
                
                <Route path="/" exact render={() => {
                    return (
                        <div className="App">
    
                        <div className="App-header">
                         <Header />
                        </div> 
                        
                       

                  <div class="row">
                  
                    <div class="column left" >
                    
                    <h2> <Link to={{pathname: '/alan'}}> Alan Shearers Team of the Season </Link></h2>
                      <p>Progress of Leicester midfielder James Maddison
                        has stood out  <br />for Premier League Champion
                        as he selects his Team of the Season so far</p>
                  
                         <img src={tots} alt="Team of the Season" />;
                        
                      <h2>  <Link to={{pathname: '/referee'}}>Match officials named for Matchweek 13 </Link></h2>
                          <p>See who will take charge of the 13th round of Premier League fixtures,
                          as well as the Video Assistant Referees</p>
                        <img src={ref} alt="Referee" />;
                  
                      <h2>  <Link to={{pathname: '/city'}}> History shows Liverpool's pursuers can bridge gap </Link> </h2>
                      <p>There have been four occasions when a team with an eight-point lead have been overtaken,  <br />
                        with Man City responsible for two such comebacks</p>
                        <img src={mci} alt="Manchester City" />;
                  
                          <br /> <br />
                        
                    </div>
                        
                    <div class="column right" >
                   <Navbar />
                    
                   </div> 
                    
                  
                  {/* <Route exact path='/' component={App} /> */}
                  
                  
                   
                  </div>
                  
                  
                  
                                    </div>
                    );
                }}/>
                <Route exact path = '/alan' component={Alan} />
                  <Route exact path = '/city' component={City} />
                  <Route exact path = '/referee' component={Referee} />
                                 
                </Switch>
            </Router>
        );
    }
}

export default App;