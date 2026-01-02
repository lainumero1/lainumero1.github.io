let sidebarStatus = false
const sidebar = document.querySelector('#sidebar')
const sideButton = document.querySelector('#side-button');
const identity = document.getElementsByClassName('identity')
let currentIdentity = 0

document.addEventListener('click', e => {
    if (sideButton.contains(e.target)) {
        if (sidebarStatus === false) {
            if (window.innerWidth <= 575) {
                document.getElementById("sidebar").style.height = "35%"
                document.getElementById("sidebar").style.width = "100%"
            }
            else {
                document.getElementById("sidebar").style.height = "100%"
                document.getElementById("sidebar").style.width = "250px"
                document.getElementById("main").style.marginLeft = "250px"
                document.getElementById("topbar").style.marginLeft = "250px"
            }
            sidebarStatus = true
        }
        else {
            if (window.innerWidth <= 575) {
                document.getElementById("sidebar").style.height = "0"
            }
            else {
                document.getElementById("sidebar").style.width = "0"
                document.getElementById("main").style.marginLeft = "0"
                document.getElementById("topbar").style.marginLeft = "0"
            }
            sidebarStatus = false
        }
    }
    else if (!sidebar.contains(e.target)) {
        if (sidebarStatus === true) {
            if (window.innerWidth <= 575) {
                document.getElementById("sidebar").style.height = "0"
            }
            else {
                document.getElementById("sidebar").style.width = "0"
                document.getElementById("main").style.marginLeft = "0"
                document.getElementById("topbar").style.marginLeft = "0"
            }
            sidebarStatus = false
        }
    }
})

function fluidIdentity() {
    identity[currentIdentity].style.display = "inline"
    for (let i = 0; i < identity.length; i++) {
        if (i !== currentIdentity) {
            identity[i].style.display = "none"
        }
    }
    if (currentIdentity < identity.length-1) {
        currentIdentity = currentIdentity + 1
    }
    else {
        currentIdentity = 0
    }
}
document.addEventListener("DOMContentLoaded", fluidIdentity)
setInterval(fluidIdentity, 2000);