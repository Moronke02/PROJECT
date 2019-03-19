import React from "react";
import "./Absencerequestform.css";
import { Nav, Navbar } from "react-bootstrap";





export default class Absencerequestform extends React.Component {
  constructor() {
    super();
    
   
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["leave_type"] = "";
   
        
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }
  
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["leave_type"]) {
      formIsValid = false;
      errors["leave_type"] = "*Please select a Leave type.";
    }
    
   
    this.setState({
      errors: errors
    });
    return formIsValid;


  }



    render(){
        return (
            <div>
              <div>
              <Navbar bg="primary"  expand="lg" default collapseOnSelect >
                <Navbar.Brand href="/">Corporate TimeOff</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/teamview">Team View</Nav.Link>
                <Nav.Link href="/absencerequest">New Request</Nav.Link>
                </Nav>
            
               </Navbar>
                </div>   
    <div class="modal-dialog">
              
    <div class="modal-content">
    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">New request</h5>
        {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>*/}
       
      </div>
      <div class="modal-body">

          
          <div class="form-group">
            <label class="control-label">Type</label>
            <select class="form-control" id="leave_type" name="leave_type" value={this.state.fields.leave_type} onChange={this.handleChange}>
                <option></option>
                <option value="0" data-tom="Vacation">Vacation</option>
                <option value="1" data-tom="International Conference">International Conference</option>
                <option value="2" data-tom="Sick Leave">Sick Leave</option>
                <option value="3" data-tom="Maternity Leave">Maternity Leave</option>
                <option value="4" data-tom="Paternity Leave">Paternity Leave</option>
                <option value="5" data-tom="other">Other</option>
            </select>
            <div className="errorMsg">{this.state.errors.leave_type}</div>
          </div>

          <div class="form-group">
            <label for="from" class="control-label">From</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="from_date_part">
                  <option></option>
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date" class="form-control book-leave-from-input" id="from" data-provide="datepicker" data-date-autoclose="1" data-date-format="yyyy-mm-dd" data-date-week-start="1" name="from_date" />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="to" class="control-label">To</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="to_date_part">
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date" class="form-control book-leave-to-input" id="to" data-provide="datepicker" data-date-autoclose="1" data-date-format="yyyy-mm-dd" data-date-week-start="1"  name="to_date"  />
                
                  
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="leave_type" class="control-label">Reason</label>
            <textarea class="form-control" id="leave_reason" name="reason"></textarea>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-success">Submit</button>
          <input type="hidden" name="redirect_back_to" value="/calendar/" />
      </div>
    </form>
    </div>
  </div>
  <div><footer>&copy;Corporate TimeOff 2019</footer></div>
  </div>
  
        );
    }
}