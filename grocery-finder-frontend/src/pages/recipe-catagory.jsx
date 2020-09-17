import React from "react";
import { BrowserRouter as Router, Route, Switch, link, Redirect, Link } from "react-router-dom";

import RenderCategory from "../RenderCategory";



const RecipieCatagoryPage = () => {
    return (
        <div className="categoryContainer">
            <h1>Recipie Categories</h1>
            
            <RenderCategory />
        </div>

    );
};
export default RecipieCatagoryPage;