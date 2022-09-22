const getCardsData = (nrCards) => {
  const cards = [];
  for (let i = 0; i < nrCards; i++) {
    cards[i] = { id: i, img: `https://robohash.org/${i}?set=set4` };
  }
  const cards2 = cards;
  const mergeCards = cards.concat(cards2);
  return mergeCards;
};

const randomizeCards = () => {
  const cards = getCardsData(8);
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

// Render cards
const renderCards = (cardsList) => {
  const root = document.getElementById("root");
  cardsList.forEach((element) => {
    root.appendChild(renderSingleCard(element.img, element.id));
  });
};

// Create Card Element
const renderSingleCard = (imgUrl, id) => {
  const box = document.createElement("div");
  box.id = id;
  const imgElement = document.createElement("img");
  imgElement.src = imgUrl;
  box.appendChild(imgElement);
  return box;
};
console.log(randomizeCards());
renderCards(randomizeCards(8));
