import React, { Component } from 'react';
import Carrousel from './Carrousel';
import Cards from './cards';
import Clients from './clients';
import Contact from '../Contactform/contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sticky from 'react-sticky-el';
import { Link } from 'react-router-dom';
import classes from '../../App.css';

console.log(this)
class Featured extends Component{
    state={
        position:'relative',
        top:'100px',
        padding:'10px'
    }

     
    render(){
      
        console.log(this.props.location.pathname);
   
    return (
        <div >

            <Carrousel/>
           
            <Container   className={classes.mainButton}>

                <Row>
 
                    <Col md={{span:4,offset:4}} lg={{span:3,offset:6}} className="mt-4" sm={{span:4,offset:4}} xs={{span:6,offset:3}}  >
                    
                    
                    <Sticky>
          
          <Link to="/detail">  <button style={{padding:this.state.padding,position:this.state.position,top:this.state.top,zIndex:'1111'}} className="position-sticky btn btn-block btn-primary mt-3"> 
            
            Getting  Started
            </button></Link> 
     
        </Sticky>  
        
            </Col>
            </Row>
            </Container>

            <Cards/>    
            <Clients/>
            <br />
            <br />
            <Contact />
            
            
            
           
            <br /><br />
        </div>
    );
    }
};

export default Featured;