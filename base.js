let sidebarStatus = false
const sidebar = document.querySelector('#sidebar')
const sideButton = document.querySelector('#side-button');
// import { themeDark } from "./theme_module";
//
// if (themeDark === true){
//     darkMode()
//     themeDark = true
// }
// else {
//     lightMode()
//     themeDark = false
// }

// if (window.innerWidth <= 770) {
//     document.getElementById("topbar").css('width', window.innerWidth)
// }

document.addEventListener('click', e => {
    if (sideButton.contains(e.target)) {
        if (sidebarStatus === false) {
            document.getElementById("sidebar").style.width = "250px"
            document.getElementById("main").style.marginLeft = "250px"
            document.getElementById("topbar").style.marginLeft = "250px"
            sidebarStatus = true
        }
        else {
            document.getElementById("sidebar").style.width = "0"
            document.getElementById("main").style.marginLeft = "0"
            document.getElementById("topbar").style.marginLeft = "0"
            sidebarStatus = false
        }
    }
    else if (!sidebar.contains(e.target)) {
        if (sidebarStatus === true) {
            document.getElementById("sidebar").style.width = "0"
            document.getElementById("main").style.marginLeft = "0"
            document.getElementById("topbar").style.marginLeft = "0"
            sidebarStatus = false
        }
    }
})