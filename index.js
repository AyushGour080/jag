// document.getElementById("left").addEventListener("click", moveLeft);
// document.getElementById("right").addEventListener("click", moveRight);

const scrollableDiv = document.getElementById("slider-content");
const scrollLeftButton = document.getElementById("left");
const scrollRightButton = document.getElementById("right");
scrollableDiv.offsetWidth;
scrollLeftButton.addEventListener("click", () => {
  scrollableDiv.scrollBy({
    left: -scrollableDiv.offsetWidth * 0.349,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  scrollableDiv.scrollBy({
    left: scrollableDiv.offsetWidth * 0.349,
    behavior: "smooth",
  });
});

let cartSize = 0;

function checkCart() {
  if (cartSize != 0) {
    cartSize += 1;
  } else {
  }
}

function openCart() {
  if (document.getElementById("dish").style.display === "flex") cancel();

  document.getElementById("cart").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
}
function addToCart() {}

function closeCart() {
  document.getElementById("cart").style.display = "none";
  document.body.classList.remove("freeze-scroll");
}

function cancel() {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
}

function handleSubmit() {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
}

function handleRequest() {
  if (document.getElementById("cart").style.display === "flex") closeCart();
  document.getElementById("dish").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
}

function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}

// window.onload = function () {
//   const framesContainer = document.getElementById("frames-container");

//   // function for cards generation
//   const cardData = [
//     {
//       name: "Home made pizza",
//       price: 190,
//       rating: 4.7,
//       time: "50-90 min",
//       image: "img/unsplash_MqT0asuoIcU.png",
//     },
//     {
//       name: "Burger Deluxe",
//       price: 150,
//       rating: 4.5,
//       time: "30-60 min",
//       image: "img/unsplash_MqT0asuoIcU.png",
//     },
//     {
//       name: "Pasta Carbonara",
//       price: 210,
//       rating: 4.8,
//       time: "45-70 min",
//       image: "img/unsplash_MqT0asuoIcU.png",
//     },
//     {
//       name: "Vegan Salad",
//       price: 130,
//       rating: 4.2,
//       time: "25-40 min",
//       image: "img/unsplash_MqT0asuoIcU.png",
//     },
//   ];

//   // Generate 4 frames

//   for (let i = 0; i < 3; i++) {
//     const frame = document.createElement("div");
//     frame.className = "frame";

//     for (let j = 0; j < 4; j++) {
//       const cardIndex = j % cardData.length;
//       const card = document.createElement("div");
//       card.className = "card";
//       card.innerHTML = `
//       <div class="card-img-container">
//         <img src="${cardData[cardIndex].image}" alt="${cardData[cardIndex].name}">
//       </div>
//       <div class="product-card-detail">
//         <div class="price">
//           <p>${cardData[cardIndex].name}</p>
//           <p>${cardData[cardIndex].price}</p>
//         </div>
//         <div class="rating">
//           <div>
//             <div class="rating-box">
//               <img src="img/star.png"> ${cardData[cardIndex].rating}
//             </div>
//             <div>(${cardData[cardIndex].time})</div>
//           </div>
//           <img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart">
//         </div>
//       </div>
//     `;
//       frame.appendChild(card);
//     }
//     framesContainer.appendChild(frame);
//   }

//     // cards for slider
//     for (let i = 0; i < 3; i++) {
//       const frame = document.createElement("div");
//       frame.className = "frame";

//       for (let j = 0; j < 3; j++) {
//         const cardIndex = j % cardData.length;
//         const card = document.createElement("div");
//         card.className = "card";
//         card.innerHTML = `
//         <div class="card-img-container">
//           <img src="${cardData[cardIndex].image}" alt="${cardData[cardIndex].name}">
//         </div>
//         <div class="product-card-detail">
//           <div class="price">
//             <p>${cardData[cardIndex].name}</p>
//             <p>${cardData[cardIndex].price}</p>
//           </div>
//           <div class="rating">
//             <div>
//               <div class="rating-box">
//                 <img src="img/star.png"> ${cardData[cardIndex].rating}
//               </div>
//               <div>(${cardData[cardIndex].time})</div>
//             </div>
//             <img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart">
//           </div>
//         </div>
//       `;

//   }
// }

//   }

function createSliderFrame(startIndex) {
  const sliderFrame = document.createElement("div");
  sliderFrame.className = "slider-frame";

  cardData.map((itemData, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div class="card-img-container">
      <img src="${itemData.image}" alt="${itemData.name}">
    </div>
    <div class="product-card-detail">
      <div class="price">
        <p>${itemData.name}</p>
        <p>${itemData.price}</p>
      </div>
      <div class="rating-add">
        <div class="rating-box">
          <div><img src="img/star.png" id="star"> ${itemData.rating}</div>
          <div>${itemData.time}</div>
        </div>
        <div><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>
      </div>
    </div>
  `;
    sliderFrame.appendChild(card);
  });
  return sliderFrame;
}

function moveLeft() {
  const overflowDiv = document.getElementById("slider-container");

  overflowDiv.scrollBy({ left: -200, behavior: "smooth" });
}

function moveRight() {
  const overflowDiv = document.getElementById("slider-container");

  console.log("Sd");
  overflowDiv.scrollBy({ left: +200, behavior: "smooth" });
}

function renderCards() {
  const framesContainer = document.getElementById("frames-container");

  const cardList = [
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      discount: 0,
      time: "50-90 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Burger Deluxe",
      price: "₹150",
      rating: 4.5,
      discount: 20,
      time: "30-60 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Pasta Carbonara",
      price: "₹210",
      rating: 4.8,
      discount: 50,
      time: "45-70 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Vegan Salad",
      price: "₹130",
      rating: 4.2,
      discount: 0,
      time: "25-40 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
  ];

  // Generate 4 frames

  cardList.map((cardData, index) => {
    console.log(cardData);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${cardData.image}" alt="${cardData.name}">
      </div>

      ${
        cardData.discount > 0
          ? `<div class="discount" >
                  <p > ${cardData.discount}%</p>
                  </div>`
          : ``
      }
      <div class="product-card-detail">
        <div class="price">
          <p>${cardData.name}</p>
          <p>${cardData.price}</p>
        </div>
        <div class="rating-add">
              <div class="rating-box">
               <div><img src="img/star.png" id="star"> ${cardData.rating}</div>
               <div>${cardData.time}</div>
              </div>
          
          <div class="add"><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>

        </div>
      </div>
    `;
    framesContainer.appendChild(card);
  });
}

function renderSlider() {
  const sliderDiv = document.getElementById("slider-content");

  cardData.map((itemData, index) => {
    const card = document.createElement("div");
    card.className = "slider-card";
    card.innerHTML = `
    <div class="card-img-container">
      <img src="${itemData.image}" alt="${itemData.name}">
    </div>
    <div class="product-card-detail">
      <div class="price">
        <p>${itemData.name}</p>
        <p>${itemData.price}</p>
      </div>
      <div class="rating-add">
        <div class="rating-box">
          <div><img src="img/star.png" id="star"> ${itemData.rating}</div>
          <div>${itemData.time}</div>
        </div>
        <div><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>
      </div>
    </div>
  `;
    sliderDiv.appendChild(card);
  });
}
const slider = document.querySelector(".slider");
const cardData = [
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Home made pizza",
    price: "₹190",
    rating: "4.7",
    time: "50-79 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Tandoori Chicken",
    price: "₹184",
    rating: "4.3",
    time: "15-29 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Chilli Chicken",
    price: "₹116",
    rating: "4.1",
    time: "30-40 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Biryani",
    price: "₹220",
    rating: "4.5",
    time: "40-50 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Pasta",
    price: "₹150",
    rating: "4.2",
    time: "30-35 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Burger",
    price: "₹120",
    rating: "4.0",
    time: "20-30 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Chowmein",
    price: "₹100",
    rating: "4.3",
    time: "25-35 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Sandwich",
    price: "₹80",
    rating: "4.1",
    time: "10-20 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Cheese Pizza",
    price: "₹200",
    rating: "4.8",
    time: "40-50 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Grilled Chicken",
    price: "₹210",
    rating: "4.6",
    time: "35-45 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Spicy Chilli Chicken",
    price: "₹125",
    rating: "4.2",
    time: "30-40 min",
  },
  {
    image: "img/unsplash_MqT0asuoIcU.png",
    name: "Chicken Biryani",
    price: "₹250",
    rating: "4.7",
    time: "50-60 min",
  },
];

