import React from 'react';
import  stylish from "./payment.css";   
const paymentchild = (props) => {
    return (
       
            <div className={stylish.column}>
    <div className={stylish.top}>
      <h4>{props.heading}</h4>
    </div>
    <div className={stylish.center}>
      <table>
        <tr>
          <th>{props.book}</th>
         
        </tr>
        <tr>
          <td>{props.swap}</td>
          <td><img src="https://image.flaticon.com/icons/svg/390/390973.svg" alt=""/></td>
        </tr>
        <tr>
          <td>{props.delivery}</td>
          <td><img src="https://image.flaticon.com/icons/svg/390/390973.svg" alt=""/></td>
        </tr>
        <tr>
          <td>Edit profile</td>
          <td><img src="https://image.flaticon.com/icons/svg/59/59254.svg" alt=""/></td>
        </tr>
        <tr>
          <td>Backup 30 days</td>
          <td><img src="https://image.flaticon.com/icons/svg/59/59254.svg" alt=""/></td>
        </tr> 
        <tr>
          <td>Compitition access</td>
          <td><img src="https://image.flaticon.com/icons/svg/59/59254.svg" alt=""/></td>
        </tr> 
      </table>
    </div>
    <div className={stylish.foot}>
      <div onClick={props.handle} className={stylish.button}>Get now</div>
    </div>
  
        </div>
    );
};

export default paymentchild;