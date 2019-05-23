import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import classes from '../../App.css';
import Animation from './navbar.css';
import Typography from '@material-ui/core/Typography';

const navbar = () => {
    return (
        <div>

<AppBar style={{borderBottom:'1px solid #ccc',background:'#4E4E4E'}}>
            
            <Toolbar>

            


           
            <Typography variant="h5" color="inherit" style={{flexGrow:'1'}} className={classes.logo}>
            #Zypher
          </Typography>
            
            <div className={classes.leftNavbar}>
             {/* <NavLink to ="/"  exact activeStyle={{ color: 'yellow',fontWeight:'bold' }}><Button color="inherit">Overview</Button></NavLink>
             <NavLink to ="/detail"  activeStyle={{color: 'yellow',fontWeight:'bold' }}><Button color="inherit">Details</Button></NavLink>
             <NavLink to ="/rack" activeStyle={{color: 'yellow',fontWeight:'bold' }}><Button color="inherit">Rack</Button></NavLink> */}
             <span className={Animation.leftNavbar}>
              <i className="fas fa-phone"></i></span>
             <span>+91-7906361157</span>
             
             <span className={Animation.leftNavbar}>
               <i className="fas fa-envelope"></i>
                 </span>
            <span> zypher@gmail.com</span>
             </div>
             
            
            
            </Toolbar>
           

            </AppBar>
            
        </div>
    );
};

export default navbar;