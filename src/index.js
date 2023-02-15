import './index.scss';
import Header from './Header';
import Main from './Main';

const root = document.getElementById('root');
root.append(Header);
root.append(Main);

const burger = document.querySelector("#burger");
const burgerItems = document.querySelector(".burger__items");
const popupItems = document.querySelectorAll(".popup__item");
const popup = document.querySelector("#popup");
const body = document.body;

// Burger menu
burger.addEventListener("click", handle);

popupItems.forEach(element => {
  element.addEventListener("click", handle);
});

body.addEventListener("click", (event) => {
  if (!event.target.classList.contains("burger__items") && !event.target.classList.contains("burger__bar") && popup.classList.contains("open")) {
    handle();
  }
})

function handle() {
  popup.classList.toggle("open");
  burgerItems.classList.toggle("active");
  body.classList.toggle("noscroll");
}