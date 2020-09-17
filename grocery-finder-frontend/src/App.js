import React, { Component } from "react";
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import LoginForm from "./LoginForm";
import SubmitButton from "./SubmitButton";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, link, Redirect } from "react-router-dom";



import SignPage from "./pages/index"
import NotFoundPage from "./pages/404"
import RecipieCatagoryPage from "./pages/recipe-catagory"
import RecipieRankingPage from "./pages/recipie-ranking"
import MaterialsListPage from "./pages/materials-list"
import Home from "./pages/Home"



class App extends React.Component {


  render() {
    return <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={SignPage} />
        <Route exact path="/recipe-catagory" component={RecipieCatagoryPage} />
        <Route exact path="/recipe-ranking/:id(\d+)" component={RecipieRankingPage} />
        <Route exact path="/materials-list/:id(\d+)" component={MaterialsListPage} />
        <Route exact path="/" component={RecipieRankingPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  }
}

export default App;
