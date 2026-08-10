// Owner-edited content. No UI writes here — edit this file, redeploy.
// scale: ordered best -> worst. groups: max two fields each; any rating can be
// split in the UI into separate "theory" / "practice" answers.
export default {
  scale: [
    { label: "Favorite" },
    { label: "Like" },
    { label: "Could be fun" },
    { label: "Indifferent" },
    { label: "Could be convinced" },
    { label: "Rather not" },
    { label: "No" }
  ],
  groups: [
    {
      name: "Parties",
      fields: [
        { name: "Hosting" },
        { name: "Visiting" }
      ],
      items: [
        { name: "Board game night", ratings: [0, { theory: 0, practice: 1 }] },
        { name: "Costume party", ratings: [2, { theory: 1, practice: 3 }] },
        { name: "Work mixer", ratings: [5, { theory: 4, practice: 5 }] },
        { name: "Surprise party", ratings: [4, { theory: 2, practice: 4 }] }
      ]
    },
    {
      name: "Games",
      fields: [
        { name: "Playing" },
        { name: "Watching" }
      ],
      items: [
        { name: "Chess", ratings: [1, 3] },
        { name: "Poker", ratings: [2, 4] },
        { name: "Esports", ratings: [6, 3] }
      ]
    }
  ]
};
