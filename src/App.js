import React, { Component } from 'react';
import Featured from './components/Featured/index';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Rack from './components/Rack/index';
import Navbar from './components/navbar/navbar';
import './resources/styles.css';
import BootstrapSidebar from './BootstrapSidebar';
import Payment from './components/Payment/rack';
import Maps  from './components/map/index.js';
import Tcondition from './components/TermsCondition/termsconditions';
import Detail from './components/Details/index';
import Success  from './components/paymentSuccessful/successful';





class App extends Component {
 
 
  

  render() {
    
    
    return (
      
      
      <BrowserRouter>
      
      <div>
      
      <Route path="/" component={Navbar}/>
      <Route path="/" component={BootstrapSidebar}/>
      <Route path='/' exact component={Featured} />
      <Switch>
      <Route path='/detail' component={Detail} />
      <Route path='/rack'  component={Rack} />
      <Route path='/payment'  component={Payment} />
      <Route path='/map'  component={Maps} />
      <Route path='/success'  component={Success} />
      <Route path='/termsconditions' component={Tcondition} />
      </Switch>
      </div>
     
      </BrowserRouter>

     
           
   
    );
  }
}

export default App;
