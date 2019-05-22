




// import React from 'react';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';


//   class LocationSearchInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { address:'' };
//     }
  
//     handleChange = address => {
//       this.setState({ address});
//       console.log(address);
//     };
  
//     handleSelect = address => {
//       geocodeByAddress(address)
     
//         .then(results => getLatLng(results[0]))
//         .then(latLng => console.log('Success', latLng))
//          .catch(error => console.error('Error', error));
//          geocodeByAddress(address)
//         .then(results => getLatLng(results[0]))
//         .then(({ lat, lng }) =>
//         console.log('Successfully got latitude and longitude', { lat, lng })
//       );
//     };
  
//     render() {
//       return (
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
          
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
              
//               <input style={{padding:'7px',width:'70%'}}
//                 {...getInputProps({
//                   placeholder: 'Search Your Location ...',
//                   className: 'location-search-input',
                 
//                 })}
//               />
            
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map(suggestion => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>
//       );
//     }
//   }
//   export default LocationSearchInput;



import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
const API_KEY = "AIzaSyDcSHUx1Xre2uGERcrYRPhcqm8P_dhPb8A";
const google = window.google;
class LocationSearchInput extends Component {
  /**
   * Render the example app
   */
  render() {
    var fixtures = [
      {label: 'Bangalore India', location: {lat: 12.9716, lng: 77.5946}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 12.9716, lng: 77.5946}},
      {label: 'Alster, Hamburg', location: {lat: 12.9716, lng: 77.5946}}
    ];
    
    return (
      <div>
        <Geosuggest
          style={{width:'100%',padding:'7px'}}
          ref={el=>this._geoSuggest=el}
          placeholder="Search your place"
          initialValue="Bangalore"    
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng( 20.5937, 78.9629)}
              
                 
          radius="20" />

        
               
           
           <button style={{display:'none'}} onClick={()=>this._geoSuggest.update('New Zealand')}>Update</button>
           <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
           <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
      </div>
    );
  }
  onSuggestSelect(suggest) {
    console.log(suggest);
  }
}

export default LocationSearchInput;