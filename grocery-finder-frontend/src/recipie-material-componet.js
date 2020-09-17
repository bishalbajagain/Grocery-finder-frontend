import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./stores/UserStore";
import { withRouter } from "react-router";
import { ExternalLink } from 'react-external-link';

import axios from 'axios'


const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
class recipieMaterialComponent extends React.Component {
  state = {
    loading: true,
    data: {},
  };
  sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  };

  async componentDidMount() {
    const id = window.location.href.split('/')[4];
    const response = await fetch("http://localhost:8000/api/user-getMaterials/" + id);
    const data = await response.json();
    this.setState({ materials: data.materials, loading: false });
    const materials_copy = this.state.materials;

    for (let i = 0; i < this.state.materials.length; ++i) {
      // const res_item = await fetch("http://localhost:8000/api/item-search/" + this.state.materials[i].name);
      // const res_item = await fetch(
      //   "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1013628348561559421&keyword="
      //   + this.state.materials[i].name);
      // const json_item = await res_item.json();
      axios.get("http://localhost:8000/api/item-search/" + this.state.materials[i].name)
        // .then(res => {
        //   res.data
        // })
        .then(res => {
          materials_copy[i] = {
            name: this.state.materials[i].name,
            amount: this.state.materials[i].amount,
            item: res.data.Items[0].Item.mediumImageUrls[0].imageUrl,
            url: res.data.Items[0].Item.itemUrl,
            // items: json_item.Items.slice(9)
          };
        })
        .catch(err => {
          console.log(err);
        });

      // materials_copy[i] = {
      //   name: this.state.materials[i].name,
      //   amount: this.state.materials[i].amount,
      //   item: json_item.Items[0].Item.mediumImageUrls[0].imageUrl,
      //   url: json_item.Items[0].Item.itemUrl,
      //   // items: json_item.Items.slice(9)
      // };
      // if ((i + 1) % 3 === 0) {
        await sleep(2000);
      // }
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
              <li key={idx}>{d.name}  ({d.amount} )
                <div >
                  <ExternalLink href={d.url}>
                    <img src={d.item} />
                  </ExternalLink>
                </div>
              </li>
            )
          })
          }
          </div>}
      </div>
    );
  }
}

export default withRouter(recipieMaterialComponent);
