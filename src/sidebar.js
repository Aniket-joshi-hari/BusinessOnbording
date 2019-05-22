import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const sidebar = () => {
    return (
        <div>
           <div style={{width:'15%',background:'#5C6BC0',fontFamily:"'Righteous', cursive"}} className="ui left demo vertical inverted sidebar labeled icon menu visible sidebar-up">
      {/* <#5C6BC0> */}
      
        <NavLink exact to='/'  className="item" activeClassName="active" style={{fontSize:'28px',paddingTop:'10px', textAlign:'center',color:'#fff',fontWeight:'bold',marginBottom:'18px '}}><i>Zypher</i></NavLink>
        <NavLink  to='/overview'  className="item" activeClassName="active" style={{paddingTop:'20px'}}><i>Overview</i></NavLink>
        <NavLink  to='/detail'  className="item" activeClassName="active" style={{paddingTop:'20px'}}><i>Information</i></NavLink>
        <NavLink  to='/rack'  className="item" activeClassName="active" style={{paddingTop:'20px'}}><i>Rack</i></NavLink>
        <NavLink  to='/payment'  className="item" activeClassName="active" style={{paddingTop:'20px'}}><i>Payment</i></NavLink>
  {/* <a className="item" style={{paddingTop:'20px'}}>
    
    
   <i><Link to="/"  activeClassName="active" style={{color:'#fff'}}>Overview</Link></i>  
   </a>
  <a className="item" style={{paddingTop:'20px'}} >
    
  <Link to="/detail" activeClassName="active" >Information</Link>
  </a>
  <a className="item" style={{paddingTop:'20px'}} >
    
  <Link to="/rack" activeClassName="active" >Rack</Link>
  </a>
  <a className="item" style={{paddingTop:'20px'}} >
    
  <Link to="/payment"  activeClassName="active" >Payment</Link>

  </a> */}
   </div>


      </div> 
       
    );
};

export default sidebar;