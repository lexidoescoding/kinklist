// Owner-edited content. No UI writes here — edit this file, redeploy.
// scale: ordered best -> worst.
// lists: the three boards you can switch between with the selector under the
//   legend. Each has its own groups; a group holds max two fields, and any
//   rating can be split in the UI into separate "theory" / "practice" answers.
// defaultList: the list id shown on a fresh page load.
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
  defaultList: "normal",
  lists: [
    {
      id: "normal",
      label: "normal",
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
    },
    {
      id: "detailed",
      label: "detailed",
      groups: [
        {
          name: "Parties — hosting",
          fields: [
            { name: "Planning" },
            { name: "On the night" }
          ],
          items: [
            { name: "Board game night", ratings: [null, null] },
            { name: "Dinner for six", ratings: [null, null] },
            { name: "Costume party", ratings: [null, null] },
            { name: "Big open invite", ratings: [null, null] },
            { name: "Surprise party", ratings: [null, null] }
          ]
        },
        {
          name: "Parties — visiting",
          fields: [
            { name: "People I know" },
            { name: "Strangers" }
          ],
          items: [
            { name: "Board game night", ratings: [null, null] },
            { name: "Dinner for six", ratings: [null, null] },
            { name: "Costume party", ratings: [null, null] },
            { name: "Work mixer", ratings: [null, null] },
            { name: "Club night", ratings: [null, null] }
          ]
        },
        {
          name: "Games — by kind",
          fields: [
            { name: "Playing" },
            { name: "Watching" }
          ],
          items: [
            { name: "Chess", ratings: [null, null] },
            { name: "Poker", ratings: [null, null] },
            { name: "Party games", ratings: [null, null] },
            { name: "Co-op video games", ratings: [null, null] },
            { name: "Competitive video games", ratings: [null, null] },
            { name: "Esports", ratings: [null, null] }
          ]
        },
        {
          name: "Games — by setting",
          fields: [
            { name: "In person" },
            { name: "Online" }
          ],
          items: [
            { name: "One on one", ratings: [null, null] },
            { name: "Small group", ratings: [null, null] },
            { name: "Big group", ratings: [null, null] },
            { name: "With strangers", ratings: [null, null] }
          ]
        }
      ]
    },
    {
      id: "please-dont",
      label: "please don't",
      groups: [
        {
          name: "Parties",
          fields: [
            { name: "Hosting" },
            { name: "Visiting" }
          ],
          items: [
            { name: "Surprise party for me", ratings: [null, null] },
            { name: "Anything before noon", ratings: [null, null] },
            { name: "Open invite / plus ones", ratings: [null, null] },
            { name: "Loud music, no quiet room", ratings: [null, null] },
            { name: "Staying past midnight", ratings: [null, null] }
          ]
        },
        {
          name: "Games",
          fields: [
            { name: "Playing" },
            { name: "Watching" }
          ],
          items: [
            { name: "Anything with forfeits", ratings: [null, null] },
            { name: "Teams picked by captains", ratings: [null, null] },
            { name: "Six-hour campaigns", ratings: [null, null] },
            { name: "Voice chat with strangers", ratings: [null, null] }
          ]
        }
      ]
    }
  ]
};
