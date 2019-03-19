import React from "react";
import "./Signup.css"
import { Nav, Navbar, } from "react-bootstrap";


export default class Signup extends React.Component {
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
        const isCheckbox = e.target.type === "checkbox;"
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["companyname"] = "";
          fields["username"] = "";
          fields["emailid"] = "";
					fields["mobileno"] = "";
					fields["age"] = "";
					fields["work"] = "";
					fields["department"] = "";
					fields["manager"] = "";
          fields["password"] = "";
					fields["confirmpassword"] = "";
					fields["country"] = "";
					fields["timezone"] = "";
					fields["date"] = "";
					this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your name.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
			}  
			
      if (!fields["country"]) {
        formIsValid = false;
        errors["country"] = "*Please select a country.";
			}
			if (!fields["date"]) {
        formIsValid = false;
        errors["date"] = "*Please select a day, month and year.";
			}
			if (!fields["timezone"]) {
        formIsValid = false;
        errors["timezone"] = "*Please select a Time-zone.";
      }

			if (!fields["department"]) {
        formIsValid = false;
        errors["department"] = "*Please enter the name of your dept.";
      }

      if (typeof fields["department"] !== "undefined") {
        if (!fields["department"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["department"] = "*Please enter alphabet characters only.";
        }
			}
			if (!fields["manager"]) {
        formIsValid = false;
        errors["manager"] = "*Please enter your Manager's name.";
      }

      if (typeof fields["manager"] !== "undefined") {
        if (!fields["manager"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["manager"] = "*Please enter alphabet characters only.";
        }
			}
			if (!fields["work"]) {
        formIsValid = false;
        errors["work"] = "*Please enter the type of work you do.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
			}
			
      if (!fields["companyname"]) {
        formIsValid = false;
        errors["companyname"] = "*Please enter your Company name.";
      }

      if (typeof fields["companyname"] !== "undefined") {
        if (!fields["companyname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["companyname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

			if (!fields["age"]) {
        formIsValid = false;
        errors["age"] = "*Please enter your Age.";
      }

      if (typeof fields["age"] !== "undefined") {
        if (!fields["age"].match(/\d/)) {
          formIsValid = false;
          errors["age"] = "*Please enter number characters only.";
        }
			}
			if (typeof fields["age"] !== "undefined") {
        if (fields["age"].match(/\d/) && fields['age'] < 18 ) {
          formIsValid = false;
          errors["age"] = "*please, only people above 18 can register.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter a minimum of eight characters with at least a number and a letter .";
        }
      }
      if (fields["password"] === fields['confirmpassword']){
          formIsValid = false;
      }
      if (fields["password"] !== fields['confirmpassword']){
          formIsValid = false;
          errors["confirmpassword"] = "Password does not match"
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
		 <div>
         <Navbar bg="primary"  expand="lg" default collapseOnSelect >
                <Navbar.Brand href="/">Corporate TimeOff</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/teamview">Team View</Nav.Link>
                <Nav.Link href="/absencerequest">New Request</Nav.Link>
                </Nav>
            
               </Navbar>
         </div>
     <div className="container">
        <h5 className="heading">Register Here</h5>
        <div className="pageform">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
					<label htmlFor="name">Company Name</label>
					<input type="text" name="companyname"  className="form-control"value={this.state.fields.companyname} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.companyname}</div>
					<label htmlFor="name">First Name</label>
					<input type="text" name="firstname"  className="form-control" value={this.state.fields.firstname} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.lastname}</div>
                    <label htmlFor="name">Last Name</label>
					<input type="text" name="lastname" className="form-control" value={this.state.fields.lastname} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.lastname}</div>
					<label htmlFor="email">Email Address</label>
					<input type="text" name="emailid"  className="form-control" value={this.state.fields.emailid} onChange={this.handleChange}  />
					<div className="errorMsg">{this.state.errors.emailid}</div>
				<label htmlFor="num">Age</label>
        <input type="age" name="age"  className="form-control" value={this.state.fields.age} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.age}</div>
				<label htmlFor="num">Date of birth</label>
        <input type="date" name="date"  className="form-control" value={this.state.fields.date} onChange={this.handleChange}  />
				<div className="errorMsg">{this.state.errors.date}</div>
      
				<label htmlFor="name">Work</label>
					<input type="text" name="work" className="form-control" value={this.state.fields.work} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.work}</div>
					<label htmlFor="name">Manager</label>
					<input type="text" name="manager"  className="form-control" value={this.state.fields.manager} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.manager}</div>
					<label htmlFor="">Department</label>
					<input type="text" name="department"  className="form-control" value={this.state.fields.department} onChange={this.handleChange} />
					<div className="errorMsg">{this.state.errors.department}</div>
        <label htmlFor="">Password</label>
        <input type="password" name="password"  className="form-control" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirmpassword"  className="form-control" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.confirmpassword}</div>
        <label htmlFor="">Country</label>
        <select type="country" name="country" className="form-control" value={this.state.fields.country} onChange={this.handleChange}>
	<option></option>
	<option value="4">Afghanistan</option>
	<option value="248">Åland Islands</option>
	<option value="8">Albania</option>
	<option value="12">Algeria</option>
	<option value="16">American Samoa</option>
	<option value="20">Andorra</option>
	<option value="24">Angola</option>
	<option value="660">Anguilla</option>
	<option value="10">Antarctica</option>
	<option value="28">Antigua and Barbuda</option>
	<option value="32">Argentina</option>
	<option value="51">Armenia</option>
	<option value="533">Aruba</option>
	<option value="36">Australia</option>
	<option value="40">Austria</option>
	<option value="31">Azerbaijan</option>
	<option value="44">Bahamas</option>
	<option value="48">Bahrain</option>
	<option value="50">Bangladesh</option>
	<option value="52">Barbados</option>
	<option value="112">Belarus</option>
	<option value="56">Belgium</option>
	<option value="84">Belize</option>
	<option value="204">Benin</option>
	<option value="60">Bermuda</option>
	<option value="64">Bhutan</option>
	<option value="68">Bolivia, Plurinational State of</option>
	<option value="535">Bonaire, Sint Eustatius and Saba</option>
	<option value="70">Bosnia and Herzegovina</option>
	<option value="72">Botswana</option>
	<option value="74">Bouvet Island</option>
	<option value="76">Brazil</option>
	<option value="86">British Indian Ocean Territory</option>
	<option value="96">Brunei Darussalam</option>
	<option value="100">Bulgaria</option>
	<option value="854">Burkina Faso</option>
	<option value="108">Burundi</option>
	<option value="116">Cambodia</option>
	<option value="120">Cameroon</option>
	<option value="124">Canada</option>
	<option value="132">Cape Verde</option>
	<option value="136">Cayman Islands</option>
	<option value="140">Central African Republic</option>
	<option value="148">Chad</option>
	<option value="152">Chile</option>
	<option value="156">China</option>
	<option value="162">Christmas Island</option>
	<option value="166">Cocos (Keeling) Islands</option>
	<option value="170">Colombia</option>
	<option value="174">Comoros</option>
	<option value="178">Congo</option>
	<option value="180">Congo, the Democratic Republic of the</option>
	<option value="184">Cook Islands</option>
	<option value="188">Costa Rica</option>
	<option value="384">Côte d'Ivoire</option>
	<option value="191">Croatia</option>
	<option value="192">Cuba</option>
	<option value="531">Curaçao</option>
	<option value="196">Cyprus</option>
	<option value="203">Czech Republic</option>
	<option value="208">Denmark</option>
	<option value="262">Djibouti</option>
	<option value="212">Dominica</option>
	<option value="214">Dominican Republic</option>
	<option value="218">Ecuador</option>
	<option value="818">Egypt</option>
	<option value="222">El Salvador</option>
	<option value="226">Equatorial Guinea</option>
	<option value="232">Eritrea</option>
	<option value="233">Estonia</option>
	<option value="231">Ethiopia</option>
	<option value="238">Falkland Islands (Malvinas)</option>
	<option value="234">Faroe Islands</option>
	<option value="242">Fiji</option>
	<option value="246">Finland</option>
	<option value="250">France</option>
	<option value="254">French Guiana</option>
	<option value="258">French Polynesia</option>
	<option value="260">French Southern Territories</option>
	<option value="266">Gabon</option>
	<option value="270">Gambia</option>
	<option value="268">Georgia</option>
	<option value="276">Germany</option>
	<option value="288">Ghana</option>
	<option value="292">Gibraltar</option>
	<option value="300">Greece</option>
	<option value="304">Greenland</option>
	<option value="308">Grenada</option>
	<option value="312">Guadeloupe</option>
	<option value="316">Guam</option>
	<option value="320">Guatemala</option>
	<option value="831">Guernsey</option>
	<option value="324">Guinea</option>
	<option value="624">Guinea-Bissau</option>
	<option value="328">Guyana</option>
	<option value="332">Haiti</option>
	<option value="334">Heard Island and McDonald Islands</option>
	<option value="336">Holy See (Vatican City State)</option>
	<option value="340">Honduras</option>
	<option value="344">Hong Kong</option>
	<option value="348">Hungary</option>
	<option value="352">Iceland</option>
	<option value="356">India</option>
	<option value="360">Indonesia</option>
	<option value="364">Iran, Islamic Republic of</option>
	<option value="368">Iraq</option>
	<option value="372">Ireland</option>
	<option value="833">Isle of Man</option>
	<option value="376">Israel</option>
	<option value="380">Italy</option>
	<option value="388">Jamaica</option>
	<option value="392">Japan</option>
	<option value="832">Jersey</option>
	<option value="400">Jordan</option>
	<option value="398">Kazakhstan</option>
	<option value="404">Kenya</option>
	<option value="296">Kiribati</option>
	<option value="408">Korea, Democratic People's Republic of</option>
	<option value="410">Korea, Republic of</option>
	<option value="414">Kuwait</option>
	<option value="417">Kyrgyzstan</option>
	<option value="418">Lao People's Democratic Republic</option>
	<option value="428">Latvia</option>
	<option value="422">Lebanon</option>
	<option value="426">Lesotho</option>
	<option value="430">Liberia</option>
	<option value="434">Libya</option>
	<option value="438">Liechtenstein</option>
	<option value="440">Lithuania</option>
	<option value="442">Luxembourg</option>
	<option value="446">Macao</option>
	<option value="807">Macedonia, the former Yugoslav Republic of</option>
	<option value="450">Madagascar</option>
	<option value="454">Malawi</option>
	<option value="458">Malaysia</option>
	<option value="462">Maldives</option>
	<option value="466">Mali</option>
	<option value="470">Malta</option>
	<option value="584">Marshall Islands</option>
	<option value="474">Martinique</option>
	<option value="478">Mauritania</option>
	<option value="480">Mauritius</option>
	<option value="175">Mayotte</option>
	<option value="484">Mexico</option>
	<option value="583">Micronesia, Federated States of</option>
	<option value="498">Moldova, Republic of</option>
	<option value="492">Monaco</option>
	<option value="496">Mongolia</option>
	<option value="499">Montenegro</option>
	<option value="500">Montserrat</option>
	<option value="504">Morocco</option>
	<option value="508">Mozambique</option>
	<option value="104">Myanmar</option>
	<option value="516">Namibia</option>
	<option value="520">Nauru</option>
	<option value="524">Nepal</option>
	<option value="528">Netherlands</option>
	<option value="540">New Caledonia</option>
	<option value="554">New Zealand</option>
	<option value="558">Nicaragua</option>
	<option value="562">Niger</option>
	<option value="566">Nigeria</option>
	<option value="570">Niue</option>
	<option value="574">Norfolk Island</option>
	<option value="580">Northern Mariana Islands</option>
	<option value="578">Norway</option>
	<option value="512">Oman</option>
	<option value="586">Pakistan</option>
	<option value="585">Palau</option>
	<option value="275">Palestinian Territory, Occupied</option>
	<option value="591">Panama</option>
	<option value="598">Papua New Guinea</option>
	<option value="600">Paraguay</option>
	<option value="604">Peru</option>
	<option value="608">Philippines</option>
	<option value="612">Pitcairn</option>
	<option value="616">Poland</option>
	<option value="620">Portugal</option>
	<option value="630">Puerto Rico</option>
	<option value="634">Qatar</option>
	<option value="638">Réunion</option>
	<option value="642">Romania</option>
	<option value="643">Russian Federation</option>
	<option value="646">Rwanda</option>
	<option value="652">Saint Barthélemy</option>
	<option value="654">Saint Helena, Ascension and Tristan da Cunha</option>
	<option value="659">Saint Kitts and Nevis</option>
	<option value="662">Saint Lucia</option>
	<option value="663">Saint Martin (French part)</option>
	<option value="666">Saint Pierre and Miquelon</option>
	<option value="670">Saint Vincent and the Grenadines</option>
	<option value="882">Samoa</option>
	<option value="674">San Marino</option>
	<option value="678">Sao Tome and Principe</option>
	<option value="682">Saudi Arabia</option>
	<option value="686">Senegal</option>
	<option value="688">Serbia</option>
	<option value="690">Seychelles</option>
	<option value="694">Sierra Leone</option>
	<option value="702">Singapore</option>
	<option value="534">Sint Maarten (Dutch part)</option>
	<option value="703">Slovakia</option>
	<option value="705">Slovenia</option>
	<option value="90">Solomon Islands</option>
	<option value="706">Somalia</option>
	<option value="710">South Africa</option>
	<option value="239">South Georgia and the South Sandwich Islands</option>
	<option value="728">South Sudan</option>
	<option value="724">Spain</option>
	<option value="144">Sri Lanka</option>
	<option value="729">Sudan</option>
	<option value="740">Suriname</option>
	<option value="744">Svalbard and Jan Mayen</option>
	<option value="748">Swaziland</option>
	<option value="752">Sweden</option>
	<option value="756">Switzerland</option>
	<option value="760">Syrian Arab Republic</option>
	<option value="158">Taiwan, Province of China</option>
	<option value="762">Tajikistan</option>
	<option value="834">Tanzania, United Republic of</option>
	<option value="764">Thailand</option>
	<option value="626">Timor-Leste</option>
	<option value="768">Togo</option>
	<option value="772">Tokelau</option>
	<option value="776">Tonga</option>
	<option value="780">Trinidad and Tobago</option>
	<option value="788">Tunisia</option>
	<option value="792">Turkey</option>
	<option value="795">Turkmenistan</option>
	<option value="796">Turks and Caicos Islands</option>
	<option value="798">Tuvalu</option>
	<option value="800">Uganda</option>
	<option value="804">Ukraine</option>
	<option value="784">United Arab Emirates</option>
	<option value="826">United Kingdom</option>
	<option value="840">United States</option>
	<option value="581">United States Minor Outlying Islands</option>
	<option value="858">Uruguay</option>
	<option value="860">Uzbekistan</option>
	<option value="548">Vanuatu</option>
	<option value="862">Venezuela, Bolivarian Republic of</option>
	<option value="704">Viet Nam</option>
	<option value="92">Virgin Islands, British</option>
	<option value="850">Virgin Islands, U.S.</option>
	<option value="876">Wallis and Futuna</option>
	<option value="732">Western Sahara</option>
	<option value="887">Yemen</option>
	<option value="894">Zambia</option>
	<option value="716">Zimbabwe</option>
