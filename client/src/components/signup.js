import React, { Component } from 'react';
import Login from './login';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';


//serves as the navigation for multi-page
class SignupMain extends Component {

    state = {
        step: 1,
        firstName:"",
        mi:"",
        lname:"",
        suffix:"",
        email:"",
        password:"",
        gender:"",
        bday:"",
        mobile:"",
        address:"",
        brgy:"",
        municipality:"",
        city:"",
        country:"",
        zipCode:"",
        remarks1:"",
        remarks2:"",
        remarks3:"",
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState ({ step: step - 1});
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState ({ step: step + 1});
    }

    //handles the navigations to retain data past the prevStep
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        <h1>main</h1>
        const {step} = this.state;
        const{firstName, mi, lname, suffix, email, password, gender, bday,  mobile, address, brgy, municipality, city, country, zipCode, remarks1, remarks2, remarks3} = this.state;
        const values = {firstName, mi, lname, suffix, email, password, gender, bday,  mobile, address, brgy, municipality, city, country, zipCode, remarks1, remarks2, remarks3};
        
        switch (step) {
            case 1:
                return(
                    <SignUp1
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {this.values}
                    />
                )

            case 2:
                return(
                    <SignUp2
                    prevStep = {this.prevStep} 
                    nextStep = {this.nextStep}
                    handleChange= {this.handleChange}
                    values = {this.values}
                    />
                )
            
            case 3:
                return(
                    <SignUp3 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {this.values}
                    />
                )
            
                //successful
            case 4:
                return(
                    < Login />
                )
        
            default:
                break;
        }
    }
}

export default SignupMain
