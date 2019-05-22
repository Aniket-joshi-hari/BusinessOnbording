import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import classes from '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../resources/book.png';
import img2 from '../../resources/card2.jpg';
import img3 from '../../resources/cheers.jpg';
import Cardui from './cardChild';

const styles = {
    card: {
      maxWidth: 345,
      marginTop: '5px',
      height:'200px'
     
    },
    media: {
  
      objectFit: 'cover',
    },

    
  };

class cards extends Component {
    
state = {
  cardUi : [
{id:"1",customerimage: require('../../resources/slide_two.jpg'),heading:' Unlimited Books ',
content:' Never get Tired of Reading or over spend on books. Swap your books as you wish, anytime' +
'Get it delivered at your home or office',share:'Share',learnmore:'Learn More',sm:['{4}'],lg :'span:3,offset:4'},

{id:"2",customerimage: require('../../resources/slide_two.jpg'),heading:' Wallet Friendly',
content:' Ardent Reader? '+
'Someone catching up on Quiet weekends?'+
'A Student, with a thirst for knowledge?'+
'Find Plans that understands your wallet.',share:'Share',learnmore:'Learn More',sm:'{4}',lg:'{3}'},

{id:"3",customerimage: require('../../resources/slide_two.jpg'),heading:'  Zero Security Deposit',
content:'Yup that is right We know the pain of heavy upfront Deposits,That is why we make sure we charge no security deposit for our users',
share:'Share',learnmore:'Learn More',sm:'{4}',lg:'{3}'}
  ]
  
}
  render(){

    const card=this.state.cardUi.map((card,index) =>{
      
      return  (<Col sm={4}  lg={3}  key={card.id}>
      <Cardui customerimage={card.customerimage} heading={card.heading} content={card.content} share={card.share} learnmore={card.learnmore} />
      </Col>)
     
    });

    return (
        <div className={classes.card_container} >
       
         <Container  >
                <Row className={classes.cards}>
                <Col  lg={{span:4,offset:3}}>
                  <p style={{fontSize:'22px',fontWeight:'600'}}>Discover Books,
                  Explore Events, 
                  Meet your people.
                </p>
                <p style={{fontSize:'13px'}}>Read - Your Books, delivered to your doorstep. 
                  Events - Attend amazing events happening in your neighbourhood.
                  Everything on a single Subscription.</p>
                </Col>
                <Col  lg={{span:4}}>
               <img src={img1} height="250" width="400" />
                
                </Col>
                    </Row> 

                    <Row  className={classes.cards}>
                    <Col  lg={{span:4,offset:2}}>
               <img src={img2} height="250" width="300" />
                
                </Col>
                <Col  lg={{span:4,offset:1}}>
                  <p style={{fontSize:'22px',fontWeight:'600'}}>Discover Books,
                  Exclusive Access to Events.
                </p>
                <p style={{fontSize:'13px'}}>Live Music, Stand-up Shows to Blind Books Dates to The Digital Kamishibhai to meeting your Favouite Authors. 
It's the place where you ought to be, to connect with Awesome people and discover your Vibes!</p>
                </Col>
                
                    </Row> 
                    <Row  className={classes.cards}>
                <Col  lg={{span:4,offset:3}}>
                  <p style={{fontSize:'22px',fontWeight:'600'}}>Discover Books,
                  Wallet Friendly
                </p>
                <p style={{fontSize:'13px'}}>Ardent Reader? 
Someone catching up on Quiet weekends?
A Student, with a thirst for knowledge? No problem. 
Find Plans that understands your wallet.</p>
                </Col>
                <Col  lg={{span:4}}>
               <img src={img3} height="300" width="300" />
                
                </Col>
                    </Row> 
          </Container>            
             <Container>
               <Row>
               <Col lg={{span:0,offset:3}}>  
               </Col>
                
         {card}

         
    </Row></Container>           

    </div>
       );
      }
   };
   
   export default withStyles(styles)(cards) ;






         