</select>
<div className="errorMsg">{this.state.errors.country}</div>
<label htmlFor="">Time Zone</label>
<select type="timezone" name="timezone" className="form-control" value={this.state.fields.timezone} onChange={this.handleChange}>
	<option></option>
	<option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</option>
	<option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
	<option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</option>
	<option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</option>
	<option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
	<option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
	<option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option>
	<option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
	<option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
	<option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America</option>
	<option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option>
	<option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
	<option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan</option>
	<option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
	<option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
	<option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)</option>
	<option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
	<option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
	<option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</option>
	<option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</option>
	<option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland</option>
	<option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</option>
	<option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
	<option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland</option>
	<option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo</option>
	<option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
	<option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
	<option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</option>
	<option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
	<option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
	<option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
	<option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
	<option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
	<option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
	<option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central Africa</option>
	<option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</option>
	<option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
	<option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</option>
	<option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</option>
	<option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria</option>
	<option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
	<option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</option>
	<option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</option>
	<option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</option>
	<option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
	<option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
	<option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</option>
	<option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</option>
	<option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</option>
	<option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
	<option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</option>
	<option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</option>
	<option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</option>
	<option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg</option>
	<option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
	<option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
	<option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
	<option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu</option>
	<option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
	<option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka</option>
	<option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
	<option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
	<option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk</option>
	<option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
	<option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
	<option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
	<option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</option>
	<option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</option>
	<option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
	<option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</option>
	<option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</option>
	<option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide</option>
	<option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</option>
	<option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</option>
	<option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
	<option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</option>
	<option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
	<option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok</option>
	<option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
	<option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland, Wellington</option>
	<option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
	<option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nuku'alofa</option>
</select>	
<div className="errorMsg">{this.state.errors.timezone}</div>
<button type="submit" className="btn btn-primary btn-large signinbutton"> Submit</button>
        </form>
    </div>
		<footer>&copy; Corporate TimeOff 2019</footer>
  </div>
</div>

      );
  }


}


   