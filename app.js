const getCardsData = (nrCards) => {
  const cards = [];
  for (let i = 0; i < nrCards; i++) {
    cards[i] = { id: i, img: `https://robohash.org/${i}?set=set4` };
  }
  const cards2 = cards;
  const mergeCards = cards.concat(cards2);
  return mergeCards;
};

let counter = 0;

const randomizeCards = () => {
  const cards = getCardsData(8);
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

// Render cards
const renderCards = (cardsList) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  cardsList.forEach((element) => {
    root.appendChild(renderSingleCard(element.img, element.id));
  });
};

// Create Card Element
const renderSingleCard = (imgUrl, id) => {
  const box = document.createElement("div");
  const back = document.createElement("div");
  back.classList = "back";
  box.setAttribute("card-id", id);
  box.classList = "card";
  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;
  imgElement.classList = "front";
  box.appendChild(imgElement);
  box.appendChild(back);
  box.addEventListener("click", (e) => {
    box.classList.toggle("flip");
    checkClickedCard(e);
    e.preventDefault();
  });
  return box;
};

//  Check cards match

const checkClickedCard = (e) => {
  const clickedCard = e.target.parentElement;
  clickedCard.classList.add("fliped");
  const flipedCards = document.querySelectorAll(".fliped");

  if (flipedCards.length === 2) {
    counter++;
    if (
      flipedCards[0].getAttribute("card-id") ===
      flipedCards[1].getAttribute("card-id")
    ) {
      console.log("match");
      flipedCards.forEach((e) => {
        e.classList.remove("fliped");
        e.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flipedCards.forEach((e) => {
        e.classList.remove("fliped");
        setTimeout(() => e.classList.remove("flip"), 700);
      });
    }
  }
  updateScore(counter);
  e.preventDefault();
};
const updateScore = (score) => {
  const scoreElement = document.querySelector("#score");
  scoreElement.textContent = score;
};

const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", (e) => {
  renderCards(randomizeCards(8));
  counter = 0;
  updateScore(0);
  e.preventDefault();
});
renderCards(randomizeCards(8));
