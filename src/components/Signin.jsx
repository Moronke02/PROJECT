import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap'
import './Signin.css';

class Signin extends Component{
     constructor(props){
        super(props);


            this.state = {
                initialState : {
                    email: '',
                    fullname:'',
                     pass: '',
                     emailError: '',
                     fullnameError:'',
                     passError:''
                }
            };
                 
           
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event){
    const isCheckbox = event.target.type === "checkbox;"
    this.setState({
        [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
    });
    const isValid = this.validate(event.target.value);
    if (isValid){
        console.log(this.state);
        this.setState(this.initialState)
    }

   
}

            validate = (data) => {
                let fullnameError = "";
                let emailError = "";
            
                var fnameExp = /^[a-zA-Z]+$/;

                
                if(!data.match(fnameExp)){
                    fullnameError = "Please use letters only" 
                }

                if(!this.state.email){
                    emailError = "invalid email"
                }

                if (emailError || fullnameError){
                    this.setState({ emailError, fullnameError});
                    return false;
                }
                return true;
            };
           





handleSubmit(event) {
    event.preventDefault();
   
   
};

render() {
            return(
    <React.Fragment>
              <div>
              <Navbar  bg="primary" expand="lg" default collapseOnSelect>
         <Navbar.Brand href="/">Corporate TimeOff</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
     </Navbar>
              </div>
    

                <div className="bgpicture">
    
            <div className="container">
            <h3 className="heading"> Login </h3>
            <div className="pageform">
                
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group ">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" required name="email"  value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Email Address"/>
            
        </div>
        
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control" name="pass" required placeholder="password"/>
            
        </div>
        

        {/* <button type="button" > SIGN IN </button> */}
        <button type="submit" className="btn btn-primary btn-large signinbutton">Sign in </button>
                </form>
            </div>
    </div>

</div>
        <div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            </nav>
            <footer>&copy;Corporate TimeOff 2019</footer>
            </div>

    </React.Fragment>
                        


            )
    }

}



export default Signin;