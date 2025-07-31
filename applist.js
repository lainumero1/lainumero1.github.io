let appList = document.getElementsByClassName("list-item")
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("scheme") === "dark") {
        for (let i = 0; i < appList.length; i++) {
            appList[i].style.backgroundColor = "#676767"
        }
    }
    else {
        for (let i = 0; i < appList.length; i++) {
            appList[i].style.backgroundColor = "#bbbbbb"
        }
    }
})