import React, { Component } from "react";
import  stylish from "./payment.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paymentchild from './paymentchild';
import { connect } from "react-redux";
import axios from "axios";
import {Link,Redirect} from "react-router-dom";

class App extends Component {
 
    state = {
      redirected:false,
      paymentId: null,
      amount:null,
      plan:[{planId:1,planAmount:'3000',heading:'2799/3months',book:'2799/3months',price:279900,books:'10 Books at a time',swap:'Unlimited', delivery:'3 deliver'},
      {planId:2,planAmount:'5000',heading:'4599/6months',book:'4599/6months',price:459900,books:'10 Books at a time',swap:'Unlimited', delivery:''},
      {planId:3,planAmount:'10000',heading:'7999/year',book:'7999/year',price:799900,books:'10 Books at a time',swap:'Unlimited', delivery:''}]
    }
   
  openCheckout(index) {
    let cafeId=this.props.form.cafeId;
    let amounT=this.state.plan[index].price;
    let planId=this.state.plan[index].planId;
    console.log(planId)
    console.log(amounT)
    console.log(cafeId);
    console.log(planId);
  if(cafeId){   
    
    this.setState(
      {
      amount:amounT
    })
   
    console.log(this.props.form);
    const self =this;
    let options = {
      "key": "rzp_test_6O7n5kxc2u2k4M",
      "amount": amounT, // 2000 paise = INR 20, amount in paisa
      "name": "Merchant Name",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function (response){


   
         let paymentId=response.razorpay_payment_id;
       
        
    
  let dataToSend={
    cafeId:cafeId,
    amount:amounT/100,
    paymentId:paymentId,
    planId:planId
  };
  console.log(dataToSend);
    axios.post( 'https://test-zypher.herokuapp.com/adminRoutes/inquiry/paymentMade', dataToSend)
          .then( response => {
              console.log(response);
            if(response.data.status === 1){
              self.setState({
                redirected:true
              });
              
            }
            else{
              alert('payment failed');
            }
             
          } );
          
        
      },
      "prefill": {
        "name": "Harshil Mathur",
        "email": "harshil@razorpay.com"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#F37254"
      }
    };
    
    let rzp = new window.Razorpay(options);
    rzp.open();
   console.log(this.props.form);
  }
  else{
    alert("you have not filled form details")
  }
   
  }

  renderRedirect = () => {
    console.log(this.state.redirected)
    if (this.state.redirected) {
      return <Redirect to='/success'  />

    }

  }
  render() {
   console.log(this.state.paymentId);
      console.log(this.props.form);
    const plan=this.state.plan.map((event,index) =>{
      return <Paymentchild heading={event.heading} key={index} book={event.book} handle={() =>this.openCheckout(index)} swap={event.swap} delivery={event.delivery}/>
    });
    return (
      <Container>
        <Row>
          <Col sm={{span:9,offset:3}} >

      <div style={{marginTop:'150px'}}>
  <div className={stylish.contain}>
 
 {plan}
 <div>{this.renderRedirect()}</div>
 
 </div>
</div>
</Col>
</Row>
</Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      form : state.persons
  }
}
export default connect(mapStateToProps,null)(App);

