const featuresList = [
  {
    icon: "images/portfolio-svgrepo-com.svg",
    title: "Portfolio Analyzer",
    // description:
    //   "AI-driven stock portfolio insights instantly.",
    link: "portfolio.html",
  },

  {
    icon: "images/risk-assessment-svgrepo-com.svg",
    title: "Risk Supervisor",
    // description:
    //   "Real-time risk assessment based on severity and duration.",
    link: "risk.html",
  },

  {
    icon: "images/tax-svgrepo-com.svg",
    title: "Tax Assistant",
    // description:
    //   "Real-time tax assessment based on income and duration.",
    link: "portfolio.html",
  },

  {
    icon: "images/market-news-newspaper-svgrepo-com.svg",
    title: "Market Updates",
    // description:
    //   "Fast, AI-powered Correct   real-time stock and Precise IPO updates.",
    link: "portfolio.html",
  },

  {
    icon: "images/currency-exchange-svgrepo-com.svg",
    title: "Currency Exchanger",
    // description:
    //   "Fast and real-time currency exchange calculator for accurate conversions.",
    link: "Currency.html",
  },

  // {
  //   icon: "images/file-icon.svg",
  //   title: "File Attachments",
  //   description:
  //     "Attach files to tasks for seamless collaboration and easy access.",
  //   link: "portfolio.html",
  // },
];

const testimonialsList = [
  {
    review:
      "Since I started using the Stockoverflow Website, my Profit has raise up. The Risk Assesment feature is very useful. Highly recommended!",
    image: "images/testimonial1.png",
    name: "John Smith",
    designation: "Groww, CEO",
  },
  {
    review:
      "This Website has completely changed the way I Use to work with the stocks. The Portfolio analyzer Feature gives the accurate graph which is vey useful. I can't imagine my Portfolio without it!",
    image: "images/testimonial2.png",
    name: "Sarah Johnson",
    designation: "Zerodha, CEO",
  },
  {
    review:
      "I've tried several Websites like it, but this one takes the cake. The Tax assistant and the Currency Exchanger Feature is one eof the best in it",
    image: "images/testimonial3.png",
    name: "Emily Davis",
    designation: "Upstocks , CEO",
  },
];

const plans = [
  {
    name: "Krish Sandhu",
    features: [
      "contributions",
    ],
    price: "",
    link: "https://www.linkedin.com/in/krish-sandhu-6778a2229/",
  },

  {
    name: "Arnav Bhardwaj",
    features: [
      "contributions",
    ],
    price: "",
    link: "https://www.linkedin.com/in/arnav-bhardwaj-448a21316/",
  },

  {
    name: "Shreya Yadav",
    features: [
      "contributions",
    ],
    price: "",
    link: "https://www.linkedin.com/in/shreya-yadav-918b01323/",
  },

  {
    name: "Ayush Pandey",
    features: [
      "contributions",
    ],
    price: "",
    link: "https://www.linkedin.com/in/ayush-pandey-9a3a4a2ba/",
  },
];

const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector(
  "#testimonials .testimonial-card"
);
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const pricingContent = document.querySelector("#pricing .content");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let currentTestimonialIndex = 0;

const displayFeatures = () => {
  featuresList.forEach((f) => {
    const html = `
      
      <a href="${f.link}">
      <div class="icon">
        <img src="${f.icon}" alt="img" height="65px" width="65px" />
      </div>
      <h3>${f.title}</h3>
      </a>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};

displayFeatures();

const displayTestimonial = () => {
  const html = `<span class="quote-icon">
  <img src="images/quote-icon.svg" alt="" />
</span>

<p class="review">
 ${testimonialsList[currentTestimonialIndex].review}
</p>

<div class="reviewer-info">
  <div class="image">
    <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
  </div>

  <div class="details">
    <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
    <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
  </div>
</div>`;

  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

nextBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonialsList.length) {
      currentTestimonialIndex = 0;
    }
    displayTestimonial();
  }, 200);
});

prevBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonialsList.length - 1;
    }
    displayTestimonial();
  }, 200);
});

const displayPricing = () => {
  plans.forEach((p) => {
    const featuresHTML = p.features
      .map(
        (f) =>
          `<li><span class='icon'><img src='images/check-icon.svg'/></span>${f}</li>`
      )
      .join("");

    const html = `<h4 class="plan-name">${p.name}</h4>
    <ul class="plan-features">
      ${featuresHTML}
    </ul>
    <div class="plan-price">${p.price}</div>
    <a href="${p.link}" class="btn">LinkedIn</a>`;

    const plan = document.createElement("div");
    plan.classList.add("plan");
    plan.innerHTML = html;

    pricingContent.appendChild(plan);
  });
};

displayPricing();

menuIcon.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 60;
      window.scrollTo({ top: offset });
    }

    mobileNavMenu.classList.remove("active");
  });
});
