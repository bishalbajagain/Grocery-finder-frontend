import React from "react";
import {BrowserRouter as Router , Route,Switch,link,Redirect, Link} from "react-router-dom";




const SignPage = () =>{

return(
<div>
    <h3>Welcome to the sign In Page</h3>
    <small>SignPage</small>
    <Link to= "/recipe-catagory">
        Goto Recipie Catagory List
    </Link>
 
    </div>



);


};
export default SignPage;