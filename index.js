let scrollContainer = document.querySelector(".slider");
let left = document.getElementById("left");
let right = document.getElementById("right");
let close = document.getElementById("closeCart");
let dishRequest = document.getElementById("dishRequest");
let cancel = document.getElementById("cancelDishRequest");
let submit = document.getElementById("submitDishRequest");
let add = document.getElementById("addToCart");

console.log("slakmldkmflamlmlllll");

scrollContainer.addEventListener("wheel", () => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});


left.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 933;
});


right.addEventListener("click", () => {
  scrollContainer.scrollLeft += 933;
});


add.addEventListener("click", () => {
  document.getElementById("cart").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
});


closeCart.addEventListener("click", () => {
  document.getElementById("cart").style.display = "none";
  document.body.classList.remove("freeze-scroll");
});


cancel.addEventListener("click", () => {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
});


submit.addEventListener("click", () => {
  document.getElementById("dish").style.display = "none";
  document.body.classList.remove("freeze-scroll");
});


dishRequest.addEventListener("click", () => {
  document.getElementById("dish").style.display = "flex";
  window.scrollTo(0, 0);
  document.body.classList.add("freeze-scroll");
});


console.log("framesContainer");

window.onload = function () {
  const framesContainer = document.getElementById("frames-container");
  
  console.log("asdfnlkamlk");
  
  // function for cards generation
  const cardData = [
    {
      name: "Home made pizza",
      price: 190,
      rating: 4.7,
      time: "50-90 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Burger Deluxe",
      price: 150,
      rating: 4.5,
      time: "30-60 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Pasta Carbonara",
      price: 210,
      rating: 4.8,
      time: "45-70 min",
      image: "img/unsplash_MqT0asuoIcU.png",
    },
    {
      name: "Vegan Salad",
      price: 130,
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
        <div class="rating">
          <div>
            <div class="rating-box">
              <img src="img/star.png"> ${cardData[cardIndex].rating}
            </div>
            <div>(${cardData[cardIndex].time})</div>
          </div>
          <img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart">
        </div>
      </div>
    `;
      frame.appendChild(card);
    }
    framesContainer.appendChild(frame);
  }

    // cards for slider
    for (let i = 0; i < 3; i++) {
      const frame = document.createElement("div");
      frame.className = "frame";
  
      for (let j = 0; j < 3; j++) {
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
          <div class="rating">
            <div>
              <div class="rating-box">
                <img src="img/star.png"> ${cardData[cardIndex].rating}
              </div>
              <div>(${cardData[cardIndex].time})</div>
            </div>
            <img src="img/plus-symbol-in-a-rounded-black-square.png" id="addToCart">
          </div>
        </div>
      `;


  }
}

  }