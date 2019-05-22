import React from 'react';
import Carrousel from './Carrousel';
import Cards from './cards';
import Clients from './clients';
import Contact from '../Contactform/contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div style={{position:'relative',overflow:'hidden'}}>

            <Carrousel/>
           
            <Container>

                <Row>
                    <Col md={{span:4,offset:4}} lg={{span:3,offset:6}} className="mt-4" sm={{span:4,offset:4}} xs={{span:6,offset:3}}>
                    
                    
                    
         <Link to="/detail">  <button style={{padding:'10px',marginTop:'10%'}} className="btn btn-block btn-primary ">
            
            Getting  Started
            </button></Link> 
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
};

export default Featured;