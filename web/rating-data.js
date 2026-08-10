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
        { name: "Board game night", ratings: [null, null] },
        { name: "Costume party", ratings: [null, null] },
        { name: "Work mixer", ratings: [null, null] },
        { name: "Surprise party", ratings: [null, null] }
      ]
    },
    {
      name: "Games",
      fields: [
        { name: "Playing" },
        { name: "Watching" }
      ],
      items: [
        { name: "Chess", ratings: [null, null] },
        { name: "Poker", ratings: [null, null] },
        { name: "Esports", ratings: [null, null] }
      ]
    }
  ]
};
