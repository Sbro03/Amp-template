const hc = document.getElementsByClassName("hero_container");
var headerArr = document.getElementsByClassName("header_container");
hc[0].style.marginTop = JSON.stringify(headerArr[0].offsetHeight) + "px"

var flag = true;
const hamburger = document.getElementById("button-menu")
const sidebar = document.getElementById("menu")

function HamburgerMenu() {
    hamburger.classList.toggle('opened');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('opened'));

    if (flag) {
        sidebar.style.width = "auto";
        sidebar.style.marginRight = "0px";
        sidebar.style.paddingTop = JSON.stringify(headerArr[0].offsetHeight) + "px";
        sidebar.style.paddingLeft = "25px"
        flag = false;
    } else {
        sidebar.style.marginRight = "-100px";
        sidebar.style.width = "0";
        sidebar.style.paddingLeft = "0";
        flag = true;
    }
}