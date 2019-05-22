import React  from "react";
import Slider from "react-slick";
import img1 from '../../resources/client1.jpg';
import img2 from '../../resources/client2.png';
import img3 from '../../resources/client3.jpg';
import img4 from '../../resources/client4.png';
import classes from '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';


const clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
       
      <div className={classes.clients_carrousel}>
      
     
      
       <Container fluid>
         <Row>
           <Col lg={{span:5,offset:5}}  >
           
       <h3 className={classes.card_Choose} > <span >Our Clients</span> </h3>
       
      
       </Col>
         </Row>
       </Container>
       
       <Container  >
         <Row>
           <Col  lg={{offset:3,span:9}} md={{span:12,offset:0}} sm={{offset:0,span:12}}  xs={{offset:0,span:12}} >
        <div  >
        <Slider {...settings} >
          <div>
            <img src={img1} alt="firstclient" width="200" height="130" style={{borderRadius:'50%',border:'1px solid #ccc'}}/>
          </div>
          <div>
          <img src={img2}  width="200"  alt="secondclient" height="130" style={{borderRadius:'50%',border:'1px solid #ccc'}} />
          </div>
          <div>
          <img src={img3}  width="200" alt="thirdclient" height="130" style={{borderRadius:'50%',border:'1px solid #ccc'}}/>
          </div>
          <div>
          <img src={img4}  width="200"  alt="fourthclient" height="130" style={{borderRadius:'50%',border:'1px solid #ccc'}} />
          </div>
         
        </Slider>
        </div>
        </Col>
         </Row>
       </Container>
      
        <br/>
        <br/>
        <br/>
      </div>
    );
  }

       
   


export default clients;