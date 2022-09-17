import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            step: 1,
            fname:"",
            lname:"",
            suffix:"",
            email:"",
            password:"",
            gender: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    
    prevStep = () => {
      const { step } = this.state;
      this.setState({step: step - 1});
    }

    nextStep = () => {
      const { step } = this.state;
      this.setState({step: step + 1});
    }

    handleChange = input => e => {
      this.setState({[input]: e.target.value})
    }

    onValueChange(e){
      this.setState({
        gender: e.target.value
      });
    }

    handleSubmit(e){
      e.preventDefault();
        const{fname, lname, suffix, email, password, gender} = this.state;
        console.log(fname, lname, suffix, email, password, gender);
        fetch("http://localhost:5000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify({
            fname, lname, suffix, email, password, gender
          }),
        }).then((res)=>res.json())
        .then((data)=> {
          console.log(data, "userRegister");
        });
    }

  render() {
    // const {step} = this.state;
    // switch (step) {
    //   case 1:
    //     <SignUp
    //       nextStep = {this.nextStep}
    //       handleChange = { this.handleChange}
    //       />
    //     break;
    //   case 2:
    //     <signup2 
    //       prevStep = {this.prevStep}
    //       nextStep = {this.nextStep}
    //       handleChange = {this.handleChange}
    //     />
    //     break;

    //   case 3:
    //     <signup3 
    //       prevStep = {this.prevStep}
    //       nextStep = {this.nextStep}
    //     />
    //     break;

    //   default:
    //     break;
    // }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"
          onChange={(e) => this.setState({ lname: e.target.value})} 
          required
          />
        </div>

        <div className="mb-3 suffix">
          <label>Suffix</label>
          <input type="text" className="form-control suffix" placeholder="(e.g. Jr. , Sr., II)"
          onChange={(e) => this.setState({ suffix: e.target.value})} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value})}
            required
          />
          
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
        <label>Gender</label>
        <br/>
          <div className='form-check'>
          <label>
          <input
                type="radio"
                checked = {this.state.gender === "female"}
                onChange = {this.onValueChange}
                className="form-check-input"
                value="female"
                name = "gender"
                required
              /> <span>Female</span>
              </label>   
          </div>

          <div className='form-check'> 
          <input
                type="radio"
                checked = {this.state.gender === "male"}
                onChange = {this.onValueChange}
                className="form-check-input"
                name = "gender"
                value="male"
                required
              /> Male
          </div>
          </div>


        <div className="d-grid">
          <button href="/sign-up2" type="submit" className="btn btn-primary">
            SignUp
          </button>
        </div>



        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">Sign In</a>
        </p>
      </form>

    )
  }
}