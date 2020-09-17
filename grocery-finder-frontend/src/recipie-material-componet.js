import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./stores/UserStore";
import { withRouter } from "react-router";
// import { ExternalLink } from 'react-external-link';

class recipieMaterialComponent extends React.Component {
  state = {
    loading: true,
    data: {},
  };

  async componentDidMount() {
    const id = window.location.href.split('/')[4];
    const response = await fetch("http://localhost:8000/api/user-getMaterials/" + id);
    const data = await response.json();
    this.setState({ materials: data.materials, loading: false });
    const materials_copy = this.state.materials;

    // for (let i = 0; i < this.state.materials.length; ++i) {
    //   const res_item = await fetch("http://localhost:8000/api/item-search/" + this.state.materials[i].name);
    //   const json_item = await res_item.json();
    //   materials_copy[i] = {
    //     name: this.state.materials[i].name,
    //     amount: this.state.materials[i].amount,
    //     // item: json_item.Items[0].Item.mediumImageUrls[0].imageUrl,
    //     // url: json_item.Items[0].Item.itemUrl,
    //     // items: json_item.Items.slice(9)
    //   };
    // };
    this.setState({
      materials: materials_copy
    })
    console.log(this.state.materials.items);
    // }
    console.log(this.state);
  }

  render() {
    return (
      <div className="materials">
        {this.state.loading ? <div>loading...</div> :
          <ul className="materialItems">{this.state.materials.map(function (d, idx) {
            return (
              <li className="materialItem" key={idx}>{d.name}  ({d.amount} )
              <ul>
                {/* <ExternalLink href={d.url}> */}
              {/* <img src= {d.item} /> */}
              {/* </ExternalLink> */}
              </ul>
              
              </li>
            )

          })
          }
          </ul>}
      </div>
    );
  }
}

export default withRouter(recipieMaterialComponent);
