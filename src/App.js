import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Shared/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Specialists from './Pages/Home/Specialists/Specialists';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/doctor">
            <Specialists></Specialists>
          </Route>

          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
