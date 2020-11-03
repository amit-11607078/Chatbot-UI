window.addEventListener("load", (event) => {
  document.getElementsByClassName("div1")[0].style.display = "block";

  setTimeout(() => {
    document.getElementsByClassName("div2")[0].style.display = "block";
  }, 500);
  setTimeout(() => {
    document.getElementsByClassName("top-text")[0].style.display = "block";
    document.getElementsByTagName("h2")[0].style.display = "block";
    document.getElementsByTagName("h3")[0].style.display = "block";
    document.getElementsByClassName("cir")[0].style.display = "block";
  }, 2500);
  setTimeout(() => {
    document.getElementsByClassName("4")[0].style.display = "block";
    document.getElementsByClassName("4")[1].style.display = "block";
    document.getElementsByClassName("4")[2].style.display = "block";
  }, 4000);
  setTimeout(() => {
    document.getElementsByClassName("text-div1")[0].style.display = "block";
  }, 6000);
  setTimeout(() => {
    document.getElementsByClassName("text-div2")[0].style.display = "block";
  }, 8000);

  setTimeout(() => {
    document.getElementsByClassName("text-div3")[0].style.display = "block";
  }, 10000);
  setTimeout(() => {
    document.getElementsByClassName("text-div4")[0].style.display = "block";
  }, 12000);
  setTimeout(() => {
    document.getElementsByClassName("text-div5")[0].style.display = "block";
  }, 14000);
});
