if ("scheme" in localStorage) {
    let scheme = localStorage.getItem("scheme")
    if (scheme === "dark") {
        darkMode()
    }
    else {
        lightMode()
    }
}
else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches){
        darkMode()
    }
    else{
        lightMode()
    }
}


function darkMode() {
    localStorage.setItem("scheme", "dark")
    document.querySelector('input[type="text"]').style.backgroundColor = "#323232"
    // document.querySelector('input[type="text"]').style.color = "#bbbbbb"
    document.querySelector('html').style.backgroundColor = "#323232"
    document.getElementById('main').style.backgroundColor = "#323232"
    document.getElementById('main').style.color = "#bbbbbb"
    let text = document.querySelectorAll("label")
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#818181"
    }
}

function lightMode() {
    localStorage.setItem("scheme", "light")
    document.querySelector('input[type="text"]').style.backgroundColor = "#828282"
    // document.querySelector('input[type="text"]').style.color = "#323232"
    document.querySelector('html').style.backgroundColor = "white"
    document.getElementById('main').style.backgroundColor = "white"
    let text = document.querySelectorAll("label")
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#818181"
    }
}
