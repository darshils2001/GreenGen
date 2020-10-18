chrome.runtime.onMessage.addListener(function (request) {
    const queryString = window.location.search;
    //alert(queryString);
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('k');
    alert(product);
})