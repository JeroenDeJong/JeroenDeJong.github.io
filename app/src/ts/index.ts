let btn = document.getElementById("btn");

btn.onmousemove = function (e: any) {
  let rect = e.target.getBoundingClientRect();

  let x = e.clientX - rect.left;
  btn.style.setProperty("--x", x + "px");
};
  