let currentCardIndex = 0;
const windowW = window.innerWidth;
const cardsPerFrame = Math.ceil(windowW / 600);
// Display 3 cards at a time

console.log(window.innerWidth);

// function renderFrame() {
//   slider.innerHTML = "";
//   const endIndex = Math.min(currentCardIndex + cardsPerFrame, cardData.length);

//   for (let i = currentCardIndex; i < endIndex; i++) {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//             <div class="card-img-container">

//                 <img src="${itemData.image}" alt="${itemData.name}">
//             </div>

//             <div class="product-card-detail">

//                 <div class="price">
//                     <p>${itemData.name}</p>
//                     <p>${itemData.price}</p>
//                 </div>
//                 <div class="rating-add">
//                     <div class="rating-box">
//                         <div><img src="img/star.png" id="star"> ${cardData[i].rating}</div>
//                         <div>${cardData[i].time}</div>
//                     </div>
//                     <div class="add" onclick="checkSize()"><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>
//                 </div>
//             </div>
//         `;
//     slider.appendChild(card);
//   }
// }

// function renderFrame() {
//   cardData.map((itemData,index) => {
//     const card = document.createElement("div");

//     card.className = "card";
//     card.innerHTML = `
//                 <div class="card-img-container">

//                     <img src="${itemData.image}" alt="${itemData.name}">
//                 </div>

//                 <div class="product-card-detail">

//                     <div class="price">
//                         <p>${itemData.name}</p>
//                         <p>${itemData.price}</p>
//                     </div>
//                     <div class="rating-add">
//                         <div class="rating-box">
//                             <div><img src="img/star.png" id="star"> ${itemData.rating}</div>
//                             <div>${itemData.time}</div>
//                         </div>
//                         <div class="add" onclick="checkSize()"><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>
//                     </div>
//                 </div>
//             `;
//     slider.appendChild(card);
//   }
// }

// Initial render
renderFrame();
