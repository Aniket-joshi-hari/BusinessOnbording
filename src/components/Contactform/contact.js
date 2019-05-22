import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import className from './contact.css';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
class Contact extends Component  {
  
  state ={
    
      email : '',
      message : '',
      value: false,
      show:false,
    
  }
 
  clickEvent=(email,message) => {
    let dataToSend={
      email: email,
      message:message
    }
    if(this.state.email){
    axios.post( 'https://test-zypher.herokuapp.com/adminRoutes/inquiry/contactUs', dataToSend)
    .then( response => {
        console.log(response);
    } )
  }
  }

  emailformHandleChange = (event) => {
    this.setState({
      email : event.target.value,
      
    })
    
  }


  messageformHandleChange = (event) => {
  this.setState({
    message : event.target.value
  })
  }
  hello =(e)=>{
 this.setState({
   value:true
 })
  }

  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
    return (
        <div >
     
<Container>
    <Row>
        <Col className="mt-2"   lg={{span:8,offset:2}} md={{span:9,offset:1}} sm={{span:12,offset:0}}>

        <div className={className.form}>
        <h4>Contact Us</h4>
<div className="ui form">
<div className="field">
  <label>E-mail</label>
    <input  type="email" placeholder="joe@schmoe.com"
    value={this.state.email}
    onChange={ (e) => this.emailformHandleChange(e)} />
  </div>  
  <div className="field">
    <label>Message</label>
    <textarea value={this.state.message} onChange={ (e) => this.messageformHandleChange(e)} />
  </div>

  <Button variant="primary" onClick={ () => this.clickEvent(this.state.email,this.state.message)} data-toggle="modal"  data-target="#myModal">Submit</Button>
  
</div>
</div>
<br /><br /><br />
</Col>
    </Row>
    {this.state.email ?<div className="modal fade" id="myModal" role="dialog" style={{zIndex:'1111',marginTop:'10%'}}>
    <div className="modal-dialog">
    <div className="modal-content">
    <div><h4 style={{textAlign:'center',marginTop:'6%'}}>Form is Submitted</h4></div>
    <h4 style={{textAlign:'center',marginTop:'4%',lineHeight:'10px'}}>Successfully<i className="far fa-smile" style={{color:'orange',marginLeft:'1%'}}></i></h4>
        <div className="modal-header">
         
        </div>
       
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" style={{fontSize:'18px',color:'#B22222'}}>Close</button>
        </div>
      </div>
      </div>
      </div>:null}
</Container>
    
        </div>
      
    );
  }
};

const MapDispatchToProps = (dispatch) =>{
  return{
    clickEvent : (email,message) => dispatch({type :'UPDATE_ContactUs',ContactInfo : {email : email, message : message}})
  }
  };

export default  connect(null,MapDispatchToProps) (Contact) ;