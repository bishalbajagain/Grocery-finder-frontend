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
  };
  sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  };

  async componentDidMount() {
    const title = this.props.location.state.title;
    this.props.setValue(title);
    const id = window.location.href.split('/')[4];
    const response = await fetch("http://localhost:8000/api/user-getMaterials/" + id);
    const data = await response.json();
    this.setState({ materials: data.materials, loading: false, loadings: Array(data.materials.length).fill(true) });
    const materials_copy = this.state.materials;
    for (let i = 0; i < this.state.materials.length; ++i) {
      axios.get("https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1013628348561559421&keyword=" + this.state.materials[i].name)
        .then(res => {
          // const Items =
          //   res.data.Items.map((element, idx) => {
          //     return ({
          //       itemName: element.Item.itemName,
          //       itemUrl: element.Item.itemUrl,
          //       imageUrl: element.Item.mediumImageUrls[0].imageUrl,
          //       loding: true
          //     })
          //   });
          const materials_copy = this.state.materials;
          materials_copy[i] = {
            name: this.state.materials[i].name,
            amount: this.state.materials[i].amount,

            imageUrl0: res.data.Items[0].Item.mediumImageUrls[0].imageUrl,
            itemUrl0: res.data.Items[0].Item.itemUrl,
            itemName0: res.data.Items[0].Item.itemName,

            imageUrl1: res.data.Items[1].Item.mediumImageUrls[0].imageUrl,
            itemUrl1: res.data.Items[1].Item.itemUrl,
            itemName1: res.data.Items[1].Item.itemName,

            imageUrl2: res.data.Items[2].Item.mediumImageUrls[0].imageUrl,
            itemUrl2: res.data.Items[2].Item.itemUrl,
            itemName2: res.data.Items[2].Item.itemName,

            imageUrl3: res.data.Items[3].Item.mediumImageUrls[0].imageUrl,
            itemUrl3: res.data.Items[3].Item.itemUrl,
            itemName3: res.data.Items[3].Item.itemName,

            imageUrl4: res.data.Items[4].Item.mediumImageUrls[0].imageUrl,
            itemUrl4: res.data.Items[4].Item.itemUrl,
            itemName4: res.data.Items[4].Item.itemName,
          }
        })
        .then(res => {
          this.setState({
            materials: materials_copy
          })
        })
        .then(res => {
          const loadings_copy = this.state.loadings;
          loadings_copy[i] = false;
          this.setState({ loadings: loadings_copy });
        })
        .catch(err => {
          console.log(err);
        });
      await sleep(3000);
    };
    this.setState({
      materials: materials_copy
    })
    // }
    console.log(this.state);
  }

  render() {
    return (
      <div className="materialContainer">
        <h2>材料</h2>
        {this.state.loading ? <div>loading...</div> :
          <ul className="materialItems">{this.state.materials.map(function (material, idx) {
            return (
              <li key={idx}>
                <h3>{material.name}  ({material.amount} )</h3>
                  <div>
                    <ExternalLink href={material.itemUrl0}>
                      <img src={material.imageUrl0} />
                      <h4>{material.itemName0}</h4>
                    </ExternalLink>


                    <ExternalLink href={material.itemUrl1}>
                      <img src={material.imageUrl1} />
                      <h4>{material.itemName1}</h4>
                    </ExternalLink>

                    <ExternalLink href={material.itemUrl2}>
                      <img src={material.imageUrl2} />
                      <h4>{material.itemName2}</h4>
                    </ExternalLink>

                    <ExternalLink href={material.itemUrl3}>
                      <img src={material.imageUrl3} />
                      <h4>{material.itemName3}</h4>
                    </ExternalLink>

                    <ExternalLink href={material.itemUrl4}>
                      <img src={material.imageUrl4} />
                      <h4>{material.itemName4}</h4>
                    </ExternalLink>
                  </div>
                
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
