let sidebarStatus = false
const sidebar = document.querySelector('#sidebar')
const sideButton = document.querySelector('#side-button');

document.addEventListener('click', e => {
    if (sideButton.contains(e.target)) {
        if (sidebarStatus === false) {
            if (window.matchMedia("(max-width=575px)").matches) {
                document.getElementById("sidebar").style.height = "200px"
                // document.getElementById("main").style.marginTop = "250px"
                // document.getElementById("topbar").style.marginTop = "250px"
            }
            else {
                document.getElementById("sidebar").style.width = "250px"
                document.getElementById("main").style.marginLeft = "250px"
                document.getElementById("topbar").style.marginLeft = "250px"
            }
            sidebarStatus = true
        }
        else {
            if (window.matchMedia("(max-width=575px)".matches)) {
                document.getElementById("sidebar").style.height = "0"
                // document.getElementById("main").style.marginTop = "0"
                // document.getElementById("topbar").style.marginTop = "0"
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
            if (window.matchMedia("(max-width=575px)").matches) {
                document.getElementById("sidebar").style.height = "0"
                // document.getElementById("main").style.marginTop = "0"
                // document.getElementById("topbar").style.marginTop = "0"
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