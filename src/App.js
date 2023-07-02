import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponents from './Components/ListEmployeeComponents';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeComponent from './Components/UpdateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
      <HeaderComponent/> 
        <div className="Container">
          <Switch>
            <Route path='/add-employee' component={CreateEmployeeComponent}></Route>
            <Route path='/employee' component={ListEmployeeComponents}></Route>
            <Route path='/update-employee/:id' component={UpdateEmployeeComponent}></Route>
            <Route path='/view-employee/:id' component={ViewEmployeeComponent}></Route>
            <Route path='/' exact component={ListEmployeeComponents}></Route>
            </Switch>        
        </div>
      <FooterComponent/>
      </div>
      </Router>
    </div>
   );
}

export default App;
