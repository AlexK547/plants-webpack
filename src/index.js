import './index.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const root = document.getElementById('root');
root.append(Header);
root.append(Main);
root.append(Footer);

const burger = document.querySelector("#burger");
const burgerItems = document.querySelector(".burger__items");
const popupItems = document.querySelectorAll(".popup__item");
const popup = document.querySelector("#popup");
const body = document.body;

const btnGardens = document.getElementById("btn-gardens");
const btnLawn = document.getElementById("btn-lawn");
const btnPlanting = document.getElementById("btn-planting");
const buttonsService = document.querySelectorAll(".service__btn");
const cardsItems = document.querySelectorAll(".cards__item");

const pricesSection = document.querySelector(".prices");
const prices = document.querySelectorAll(".options__item");
const pricesBottom = document.querySelectorAll(".options__item-bottom");
const pricesArrow = document.querySelectorAll(".options__item-head-arrow");
const pricesBlock = document.querySelector(".options__items");

const contactsCities = document.querySelector(".change-cities");
const contactsHead = document.querySelector(".change-cities__head");
const contactsHeadTitle = document.querySelector(".change-cities__head-title");
const contactsHeadArrow = document.querySelector(".change-cities__head-arrow");
const contactsImg = document.querySelector(".contacts__img");
const citiesBottom = document.querySelector(".change-cities__bottom");
const citiesChange = document.querySelectorAll(".change-cities__item");
const cityCard = document.querySelector(".city");
const cityCards = document.querySelectorAll(".city__item");

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

// Buttons blur
btnGardens.addEventListener("click", () => {
  if (btnLawn.classList.contains("service__btn_active") && btnPlanting.classList.contains("service__btn_active")) {
    btnGardens.classList.add("service__btn_active");
    btnLawn.classList.remove("service__btn_active");
    btnPlanting.classList.remove("service__btn_active");
    checkCards();
  } else {
    btnGardens.classList.toggle("service__btn_active");
    checkCards();
  }
});

btnLawn.addEventListener("click", () => {
  if (btnGardens.classList.contains("service__btn_active") && btnPlanting.classList.contains("service__btn_active")) {
    btnGardens.classList.remove("service__btn_active");
    btnLawn.classList.add("service__btn_active");
    btnPlanting.classList.remove("service__btn_active");
    checkCards();
  } else {
    btnLawn.classList.toggle("service__btn_active");
    checkCards();
  }
});

btnPlanting.addEventListener("click", () => {
  if (btnGardens.classList.contains("service__btn_active") && btnLawn.classList.contains("service__btn_active")) {
    btnGardens.classList.remove("service__btn_active");
    btnLawn.classList.remove("service__btn_active");
    btnPlanting.classList.add("service__btn_active");
    checkCards();
  } else {
    btnPlanting.classList.toggle("service__btn_active");
    checkCards();
  }
});

function checkCards() {
  let countNoActiveButtons = 0;
  buttonsService.forEach((btn, index) => {
    if (btn.classList.contains("service__btn_active")) {
      switch (index) {
        case 0: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("garden")) {
              card.classList.remove("cards__item_blur");
            }
          });
          break;
        }
        case 1: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("lawn")) {
              card.classList.remove("cards__item_blur");
            }
          });
          break;
        }
        case 2: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("planting")) {
              card.classList.remove("cards__item_blur");
            }
          });
          break;
        }
      }
    } else {
      countNoActiveButtons++;
      switch (index) {
        case 0: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("garden")) {
              card.classList.add("cards__item_blur");
            }
          });
          break;
        }
        case 1: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("lawn")) {
              card.classList.add("cards__item_blur");
            }
          });
          break;
        }
        case 2: {
          cardsItems.forEach((card) => {
            if (card.innerHTML.toLowerCase().includes("planting")) {
              card.classList.add("cards__item_blur");
            }
          });
          break;
        }
      }
    }
  });
  if (countNoActiveButtons === 3) {
    cardsItems.forEach((card) => {
      card.classList.remove("cards__item_blur");
    });
  }
}

