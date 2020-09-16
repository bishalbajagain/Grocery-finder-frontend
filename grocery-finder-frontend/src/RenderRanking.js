import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import axios from "axios";
import cred from "./cred.json";
import config from "./config.json";

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class RenderRanking extends React.Component {

    render(){
        return(
            <div>{window.location.href}</div>
        )
    }
}

export default withRouter(RenderRanking);