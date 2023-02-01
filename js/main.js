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

  let y = window.scrollY;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  div.style.width = `${y * (100 / height)}%`;
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  //window.scrollTo(0, 0);
};
