var btnTranslate = document.querySelector("#app-btn-translate");
var appInput = document.querySelector("#app-input");
var appOutput = document.querySelector("#app-output");

//getting server API
var serverURL = "https://api.funtranslations.com/translate/minion.json";

//funnction to get translated url from server
function getTranslationURL(input){
    return serverURL + "?" +"text=" + input;
}
//error hndling
function errorHandler(error){
    alert("Something Went down");
}
//function when click happens
function clickHandler(){
     var inputText = appInput.value; 

     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         appOutput.innerText = translatedText;
     })
     .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);

