const getCardsData = (numberCards) => {
  const cards = [];
  for (let i = 0; i < numberCards; i++) {
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

console.log(randomizeCards());
