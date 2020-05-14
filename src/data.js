const MAX_PLAYERS = 8;

const data = {
  "blackCards": [
    {
      "text": "The latest SEV 1 was caused by ________."
    },
    {
      "text": "I was flabbergasted when at the quarterly party I saw ________."
    },
    {
      "text": "I couldn't book a single conference room because  ________."
    },
    {
      "text": "Maybe she's born with it. Maybe it's ________."
    },
    {
      "text": "When I am a billionaire, I shall erect a 50-foot statue to commemorate ________."
    },
    {
      "text": "It's a pity that kids these days are all getting involved with ________."
    },
    {
      "text": "Next on ESPN2, the World Series of ________."
    },
    {
      "text": "What will I bring back in time to convince people that I am a powerful wizard?"
    },
    {
      "text": "Next from J.K. Rowling: Harry Potter and the Chamber of ________."
    },
    {
      "text": "Major League Baseball has banned _ for giving players an unfair advantage."
    },
    {
      "text": "________. It's a trap!"
    },
    {
      "text": "When I am the President of the United States, I will create the Department of ________."
    },
    {
      "text": "What's my secret power?"
    },
    {
      "text": "What's that sound?"
    },
    {
      "text": "What never fails to liven up the party?"
    },
    {
      "text": "What is Batman's guilty pleasure?"
    },
    {
      "text": "Alternative medicine is now embracing the curative powers of ________."
    },
    {
      "text": "Coming to Broadway this season, _: The Musical."
    },
    {
      "text": "During his childhood, Salvador Dalí produced hundreds of paintings of ________."
    },
  ],
  "whiteCards": [
    "A single line of CSS",
    "Nickelback.",
    "Steve Conine eating a sandwich",
    "Frolicking.",
    "Chainsaws for hands.",
    "BATMAN!!!",
    "Morgan Freeman's voice.",
    "Vikings.",
    "Judge Judy.",
    "Funky fresh rhymes.",
    "GoGurt®.",
    "Boogers.",
    "The light of a billion suns.",
    "Shiny objects.",
    "Grandma.",
    "Arnold Schwarzenegger.",
    "Raptor attacks.",
    "The glass ceiling.",
    "A mopey zoo lion.",
    "Hot Pockets®.",
    "Geese.",
    "Vigorous jazz hands.",
    "Giving 110%.",
    "An M. Night Shyamalan plot twist.",
    "The Great Depression.",
    "Nicolas Cage.",
    "Switching to Geico®.",
    "Breaking out into song and dance.",
    "Kanye West.",
    "Genghis Khan.",
    "Justin Bieber.",
    "Puppies!",
    "Sweet, sweet vengeance.",
    "Stormtroopers.",
    "Oompa-Loompas.",
    "John Wilkes Booth.",
    "Passive-agression.",
    "The Force.",
    "Count Chocula.",
    "A live studio audience.",
    "Finger painting.",
    "A balanced breakfast.",
    "Silence.",
    "Poor life choices.",
    "That thing that electrocutes your abs.",
    "A sea of troubles.",
    "The penny whistle solo from \"My Heart Will Go On.\"",
    "A middle-aged man on roller skates.",
    "Fear itself.",
    "Centaurs.",
    "Robert Downey, Jr.",
    "Ronald Reagan.",
    "Attitude.",
    "Riding off into the sunset.",
    "Darth Vader.",
    "Cybernetic enhancements.",
    "My soul.",
    "The Little Engine That Could.",
    "Christopher Walken.",
    "Soup that is too hot.",
    "Hot cheese.",
    "A micropig wearing a tiny raincoat and booties.",
    "Shaquille O'Neal's acting career.",
    "Hulk Hogan.",
    "A Super Soaker™",
    "Lunchables™;.",
    "A really cool hat.",
    "Ghosts.",
    "Pabst Blue Ribbon.",
    "Her Majesty, Queen Elizabeth II.",
    "Doing the right thing.",
    "World peace.",
    "Exactly what you'd expect.",
    "One trillion dollars.",
    "New Age music.",
    "A bag of magic beans.",
    "The South.",
    "Saxophone solos.",
    "The Tempur-Pedic® Swedish Sleep System™;.",
    "Synergistic management solutions.",
    "Sunshine and rainbows.",
    "Making a pouty face.",
    "William Shatner.",
    "The Dance of the Sugar Plum Fairy.",
    "Being a sorcerer.",
    "A monkey smoking a cigar.",
    "The Care Bear Stare.",
    "Emotions.",
    "Active listening.",
    "An oversized lollipop.",
    "Hope.",
    "Opposable thumbs.",
    "Bill Nye the Science Guy.",
    "Fancy Feast®.",
    "The Hamburglar.",
    "Domino's™; Oreo™; Dessert Pizza.",
    "Tangled Slinkys.",
    "RoboCop.",
    "A falcon with a cap on its head.",
    "A Bop It™;.",
    "Inappropriate yodeling.",
    "The Big Bang.",
    "Goblins.",
    "Bees?",
    "Sean Connery.",
    "Passive-aggressive Post-it notes.",
    "Some gosh darn peace and quiet.",
    "Agriculture.",
    "A tiny horse.",
    "Flightless birds.",
    "The Kool-Aid Man.",
    "A zesty breakfast burrito.",
    "A time travel paradox.",
    "Keanu Reeves.",
    "Being fabulous.",
    "Lady Gaga.",
    "All-you-can-eat shrimp for $4.99.",
    "Free samples.",
    "Science.",
    "Teaching a robot to love.",
  ]
};

const { blackCards, whiteCards } = data;

export { blackCards, whiteCards, MAX_PLAYERS };