// Prices

prices.forEach( (item, index) => {
  item.addEventListener("click", (event) => {
    if (item.classList.contains("options__item_active") && !event.target.classList.contains("options__item-btn")) {
      pricesSection.classList.remove("prices_active");
      pricesBlock.classList.remove("options__items_active");
      pricesBottom[index].classList.remove("options__item-bottom_active");
      pricesArrow[index].classList.remove("options__item-head-arrow_active");
      item.classList.remove("options__item_active");
    } else {
      prices.forEach( (elem, indexElem) => {
        pricesSection.classList.remove("prices_active");
        pricesBlock.classList.remove("options__items_active");
        pricesBottom[indexElem].classList.remove("options__item-bottom_active");
        pricesArrow[indexElem].classList.remove("options__item-head-arrow_active");
        elem.classList.remove("options__item_active");
      });
      pricesSection.classList.add("prices_active");
      pricesBlock.classList.add("options__items_active");
      pricesBottom[index].classList.add("options__item-bottom_active");
      pricesArrow[index].classList.add("options__item-head-arrow_active");
      item.classList.add("options__item_active");
    }

    // pricesSection.classList.toggle("prices_active");
    // pricesBlock.classList.toggle("options__items_active");
    // pricesBottom[index].classList.toggle("options__item-bottom_active");
  });
});

// Contacts

contactsHead.addEventListener("click", () => {
  cityCard.classList.remove("city_active");
  cityCards.forEach(item => {
    item.classList.remove("city__item_active");
  });

  contactsCities.classList.toggle("change-cities_active");
  contactsHeadArrow.classList.toggle("change-cities__head-arrow_active");
  citiesBottom.classList.toggle("change-cities__bottom_active");
  if (contactsHeadTitle.innerHTML === "City") {
    contactsHead.classList.toggle("change-cities__head_active");
    contactsHeadTitle.classList.toggle("change-cities__head-title_active");
    contactsImg.classList.toggle("contacts__img_active");
  } else {
    contactsHead.classList.add("change-cities__head_active");
    contactsHeadTitle.classList.add("change-cities__head-title_active");
    if (citiesBottom.classList.contains("change-cities__bottom_active")) {
      cityCard.classList.remove("city_active");
    } else {
      cityCard.classList.add("city_active");
      if (contactsHeadTitle.innerHTML.includes("Canandaigua")) cityCards[0].classList.add("city__item_active");
      if (contactsHeadTitle.innerHTML.includes("New York City")) cityCards[1].classList.add("city__item_active");
      if (contactsHeadTitle.innerHTML.includes("Yonkers")) cityCards[2].classList.add("city__item_active");
      if (contactsHeadTitle.innerHTML.includes("Sherrill")) cityCards[3].classList.add("city__item_active");
    }
  }
});

citiesChange.forEach((city, index) => {
  city.addEventListener('click', (event) => {
    contactsCities.classList.toggle("change-cities_active");
    contactsHeadTitle.innerHTML = event.target.innerHTML;
    if (contactsHeadTitle.innerHTML === "City") {
      contactsHead.classList.toggle("change-cities__head_active");
      contactsHeadTitle.classList.toggle("change-cities__head-title_active");
    } else {
      contactsHead.classList.add("change-cities__head_active");
      contactsHeadTitle.classList.add("change-cities__head-title_active");
      cityCard.classList.add("city_active");
      cityCards.forEach(item => {
        item.classList.remove("city__item_active");
      });
      cityCards[index].classList.add("city__item_active");
      contactsImg.classList.add("contacts__img_active");
    }
    contactsHeadArrow.classList.toggle("change-cities__head-arrow_active");
    citiesBottom.classList.toggle("change-cities__bottom_active");
    
  });
});