import React, { useState } from "react";
import {BrowserRouter as Router , Route,Switch,link,Redirect, Link} from "react-router-dom";
import RecipieMaterialComponent from "../recipie-material-componet";

const RecipieMaterialPage= () =>{

    const [value, setValue] = useState("");

    return(
        <div className="materialsContainer">
            <h1>{value}</h1>
            <RecipieMaterialComponent
                setValue = {setValue}
            />
        </div>

    );

};
export default RecipieMaterialPage;