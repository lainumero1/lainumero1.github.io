let slide = 0
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slide)
})
// setInterval(switchSlide, 2500, 1)

function switchSlide(dir) {
    if (dir > 0){
        slide++
        showSlide(slide)
    }
    else {
        slide--
        showSlide(slide)
    }
}

function showSlide(n) {
    let slides = document.getElementsByClassName("app-slides")
    if (n >= slides.length) {
        slide = 0
    }
    if (n < 0) {
        slide = slides.length-1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slide].style.display = "block"
}
console.log(document.querySelectorAll('.number-text'))
if (window.innerWidth <= 575){
    document.querySelectorAll('.number-text').style.top = '80px';
}

// document.querySelector('#prev-slide').addEventListener("click", () => {
//     showSlide(slide-1)
//     slide--
// })
//
// document.querySelector('#next-slide').onclick(function () {
//     showSlide(slide+1)
//     slide++
// })

// document.querySelector('.side-button').onclick(function () {
//
// })