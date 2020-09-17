import React from "react";
import { BrowserRouter as Router, Route, Switch, link, Redirect, Link } from "react-router-dom";

import LoginForm from "../LoginForm";




const SignPage = () => {
    return (
        <div className="container">
            <h1>Welcome to<br></br><span>akuten Grocery Finder</span></h1>
            <LoginForm />
            <Link className="toNextPage" to="/recipe-catagory">Goto Recipie Catagory List</Link>
        </div>
    );
};
export default SignPage;