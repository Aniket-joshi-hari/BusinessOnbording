import React, { Component } from "react";
import Formfield from './formfield';
import classes from "../../App.css";
import { connect } from "react-redux";
import axios from "axios";



class Form extends Component {

    render() {
        console.log(this.props.form);
  
        
        return (
            <div className={classes.detail}>
                
                <Formfield  submitForm={this.props.SubmitForm}/>
               

              
                <br />
                <br />
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form : state.persons
    }
}


const mapDispatchToProps = dispatch => {
    return {
        SubmitForm: (fname, lname,bname, btype,phone,email,cafeId) => dispatch({type: 'UPDATE_FORM_Data', personData: {fname: fname, lname: lname,bname:bname,btype:btype ,phone : phone,email : email ,cafeId: cafeId}}),
        
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Form);
