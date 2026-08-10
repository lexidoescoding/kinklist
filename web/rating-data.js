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
          "name": "Bodies & Preferences",
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
            { "name": "Body hair (any)", "ratings": [null] },
            { "name": "Smooth / shaved", "ratings": [null] }
          ]
        },
        {
          "name": "Groupings",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "One-on-one", "ratings": [null] },
            { "name": "Threesome (M/F or same)", "ratings": [null] },
            { "name": "Group / orgy", "ratings": [null] },
            { "name": "Gangbang", "ratings": [null] }
          ]
        },
        {
          "name": "Clothing & Appearance",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Lingerie", "ratings": [null, null] },
            { "name": "Stockings / heels", "ratings": [null, null] },
            { "name": "Leather", "ratings": [null, null] },
            { "name": "Latex / rubber", "ratings": [null, null] },
            { "name": "Uniform / costume", "ratings": [null, null] },
            { "name": "Cross-dressing", "ratings": [null, null] },
            { "name": "Clothed sex", "ratings": [null, null] }
          ]
        },
        {
          "name": "Oral & Manual",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
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
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
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
          "name": "Bondage & Restriction",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Gag", "ratings": [null, null] },
            { "name": "Collar / leash", "ratings": [null, null] },
            { "name": "Blindfold", "ratings": [null, null] },
            { "name": "Light bondage (cuffs, rope)", "ratings": [null, null] },
            { "name": "Heavy bondage", "ratings": [null, null] },
            { "name": "Chastity", "ratings": [null, null] }
          ]
        },
        {
          "name": "Impact & Sensation",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Spanking", "ratings": [null, null] },
            { "name": "Flogging / paddling", "ratings": [null, null] },
            { "name": "Caning", "ratings": [null, null] },
            { "name": "Nipple play / clamps", "ratings": [null, null] },
            { "name": "Hot wax", "ratings": [null, null] },
            { "name": "Ice / temperature play", "ratings": [null, null] },
            { "name": "Scratching / biting", "ratings": [null, null] }
          ]
        },
        {
          "name": "Power Exchange",
          "fields": [{ "name": "As dominant" }, { "name": "As submissive" }],
          "items": [
            { "name": "General D/s", "ratings": [null, null] },
            { "name": "Pet play", "ratings": [null, null] },
            { "name": "Domestic service", "ratings": [null, null] },
            { "name": "Orgasm control / denial", "ratings": [null, null] },
            { "name": "Forced orgasm", "ratings": [null, null] },
            { "name": "Discipline / punishment", "ratings": [null, null] },
            { "name": "Praise / degradation", "ratings": [null, null] }
          ]
        },
        {
          "name": "Breath & Edge",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Choking / breath play (light)", "ratings": [null, null] },
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
          "name": "Bodies – detailed",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Very skinny / waif", "ratings": [null] },
            { "name": "Lean athletic", "ratings": [null] },
            { "name": "Muscular / gym-built", "ratings": [null] },
            { "name": "Soft / average", "ratings": [null] },
            { "name": "Curvy / hourglass", "ratings": [null] },
            { "name": "Chubby", "ratings": [null] },
            { "name": "BBW / BHM", "ratings": [null] },
            { "name": "SSBBW / SSBHM", "ratings": [null] },
            { "name": "Small / perky breasts", "ratings": [null] },
            { "name": "Medium breasts", "ratings": [null] },
            { "name": "Large / heavy breasts", "ratings": [null] },
            { "name": "Small cock", "ratings": [null] },
            { "name": "Average cock", "ratings": [null] },
            { "name": "Large / thick cock", "ratings": [null] },
            { "name": "Uncut", "ratings": [null] },
            { "name": "Cut", "ratings": [null] },
            { "name": "Pubic hair (trimmed)", "ratings": [null] },
            { "name": "Pubic hair (full)", "ratings": [null] },
            { "name": "Fully smooth", "ratings": [null] },
            { "name": "Body hair (chest / arms / legs)", "ratings": [null] },
            { "name": "Armpit hair", "ratings": [null] },
            { "name": "Tattoos", "ratings": [null] },
            { "name": "Piercings (nipple / genital / other)", "ratings": [null] }
          ]
        },
        {
          "name": "Groupings – detailed",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "One-on-one (same gender)", "ratings": [null] },
            { "name": "One-on-one (opposite gender)", "ratings": [null] },
            { "name": "Threesome MMF", "ratings": [null] },
            { "name": "Threesome FFM", "ratings": [null] },
            { "name": "Threesome mixed / flexible", "ratings": [null] },
            { "name": "Foursome+", "ratings": [null] },
            { "name": "Gangbang (receiving)", "ratings": [null] },
            { "name": "Gangbang (giving / participating)", "ratings": [null] },
            { "name": "Orgy / free-for-all", "ratings": [null] },
            { "name": "Swinging / partner exchange", "ratings": [null] },
            { "name": "Cuckolding / cuckqueaning", "ratings": [null] },
            { "name": "Hotwifing / hothusbanding", "ratings": [null] }
          ]
        },
        {
          "name": "Clothing & Gear",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Everyday clothes (clothed sex)", "ratings": [null, null] },
            { "name": "Lingerie / sexy underwear", "ratings": [null, null] },
            { "name": "Stockings / garters / heels", "ratings": [null, null] },
            { "name": "Leather (harness, pants, etc.)", "ratings": [null, null] },
            { "name": "Latex / rubber / catsuit", "ratings": [null, null] },
            { "name": "PVC / vinyl", "ratings": [null, null] },
            { "name": "Uniform (nurse, police, maid, etc.)", "ratings": [null, null] },
            { "name": "Costume / cosplay", "ratings": [null, null] },
            { "name": "Cross-dressing / gender presentation play", "ratings": [null, null] },
            { "name": "Collar + leash (day or scene)", "ratings": [null, null] },
            { "name": "Hood / mask", "ratings": [null, null] },
            { "name": "Gloves / boots", "ratings": [null, null] },
            { "name": "Clothing destruction / cutting", "ratings": [null, null] }
          ]
        },
        {
          "name": "Oral & Mouth",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Kissing (soft / passionate)", "ratings": [null, null] },
            { "name": "Handjob / fingering", "ratings": [null, null] },
            { "name": "Blowjob (regular)", "ratings": [null, null] },
            { "name": "Deepthroat / face-fucking", "ratings": [null, null] },
            { "name": "Swallowing cum", "ratings": [null, null] },
            { "name": "Facial / cum on face", "ratings": [null, null] },
            { "name": "Cum play (body)", "ratings": [null, null] },
            { "name": "Cunnilingus", "ratings": [null, null] },
            { "name": "Face-sitting / smothering", "ratings": [null, null] },
            { "name": "Rimming (light)", "ratings": [null, null] },
            { "name": "Rimming (deep / prolonged)", "ratings": [null, null] },
            { "name": "Spit play", "ratings": [null, null] },
            { "name": "Ass-to-mouth", "ratings": [null, null] }
          ]
        },
        {
          "name": "Anal – detailed",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Anal fingering", "ratings": [null, null] },
            { "name": "Small plugs / beads", "ratings": [null, null] },
            { "name": "Larger plugs / stretching", "ratings": [null, null] },
            { "name": "Anal sex (cock)", "ratings": [null, null] },
            { "name": "Pegging", "ratings": [null, null] },
            { "name": "Double penetration (vag + anal)", "ratings": [null, null] },
            { "name": "Double anal", "ratings": [null, null] },
            { "name": "Anal fisting", "ratings": [null, null] },
            { "name": "Prostate massage / milking", "ratings": [null, null] },
            { "name": "Enema / cleaning play", "ratings": [null, null] }
          ]
        },
        {
          "name": "Toys & Insertion",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Vibrators (external)", "ratings": [null, null] },
            { "name": "Vibrators (internal / wand)", "ratings": [null, null] },
            { "name": "Dildos (realistic)", "ratings": [null, null] },
            { "name": "Dildos (fantasy / large)", "ratings": [null, null] },
            { "name": "Strap-on", "ratings": [null, null] },
            { "name": "Butt plugs (wearable)", "ratings": [null, null] },
            { "name": "Nipple clamps / suction", "ratings": [null, null] },
            { "name": "Cock rings / sleeves", "ratings": [null, null] },
            { "name": "Sounding / urethral play", "ratings": [null, null] },
            { "name": "Electro play (e-stim)", "ratings": [null, null] },
            { "name": "Fuck machine / automated", "ratings": [null, null] }
          ]
        },
        {
          "name": "Bondage & Restriction – detailed",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Soft cuffs / silk ties", "ratings": [null, null] },
            { "name": "Leather cuffs / spreader bar", "ratings": [null, null] },
            { "name": "Rope (basic / shibari)", "ratings": [null, null] },
            { "name": "Suspension (partial)", "ratings": [null, null] },
            { "name": "Full suspension", "ratings": [null, null] },
            { "name": "Gag (ball / bit / ring)", "ratings": [null, null] },
            { "name": "Blindfold / hood", "ratings": [null, null] },
            { "name": "Collar + leash (scene)", "ratings": [null, null] },
            { "name": "Chastity device (short-term)", "ratings": [null, null] },
            { "name": "Chastity (long-term / keyholding)", "ratings": [null, null] },
            { "name": "Mummification / encasement", "ratings": [null, null] },
            { "name": "Cage / confinement", "ratings": [null, null] },
            { "name": "Predicament bondage", "ratings": [null, null] }
          ]
        },
        {
          "name": "Impact & Pain",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Hand spanking", "ratings": [null, null] },
            { "name": "Paddle / hairbrush", "ratings": [null, null] },
            { "name": "Flogger (suede / leather)", "ratings": [null, null] },
            { "name": "Cane / crop", "ratings": [null, null] },
            { "name": "Whip (single-tail)", "ratings": [null, null] },
            { "name": "Belt / strap", "ratings": [null, null] },
            { "name": "Clothespins / clamps (impact)", "ratings": [null, null] },
            { "name": "CBT (cock & ball torture)", "ratings": [null, null] },
            { "name": "Pussy / clit torture", "ratings": [null, null] },
            { "name": "Breast / tit torture", "ratings": [null, null] },
            { "name": "Hot wax", "ratings": [null, null] },
            { "name": "Ice / temperature contrast", "ratings": [null, null] },
            { "name": "Scratching / marking", "ratings": [null, null] },
            { "name": "Biting (marks)", "ratings": [null, null] },
            { "name": "Light cutting / knife play (surface)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Power Exchange – detailed",
          "fields": [{ "name": "As dominant" }, { "name": "As submissive" }],
          "items": [
            { "name": "Soft / sensual D/s", "ratings": [null, null] },
            { "name": "Hard / strict D/s", "ratings": [null, null] },
            { "name": "Pet play (puppy / kitten / pony)", "ratings": [null, null] },
            { "name": "Domestic service / protocol", "ratings": [null, null] },
            { "name": "Slave / owner dynamic", "ratings": [null, null] },
            { "name": "Daddy / Mommy / little (adult)", "ratings": [null, null] },
            { "name": "Brat / brat-tamer", "ratings": [null, null] },
            { "name": "Orgasm control", "ratings": [null, null] },
            { "name": "Orgasm denial (short)", "ratings": [null, null] },
            { "name": "Orgasm denial (extended)", "ratings": [null, null] },
            { "name": "Forced orgasm / overstimulation", "ratings": [null, null] },
            { "name": "Begging / pleading", "ratings": [null, null] },
            { "name": "Praise", "ratings": [null, null] },
            { "name": "Degradation / humiliation (verbal)", "ratings": [null, null] },
            { "name": "Objectification", "ratings": [null, null] },
            { "name": "Financial domination (Findom)", "ratings": [null, null] },
            { "name": "Public protocol / discreet D/s", "ratings": [null, null] }
          ]
        },
        {
          "name": "Sensation & Mind",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Sensory deprivation", "ratings": [null, null] },
            { "name": "Sensory overload", "ratings": [null, null] },
            { "name": "Tickling", "ratings": [null, null] },
            { "name": "Feather / soft touch", "ratings": [null, null] },
            { "name": "Electric play (violet wand / e-stim)", "ratings": [null, null] },
            { "name": "Fire play (safe)", "ratings": [null, null] },
            { "name": "Needle play / temporary piercings", "ratings": [null, null] },
            { "name": "Hypnosis / erotic hypnosis", "ratings": [null, null] },
            { "name": "Fear play (consensual)", "ratings": [null, null] },
            { "name": "Mind-fuck / psychological play", "ratings": [null, null] }
          ]
        },
        {
          "name": "Breath, Edge & Control",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Light choking / breath restriction", "ratings": [null, null] },
            { "name": "More intense breath play", "ratings": [null, null] },
            { "name": "Edging (manual / oral)", "ratings": [null, null] },
            { "name": "Tease & denial", "ratings": [null, null] },
            { "name": "Ruined orgasm", "ratings": [null, null] },
            { "name": "Post-orgasm torture", "ratings": [null, null] }
          ]
        },
        {
          "name": "Fluids & Messy",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Cum play / creampie", "ratings": [null, null] },
            { "name": "Squirt", "ratings": [null, null] },
            { "name": "Watersports (light)", "ratings": [null, null] },
            { "name": "Watersports (heavier)", "ratings": [null, null] },
            { "name": "Spit", "ratings": [null, null] },
            { "name": "Sweat / body fluids (general)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Public & Risk",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Exhibitionism (semi-public)", "ratings": [null] },
            { "name": "Voyeurism", "ratings": [null] },
            { "name": "Public play (discreet)", "ratings": [null] },
            { "name": "Risk of being caught", "ratings": [null] },
            { "name": "Gloryhole", "ratings": [null] }
          ]
        }
      ]
    },
    {
      "id": "please-dont",
      "label": "please don't",
      "groups": [
        {
          "name": "Bodies – exhaustive",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Extremely skinny / underweight", "ratings": [null] },
            { "name": "Lean / toned", "ratings": [null] },
            { "name": "Muscular / bodybuilder", "ratings": [null] },
            { "name": "Average / soft", "ratings": [null] },
            { "name": "Curvy", "ratings": [null] },
            { "name": "Chubby", "ratings": [null] },
            { "name": "BBW", "ratings": [null] },
            { "name": "SSBBW", "ratings": [null] },
            { "name": "BHM", "ratings": [null] },
            { "name": "SSBHM", "ratings": [null] },
            { "name": "Tiny breasts", "ratings": [null] },
            { "name": "Small breasts", "ratings": [null] },
            { "name": "Medium breasts", "ratings": [null] },
            { "name": "Large breasts", "ratings": [null] },
            { "name": "Huge / pendulous breasts", "ratings": [null] },
            { "name": "Small cock", "ratings": [null] },
            { "name": "Average cock", "ratings": [null] },
            { "name": "Large cock", "ratings": [null] },
            { "name": "Very large / thick cock", "ratings": [null] },
            { "name": "Uncut", "ratings": [null] },
            { "name": "Cut", "ratings": [null] },
            { "name": "Full bush", "ratings": [null] },
            { "name": "Trimmed pubic hair", "ratings": [null] },
            { "name": "Fully shaved / waxed", "ratings": [null] },
            { "name": "Chest hair", "ratings": [null] },
            { "name": "Arm / leg hair", "ratings": [null] },
            { "name": "Armpit hair", "ratings": [null] },
            { "name": "Facial hair (beard / stubble)", "ratings": [null] },
            { "name": "Heavy tattoos", "ratings": [null] },
            { "name": "Nipple piercings", "ratings": [null] },
            { "name": "Genital piercings", "ratings": [null] },
            { "name": "Other piercings", "ratings": [null] },
            { "name": "Scars / surgical marks", "ratings": [null] }
          ]
        },
        {
          "name": "Groupings & Dynamics – exhaustive",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Strict one-on-one only", "ratings": [null] },
            { "name": "Casual multi-partner", "ratings": [null] },
            { "name": "Threesome any combination", "ratings": [null] },
            { "name": "Foursome+", "ratings": [null] },
            { "name": "Gangbang (center)", "ratings": [null] },
            { "name": "Gangbang (participant)", "ratings": [null] },
            { "name": "Bukkake", "ratings": [null] },
            { "name": "Orgy / free-use party", "ratings": [null] },
            { "name": "Swinging", "ratings": [null] },
            { "name": "Cuckold / cuckquean", "ratings": [null] },
            { "name": "Hotwife / hothusband", "ratings": [null] },
            { "name": "Polyamory / open relationship play", "ratings": [null] },
            { "name": "Harem / reverse harem style", "ratings": [null] }
          ]
        },
        {
          "name": "Clothing, Gear & Presentation",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Fully clothed sex", "ratings": [null, null] },
            { "name": "Lingerie only", "ratings": [null, null] },
            { "name": "Stockings + garter + heels", "ratings": [null, null] },
            { "name": "Full leather", "ratings": [null, null] },
            { "name": "Full latex / rubber", "ratings": [null, null] },
            { "name": "PVC / shiny", "ratings": [null, null] },
            { "name": "Nurse / medical uniform", "ratings": [null, null] },
            { "name": "Police / authority uniform", "ratings": [null, null] },
            { "name": "Maid / servant outfit", "ratings": [null, null] },
            { "name": "School-style (adult)", "ratings": [null, null] },
            { "name": "Any costume / cosplay", "ratings": [null, null] },
            { "name": "Cross-dressing / feminization clothing", "ratings": [null, null] },
            { "name": "Masculinization clothing", "ratings": [null, null] },
            { "name": "Collar (day collar)", "ratings": [null, null] },
            { "name": "Collar + leash (active)", "ratings": [null, null] },
            { "name": "Hood / full head covering", "ratings": [null, null] },
            { "name": "Gloves (leather / latex)", "ratings": [null, null] },
            { "name": "Boots / shoe play", "ratings": [null, null] },
            { "name": "Clothing cut / torn off", "ratings": [null, null] },
            { "name": "Forced dressing / undressing", "ratings": [null, null] }
          ]
        },
        {
          "name": "Oral, Mouth & Fluids – exhaustive",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Kissing (all kinds)", "ratings": [null, null] },
            { "name": "Handjob / fingering (any)", "ratings": [null, null] },
            { "name": "Blowjob (gentle)", "ratings": [null, null] },
            { "name": "Blowjob (rough / face-fuck)", "ratings": [null, null] },
            { "name": "Deepthroat to limit", "ratings": [null, null] },
            { "name": "Swallowing", "ratings": [null, null] },
            { "name": "Facial", "ratings": [null, null] },
            { "name": "Cum on body / chest / tits", "ratings": [null, null] },
            { "name": "Cum in mouth held", "ratings": [null, null] },
            { "name": "Cunnilingus (any style)", "ratings": [null, null] },
            { "name": "Face-sitting (light)", "ratings": [null, null] },
            { "name": "Face-sitting (smothering)", "ratings": [null, null] },
            { "name": "Rimming (external)", "ratings": [null, null] },
            { "name": "Rimming (tongue-fucking)", "ratings": [null, null] },
            { "name": "Ass-to-mouth", "ratings": [null, null] },
            { "name": "Spit in mouth / on face", "ratings": [null, null] },
            { "name": "Drool / messy oral", "ratings": [null, null] }
          ]
        },
        {
          "name": "Anal – exhaustive",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Anal fingering", "ratings": [null, null] },
            { "name": "Small / beginner plugs", "ratings": [null, null] },
            { "name": "Medium plugs / training", "ratings": [null, null] },
            { "name": "Large plugs / stretching", "ratings": [null, null] },
            { "name": "Anal beads", "ratings": [null, null] },
            { "name": "Anal sex (cock)", "ratings": [null, null] },
            { "name": "Pegging", "ratings": [null, null] },
            { "name": "Double penetration", "ratings": [null, null] },
            { "name": "Double anal", "ratings": [null, null] },
            { "name": "Anal fisting", "ratings": [null, null] },
            { "name": "Prostate play / milking", "ratings": [null, null] },
            { "name": "Enema (cleaning)", "ratings": [null, null] },
            { "name": "Enema (play / holding)", "ratings": [null, null] },
            { "name": "Speculum / spreading", "ratings": [null, null] }
          ]
        },
        {
          "name": "Toys & Devices – exhaustive",
          "fields": [{ "name": "Self" }, { "name": "Partner" }],
          "items": [
            { "name": "Bullet / small vibrator", "ratings": [null, null] },
            { "name": "Wand / Hitachi-style", "ratings": [null, null] },
            { "name": "Realistic dildo", "ratings": [null, null] },
            { "name": "Fantasy / large dildo", "ratings": [null, null] },
            { "name": "Strap-on harness", "ratings": [null, null] },
            { "name": "Butt plug (any size)", "ratings": [null, null] },
            { "name": "Inflatable toys", "ratings": [null, null] },
            { "name": "Nipple clamps (any)", "ratings": [null, null] },
            { "name": "Nipple suction / pumps", "ratings": [null, null] },
            { "name": "Cock ring / ball stretcher", "ratings": [null, null] },
            { "name": "Chastity cage (any)", "ratings": [null, null] },
            { "name": "Sounding rods / plugs", "ratings": [null, null] },
            { "name": "E-stim / TENS / violet wand", "ratings": [null, null] },
            { "name": "Fuck machine", "ratings": [null, null] },
            { "name": "Vacuum / pumping (breast / cock)", "ratings": [null, null] },
            { "name": "Anal hooks / spreaders", "ratings": [null, null] }
          ]
        },
        {
          "name": "Bondage & Restriction – exhaustive",
          "fields": [{ "name": "On self" }, { "name": "On partner" }],
          "items": [
            { "name": "Soft restraints (silk, scarf)", "ratings": [null, null] },
            { "name": "Leather cuffs", "ratings": [null, null] },
            { "name": "Metal cuffs / shackles", "ratings": [null, null] },
            { "name": "Rope (decorative)", "ratings": [null, null] },
            { "name": "Rope (restrictive / shibari)", "ratings": [null, null] },
            { "name": "Partial suspension", "ratings": [null, null] },
            { "name": "Full suspension", "ratings": [null, null] },
            { "name": "Ball gag", "ratings": [null, null] },
            { "name": "Bit gag / ring gag", "ratings": [null, null] },
            { "name": "Panel gag / tape", "ratings": [null, null] },
            { "name": "Blindfold", "ratings": [null, null] },
            { "name": "Hood (open / closed)", "ratings": [null, null] },
            { "name": "Collar (any style)", "ratings": [null, null] },
            { "name": "Leash control", "ratings": [null, null] },
            { "name": "Chastity (hours)", "ratings": [null, null] },
            { "name": "Chastity (days+)", "ratings": [null, null] },
            { "name": "Mummification (plastic / tape / vacuum)", "ratings": [null, null] },
            { "name": "Cage / kennel / confinement", "ratings": [null, null] },
            { "name": "Predicament / stress positions", "ratings": [null, null] },
            { "name": "Spreader bars / posture collars", "ratings": [null, null] },
            { "name": "Armbinders / straitjacket", "ratings": [null, null] }
          ]
        },
        {
          "name": "Impact, Pain & Marking – exhaustive",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Hand spanking", "ratings": [null, null] },
            { "name": "Paddle", "ratings": [null, null] },
            { "name": "Flogger (soft)", "ratings": [null, null] },
            { "name": "Flogger (heavy / thud)", "ratings": [null, null] },
            { "name": "Crop / riding crop", "ratings": [null, null] },
            { "name": "Cane", "ratings": [null, null] },
            { "name": "Single-tail whip", "ratings": [null, null] },
            { "name": "Belt / strap", "ratings": [null, null] },
            { "name": "Clothespins / zipper", "ratings": [null, null] },
            { "name": "Nipple clamps (heavy)", "ratings": [null, null] },
            { "name": "CBT (any intensity)", "ratings": [null, null] },
            { "name": "Pussy / clit impact or torture", "ratings": [null, null] },
            { "name": "Breast impact / torture", "ratings": [null, null] },
            { "name": "Hot wax (any temperature)", "ratings": [null, null] },
            { "name": "Ice / extreme temperature", "ratings": [null, null] },
            { "name": "Scratching (drawing blood or not)", "ratings": [null, null] },
            { "name": "Biting (marks / bruises)", "ratings": [null, null] },
            { "name": "Knife play (dull / surface)", "ratings": [null, null] },
            { "name": "Knife play (sharp / light cutting)", "ratings": [null, null] },
            { "name": "Needle play", "ratings": [null, null] },
            { "name": "Branding / temporary marks", "ratings": [null, null] },
            { "name": "Heavy bruising / lasting marks", "ratings": [null, null] }
          ]
        },
        {
          "name": "Power Exchange & Roles – exhaustive",
          "fields": [{ "name": "As dominant" }, { "name": "As submissive" }],
          "items": [
            { "name": "Soft / service-oriented D/s", "ratings": [null, null] },
            { "name": "Strict / high-protocol D/s", "ratings": [null, null] },
            { "name": "Total power exchange (TPE)", "ratings": [null, null] },
            { "name": "Pet play (any animal)", "ratings": [null, null] },
            { "name": "Pony play", "ratings": [null, null] },
            { "name": "Puppy / dog play", "ratings": [null, null] },
            { "name": "Kitten play", "ratings": [null, null] },
            { "name": "Domestic service / housework", "ratings": [null, null] },
            { "name": "Slave training / ownership", "ratings": [null, null] },
            { "name": "Daddy / little (adult)", "ratings": [null, null] },
            { "name": "Mommy / little (adult)", "ratings": [null, null] },
            { "name": "Brat dynamic", "ratings": [null, null] },
            { "name": "Orgasm control (any)", "ratings": [null, null] },
            { "name": "Long-term denial", "ratings": [null, null] },
            { "name": "Forced / multiple orgasms", "ratings": [null, null] },
            { "name": "Begging", "ratings": [null, null] },
            { "name": "Praise kink", "ratings": [null, null] },
            { "name": "Verbal humiliation / degradation", "ratings": [null, null] },
            { "name": "Objectification / furniture", "ratings": [null, null] },
            { "name": "Findom / financial control", "ratings": [null, null] },
            { "name": "Public / social protocol", "ratings": [null, null] },
            { "name": "24/7 dynamic elements", "ratings": [null, null] }
          ]
        },
        {
          "name": "Sensation, Mind & Edge – exhaustive",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Full sensory deprivation", "ratings": [null, null] },
            { "name": "Sensory overload", "ratings": [null, null] },
            { "name": "Tickling (light / intense)", "ratings": [null, null] },
            { "name": "Feather / soft tools", "ratings": [null, null] },
            { "name": "Electric play (any)", "ratings": [null, null] },
            { "name": "Fire play", "ratings": [null, null] },
            { "name": "Needle / temporary piercing play", "ratings": [null, null] },
            { "name": "Erotic hypnosis", "ratings": [null, null] },
            { "name": "Fear play / interrogation", "ratings": [null, null] },
            { "name": "Psychological / mind-fuck", "ratings": [null, null] },
            { "name": "CNC (consensual non-consent)", "ratings": [null, null] },
            { "name": "Kidnapping / abduction play (consensual)", "ratings": [null, null] },
            { "name": "Sleep play / somnophilia (consensual)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Breath & Orgasm Control – exhaustive",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Light hand choking", "ratings": [null, null] },
            { "name": "Breath restriction (any method)", "ratings": [null, null] },
            { "name": "Edging (prolonged)", "ratings": [null, null] },
            { "name": "Tease & denial (hours/days)", "ratings": [null, null] },
            { "name": "Ruined orgasm", "ratings": [null, null] },
            { "name": "Post-orgasm torture / overstimulation", "ratings": [null, null] },
            { "name": "Forced multiple orgasms", "ratings": [null, null] }
          ]
        },
        {
          "name": "Fluids, Mess & Extreme Body",
          "fields": [{ "name": "Giving" }, { "name": "Receiving" }],
          "items": [
            { "name": "Creampie / cum inside", "ratings": [null, null] },
            { "name": "Squirt / female ejaculation", "ratings": [null, null] },
            { "name": "Watersports (light / golden showers)", "ratings": [null, null] },
            { "name": "Watersports (heavier / immersion)", "ratings": [null, null] },
            { "name": "Spit play (any)", "ratings": [null, null] },
            { "name": "Sweat / body odor focus", "ratings": [null, null] },
            { "name": "Menstrual play", "ratings": [null, null] },
            { "name": "Scat / toilet play", "ratings": [null, null] },
            { "name": "Blood play (consensual / safe)", "ratings": [null, null] }
          ]
        },
        {
          "name": "Public, Risk & Social",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Exhibitionism (private / semi)", "ratings": [null] },
            { "name": "Exhibitionism (higher risk)", "ratings": [null] },
            { "name": "Voyeurism", "ratings": [null] },
            { "name": "Public sex / play", "ratings": [null] },
            { "name": "Risk of discovery", "ratings": [null] },
            { "name": "Gloryhole", "ratings": [null] },
            { "name": "Dogging / outdoor group", "ratings": [null] },
            { "name": "Club / dungeon public play", "ratings": [null] }
          ]
        },
        {
          "name": "Other / Niche",
          "fields": [{ "name": "General" }],
          "items": [
            { "name": "Food play / feeding", "ratings": [null] },
            { "name": "Temperature extremes (beyond wax/ice)", "ratings": [null] },
            { "name": "Medical play (speculum, exam)", "ratings": [null] },
            { "name": "ABDL / diaper play (adult)", "ratings": [null] },
            { "name": "Age play (adult only)", "ratings": [null] },
            { "name": "Race play (consensual)", "ratings": [null] },
            { "name": "Impregnation / breeding kink", "ratings": [null] },
            { "name": "Pregnancy play / sex during pregnancy", "ratings": [null] },
            { "name": "Lactation play", "ratings": [null] },
            { "name": "Foot / shoe / boot worship", "ratings": [null] },
            { "name": "Armpit / body part worship", "ratings": [null] },
            { "name": "Smoking / ash play", "ratings": [null] },
            { "name": "Any other niche not listed", "ratings": [null] }
          ]
        }
      ]
    }
  ]
}
