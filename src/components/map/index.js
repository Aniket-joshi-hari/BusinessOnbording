import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationPicker from 'react-location-picker';
import classes from '../../App.css';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './map.css';
import axios from "axios";

const google = window.google;



class Location extends Component {

    constructor (props) {
        super(props);
    
    this.state = {
        address: '',
        position: {
           lat: 12.9279,
           lng: 77.6271
        },
        redirectt : false,
        redirected:false
      };

      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.onSuggestSelect = this.onSuggestSelect.bind(this);
    }
  
    handleLocationChange ({ position, address }) {
  
      // Set new location
      console.log(address);
      console.log('lstitdue ' + JSON.stringify(position))
      console.log(position.lat,position.lng);
      this.setState({ address:address, 
        position: {
          lat : position.lat,
          lng : position.lng

        }
       });

       
    }

    submitMap = (e)=> {
      if(this.props.form.cafeId){
      if(this.state.position.lat){
        let cafeId =this.props.form.cafeId;
        
        dataToSend={
          cafeId:cafeId,
          location:{
            lat:this.state.position.lat,
            lng:this.state.position.lng
        }
        }
        
        let dataToSend;
        axios.post( 'https://test-zypher.herokuapp.com/adminRoutes/inquiry/updateLocation', dataToSend)
        .then( response => {
          console.log(response)
            if(response.data.status === 1){
              this.setState({
                redirectt:true
              })
              console.log(response);

            }
           
        } )
       
      
      }
    }
    else{

      this.setState({
        redirected:true
      })
      alert("Please Fill Details page first");
    }
    }

    renderRedirected = () => {
      if (this.state.redirected) {
        return <Redirect to='/detail'  />
      }
    }

    renderRedirect = () => {
      if (this.state.redirectt) {
        return <Redirect to='/payment'  />
      }
    }
      render(){
        console.log(this.state);
        
       
    return (
        <div>
          <Container >
            <Row>
              <Col md={{span:8,offset:4}} xs={{span:12 ,offset:3 }}  sm={{span: 9,offset:3 }}lg={{span:8,offset:4}} className={classes.map_input}>
              
              <Geosuggest
          style={{ 'input': {width:'40%',padding:'7px'}, 'suggests': {marginTop:'4px'}, 'suggestItem': {width:'60%',border:'1px solid #ccc',cursor:'pointer',background:'#eee',padding:'2px'} }}
          ref={el=>this._geoSuggest=el}
          placeholder="Search your place"
          initialValue=""    
          
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng( this.state.position.Lat,this.state.position.Lng)}
             onChange={()=>this._geoSuggest.selectSuggest()} 
            //  googleMaps={}
                 
          radius="20" />
             <button style={{display:'none'}} onClick={()=>this._geoSuggest.update('New Zealand')}>Update</button>
           <button style={{display:'none'}} onClick={()=>this._geoSuggest.clear()}>Clear</button>
           <button  style={{display:'none'}}onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>

              </Col>
            </Row>
          </Container>

          <Container>
              <Row>
                <Col md={{span:3,offset:4}} sm={{span: 4 ,offset:3}} xs={{span:6 ,offset:3 }} className="mt-3">
              {this.renderRedirected()}
               {this.renderRedirect()}
             <button  onClick={ (e)=> this.submitMap(e)
            
            }
            
              className="btn btn-block btn-primary ">
           
            Move to Payment
            </button>
            </Col>
              </Row>
            </Container>
          
        <div  className={styles.locationPicker}>
          <LocationPicker
            
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '100vh'} } /> }
            defaultPosition={this.state.position}
            onChange={this.handleLocationChange}
            zoom={10}
            
          />
        </div>
            <br/>
            <br/>
        </div>
    );
}


onSuggestSelect(suggest) {

console.log(suggest);
 
  if(suggest){
    let position =suggest.location;

  this.setState({ position:{
    lat: position.lat ,
    lng: position.lng
  } });
}
}


};



const mapStateToProps = (state) => {
  return {
      rack : state.rack,
      form : state.persons,
      
  }
}
const mapDispatchToprops =dispatch => {
  return{
    sendLocation : (address,lat,lng) => dispatch({type :'UPDATE_Map', map : {address:address,lat: lat, lng: lng}})
  }
}

export default connect(mapStateToProps,mapDispatchToprops) (Location);