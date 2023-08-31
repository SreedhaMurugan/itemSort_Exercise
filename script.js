function itemsPurchased(Items, walletAmount) {
  const walletValue = parseInt(walletAmount.slice(1));

  const affordableItems = [];

  for (const item in Items) {
    const itemPrice = parseInt(Items[item].slice(1));
    if (itemPrice <= walletValue) {
      affordableItems.push(item);
    }
  }

  affordableItems.sort();

  return affordableItems;
}

console.log(
  itemsPurchased(
    {
      Water: '$1',
      Bread: '$3',
      TV: '$1,000',
      Fertilizer: '$20',
    },
    '$300'
  )
);
console.log(
  itemsPurchased(
    {
      Apple: '$4',
      Honey: '$3',
      Fan: '$14',
      Bananas: '$4',
      Pan: '$100',
      Spoon: '$2',
    },
    '$100'
  )
);
