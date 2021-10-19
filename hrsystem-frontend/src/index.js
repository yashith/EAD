import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Emptabl from './Emp';
import 'bootstrap/dist/css/bootstrap.min.css'
import Empedit from './Empedit';
import Deptable from './Dep';
import Joblist from './Job';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">HR</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Employees</Nav.Link>
          <Nav.Link href="/dep">Departmets</Nav.Link>
          <Nav.Link href="/job">Job Titles</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Emptabl} exact />
        <Route path='/empedit/:id/:name/:email/:tel/:dep/:job' component={Empedit} exact />
        <Route path='/dep' component={Deptable} exact />
        <Route path='/job' component={Joblist} exact />
      </Switch>
    </BrowserRouter>
    {/* <Emptabl/> */}
    {/* <Empedit/> */}
    {/* <Deptable/> */}
    {/* <Joblist/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
