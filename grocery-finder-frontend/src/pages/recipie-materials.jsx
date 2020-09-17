import React from "react";
import {BrowserRouter as Router , Route,Switch,link,Redirect, Link} from "react-router-dom";
import RecipieMaterialComponent from "../recipie-material-componet";


const RecipieMaterialPage= () =>{

return(
<div className="materialsContainer">
    <h3>This is the recipie Material Page</h3>
     <RecipieMaterialComponent/>
    </div>

);

};
export default RecipieMaterialPage;