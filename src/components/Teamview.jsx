import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teamview.css'

export default class Teamview extends Component {
  render() {
    return (
      <React.Fragment>
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
          <div className="container">
          <div  className="headtext">
               <h3> Mayowa messages </h3>
              
       </div>
       </div>

       <div className="container">
         
               <a href="/absencerequest"> Leave request to approve </a>
        
       </div>
       
       <div className="container-fluid">
       <table className="table"  style={{marginTop:"30px"}} >
 <thead>
   <tr>
     <th scope="col"> Employee </th>
     <th scope="col">Department </th>
     <th scope="col">Date of Request</th>
     <th scope="col"> Leave dates </th>
     <th scope="col"> Type </th>
     <th scope="col"> Days </th>
     <th scope="col"> </th>
     <th scope="col"> </th>
    
   </tr>
 </thead>
 <tbody>
   <tr>
   <td> Oladapo Oladunjoye </td>
     <td> Human Resources </td>
     <td> 01-03-2019 </td>
     <td>From 01-05-2019 to 08-05-2019 </td>
     <td> Sick Leave </td>
     <td> 7</td>
     <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Reject</button> </th>
     <th scope="col"><button type="submit" className="btn btn-success btn-large" > Approve </button></th>
   </tr>
   <tr>
   <td> Akinbode Opeyemi </td>
     <td> Help Desk </td>
     <td>04-03-2019</td>
     <td> From 01-07-2019 to 01-10-2019</td>
     <td> Maternity Leave </td>
     <td>90 </td>
     <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Reject</button> </th>
     <th scope="col"><button type="submit" className="btn btn-success btn-large" > Approve </button></th>
   </tr>
   <tr>
   <td> Kareem Kazeem </td>
     <td> Software</td>
     <td> 12-03-2019 </td>
     <td> From 31-07-2019 to 14-08-2019 </td>
     <td> Vacation</td>
     <td> 14</td>
     <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Reject</button> </th>
     <th scope="col"><button type="submit" className="btn btn-success btn-large" > Approve </button></th>
   </tr>
   <tr>
   <td>  Akinsola Oludotun  </td>
     <td>HSE</td>
     <td> 19-03-2019 </td>
     <td>  From 20-03-2019 to 23-03-2019</td>
     <td> Paternity Leave </td>
     <td> 3</td>
     <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Reject</button> </th>
     <th scope="col"><button type="submit" className="btn btn-success btn-large" > Approve </button></th>
   </tr>
   <tr>
   <td> Charles Chiduziam </td>
     <td>Logistics</td>
     <td>12-09-2019 </td>
     <td> From 12-03-2019 to 15-03-2019 </td>
     <td> Sick Leave</td>
     <td> 3 </td>
     <th scope="col"><button type="submit" className="btn btn-warning btn-large" >Reject</button> </th>
     <th scope="col"><button type="submit" className="btn btn-success btn-large" > Approve </button></th>
   </tr>
 </tbody>
</table>     

       </div>


       <div className="container">
         
         <p> All Leaves </p>
  
 </div>

  
 <div className="container-fluid">
       <table className="table"  style={{marginTop:"30px"}} >
 <thead>
   <tr>
     <th scope="col"> Type </th>
     <th scope="col">Deducted </th>
     <th scope="col">Dates</th>
     <th scope="col">Approved By </th>
     <th scope="col"> Status </th>
     
   </tr>
 </thead>
 <tbody>
   <tr>
   <td> Vacation </td>
     <td>14</td>
     <td>From 31-07-2019 to 14-08-2019 </td>
     <td>  Mayowa </td>
     <td> Approved </td>
   </tr>
   <tr>
   <td> Sick Leave </td>
     <td>3</td>
     <td> From 12-03-2019 to 15-03-2019 </td>
     <td>  Mayowa </td>
     <td> Approved </td>
   </tr>
   
   <tr>
   <td> Maternity Leave </td>
     <td>90</td>
     <td>From 01-07-2019 to 01-10-2019</td>
     <td>  Mayowa </td>
     <td> Pending</td>
   </tr>

 </tbody>
</table>     

       </div>


       <div className="container-fluid"  style={{padding:"0px"}}>
           <nav className="navbar  fixed-bottom navbar-light bg-light">
           
           </nav>
           <div><footer>&copy;Corporate TimeOff 2019</footer></div>
           </div>
           
  </React.Fragment>
    )
  }
}
