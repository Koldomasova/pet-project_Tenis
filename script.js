// slider

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".services-body-block");
  const arrowLeft = document.querySelectorAll(".arrow-left");
  const arrowRight = document.querySelectorAll(".arrow-right");
  let indexSlide = 0;

  const showSlide = (index) => {
    sliders.forEach((sliders, i) => {
      sliders.classList.toggle("active", i === index);
    });
  };
  const rightSlide = () => {
    indexSlide = (indexSlide + 1) % sliders.length;
    showSlide(indexSlide);
  };
  const LeftSlide = () => {
    indexSlide = (indexSlide - 1 + sliders.length) % sliders.length;
    showSlide(indexSlide);
  };

  arrowRight.forEach((btn) => {
    btn.addEventListener("click", () => {
      rightSlide();
    });
  });
  arrowLeft.forEach((btn) => {
    btn.addEventListener("click", () => {
      LeftSlide();
    });
  });
  showSlide(indexSlide);
});
//  openAccordion
const accordion = this.document.querySelectorAll(".price-accordion-button");
    accordion.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionItem = this.parentElement;
        const isOpen = accordionItem.classList.contains("openAccordion");

        document.querySelectorAll(".openAccordion").forEach((item) => {
          item.classList.remove("openAccordion");
        });
        if (!isOpen) {
          accordionItem.classList.add("openAccordion");
        }
      });
    });

    // header menu
    document.getElementById('header-menu-burger').addEventListener("click", function(){
      document.querySelector("header").classList.toggle("openMenu");
    })

    // slider-trainers
    // ?

 const scrollSliderListener = document.getElementById("trainers-body-sldr");
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    // Функция для прокрутки вправо
    function scrollRight() {
      scrollSliderListener.scrollLeft += scrollSliderListener.offsetWidth;
    }

    // Функция для прокрутки влево
    function scrollLeft() {
      scrollSliderListener.scrollLeft -= scrollSliderListener.offsetWidth;
    }

    //кнопки
    arrowRight.addEventListener('click', scrollRight);
    arrowLeft.addEventListener('click', scrollLeft);

    // полоса прокрутки
    scrollSliderListener.style.msOverflowStyle = 'none';  // IE and Edge
    scrollSliderListener.style.scrollbarWidth = 'none';  // Firefox