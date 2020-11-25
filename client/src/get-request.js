const axios = require('axios')
 ////////////////////////////////////// HTTP GET REQUEST ////////////////////////////////
axios
    .get('http://localhost:3000/todos')
    .then((res) => {
        // handle success
        console.log(res.data.message);
        console.log("get it!");
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log("used axios!");
    })