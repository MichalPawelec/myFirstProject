var showSubmenu = document.querySelector(".nav-menu li:first-of-type");
var submenu = document.querySelector(".nav-subMenu");
var sumbmenuArrow = document.querySelector(".nav-subMenu::before");

showSubmenu.addEventListener("mouseover", function () {
    submenu.classList.add("visible");
    sumbmenuArrow.classList.add("visible");
});

showSubmenu.addEventListener("mouseout", function () {
    submenu.classList.remove("visible");
    sumbmenuArrow.classList.add("visible");
});


var nextPicture = document.getElementById("nextPicture");
var prevPicture = document.getElementById("prevPicture");

var allImg = document.querySelectorAll(".sliderImages li");
var index = 0;

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
var chairClair = document.querySelector(".chairClair");
var chairMargarita = document.querySelector(".chairMargarita");
var chairBackground = document.querySelector(".chairBackground");

chairClair.addEventListener("mouseover", function() {
    chairBackground.classList.add("hideChairBackground");
});
chairClair.addEventListener("mouseout", function() {
    chairBackground.classList.remove("hideChairBackground");
});
chairMargarita.addEventListener("mouseover", function() {
    chairMargarita.lastElementChild.classList.add("hideChairBackground");
});
chairMargarita.addEventListener("mouseout", function() {
    chairMargarita.lastElementChild.classList.remove("hideChairBackground");
});

var arrowChairType = document.querySelector(".listArrowChairType");
var listChairType = document.querySelector(".listChairType");

var arrowChairColor = document.querySelector(".listArrowChairColor");
var listChairColor = document.querySelector(".listChairColor");

var arrowChairMaterial  = document.querySelector(".listArrowChairMaterial");
var listChairMaterial = document.querySelector(".listChairMaterial");

var summaryPanelLeft = document.querySelector(".summary-LeftSide");
var summaryPanelRight = document.querySelector(".summary-RightSide");

var chosenChairType = document.querySelectorAll(".chosenChairType");
var chosenChairColor = document.querySelectorAll(".chosenChairColor");
var chosenChairMaterial = document.querySelectorAll(".chosenChairMaterial");

var chairType = summaryPanelLeft.querySelector(".chairType");
var chairColor = summaryPanelLeft.querySelector(".chairColor");
var chairMaterial = summaryPanelLeft.querySelector(".chairMaterial");
var transport = summaryPanelLeft.querySelector(".transport");

var chairTypePrice = summaryPanelRight.querySelector(".chairTypePrice");
var chairColorPrice = summaryPanelRight.querySelector(".chairColorPrice");
var chairMaterialPrice = summaryPanelRight.querySelector(".chairMaterialPrice");
var transportPrice = summaryPanelRight.querySelector(".transportPrice");
var totalPrice = document.querySelector(".totalPrice");

var summaryChairPrice = 0;
var summaryColorPrice = 0;
var summaryMaterialPrice = 0;
var summaryTransportPrice = 0;

var form = document.querySelector(".form");
var checkbox = form.querySelector(".checkbox");
var checkboxInput = form.querySelector("input[type=checkbox]");

arrowChairType.addEventListener("click", function() {
    listChairType.classList.toggle("visible");
    for (var i = 0; i < listChairType.children.length; i++) {
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
    for (var i = 0; i < listChairColor.children.length; i++) {
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
    for (var i = 0; i < listChairMaterial.children.length; i++) {
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