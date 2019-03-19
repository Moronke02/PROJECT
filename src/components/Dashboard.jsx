import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
    
        this.handleClick = this.handleClick.bind(this);
      }
    
        handleClick() {
            this.setState(function(prevState) {
                return {isToggleOn: !prevState.isToggleOn};
            });
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
                <h3> Employee Dashboard </h3>
                <p> Moronke Aliu</p>        

               <div><br></br>
                   <h4>Statistics</h4><hr></hr>
                   <Container>
                        <Row>
                            <Col>
                            <table >
                                <tr>
                                    <th colSpan="2">Days Remaining</th>
                                </tr>
                                <tr>
                                    <td>
                                    <h2>12 Days</h2>
                                <p> Out of 20 Working Days</p>
                                    </td>
                                </tr>

                                </table>
                            </Col>
                            <Col>
                                                                
                                <table >
                                <tr>
                                    <th colSpan="2">Types of TimeOff</th>
                                </tr>
                                <tr>
                                    <td>Sick Leave</td>
                                    <td><button>1</button></td>
                                </tr>
                                <tr>
                                    <td>Maternity Leave</td>
                                    <td><button>1</button></td>
                                </tr>
                                <tr>
                                    <td>Vacation</td>
                                    <td><button>0</button></td>
                                </tr>   
                                <tr>
                                    <td>International Conference</td>
                                    <td><button>0</button></td>
                                </tr>                               
                               
                                </table>

                            </Col>
                    
                            <Col>
                                                                
                                <table >
                                <tr>
                                    <th colSpan="2">Available Request</th>
                                </tr>
                                <tr>
                                    <td>Vacation</td>
                                    <td><button>1</button></td>
                                </tr>
                                <tr>
                                    <td>Sick Leave</td>
                                    <td><button>1</button></td>
                                </tr>
                                <tr>
                                    <td>Others</td>
                                    <td><button>0</button></td>
                                </tr>                                
                               
                                </table>
                                </Col>
                                <Col>
                                <table >
                                <tr>
                                    <th colSpan="2">Profile</th>
                                </tr>
                                <tr>
                                    <td>
                                       <p> Name: Moronke Aliu</p>
                                       <p> Department: Web Development</p>
                                       <p>Supervisor: Mayowa ...</p>
                                    </td>
                                </tr>
                                </table>

                                </Col>
                                
                        </Row>
                    </Container><br></br>
                    <h2>Calender <button class="btn btn-dark toggle-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" id="toggle" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Show more' : 'Less....'}
  </button></h2><br></br>
                    
                    <Container>
                    
                        <Row>
                            <Col>
                            <div class="month">      
                                <ul>
                                    
                                    <li>
                                    January<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                            </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li><span class="active">21</span></li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
            
                                </ul>
                                                                
                            </Col>
                            <Col><div class="month">      
                                <ul>
                                   
                                    <li>
                                    February<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li><span class="active">12</span></li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                            
                                </ul>
                            </Col>
                            <Col>
                             <div class="month">      
                                <ul>
                                    
                                    <li>
                                    March<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li><span class="active">5</span></li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                </ul>
                            </Col>
                            <Col>
                            <div class="month">      
                                <ul>
                                    
                                    <li>
                                    April<br></br>
                                    
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li><span class="active">27</span></li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
               </div>
               <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        
                        <Container>
                    
                        <Row>
                            <Col>
                            <div class="month">      
                            <ul>
                                    
                                    <li>
                                    May<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li><span class="active">4</span></li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                </ul>
                                                                
                            </Col>
                            <Col><div class="month">      
                            <ul>
                                    
                                    <li>
                                    june<br></br>
                                    
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li><span class="active">13</span></li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                </ul>
                            </Col>
                            <Col>
                             <div class="month">      
                             <ul>
                                    
                                    <li>
                                    July<br></br>
                                    
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li><span class="active">21</span></li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                
                                </ul>
                            </Col>
                            <Col>
                            <div class="month">      
                            <ul>
                                    
                                    <li>
                                    August<br></br>
                                    
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li><span class="active">22</span></li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                                
                                </ul>
                            </Col>
                        </Row>
                    </Container><br></br>
                    <Container>
                    
                        <Row>
                            <Col>
                            <div class="month">      
                            <ul>
                                    
                                    <li>
                                    september<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                               
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li><span class="active">14</span></li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                </ul>
                                                                
                            </Col>
                            <Col><div class="month">      
                            <ul>
                                    
                                    <li>
                                    October<br></br>
                                    
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li><span class="active">16</span></li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li>22</li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                <li>31</li>
                              
                                </ul>
                            </Col>
                            <Col>
                             <div class="month">      
                             <ul>
                                   
                                   <li>
                                   November<br></br>
                                   <span ></span>
                                   </li>
                               </ul>
                               </div>

                               <ul class="weekdays">
                               <li>Mo</li>
                               <li>Tu</li>
                               <li>We</li>
                               <li>Th</li>
                               <li>Fr</li>
                               <li>Sa</li>
                               <li>Su</li>
                               </ul>

                               <ul class="days">  
                               <li></li>
                               <li></li>
                               <li></li>
                               <li></li>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>6</li>
                               <li>7</li>
                               <li>8</li>
                               <li>9</li>
                               <li>10</li>
                               <li>11</li>
                               <li>12</li>
                               <li>13</li>
                               <li>14</li>
                               <li>15</li>
                               <li>16</li>
                               <li>17</li>
                               <li>18</li>
                               <li>19</li>
                               <li>20</li>
                               <li>21</li>
                               <li>22</li>
                               <li>23</li>
                               <li>24</li>
                               <li>25</li>
                               <li>26</li>
                               <li>27</li>
                               <li><span class="active">28</span></li>
                               <li>29</li>
                               <li>30</li>
                           
                               </ul>
                            </Col>
                            <Col>
                            <div class="month">      
                            <ul>
                                    
                                    <li>
                                    December<br></br>
                                    <span ></span>
                                    </li>
                                </ul>
                                </div>

                                <ul class="weekdays">
                                <li>Mo</li>
                                <li>Tu</li>
                                <li>We</li>
                                <li>Th</li>
                                <li>Fr</li>
                                <li>Sa</li>
                                <li>Su</li>
                                </ul>

                                <ul class="days">  
                               
                                <li></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                                <li>20</li>
                                <li>21</li>
                                <li><span class="active">22</span></li>
                                <li>23</li>
                                <li>24</li>
                                <li>25</li>
                                <li>26</li>
                                <li>27</li>
                                <li>28</li>
                                <li>29</li>
                                <li>30</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </div><br></br>
               
                 <h4 className="head">Absence Log</h4><br></br>
                 <Row>
                 <Col>
                 <table className="table1">
                 
                             
                                <tr>
                                    <td>Type</td>
                                    <td> Deducted</td>
                                    <td>Dates</td>
                                    <td>Approved by</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <td>Vacation</td>
                                    <td>14</td>
                                    <td> From 31-07-2019 to 14-08-2019</td>
                                    <td>Mayowa</td>
                                    <td>Approved</td>

                                </tr>
                                <tr>
                                    <td>Sick Leave</td>
                                    <td>3</td>
                                    <td>From 12-03-2019 to 15-03-2019</td>
                                    <td>Mayowa</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>Paternity Leave</td>
                                    <td>4</td>
                                    <td>From 01-05-2019 to 05-05-2019</td>
                                    <td>Mayowa</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>Sick leave</td>
                                    <td>3</td>
                                    <td>From 20-03-2019 to 23-03-2019</td>
                                    <td>Mayowa</td>
                                    <td>Approved</td>
                                </tr>
                                
                               
                                </table>
                 

               
               <hr></hr>
               
                </Col>
                </Row>
              <div><footer>&copy;Corporate TimeOff 2019</footer></div>
            </div>
        );
    }
}