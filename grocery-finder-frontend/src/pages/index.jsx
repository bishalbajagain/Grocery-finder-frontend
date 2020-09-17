import React from "react";
import { BrowserRouter as Router, Route, Switch, link, Redirect, Link } from "react-router-dom";

import LoginForm from "../LoginForm";




const SignPage = () => {
    return (
        <div className="container">
            <h1>Welcome to<br></br><span>akuten Grocery Finder</span></h1>
            <LoginForm />
        </div>
    );
};
export default SignPage;