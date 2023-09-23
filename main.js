//typed js intialization

var typed = new Typed("#element", {
  strings: ["Web Design.", " Digital Marketing."],
  typeSpeed: 150,
  backDelay: 1000,
  fadeOut: false,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
});

// testimonials selectors
const testimonialContent = document.querySelector(".testimonials-text");
const testimonialClientName = document.querySelector(".testimonials-client");
const testimonialImage = document.querySelector(".testimonials-img");

const testimonialsNextButton = document.querySelector(".testimoanials-next");
const testimonialsPrevButton = document.querySelector(".testimoanials-prev");

const testimonialsList = [
  {
    name: "David",
    message:
      "The UI/UX improvements they made to our app were game-changing. It's now much more intuitive and engaging for our users. Working with them was a breeze, and we couldn't be happier with the outcome",
    url: "/img/1.jpg",
  },
  {
    name: "Mary ",
    message:
      "The website they designed for us is clean, user-friendly, and visually stunning. It's made a huge difference in our online presence, and we've seen a significant increase in traffic and conversions. Highly recommended!",
    url: "/img/2.jpg",
  },

  {
    name: "Alex",
    message:
      "Their digital marketing strategies are spot on. They helped us reach our target audience effectively, and our online sales have skyrocketed. Their team is responsive and knowledgeable. Great results!",
    url: "/img/3.jpg",
  },
];

let i = 0;

const updateTestimonials = () => {
  testimonialClientName.textContent = testimonialsList[i].name;
  testimonialContent.textContent = testimonialsList[i].message;
  testimonialImage.src = testimonialsList[i].url;
};

updateTestimonials();

testimonialsNextButton.addEventListener("click", function () {
  if (i < testimonialsList.length - 1) {
    i = i + 1;
    updateTestimonials();
  }
  return;
});

testimonialsPrevButton.addEventListener("click", function () {
  if (i > 0) {
    i = i - 1;
    updateTestimonials();
  }
  return;
});

//footer dynamic year

const year = document.querySelector(".year");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;
