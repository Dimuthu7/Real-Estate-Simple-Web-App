import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Buy from "./Components/Buy/Buy";
import Sell from "./Components/Sell/Sell";
import MyAd from "./Components/MyAd/MyAd";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/buy" component={Buy} exact />
          <Route path="/sell" component={Sell} exact />
          <Route path="/myAd" component={MyAd} exact />
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
