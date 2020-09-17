import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import axios from "axios";
import cred from "./cred.json";
import config from "./config.json";

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class RenderMaterials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            materials: {},
            creciepe_id: 111
        };
    }

    renderTable() {
        const materials = this.state.materials;
        return (
                <div className="materialsContainer">
                    there should be materials list              
                
                {this.state.materials.map(function(d,idx)
                    {
                    return(
                    <li key={idx}>{d.name}  ({d.amount} )  </li>)
                    
                    })}
                </div>
            
        
        )
    };

    render() {
        if (!this.state.loading) {
            this.setState({
                reciepe_id: window.location.href.split('/')[4],
                loading: true
            },
            () => fetch("http://localhost:8000/api/user-getMaterials",{
                method: "get",
                mode: 'cors',
                headers: {
                    "Accept": "application/json",
                    // "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        loading: true,
                        materials: data.materials
                    })
                })
                .catch(err => {
                    return (<div> something error  </div>);
                }));

        }
        return (
            this.renderTable()
        );

    }
}
export default withRouter(RenderMaterials);