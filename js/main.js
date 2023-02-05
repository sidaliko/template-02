// Start button to scroll to up
let div = document.querySelector(".scroll");

let btn = document.createElement("button");
btn.className = "btnScroll";
btn.innerHTML = "^";
btn.style.display = "none";

window.onscroll = function () {
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  document.body.prepend(btn);

  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    //window.scrollTo(0, 0);
  };

  // End button to scroll to up

  // Start bar of scrolling

  let y = window.scrollY;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  div.style.width = `${y * (100 / height)}%`;
};

// End bar of scrolling

// Start search

let i = document.querySelector(".fa-magnifying-glass");
i.style.cursor = "pointer";
i.addEventListener("click", search);

let input = document.createElement("input");

function search() {
  input.setAttribute("type", "text");
  input.placeholder = "Search here";
  input.style.cssText =
    "width: 190px; position: absolute; right: 0px; top: 58px; z-index: 2;color:black";
  i.append(input);
  input.focus();
}

input.addEventListener("blur", (e) => {
  input.value = "";
  input.remove();
});

input.addEventListener("keyup", (e) => {
  let all = document.querySelector("body").innerText;
  all = all.toLowerCase();
  reg = /\n/g;
  all = all.replace(reg, " ").split(" ");

  all = all.filter(function (item) {
    return item.includes(e.target.value);
  });
  console.log(`There Are ${all.length} item Found`);
});

// End search

//Start Landing

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// End Landing

//Start Portfolio

let divImg = document.querySelectorAll(".two");
let butt = document.querySelector(".button button");

butt.addEventListener("click", () => {
  if (butt.textContent === "More") {
    for (let i = 0; i < divImg.length; i++) {
      divImg[i].style.display = "block";
    }
    butt.textContent = "Less";
  } else if (butt.textContent === "Less") {
    for (let i = 0; i < divImg.length; i++) {
      console.log("none");
      divImg[i].style.display = "none";
    }
    butt.textContent = "More";
  }
});

// End Portfolio
// Start Pricing
let cont = document.querySelector(".contact button");
let inp = document.querySelector("#contact");
console.log(inp);
cont.addEventListener("click", () => {
  inp.focus();
});

// End Pricing
