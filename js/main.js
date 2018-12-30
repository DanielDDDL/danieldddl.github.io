function start() {
    var userLang = navigator.language || navigator.userLanguage;
    changeLanguage(userLang);
}

function changeLanguage(selectedLanguage) {

    if (selectedLanguage === "pt-BR") {

        selectElement("portuguese-selector");
        unselectElement("english-selector");

        hideElement("english");
        showElement("portuguese");

    } else {
        //english and every language other than portuguese
        selectElement("english-selector");
        unselectElement("portuguese-selector");

        showElement("english");
        hideElement("portuguese");
    }
}

function hideElement (elementId) {
    var element = document.getElementById(elementId);
    element.classList.remove("show");
    element.classList.add("hide");
}

function showElement (elementId) {
    var element = document.getElementById(elementId);
    element.classList.remove("hide");
    element.classList.add("show");
}

function selectElement (elementId) {
    var element = document.getElementById(elementId);
    element.classList.add("selected-language");
}

function unselectElement (elementId) {
    var element = document.getElementById(elementId);
    element.classList.remove("selected-language");
}