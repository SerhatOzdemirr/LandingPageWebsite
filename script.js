const dark_button = document.getElementById("dark-button");
const p = document.querySelector(".paragraph-footer");
const p_comment = document.querySelector(".paragraph-comment");
const price = document.querySelector(".price-section");
const features = document.getElementById("ürünözellikleri");
const comments = document.getElementById("yorumlar");
const prices = document.getElementById("fiyatlandırma");
function onChangeDark(){
  document.body.classList.add("dark-mode");
  p.classList.add("white");
  p_comment.classList.add("white");
  price.classList.add("white");
  features.classList.add("bg-darkk");
  comments.classList.add("bg-darkk");
  prices.classList.add("bg-darkk");
}
dark_button.addEventListener("click" , onChangeDark);