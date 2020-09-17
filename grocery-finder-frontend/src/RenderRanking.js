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
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            arr_json: [{}],
            category_id: 111
        };
    }

    renderTable() {
        const arr_json = this.state.arr_json;
        return (arr_json.map((data, index) => {
            return (
                <div>
                    <Link to={"/materials-list/" + data.recipeId}>
                        <img src={data.foodImageUrl}  width="128" height="128"/>
                        <div> recipe title: {data.recipeTitle} </div>
                    </Link>
                </div>
            )
        }
        ))
    };

    render() {
        if (!this.state.loading) {
            this.setState({
                category_id: window.location.href.split('/')[4],
                loading: true
            },
            () => fetch("http://localhost:8000/api/recipie-catagory-ranking/"+ this.state.category_id,{
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
                        arr_json: data
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
export default withRouter(RenderRanking);