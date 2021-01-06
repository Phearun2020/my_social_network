//const axios = require('axios');

var btnSave = document.getElementById("btnSavePost");
console.log(btnSave);
// function clickSavePost(){
//     alert("clicked");
// }
btnSave.addEventListener('click', savePost);

function savePost(){
    axios.post('http://localhost:3000/post', {
        text: "this is a new post",
        status: "published"
    }).then(result => {
        alert("success");
    }).catch(err => {
        console.log(err);
    });
}