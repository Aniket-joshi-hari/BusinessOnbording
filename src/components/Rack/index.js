import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import classes from "../../App.css";
import Rack from "./rack";
import {Link,Redirect} from "react-router-dom";
import axios from "axios";


class index extends Component {
  state = {
    redirect:false,
    redirectF:false,
    selectedIndex: null,
    cardContent: [
      { id: "1", cardHeading: "20 Books", price: "50" ,col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link:'/map',src: require('../../resources/img1.jpeg'),name:'rack1' },
      { id: "2", cardHeading: "50 Books", price: "120", col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map',src: require('../../resources/img2.jpeg'),name:'rack1'},
      { id: "3", cardHeading: "100 Books", price: "200",col:'col-lg-4',card :'card mb-5 mb-lg-0',cardS:[classes.card],cardB:'card-body',cardH :'card-price text-center',ul:'fa-ul',span:'fa-li',check :'fas fa-check',button:'btn btn-block btn-primary text-uppercase',link :'/map',src: require('../../resources/img3.jpeg'),name:'rack1' }
    ],
    style: [{ id: "", background: "", border: "", button: false }],

    classes: [
      classes.rack_item,
      classes.rack_item1,
      classes.rack_item2,
      classes.rack_item3
    ],
    button:false,
    selectedRack:{}
  };

  clickEvent= (id) =>{
   
   
    let store= {...this.state.selectedRack};
    store.plan=this.state.cardContent[id].cardHeading;
    store.price=this.state.cardContent[id].price;
    store.rackId=this.state.cardContent[id].id;
   
    this.setState({
     selectedIndex:id,
     button:true,
     selectedRack:store
    })
   
  }

  finalSubmit= (e) => {
    let cafeId = this.props.person.cafeId;
    if(cafeId){
    const dataToSend={
      cafeId: cafeId,
      rack: this.state.selectedRack.rackId
 
    }
    console.log(JSON.stringify(dataToSend));
axios.post( 'https://test-zypher.herokuapp.com/adminRoutes/inquiry/updateRack', dataToSend)
        .then( response => {
          console.log(response)
            if(response.data.status === 1){
              this.setState({
                redirect:true
              })

            }
           
        } )
      }
      else{
        this.setState({
          redirectF:true
        })
        alert("Please fill the details form first");
      }
  }
 
  renderRedirect = () => {
       
    if (this.state.redirect) {
      return <Redirect to='/map'  />

    }

  }


  renderRedirectF = () => {
       
    if (this.state.redirectF) {
      return <Redirect to='/detail'  />

    }

  }

  render() {
   
    console.log(this.props.person);
  const card = 
  // cardCss={card.cardS}
      this.state.cardContent.map((card,index) => {
        if (this.state.selectedIndex === index){
        return(
         <Rack   price={card.price}
          button={card.button} 
          style={{margin:'8px auto',width:'60%',height:'200px'}} 
           cardCss={classes.checked} 
           src={card.src} 
           key={card.id} 
           click={ () => this.clickEvent(index)}
            class={card.col}  
            cardBody={card.cardB}
             priceHeading={card.cardH} ul={card.ul}
              li={card.span}
               check={card.check} 
               link={card.link}
               rack_button={classes.rack_button}
                />
               );
        }
        else{
          return(
            <Rack   price={card.price}
          button={card.button} 
          style={{margin:'8px auto',width:'60%',height:'200px'}} 
           cardCss={card.cardS} 
           src={card.src} 
           key={card.id} 
           click={ () => this.clickEvent(index)}
            class={card.col}  
            cardBody={card.cardB}
             priceHeading={card.cardH} ul={card.ul}
              li={card.span}
               check={card.check} 
               link={card.link}
               rack_button={classes.rack_button}
                />
          );
        }
      }
    
      )
      ;

    //
    return (
      <div  className={classes.rack_main}>
        <Container className="mt-4 center">
          <Row>
            <Col  lg={{span:9,offset:3}}>
            {/* Hello {this.props.form[0].fname} */}
                {/* <h4 className="text-center" > Welcome to Zypher  </h4> */}
                <h3 className="text-center">Choose Your Rack</h3>
                </Col>
            </Row>
        </Container>
              


              {/* code for new cards */}

              <Container className="mt-4"  >
                <Row>
                <Col lg={{span:9,offset:3}}>
                <section className={classes.pricing}>
  <div className="container">
    <div className="row">
    
        {card}
      
    </div>
  </div>
</section>
</Col>
</Row>
</Container>

                
            
             
              {this.state.button ?
              <Container className="mt-1"  >
              <Row>
              <Col lg={{span:6,offset:6}}>
               {/* <Link to="/payment"> */}
               {this.renderRedirect()}
               {this.renderRedirectF() }
              <button   onClick={(e) => this.finalSubmit(e)}
              className={classes.rack_button} >
               Next 
              
              </button>
              
              </Col>
              </Row></Container>
               :null}
             
             
            
            
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
      person : state.persons
  }
}
const mapDispatchToprops =dispatch => {
  return{
    clickEvent : (id) => dispatch({type :'UPDATE_Rack',rackid : id})
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(index);





