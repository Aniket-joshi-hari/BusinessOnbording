import React from 'react';
import { Link } from 'react-router-dom';
const rack = (props) => {
    return (
       
  
<div  onClick={props.click}  className={props.class} >
<div  className={props.cardCss} type="radio" name={props.name}>
  <div className={props.cardBody}>
    
    <h6 className={props.priceHeading}> <i className="fas fa-rupee-sign"></i><span>{props.price}</span><span className={props.period}>/month</span></h6>
    <hr/>
    
      
      <img src={props.src}  alt="rack"  height="200"  width="180" style={{margin:'0px auto',width:'100%'}} />
    
   
    
  </div>
  
</div>
</div>
    );
};

export default rack;