const initState = {
	
	persons : {},
    rack : '',
    map : {},
    ContactForm : {},
    
}




const rootReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'UPDATE_FORM_Data':
            const newPerson = {
				firstName: action.personData.fname,
                lastName: action.personData.lname,
                businessName :action.personData.bname,
                businessType : action.personData.btype,
                phoneNumber: action.personData.phone,
                email : action.personData.email,
                cafeId: action.personData.cafeId,
                
            }
            return {
                ...state,
                persons: newPerson
			}
			case 'UPDATE_Rack':
			return{
				...state,
				rack :action.rackid
            }
            
            case 'UPDATE_Map':
            const MapData ={
                address : action.map.address,
                lat : action.map.lat,
                lng : action.map.lng
            }
            return{
                ...state,
                map : {...MapData}
                
            }
            case 'UPDATE_ContactUs':
            const ContactForm ={
              email : action.ContactInfo.email,
              message : action.ContactInfo.message
            }
            return{
                ...state,
                ContactForm : {...ContactForm}
            }
        default:
    }
    return state;

};



export default rootReducer;