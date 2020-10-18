chrome.runtime.onMessage.addListener(function (request) {
    const queryString = window.location.search;
    //alert(queryString);
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('k');
    //alert(product);

    /*
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    */

    // Connection URL
    

    const LOCAL_URL = "http://localhost:8080";
    fetch(LOCAL_URL + "?search=" + product)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })


    // Use connect method to connect to the Server
    /*
    MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    client.close();
    });
    */

})