let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apikey = checkApikey();
function checkApikey(){
    if (!localStorage.getItem("apikey")) {
        window.open("enter-api-key.html","_self");
    }
    return localStorage.getItem("apikey");
};

let apiKey = checkApikey();
