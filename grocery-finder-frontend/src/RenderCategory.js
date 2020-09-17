import React from 'react';
// import InputField from './InputField';
// import SubmitButton from './SubmitButton';
// import UserStore from './stores/UserStore';
// import axios from "axios";
// import cred from "./cred.json";
// import config from "./config.json";

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class RenderCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            arr_json: [{}]
        };
    }

    renderTable() {
        const arr_json = this.state.arr_json;
        return (arr_json.map((data, index) => {
            return (
                <li className="categoryItem" key={data.categoryId}>
                    <Link to={"/recipe-ranking/"+ data.categoryId}>
                    {data.categoryName}
                    </Link>
                </li>
            )
        }
        ))
    };

    async componentDidMount() {
        fetch("http://localhost:8000/api/recipie-catagory-list", {
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
            });
    };

    render() {
        if (!this.state.loading) {
            
        }
        return (
            <ul className="categoryItems">{this.renderTable()}</ul>
        );

    }
}

export default withRouter(RenderCategory);