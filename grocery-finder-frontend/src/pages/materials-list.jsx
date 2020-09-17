import React from "react";
import { BrowserRouter as Router, Route, Switch, link, Redirect, Link } from "react-router-dom";

import RenderMaterials from "../RenderMaterials";



const MaterialsListPage = () => {
    return (
        <div className="materialsContainer">
            <h3>This is the materials list Page</h3>
            <RenderMaterials />
        </div>

    );
};
export default MaterialsListPage;