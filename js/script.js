const showSubmenu = document.querySelector(".nav-menu li:first-of-type");
const submenu = document.querySelector(".nav-subMenu");
const sumbmenuArrow = document.querySelector(".nav-subMenu::before");

showSubmenu.addEventListener("mouseover", function () {
    submenu.classList.add("visible");
    sumbmenuArrow.classList.add("visible");
});

showSubmenu.addEventListener("mouseout", function () {
    submenu.classList.remove("visible");
    sumbmenuArrow.classList.remove("visible");
});


const nextPicture = document.getElementById("nextPicture");
const prevPicture = document.getElementById("prevPicture");

const allImg = document.querySelectorAll(".sliderImages li");
let index = 0;

allImg[index].classList.add("visible");

nextPicture.addEventListener("click", function () {
    allImg[index].classList.remove("visible");
    if (index >= allImg.length - 1) {
        index = 0;
    }
    else {
        index ++;
    }
    allImg[index].classList.add("visible");
});


prevPicture.addEventListener("click", function () {
    allImg[index].classList.remove("visible");
    if (index <= 0) {
        index = allImg.length - 1;
    }
    else {
        index --;
    }
    allImg[index].classList.add("visible")
});

//po najechaniu myszką chowa się przezroczysty pasek
const chairClairImg = document.querySelector(".chairClair img");
const chairClairBackground = document.querySelector(".chairClair .chairBackground");
const chairMargaritaImg = document.querySelector(".chairMargarita img");
const chairMargaritaBackground = document.querySelector(".chairMargarita .chairBackground");

chairClairImg.addEventListener("mouseover", function() {
    chairClairBackground.classList.add("hideChairBackground");
});
chairClairImg.addEventListener("mouseout", function() {
    chairClairBackground.classList.remove("hideChairBackground");
});
chairMargaritaImg.addEventListener("mouseover", function() {
    chairMargaritaBackground.classList.add("hideChairBackground");
});
chairMargaritaImg.addEventListener("mouseout", function() {
    chairMargaritaBackground.classList.remove("hideChairBackground");
});

const arrowChairType = document.querySelector(".listArrowChairType");
const listChairType = document.querySelector(".listChairType");

const arrowChairColor = document.querySelector(".listArrowChairColor");
const listChairColor = document.querySelector(".listChairColor");

const arrowChairMaterial  = document.querySelector(".listArrowChairMaterial");
const listChairMaterial = document.querySelector(".listChairMaterial");

const summaryPanelLeft = document.querySelector(".summary-LeftSide");
const summaryPanelRight = document.querySelector(".summary-RightSide");

const chosenChairType = document.querySelectorAll(".chosenChairType");
const chosenChairColor = document.querySelectorAll(".chosenChairColor");
const chosenChairMaterial = document.querySelectorAll(".chosenChairMaterial");

const chairType = summaryPanelLeft.querySelector(".chairType");
const chairColor = summaryPanelLeft.querySelector(".chairColor");
const chairMaterial = summaryPanelLeft.querySelector(".chairMaterial");
const transport = summaryPanelLeft.querySelector(".transport");

const chairTypePrice = summaryPanelRight.querySelector(".chairTypePrice");
const chairColorPrice = summaryPanelRight.querySelector(".chairColorPrice");
const chairMaterialPrice = summaryPanelRight.querySelector(".chairMaterialPrice");
const transportPrice = summaryPanelRight.querySelector(".transportPrice");
const totalPrice = document.querySelector(".totalPrice");

let summaryChairPrice = 0;
let summaryColorPrice = 0;
let summaryMaterialPrice = 0;
let summaryTransportPrice = 0;

const form = document.querySelector(".form");
const checkbox = form.querySelector(".checkbox");
const checkboxInput = form.querySelector("input[type=checkbox]");

arrowChairType.addEventListener("click", function() {
    listChairType.classList.toggle("visible");
    for (let i = 0; i < listChairType.children.length; i++) {
        listChairType.children[i].addEventListener("click", function() {
            chosenChairType.innerText = this.innerText;
            chairType.innerText = this.innerText;
            chairTypePrice.innerText = this.dataset.chairTypePrice;
            summaryChairPrice = 0;
            summaryChairPrice = summaryChairPrice + parseInt(this.dataset.chairTypePrice);
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
            listChairType.classList.remove("visible");
        });
    }
});

arrowChairColor.addEventListener("click", function() {
    listChairColor.classList.toggle("visible");
    for (let i = 0; i < listChairColor.children.length; i++) {
        listChairColor.children[i].addEventListener("click", function() {
            chosenChairColor.innerHTML = this.innerHTML;
            chairColor.innerHTML = this.innerHTML;
            chairColorPrice.innerHTML = this.dataset.colorPrice;
            summaryColorPrice = 0;
            summaryColorPrice = summaryColorPrice + parseInt(this.dataset.colorPrice);
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
            listChairColor.classList.remove("visible");
        });
    }
});

arrowChairMaterial.addEventListener("click", function() {
    listChairMaterial.classList.toggle("visible");
    for (let i = 0; i < listChairMaterial.children.length; i++) {
        listChairMaterial.children[i].addEventListener("click", function() {
            chosenChairMaterial.innerHTML == this.innerHTML;
            chairMaterial.innerHTML = this.innerHTML;
            chairMaterialPrice.innerHTML = this.dataset.materialPrice;
            summaryMaterialPrice = 0;
            summaryMaterialPrice = summaryMaterialPrice + parseInt(this.dataset.materialPrice);
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
            listChairMaterial.classList.toggle("visible");
        });
    }
});

checkbox.addEventListener("click", function() {
    if (checkboxInput.checked) {
        transport.innerHTML = "Transport";
        transportPrice.innerHTML = checkboxInput.dataset.transportPrice;
        summaryTransportPrice = 0;
        summaryTransportPrice = summaryTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
        totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice + summaryTransportPrice;
    } else {
        transport.innerHTML = "";
        transportPrice.innerHTML = "";
        summaryTransportPrice = 0;
        totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryMaterialPrice;
    }
});