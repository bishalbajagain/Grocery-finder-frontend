import React from "react";
import { BrowserRouter as Router, Route, Switch, link, Redirect, Link } from "react-router-dom";

import LoginForm from "../LoginForm";




const SignPage = () => {
    return (
        <div>
            <h3>Welcome to the sign In Page</h3>
            <small>SignPage</small>
            <Link to="/recipe-catagory">
                Goto Recipie Catagory List</Link>
            <LoginForm />
        </div>
    );
};
export default SignPage;