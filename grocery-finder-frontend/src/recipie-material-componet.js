import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./stores/UserStore";
import { withRouter } from "react-router";

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
    for (let i = 0; i < this.state.materials.length; ++i) {
      const res_item = await fetch("http://localhost:8000/api/item-search/" + this.state.materials[i].name);
      const json_item = await res_item.json();
      materials_copy[i] = {
        name: this.state.materials[i].name,
        amount: this.state.materials[i].amount,
        item: json_item.Items[0].Item.mediumImageUrls[0].imageUrl,
        // url: json_item.Items[0].Item.itemUrl
      };
    };
    this.setState({
      materials: materials_copy
    })
    console.log(this.state.materials.items);
    // }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> :
          <div>{this.state.materials.map(function (d, idx) {
            return (
              // <li key={idx}>{d.name}  ({d.amount} )
              <div >
                <a href={d.url} > link </a>
              {/* <img src= {d.item} /> */}
              </div>
              // </li>
            )

          })

          }
          </div>}
      </div>
    );
  }
}

export default withRouter(recipieMaterialComponent);
