import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classN from './success.css';

const successful = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{span:8,offset:3}} style={{marginTop:'20%'}}>
                    
                    
                    <div className={classN.successmessage}>
                    <h2>
                   
                    <p  style={{textAlign:'center',color:'	#5cb85c',fontWeight:'bold'}}> Payment successful</p></h2>
                <h2 style={{textAlign:'center'}}><i className="fas fa-check" style={{color:'green',fontSize:'62px'}}></i></h2>
                    <p style={{textAlign:'center',color:'#5cb85c',fontSize:'15px',fontWeight:'bold'}}>Your Bill Payment Have been<br/> 
                    done successfully</p>
                   
                    </div>
                  
                    </Col>
                        </Row>
            </Container>
</div>
        
    );
};

export default successful;                         


