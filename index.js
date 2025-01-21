// let close = document.getElementById("closeCart");
// let dishRequest = document.getElementById("dishRequest");
// let cancel = document.getElementById("cancelDishRequest");
// let submit = document.getElementById("submitDishRequest");
// let add = document.getElementById("addToCart");


// const cardData = [
//   { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Item 1', price: '$10', rating: '4.5', time: '2d' },
//   { image: 'img/pexels-omar-mahmood-106343 1.png', name: 'Item 2', price: '$15', rating: '4.8', time: '1d' },
//   { image: 'img/pexels-mumma-oyens-8799602 1.png', name: 'Item 3', price: '$12', rating: '4.2', time: '3d' },
//   { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Item 4', price: '$18', rating: '4.7', time: '1d' },
//   { image: 'img/pexels-omar-mahmood-106343 1.png', name: 'Item 5', price: '$20', rating: '4.9', time: '5h' },
//   { image: 'img/pexels-mumma-oyens-8799602 1.png', name: 'Item 6', price: '$25', rating: '4.3', time: '7h' },
//   // Add more data as needed
// ];

// let currentFrame = 0;
// const cardsPerFrame = 3;
// const totalFrames = Math.ceil(cardData.length / cardsPerFrame);
// function renderSlider() {
//   const sliderWrapper = document.querySelector('.slider');
//   const slider = document.createElement('div');
//   slider.className = 'slider';
//   const frame = createSliderFrame(currentFrame * cardsPerFrame);
//   slider.appendChild(frame);
//   // sliderWrapper.innerHTML = '';
//   sliderWrapper.appendChild(slider);
// }


document.getElementById('left').addEventListener('click', moveLeft);
document.getElementById('right').addEventListener('click', moveRight);

// let scrollContainer = document.querySelector(".slider");
// let left = document.getElementById("left");
// let right = document.getElementById("right");

// scrollContainer.addEventListener("wheel", () => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });


// left.addEventListener("click", () => {
//   scrollContainer.scrollLeft -= 933;
// });


// right.addEventListener("click", () => {
//   scrollContainer.scrollLeft += 933;
// });






function addToCart() {
  if(document.getElementById("dish").style.display === "flex")
      cancel();
    
  document.getElementById("cart").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
}


function closeCart() {
  document.getElementById("cart").style.display = "none";
  document.body.classList.remove("freeze-scroll");
};


function cancel() {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
}


function handleSubmit()  {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
}


function handleRequest() {
 
  if( document.getElementById("cart").style.display === "flex")
    closeCart();
  document.getElementById("dish").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
}

function changeImage() {
  var image = document.getElementById('myImage');
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
  const sliderFrame = document.createElement('div');
  sliderFrame.className = 'slider-frame';

  for (let i = startIndex; i < startIndex + cardsPerFrame && i < cardData.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${cardData[i].image}" alt="${cardData[i].name}">
      </div>
      <div class="product-card-detail">
        <div class="price">
          <p>${cardData[i].name}</p>
          <p>${cardData[i].price}</p>
        </div>
        <div class="rating-add">
          <div class="rating-box">
            <div><img src="img/star.png" id="star"> ${cardData[i].rating}</div>
            <div>${cardData[i].time}</div>
          </div>
          <div><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>
        </div>
      </div>
    `;
    sliderFrame.appendChild(card);
  }
  return sliderFrame;
}



function moveLeft() {
  if (currentFrame > 0) {
    currentFrame--;
    renderSlider();
  }
}

function moveRight() {
  if (currentFrame < totalFrames - 1) {
    currentFrame++;
    renderSlider();
  }
}




function renderCards () {
  const framesContainer = document.getElementById("frames-container");

  console.log("asdfnlkamlk");

  const cardData = [
{
name: "Home made pizza",
price: "₹190",
rating: 4.7,
time: "50-90 min",
image: "img/unsplash_MqT0asuoIcU.png",
},
{
name: "Burger Deluxe",
price: "₹150",
rating: 4.5,
time: "30-60 min",
image: "img/unsplash_MqT0asuoIcU.png",
},
{
name: "Pasta Carbonara",
price: "₹210",
rating: 4.8,
time: "45-70 min",
image: "img/unsplash_MqT0asuoIcU.png",
},
{
name: "Vegan Salad",
price: "₹130",
rating: 4.2,
time: "25-40 min",
image: "img/unsplash_MqT0asuoIcU.png",
},
];


  // Generate 4 frames

  for (let i = 0; i < 3; i++) {
    const frame = document.createElement("div");
    frame.className = "frame";

    for (let j = 0; j < 4; j++) {
      const cardIndex = j % cardData.length;
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <div class="card-img-container">
        <img src="${cardData[cardIndex].image}" alt="${cardData[cardIndex].name}">
      </div>
      <div class="product-card-detail">
        <div class="price">
          <p>${cardData[cardIndex].name}</p>
          <p>${cardData[cardIndex].price}</p>
        </div>
        <div class="rating-add">
              <div class="rating-box">
               <div><img src="img/star.png" id="star"> ${cardData[cardIndex].rating}</div>
               <div>${cardData[cardIndex].time}</div>
              </div>
          
          <div><img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart" onclick="addToCart()"></div>

        </div>
      </div>
    `;
      frame.appendChild(card);
    }
    framesContainer.appendChild(frame);
  }
    
 
   
};

const slider = document.querySelector('.slider');
const cardData = [
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Home made pizza', price: '₹190', rating: '4.7', time: '50-79 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Tandoori Chicken', price: '₹184', rating: '4.3', time: '15-29 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Chilli Chicken', price: '₹116', rating: '4.1', time: '30-40 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Biryani', price: '₹220', rating: '4.5', time: '40-50 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Pasta', price: '₹150', rating: '4.2', time: '30-35 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Burger', price: '₹120', rating: '4.0', time: '20-30 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Chowmein', price: '₹100', rating: '4.3', time: '25-35 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Sandwich', price: '₹80', rating: '4.1', time: '10-20 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Cheese Pizza', price: '₹200', rating: '4.8', time: '40-50 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Grilled Chicken', price: '₹210', rating: '4.6', time: '35-45 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Spicy Chilli Chicken', price: '₹125', rating: '4.2', time: '30-40 min' },
  { image: 'img/unsplash_MqT0asuoIcU.png', name: 'Chicken Biryani', price: '₹250', rating: '4.7', time: '50-60 min' }
];

let currentCardIndex = 0; // Track the first visible card
const cardsPerFrame = 3; // Display 3 cards at a time

function renderFrame() {
    slider.innerHTML = ''; // Clear existing frame
    const endIndex = Math.min(currentCardIndex + cardsPerFrame, cardData.length);

    for (let i = currentCardIndex; i < endIndex; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${cardData[i].image}" alt="${cardData[i].name}">
            </div>
            <div class="product-card-detail">
                <div class="price">
                    <p>${cardData[i].name}</p>
                    <p>${cardData[i].price}</p>
                </div>
                <div class="rating-add">
                    <div class="rating-box">
                        <div><img src="img/star.png" id="star"> ${cardData[i].rating}</div>
                        <div>${cardData[i].time}</div>
                    </div>
                    <div><img src="img/plus.png" id="addToCart"></div>
                </div>
            </div>
        `;
        slider.appendChild(card);
    }
}

document.getElementById('left').addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--; // Slide one card left
        renderFrame();
    }
});

document.getElementById('right').addEventListener('click', () => {
    if (currentCardIndex < cardData.length - cardsPerFrame) {
        currentCardIndex++; // Slide one card right
        renderFrame();
    }
});

// Initial render
renderFrame();
