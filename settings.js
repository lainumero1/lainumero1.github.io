// let themeDark = false
// import {themeDark} from "./theme_module.js";

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches){
//     darkMode()    
//     localStorage.setItem("scheme", "dark")
//     // themeDark = true
// }
// else{
//     localStorage.setItem("scheme", "light")
//     lightMode()
// }


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("scheme") === "dark") {
        // darkMode()
        document.getElementById("light-dark").checked = true
    }
    else{
        // lightMode()
        document.getElementById("light-dark").checked = false
    }
})

document.querySelector("input[name=light-dark]").addEventListener("change", function() {
        if (this.checked) {
            darkMode()
        }
        else{
            lightMode()
        }
})

function darkMode() {
    localStorage.removeItem("scheme")
    localStorage.setItem("scheme", "dark")
    document.getElementById('main').style.backgroundColor = "#323232"
    document.querySelector('html').style.backgroundColor = "#323232"
    let text = document.querySelectorAll("label")
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#818181"
    }
    document.getElementById("search-button").style.color = "black"
    // document.getElementsByClassName('title').style.color = "#818181"
}

function lightMode() {
    localStorage.removeItem("scheme")
    localStorage.setItem("scheme", "light")
    document.querySelector('html').style.backgroundColor = "white"
    document.getElementById('main').style.backgroundColor = "white"
    let text = document.querySelectorAll("label")
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#818181"
    }
}

