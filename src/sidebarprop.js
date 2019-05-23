import React from 'react';
import {Link} from 'react-router-dom';
import classes from './App.css';
const sidebarprop = (props) => {

    
    return (
        <div>
               <li  onClick={props.click} className={classes.sidebarNav} >  
                    <Link className={props.classes} activestyle={props.styles} onClick={props.click}  to={{pathname:props.connect}}>   
                                       
                        <i className={props.icon}></i>
                        <p>{props.eventName}</p>
                       
                    </Link>
                    </li>   
                    {/* className={props.classes} */}



                
        </div>
    );
};

export default sidebarprop;