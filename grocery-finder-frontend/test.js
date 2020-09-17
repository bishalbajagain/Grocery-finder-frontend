const { rejects } = require('assert');
const axios = require('axios');
const { resolve } = require('path');

const materials_api = "http://localhost:8000/api/user-getMaterials/1940022585";
const items_api = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1013628348561559421&keyword="

var materials;


axios.get(materials_api)
.then(res => {
    materials = res.data.materials;
    console.log(materials);
   materials.slice(0,5).map((element, idx) => {
        console.log(element.name)
        const keyword = encodeURI(element.name);
        axios.get(items_api + keyword)
        .then(res =>{
            console.log(res.headers)
            // const item_json = res.data;
            // return item_json.Items.slice(0,2).map((element, idx) => {
            //     console.log(element.Item.itemName)
            //     console.log(element.Item.mediumImageUrls[0].imageUrl)
            //     console.log(element.Item.itemUrl)
            //     return ({
            //         itemnNme: element.Item.itemName,
            //         imgUrl: element.Item.mediumImageUrls[0].imageUrl,
            //         itemUrl: element.Item.itemUrl
            //     })
            // })
        })
        .catch(err => {
            console.log(err);
        })
    })
}
)
.catch(err => {
    console.log(err);
})


// keyword = encodeURI("カレー"); 
// axios.get(items_api + keyword)
//         .then(res =>{
//             const item = res.data;
//             console.log(item)
//         })
//         .catch(err => {
//             console.log(err);
//         }
//         );