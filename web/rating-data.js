// Owner-edited content. No UI writes here — edit this file, redeploy.
// scale: ordered best -> worst.
// lists: the three boards you can switch between with the selector under the
//   legend. Each has its own groups; a group holds max two fields, and any
//   rating can be split in the UI into separate "theory" / "practice" answers.
// defaultList: the list id shown on a fresh page load.
export default {
  "scale": [
    { "label": "Favorite" },
    { "label": "Like" },
    { "label": "Could be fun" },
    { "label": "Indifferent" },
    { "label": "Could be convinced" },
    { "label": "Rather not" },
    { "label": "No" }
  ],
  "defaultList": "normal",
  "lists": [
    {
      "id": "normal",
      "label": "normal",
      "groups": [
        {
          "name": "Bodies",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Skinny / slim", "ratings": [null] },
            { "name": "Athletic / muscular", "ratings": [null] },
            { "name": "Curvy / soft", "ratings": [null] },
            { "name": "Chubby / plus-size", "ratings": [null] },
            { "name": "Small breasts", "ratings": [null] },
            { "name": "Large breasts", "ratings": [null] },
            { "name": "Small cock", "ratings": [null] },
            { "name": "Large cock", "ratings": [null] },
            { "name": "Body hair", "ratings": [null] },
            { "name": "Smooth / shaved", "ratings": [null] }
          ]
        },
        {
          "name": "Groupings",
          "fields": [{ "name": "As top" }, { "name": "As bottom" }],
          "items": [
            { "name": "One-on-one", "ratings": [null, null] },
            { "name": "Threesome", "ratings": [null, null] },
            { "name": "Group / orgy", "ratings": [null, null] },
            { "name": "Gangbang", "ratings": [null, null] }
          ]
        },
        {
          "name": "Clothing",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Lingerie", "ratings": [null, null] },
            { "name": "Stockings / heels", "ratings": [null, null] },
            { "name": "Leather", "ratings": [null, null] },
            { "name": "Latex", "ratings": [null, null] },
            { "name": "Uniform / costume", "ratings": [null, null] },
            { "name": "Cross-dressing", "ratings": [null, null] },
            { "name": "Clothed sex", "ratings": [null, null] }
          ]
        },
        {
          "name": "Oral & Manual",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Handjob / fingering", "ratings": [null, null] },
            { "name": "Blowjob", "ratings": [null, null] },
            { "name": "Deepthroat", "ratings": [null, null] },
            { "name": "Swallowing", "ratings": [null, null] },
            { "name": "Facial", "ratings": [null, null] },
            { "name": "Cunnilingus", "ratings": [null, null] },
            { "name": "Face-sitting", "ratings": [null, null] },
            { "name": "Rimming", "ratings": [null, null] }
          ]
        },
        {
          "name": "Anal",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Anal toys / plugs", "ratings": [null, null] },
            { "name": "Anal sex / pegging", "ratings": [null, null] },
            { "name": "Double penetration", "ratings": [null, null] },
            { "name": "Anal fisting", "ratings": [null, null] }
          ]
        },
        {
          "name": "Toys",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Dildos / vibrators", "ratings": [null, null] },
            { "name": "Butt plugs", "ratings": [null, null] },
            { "name": "Nipple clamps", "ratings": [null, null] },
            { "name": "Sounding", "ratings": [null, null] }
          ]
        },
        {
          "name": "Bondage",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Gag", "ratings": [null, null] },
            { "name": "Collar / leash", "ratings": [null, null] },
            { "name": "Blindfold", "ratings": [null, null] },
            { "name": "Light bondage", "ratings": [null, null] },
            { "name": "Heavy bondage", "ratings": [null, null] },
            { "name": "Chastity", "ratings": [null, null] }
          ]
        },
        {
          "name": "Impact & Sensation",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Spanking", "ratings": [null, null] },
            { "name": "Flogging / paddling", "ratings": [null, null] },
            { "name": "Caning", "ratings": [null, null] },
            { "name": "Nipple clamps", "ratings": [null, null] },
            { "name": "Hot wax", "ratings": [null, null] },
            { "name": "Ice / temperature", "ratings": [null, null] },
            { "name": "Scratching / biting", "ratings": [null, null] }
          ]
        },
        {
          "name": "Power Exchange",
          "fields": [{ "name": "As Dom" }, { "name": "As Sub" }],
          "items": [
            { "name": "General D/s", "ratings": [null, null] },
            { "name": "Pet play", "ratings": [null, null] },
            { "name": "Domestic service", "ratings": [null, null] },
            { "name": "Orgasm control / denial", "ratings": [null, null] },
            { "name": "Forced orgasm", "ratings": [null, null] },
            { "name": "Discipline", "ratings": [null, null] },
            { "name": "Praise / degradation", "ratings": [null, null] }
          ]
        },
        {
          "name": "Breath & Edge",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Light choking / breath play", "ratings": [null, null] },
            { "name": "Edging", "ratings": [null, null] },
            { "name": "Teasing", "ratings": [null, null] }
          ]
        }
      ]
    },
    {
      "id": "detailed",
      "label": "detailed",
      "groups": [
        {
          "name": "Bodies",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Skinny", "ratings": [null] },
            { "name": "Chubby", "ratings": [null] },
            { "name": "Muscular", "ratings": [null] },
            { "name": "Small breasts", "ratings": [null] },
            { "name": "Large breasts", "ratings": [null] },
            { "name": "Small cocks", "ratings": [null] },
            { "name": "Large cocks", "ratings": [null] },
            { "name": "Cut cocks", "ratings": [null] },
            { "name": "Uncut cocks", "ratings": [null] },
            { "name": "Pubic hair", "ratings": [null] },
            { "name": "Smooth / shaved", "ratings": [null] },
            { "name": "Body hair", "ratings": [null] },
            { "name": "Glasses", "ratings": [null] },
            { "name": "Non-sexual piercings", "ratings": [null] },
            { "name": "Tattoos", "ratings": [null] }
          ]
        },
        {
          "name": "Clothing",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Clothed sex", "ratings": [null, null] },
            { "name": "Lingerie", "ratings": [null, null] },
            { "name": "Stockings", "ratings": [null, null] },
            { "name": "Heels", "ratings": [null, null] },
            { "name": "Leather", "ratings": [null, null] },
            { "name": "Latex", "ratings": [null, null] },
            { "name": "Uniform / costume", "ratings": [null, null] },
            { "name": "Cross-dressing", "ratings": [null, null] },
            { "name": "Masks", "ratings": [null, null] }
          ]
        },
        {
          "name": "Groupings",
          "fields": [{ "name": "As top" }, { "name": "As bottom" }],
          "items": [
            { "name": "You and 1 male", "ratings": [null, null] },
            { "name": "You and 1 female", "ratings": [null, null] },
            { "name": "You and MtF trans", "ratings": [null, null] },
            { "name": "You and FtM trans", "ratings": [null, null] },
            { "name": "You and 1 male, 1 female", "ratings": [null, null] },
            { "name": "You and 2 males", "ratings": [null, null] },
            { "name": "You and 2 females", "ratings": [null, null] },
            { "name": "Orgy", "ratings": [null, null] },
            { "name": "Gangbang", "ratings": [null, null] }
          ]
        },
        {
          "name": "General",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Romance / affection", "ratings": [null, null] },
            { "name": "Kissing", "ratings": [null, null] },
            { "name": "Cuddling", "ratings": [null, null] },
            { "name": "Handjob / fingering", "ratings": [null, null] },
            { "name": "Blowjob", "ratings": [null, null] },
            { "name": "Deep throat", "ratings": [null, null] },
            { "name": "Face-fucking", "ratings": [null, null] },
            { "name": "Swallowing", "ratings": [null, null] },
            { "name": "Facials", "ratings": [null, null] },
            { "name": "Cunnilingus", "ratings": [null, null] },
            { "name": "Face-sitting", "ratings": [null, null] },
            { "name": "Edging", "ratings": [null, null] },
            { "name": "Teasing", "ratings": [null, null] },
            { "name": "Dirty talking", "ratings": [null, null] },
            { "name": "Strip tease", "ratings": [null, null] },
            { "name": "Masturbation (watched / mutual)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Ass play",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Anal toys", "ratings": [null, null] },
            { "name": "Anal sex / pegging", "ratings": [null, null] },
            { "name": "Rimming", "ratings": [null, null] },
            { "name": "Double penetration", "ratings": [null, null] },
            { "name": "Anal fisting", "ratings": [null, null] },
            { "name": "Ass worship", "ratings": [null, null] },
            { "name": "Enemas", "ratings": [null, null] },
            { "name": "Gaping", "ratings": [null, null] }
          ]
        },
        {
          "name": "Restrictive",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Gag", "ratings": [null, null] },
            { "name": "Collar", "ratings": [null, null] },
            { "name": "Leash", "ratings": [null, null] },
            { "name": "Chastity", "ratings": [null, null] },
            { "name": "Bondage (light)", "ratings": [null, null] },
            { "name": "Bondage (heavy)", "ratings": [null, null] },
            { "name": "Encasement / mummification", "ratings": [null, null] },
            { "name": "Blindfold", "ratings": [null, null] },
            { "name": "Spreader bar", "ratings": [null, null] }
          ]
        },
        {
          "name": "Toys",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Dildos", "ratings": [null, null] },
            { "name": "Plugs", "ratings": [null, null] },
            { "name": "Vibrators", "ratings": [null, null] },
            { "name": "Sounding", "ratings": [null, null] },
            { "name": "Strap-ons", "ratings": [null, null] },
            { "name": "Nipple clamps", "ratings": [null, null] },
            { "name": "Cock rings", "ratings": [null, null] }
          ]
        },
        {
          "name": "Domination",
          "fields": [{ "name": "As Dom" }, { "name": "As Sub" }],
          "items": [
            { "name": "General Dom / Sub", "ratings": [null, null] },
            { "name": "Domestic servitude", "ratings": [null, null] },
            { "name": "Slavery", "ratings": [null, null] },
            { "name": "Pet play", "ratings": [null, null] },
            { "name": "DD/lg, MD/lb (adult)", "ratings": [null, null] },
            { "name": "Discipline", "ratings": [null, null] },
            { "name": "Begging", "ratings": [null, null] },
            { "name": "Forced orgasm", "ratings": [null, null] },
            { "name": "Orgasm control", "ratings": [null, null] },
            { "name": "Orgasm denial", "ratings": [null, null] },
            { "name": "Power exchange", "ratings": [null, null] }
          ]
        },
        {
          "name": "Non consent",
          "fields": [{ "name": "Aggressor" }, { "name": "Target" }],
          "items": [
            { "name": "Consensual non-con / CNC", "ratings": [null, null] },
            { "name": "Blackmail / coercion", "ratings": [null, null] },
            { "name": "Kidnapping", "ratings": [null, null] },
            { "name": "Alcohol", "ratings": [null, null] },
            { "name": "Drugs", "ratings": [null, null] },
            { "name": "Rape", "ratings": [null, null] }
          ]
        },
        {
          "name": "Taboo",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Age gap", "ratings": [null] },
            { "name": "Interracial", "ratings": [null] },
            { "name": "Raceplay", "ratings": [null] },
            { "name": "Cheating / cuckold fantasy", "ratings": [null] },
            { "name": "Exhibitionism", "ratings": [null] },
            { "name": "Voyeurism", "ratings": [null] }
          ]
        },
        {
          "name": "Fluids",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Cum play", "ratings": [null, null] },
            { "name": "Creampie", "ratings": [null, null] },
            { "name": "Watersports", "ratings": [null, null] },
            { "name": "Lactation", "ratings": [null, null] },
            { "name": "Blood play", "ratings": [null, null] },
            { "name": "Scat", "ratings": [null, null] }
          ]
        },
        {
          "name": "Degradation",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Glory hole", "ratings": [null, null] },
            { "name": "Name calling", "ratings": [null, null] },
            { "name": "Humiliation", "ratings": [null, null] },
            { "name": "Objectification", "ratings": [null, null] },
            { "name": "Spitting", "ratings": [null, null] }
          ]
        },
        {
          "name": "Touch & Stimulation",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Cock / pussy worship", "ratings": [null, null] },
            { "name": "Ass worship", "ratings": [null, null] },
            { "name": "Foot play / worship", "ratings": [null, null] },
            { "name": "Tickling", "ratings": [null, null] },
            { "name": "Sensation play", "ratings": [null, null] },
            { "name": "Electro stimulation", "ratings": [null, null] }
          ]
        },
        {
          "name": "Misc",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Fisting (vaginal)", "ratings": [null, null] },
            { "name": "Breath play", "ratings": [null, null] },
            { "name": "Impregnation / breeding kink", "ratings": [null, null] },
            { "name": "Pregnancy play", "ratings": [null, null] },
            { "name": "Feminization", "ratings": [null, null] },
            { "name": "Cuckold / cuckquean", "ratings": [null, null] },
            { "name": "Adult baby / age regression", "ratings": [null, null] },
            { "name": "Diaper wetting", "ratings": [null, null] },
            { "name": "Diaper messing", "ratings": [null, null] }
          ]
        },
        {
          "name": "Pain",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Light pain", "ratings": [null, null] },
            { "name": "Heavy pain", "ratings": [null, null] },
            { "name": "Nipple clamps", "ratings": [null, null] },
            { "name": "Clothespins", "ratings": [null, null] },
            { "name": "Caning", "ratings": [null, null] },
            { "name": "Flogging", "ratings": [null, null] },
            { "name": "Spanking", "ratings": [null, null] },
            { "name": "Beating", "ratings": [null, null] },
            { "name": "Cock / pussy slapping", "ratings": [null, null] },
            { "name": "Cock / pussy torture", "ratings": [null, null] },
            { "name": "Hot wax", "ratings": [null, null] },
            { "name": "Scratching", "ratings": [null, null] },
            { "name": "Biting", "ratings": [null, null] },
            { "name": "Cutting / knife play (surface)", "ratings": [null, null] },
            { "name": "Choking / gagging", "ratings": [null, null] }
          ]
        }
      ]
    },
    {
      "id": "please-dont",
      "label": "please don't",
      "groups": [
        {
          "name": "Body Part Size",
          "fields": [{ "name": "Small" }, { "name": "Large" }],
          "items": [
            { "name": "Asses", "ratings": [null, null] },
            { "name": "Cocks", "ratings": [null, null] },
            { "name": "Balls", "ratings": [null, null] },
            { "name": "Breasts", "ratings": [null, null] }
          ]
        },
        {
          "name": "Bodies",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Skinny", "ratings": [null] },
            { "name": "Chubby", "ratings": [null] },
            { "name": "Muscular partners", "ratings": [null] },
            { "name": "Very muscular partners", "ratings": [null] },
            { "name": "Very fat partners", "ratings": [null] },
            { "name": "Very lithe partners", "ratings": [null] },
            { "name": "Voluptuousness", "ratings": [null] },
            { "name": "Cut cocks", "ratings": [null] },
            { "name": "Uncut cocks", "ratings": [null] },
            { "name": "Pubic hair", "ratings": [null] },
            { "name": "Glasses", "ratings": [null] },
            { "name": "Nonsexual piercings", "ratings": [null] },
            { "name": "Twinks", "ratings": [null] },
            { "name": "Tomboys", "ratings": [null] },
            { "name": "Femboys", "ratings": [null] }
          ]
        },
        {
          "name": "Clothing",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Clothed sex", "ratings": [null, null] },
            { "name": "Lingerie", "ratings": [null, null] },
            { "name": "Stockings", "ratings": [null, null] },
            { "name": "Heels", "ratings": [null, null] },
            { "name": "Leather", "ratings": [null, null] },
            { "name": "Latex", "ratings": [null, null] },
            { "name": "Uniform / costume", "ratings": [null, null] },
            { "name": "Cross-dressing", "ratings": [null, null] },
            { "name": "Masks", "ratings": [null, null] },
            { "name": "Underwear focus", "ratings": [null, null] }
          ]
        },
        {
          "name": "Groupings",
          "fields": [{ "name": "As top" }, { "name": "As bottom" }],
          "items": [
            { "name": "You and 1 male", "ratings": [null, null] },
            { "name": "You and 1 female", "ratings": [null, null] },
            { "name": "You and MtF trans", "ratings": [null, null] },
            { "name": "You and FtM trans", "ratings": [null, null] },
            { "name": "You and 1 male, 1 female", "ratings": [null, null] },
            { "name": "You and 2 males", "ratings": [null, null] },
            { "name": "You and 2 females", "ratings": [null, null] },
            { "name": "Orgy", "ratings": [null, null] },
            { "name": "Gangbang", "ratings": [null, null] }
          ]
        },
        {
          "name": "General",
          "fields": [{ "name": "When top" }, { "name": "When bottom" }],
          "items": [
            { "name": "Romance / affection", "ratings": [null, null] },
            { "name": "Cuddling", "ratings": [null, null] },
            { "name": "Kissing", "ratings": [null, null] },
            { "name": "Dirty talking", "ratings": [null, null] },
            { "name": "Handjob / fingering", "ratings": [null, null] },
            { "name": "Edging", "ratings": [null, null] },
            { "name": "Teasing", "ratings": [null, null] },
            { "name": "Face-sitting", "ratings": [null, null] },
            { "name": "Facials", "ratings": [null, null] },
            { "name": "Swallowing", "ratings": [null, null] },
            { "name": "Frotting", "ratings": [null, null] },
            { "name": "Hotdogging", "ratings": [null, null] },
            { "name": "Tribadism / scissoring", "ratings": [null, null] },
            { "name": "Masturbation", "ratings": [null, null] },
            { "name": "Strip tease", "ratings": [null, null] },
            { "name": "Vanilla sex", "ratings": [null, null] },
            { "name": "Biting", "ratings": [null, null] },
            { "name": "Licking", "ratings": [null, null] },
            { "name": "Ice play", "ratings": [null, null] },
            { "name": "Tickling", "ratings": [null, null] },
            { "name": "Photography / videotaping", "ratings": [null, null] },
            { "name": "Smoking play", "ratings": [null, null] }
          ]
        },
        {
          "name": "Oral Sex",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Blowjob", "ratings": [null, null] },
            { "name": "Cunnilingus", "ratings": [null, null] },
            { "name": "Deep throat", "ratings": [null, null] },
            { "name": "Face-fucking", "ratings": [null, null] },
            { "name": "Throat penetration", "ratings": [null, null] }
          ]
        },
        {
          "name": "Ass play",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Ass worship", "ratings": [null, null] },
            { "name": "Anal toys", "ratings": [null, null] },
            { "name": "Anal sex / pegging", "ratings": [null, null] },
            { "name": "Rimming", "ratings": [null, null] },
            { "name": "Double penetration", "ratings": [null, null] },
            { "name": "Anal fisting", "ratings": [null, null] },
            { "name": "Anal training", "ratings": [null, null] },
            { "name": "Enemas", "ratings": [null, null] },
            { "name": "Gaping", "ratings": [null, null] }
          ]
        },
        {
          "name": "Restrictive",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Bondage (light)", "ratings": [null, null] },
            { "name": "Bondage (heavy)", "ratings": [null, null] },
            { "name": "Chastity", "ratings": [null, null] },
            { "name": "Collar", "ratings": [null, null] },
            { "name": "Leash", "ratings": [null, null] },
            { "name": "Gag", "ratings": [null, null] },
            { "name": "Encasement", "ratings": [null, null] },
            { "name": "Blindfolds", "ratings": [null, null] },
            { "name": "Hand cuffs / restraints", "ratings": [null, null] },
            { "name": "Suspension", "ratings": [null, null] },
            { "name": "Caging", "ratings": [null, null] }
          ]
        },
        {
          "name": "Toys",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Dildos", "ratings": [null, null] },
            { "name": "Plugs", "ratings": [null, null] },
            { "name": "Vibrators", "ratings": [null, null] },
            { "name": "Sounding", "ratings": [null, null] },
            { "name": "Strap-ons", "ratings": [null, null] }
          ]
        },
        {
          "name": "Domination",
          "fields": [{ "name": "As Dom" }, { "name": "As Sub" }],
          "items": [
            { "name": "General Dom / Sub", "ratings": [null, null] },
            { "name": "Domestic servitude", "ratings": [null, null] },
            { "name": "Slavery", "ratings": [null, null] },
            { "name": "Pet play", "ratings": [null, null] },
            { "name": "DD/lg, MD/lb", "ratings": [null, null] },
            { "name": "Discipline", "ratings": [null, null] },
            { "name": "Begging", "ratings": [null, null] },
            { "name": "Forced orgasm", "ratings": [null, null] },
            { "name": "Orgasm control", "ratings": [null, null] },
            { "name": "Orgasm denial", "ratings": [null, null] },
            { "name": "Power exchange", "ratings": [null, null] },
            { "name": "Immobilization", "ratings": [null, null] }
          ]
        },
        {
          "name": "No consent",
          "fields": [{ "name": "Aggressor" }, { "name": "Target" }],
          "items": [
            { "name": "Consensual non-con / CNC", "ratings": [null, null] },
            { "name": "Blackmail / coercion", "ratings": [null, null] },
            { "name": "Kidnapping", "ratings": [null, null] },
            { "name": "Alcohol", "ratings": [null, null] },
            { "name": "Sleep / somnophilia", "ratings": [null, null] },
            { "name": "Drugs", "ratings": [null, null] },
            { "name": "Forced intoxication", "ratings": [null, null] }
          ]
        },
        {
          "name": "Taboo",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Age gap", "ratings": [null] },
            { "name": "Interracial", "ratings": [null] },
            { "name": "Raceplay", "ratings": [null] },
            { "name": "Cheating fantasy", "ratings": [null] },
            { "name": "Exhibitionism", "ratings": [null] },
            { "name": "Voyeurism", "ratings": [null] },
            { "name": "Incest fantasy (adult)", "ratings": [null] },
            { "name": "Bestiality", "ratings": [null] }
          ]
        },
        {
          "name": "Fluids",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Cum play", "ratings": [null] },
            { "name": "Watersports", "ratings": [null] },
            { "name": "Scat", "ratings": [null] },
            { "name": "Lactation", "ratings": [null] },
            { "name": "Blood play", "ratings": [null] },
            { "name": "Sweat / musk", "ratings": [null] },
            { "name": "Saliva / spit", "ratings": [null] },
            { "name": "Messy play", "ratings": [null] },
            { "name": "Vomit / emetophilia", "ratings": [null] }
          ]
        },
        {
          "name": "Degradation",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Begging", "ratings": [null, null] },
            { "name": "Name calling", "ratings": [null, null] },
            { "name": "Humiliation", "ratings": [null, null] },
            { "name": "Verbal abuse", "ratings": [null, null] },
            { "name": "Glory hole", "ratings": [null, null] },
            { "name": "Forced nudity", "ratings": [null, null] },
            { "name": "Cock slapping", "ratings": [null, null] },
            { "name": "Objectification", "ratings": [null, null] }
          ]
        },
        {
          "name": "Touch & Stimulation",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Ass worship", "ratings": [null, null] },
            { "name": "Cock / pussy worship", "ratings": [null, null] },
            { "name": "Foot play", "ratings": [null, null] },
            { "name": "Sensation play", "ratings": [null, null] },
            { "name": "Electro stimulation", "ratings": [null, null] },
            { "name": "Tickling", "ratings": [null, null] },
            { "name": "Breast / nipple worship", "ratings": [null, null] }
          ]
        },
        {
          "name": "Misc Fetish",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Fisting", "ratings": [null, null] },
            { "name": "Gangbang", "ratings": [null, null] },
            { "name": "Breath play", "ratings": [null, null] },
            { "name": "Breeding / impregnation", "ratings": [null, null] },
            { "name": "Pregnancy play", "ratings": [null, null] },
            { "name": "Feminization", "ratings": [null, null] },
            { "name": "Cuckold / cuckquean", "ratings": [null, null] },
            { "name": "Food play", "ratings": [null, null] },
            { "name": "Muscle worship", "ratings": [null, null] },
            { "name": "Adult baby / age regression", "ratings": [null, null] },
            { "name": "CNC with strangers / public", "ratings": [null, null] },
            { "name": "Medical play / needles", "ratings": [null, null] }
          ]
        },
        {
          "name": "Cum-related",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Bukkake", "ratings": [null] },
            { "name": "Creampie", "ratings": [null] },
            { "name": "Cum bath / marking", "ratings": [null] },
            { "name": "Snowballing", "ratings": [null] },
            { "name": "Sloppy seconds", "ratings": [null] },
            { "name": "Excessive cum", "ratings": [null] },
            { "name": "Cum on clothes", "ratings": [null] }
          ]
        },
        {
          "name": "BDSM & Related",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Blindfolds", "ratings": [null] },
            { "name": "Gags", "ratings": [null] },
            { "name": "Leash & collar", "ratings": [null] },
            { "name": "Light / medium bondage", "ratings": [null] },
            { "name": "Heavy / extreme bondage", "ratings": [null] },
            { "name": "Suspension play", "ratings": [null] },
            { "name": "Caging", "ratings": [null] },
            { "name": "Chastity", "ratings": [null] },
            { "name": "Flogging / whipping", "ratings": [null] },
            { "name": "Wax play", "ratings": [null] },
            { "name": "Sadism / masochism", "ratings": [null] },
            { "name": "Objectification", "ratings": [null] },
            { "name": "Public humiliation", "ratings": [null] },
            { "name": "Speech restrictions", "ratings": [null] },
            { "name": "Sissification", "ratings": [null] },
            { "name": "Master / slave", "ratings": [null] },
            { "name": "Master / pet", "ratings": [null] }
          ]
        },
        {
          "name": "Watersports / Scat / Diaper",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Watersports", "ratings": [null, null] },
            { "name": "Scat", "ratings": [null, null] },
            { "name": "Bathroom control", "ratings": [null, null] },
            { "name": "Wetting (clothed)", "ratings": [null, null] },
            { "name": "Diaper wearing", "ratings": [null, null] },
            { "name": "Diaper wetting", "ratings": [null, null] },
            { "name": "Diaper messing", "ratings": [null, null] },
            { "name": "Marking (urine)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Pain",
          "fields": [{ "name": "Top" }, { "name": "Bottom" }],
          "items": [
            { "name": "Light pain", "ratings": [null, null] },
            { "name": "Heavy pain", "ratings": [null, null] },
            { "name": "Nipple clamps", "ratings": [null, null] },
            { "name": "Clothespins", "ratings": [null, null] },
            { "name": "Caning", "ratings": [null, null] },
            { "name": "Flogging", "ratings": [null, null] },
            { "name": "Spanking", "ratings": [null, null] },
            { "name": "Beating", "ratings": [null, null] },
            { "name": "Cock / pussy slapping", "ratings": [null, null] },
            { "name": "Cock / pussy torture", "ratings": [null, null] },
            { "name": "Hot wax", "ratings": [null, null] },
            { "name": "Scratching", "ratings": [null, null] },
            { "name": "Biting", "ratings": [null, null] },
            { "name": "Cutting / knife play", "ratings": [null, null] },
            { "name": "Choking / gagging", "ratings": [null, null] },
            { "name": "Ballbusting", "ratings": [null, null] },
            { "name": "Hair pulling", "ratings": [null, null] },
            { "name": "Face slapping", "ratings": [null, null] }
          ]
        },
        {
          "name": "Extreme / Medical",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Needles / medical play", "ratings": [null] },
            { "name": "Surface cutting / bloodletting", "ratings": [null] },
            { "name": "Electric play (high intensity)", "ratings": [null] },
            { "name": "Asphyxiation (heavy)", "ratings": [null] }
          ]
        }
      ]
    }
  ]
};
