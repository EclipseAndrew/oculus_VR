"use strict";



const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tab__content-item");

tabItem.forEach((e) => {
   e.addEventListener("click", (evt) => {
      const tabTarget = evt.currentTarget;
      const button = tabTarget.dataset.button;

      tabItem.forEach((item) => {
         item.classList.remove("tabs__btn-item--active");
      });

      tabContent.forEach((item) => {
         item.classList.remove("tabs__content-item--active");
      });

      tabTarget.classList.add("tabs__btn-item--active");
      document
         .querySelector(`#${button}`)
         .classList.add("tabs__content-item--active");
   });
});

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('menu--active')
})