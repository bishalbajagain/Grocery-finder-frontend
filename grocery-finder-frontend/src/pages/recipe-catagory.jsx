import React from "react";

import {BrowserRouter as Router , Route,Switch,link,Redirect, Link} from "react-router-dom";




const RecipieCatagoryPage = () =>{

return(
<div>
    <h3>This is the recipie catagory Page</h3>

    <Link to= "/recipe-ranking">
        Goto Recipie Ranking Page
    </Link>
    
    </div>



);


};
export default RecipieCatagoryPage;