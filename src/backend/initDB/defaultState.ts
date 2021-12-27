export const defaultState = {
  users: [
    {
      id: 1,
      firstName: 'Emad',
      lastName: 'Armoun',
      userName: 'admin',
    },
  ],
  transactions: [
    {
      title: 'Buy a toy',
      amount: 180000,
      userId: 1,
      date: new Date(2021, 12, 23, 18, 14),
      primaryCatId: 2,
      secondaryCatId: 1,
      tags: ['Birthday'],
      isUnexpected: true,
    },
    {
      title: 'Grocery',
      amount: 75000,
      userId: 1,
      date: new Date(2021, 12, 23, 11, 42),
      primaryCatId: 1,
      secondaryCatId: 1,
      tags: [],
      isUnexpected: false,
    },
  ],
  primaryCats: [
    {
      id: 1,
      title: "Food",
    },
    {
      id: 2,
      title: "Free of Charge",
    },
    {
      id: 3,
      title: "Other",
    },
  ],
  secondaryCats: [
    {
      id: 1,
      primaryCatId: 1,
      title: "Food",
    },
    {
      id: 2,
      primaryCatId: 1,
      title: "Snack",
    },
    {
      id: 3,
      primaryCatId: 2,
      title: "Gift",
    },
  ],
};
