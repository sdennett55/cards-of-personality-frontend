const MAX_PLAYERS = 8;

const data = {
  "blackCards": [
    {
      "text": "This is the way the world ends / This is the way the world ends / Not with a bang but with _."
    },
    {
      "text": "Why can't I sleep at night?"
    },
    {
      "text": "In Michael Jackson's final moments, he thought about _."
    },
    {
      "text": "The Smithsonian Museum of Natural History has just opened an exhibit on _."
    },
    {
      "text": "I drink to forget _."
    },
    {
      "text": "Maybe she's born with it. Maybe it's _."
    },
    {
      "text": "What does Dick Cheney prefer?"
    },
    {
      "text": "Daddy, why is Mommy crying?"
    },
    {
      "text": "What's a girl's best friend?"
    },
    {
      "text": "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?"
    },
    {
      "text": "When I am a billionaire, I shall erect a 50-foot statue to commemorate _."
    },
    {
      "text": "White people like _."
    },
    {
      "text": "During sex, I like to think about _."
    },
    {
      "text": "What did Vin Diesel eat for dinner?"
    },
    {
      "text": "What did I bring back from Mexico?"
    },
    {
      "text": "What's the most emo?"
    },
    {
      "text": "It's a pity that kids these days are all getting involved with _."
    },
    {
      "text": "Next on ESPN2, the World Series of _."
    },
    {
      "text": "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _."
    },
    {
      "text": "What will I bring back in time to convince people that I am a powerful wizard?"
    },
    {
      "text": "Next from J.K. Rowling: Harry Potter and the Chamber of _."
    },
    {
      "text": "What are my parents hiding from me?"
    },
    {
      "text": "War! What is it good for?"
    },
    {
      "text": "I got 99 problems but _ ain't one."
    },
    {
      "text": "But before I kill you, Mr. Bond, I must show you _."
    },
    {
      "text": "What gives me uncontrollable gas?"
    },
    {
      "text": "Major League Baseball has banned _ for giving players an unfair advantage."
    },
    {
      "text": "BILLY MAYS HERE FOR _."
    },
    {
      "text": "_. It's a trap!"
    },
    {
      "text": "TSA guidelines now prohibit _ on airplanes."
    },
    {
      "text": "What's my secret power?"
    },
    {
      "text": "What's my anti-drug?"
    },
    {
      "text": "I'm sorry, Professor, but I couldn't complete my homework because of _."
    },
    {
      "text": "What's there a ton of in heaven?"
    },
    {
      "text": "I do not know with which weapons World War III will be fought, but World War IV will be fought with _."
    },
    {
      "text": "_: Good to the last drop."
    },
    {
      "text": "Instead of coal, Santa now gives the bad children _."
    },
    {
      "text": "Why do I hurt all over?"
    },
    {
      "text": "What's that sound?"
    },
    {
      "text": "What's Teach for America using to inspire inner city students to succeed?"
    },
    {
      "text": "What am I giving up for Lent?"
    },
    {
      "text": "What never fails to liven up the party?"
    },
    {
      "text": "What did the U.S. airdrop to the children of Afghanistan?"
    },
    {
      "text": "Studies show that lab rats navigate mazes 50% faster after being exposed to _."
    },
    {
      "text": "In L.A. County Jail, word is you can trade 200 cigarettes for _."
    },
    {
      "text": "_: kid-tested, mother-approved."
    },
    {
      "text": "Why am I sticky?"
    },
    {
      "text": "What is Batman's guilty pleasure?"
    },
    {
      "text": "How am I maintaining my relationship status?"
    },
    {
      "text": "_. Betcha can't have just one!"
    },
    {
      "text": "Here is the church. Here is the steeple. Open the doors. And there is _."
    },
    {
      "text": "What helps Obama unwind?"
    },
    {
      "text": "Dear Abby, I'm having some trouble with _ and would like your advice."
    },
    {
      "text": "What would grandma find disturbing, yet oddly charming?"
    },
    {
      "text": "Alternative medicine is now embracing the curative powers of _."
    },
    {
      "text": "What's the next Happy Meal® toy?"
    },
    {
      "text": "_. High five, bro."
    },
    {
      "text": "What's that smell?"
    },
    {
      "text": "What gets better with age?"
    },
    {
      "text": "What don't you want to find in your Kung Pao chicken?"
    },
    {
      "text": "What ended my last relationship?"
    },
    {
      "text": "What's the new fad diet?"
    },
    {
      "text": "How did I lose my virginity?"
    },
    {
      "text": "In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time."
    },
    {
      "text": "The class field trip was completely ruined by _."
    },
    {
      "text": "Coming to Broadway this season, _: The Musical."
    },
    {
      "text": "After the earthquake, Sean Penn brought _ to the people of Haiti."
    },
    {
      "text": "During his childhood, Salvador Dalí produced hundreds of paintings of _."
    },
    {
      "text": "A romantic, candlelit dinner would be incomplete without _."
    },
    {
      "text": "When I am the President of the United States, I will create the Department of _."
    },
    {
      "text": "MTV's new reality show features eight washed-up celebrities living with _."
    },
    {
      "text": "Life for American Indians was forever changed when the White Man introduced them to _."
    },
    {
      "text": "What do old people smell like? "
    },
    {
      "text": "When Pharaoh remained unmoved, Moses called down a plague of _."
    },
    {
      "text": "_. That's how I want to die."
    },
    {
      "text": "What will always get you laid?"
    }
  ], "whiteCards": [
    "Spontaneous human combustion.",
    "Nickelback.",
    "A sassy black woman.",
    "Frolicking.",
    "The Rev. Dr. Martin Luther King, Jr.",
    "Republicans.",
    "Chainsaws for hands.",
    "BATMAN!!!",
    "Morgan Freeman's voice.",
    "Vikings.",
    "Judge Judy.",
    "Picking up girls at the abortion clinic.",
    "Roofies.",
    "Poorly-timed Holocaust jokes.",
    "Funky fresh rhymes.",
    "Bitches.",
    "Teenage pregnancy.",
    "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
    "Sharing needles.",
    "Lance Armstrong's missing testicle.",
    "Muhammed (Praise Be Unto Him).",
    "Eating all of the cookies before the AIDS bake-sale.",
    "Obesity.",
    "Famine.",
    "Dick fingers.",
    "Hospice care.",
    "GoGurt®.",
    "White people.",
    "Boogers.",
    "Tasteful sideboob.",
    "Being on fire.",
    "The light of a billion suns.",
    "Shiny objects.",
    "Getting naked and watching Nickelodeon.",
    "Dying of dysentery.",
    "Auschwitz.",
    "Wet dreams.",
    "Yeast.",
    "Embryonic stem cells.",
    "Stranger danger.",
    "Genital piercings.",
    "Racism.",
    "A bleached asshole.",
    "Man meat.",
    "Full frontal nudity.",
    "Toni Morrison's vagina.",
    "Menstrual rage.",
    "My genitals.",
    "Grandma.",
    "Lockjaw.",
    "Arnold Schwarzenegger.",
    "Cheating in the Special Olympics.",
    "Dental dams.",
    "Raptor attacks.",
    "The glass ceiling.",
    "Flesh-eating bacteria.",
    "Taking off your shirt.",
    "A mopey zoo lion.",
    "A defective condom.",
    "Hot Pockets®.",
    "Praying the gay away.",
    "Geese.",
    "God.",
    "The invisible hand.",
    "Vigorous jazz hands.",
    "Being fat and stupid.",
    "Getting so angry that you pop a boner.",
    "Farting and walking away.",
    "Italians.",
    "The American Dream.",
    "Scientology.",
    "The Hustle.",
    "Rehab.",
    "Copping a feel.",
    "The profoundly handicapped.",
    "Giving 110%.",
    "An M. Night Shyamalan plot twist.",
    "Jerking off into a pool of children's tears.",
    "African children.",
    "The Great Depression.",
    "Foreskin.",
    "Multiple stab wounds.",
    "The miracle of childbirth.",
    "Nicolas Cage.",
    "Passable transvestites.",
    "Sperm whales.",
    "The placenta.",
    "Switching to Geico®.",
    "The gays.",
    "Poopy diapers.",
    "Harry Potter erotica.",
    "Men.",
    "Heartwarming orphans.",
    "Breaking out into song and dance.",
    "Police brutality.",
    "Kanye West.",
    "Genghis Khan.",
    "Justin Bieber.",
    "A salty surprise.",
    "Powerful thighs.",
    "Puppies!",
    "The true meaning of Christmas.",
    "Skeletor.",
    "A foul mouth.",
    "Serfdom.",
    "Wearing underwear inside-out to avoid doing laundry.",
    "The art of seduction.",
    "Dead babies.",
    "Sweet, sweet vengeance.",
    "Crystal meth.",
    "Explosions.",
    "Being rich.",
    "Former President George W. Bush.",
    "Authentic Mexican cuisine.",
    "Stormtroopers.",
    "Oompa-Loompas.",
    "Road head.",
    "John Wilkes Booth.",
    "A mime having a stroke.",
    "Porn stars.",
    "Erectile dysfunction.",
    "Shapeshifters.",
    "Cuddling.",
    "Masturbation.",
    "Michael Jackson.",
    "Stalin.",
    "Britney Spears at 55.",
    "Figgy pudding.",
    "Passive-agression.",
    "A thermonuclear detonation.",
    "The Force.",
    "Dropping a chandelier on your enemies and riding the rope up.",
    "Viagra®.",
    "Golden showers.",
    "The World of Warcraft.",
    "Wifely duties.",
    "The Blood of Christ.",
    "Count Chocula.",
    "A live studio audience.",
    "Incest.",
    "A windmill full of corpses.",
    "A death ray.",
    "A cooler full of organs.",
    "Tentacle porn.",
    "Heteronormativity.",
    "A pyramid of severed heads.",
    "Vigilante justice.",
    "72 virgins.",
    "Finger painting.",
    "A snapping turtle biting the tip of your penis.",
    "A balanced breakfast.",
    "Smegma.",
    "Friendly fire.",
    "Crippling debt.",
    "Silence.",
    "A brain tumor.",
    "Spectacular abs.",
    "Tickling Sean Hannity, even after he tells you to stop.",
    "Poor life choices.",
    "Pixelated bukkake.",
    "The taint; the grundle; the fleshy fun-bridge.",
    "The Trail of Tears.",
    "That thing that electrocutes your abs.",
    "Not giving a shit about the Third World.",
    "Advice from a wise, old black man.",
    "A sea of troubles.",
    "Bling.",
    "The penny whistle solo from \"My Heart Will Go On.\"",
    "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.",
    "The terrorists.",
    "Ethnic cleansing.",
    "Not reciprocating oral sex.",
    "Prancing.",
    "A middle-aged man on roller skates.",
    "Mutually-assured destruction.",
    "Fear itself.",
    "Centaurs.",
    "Autocannibalism.",
    "The Make-A-Wish® Foundation.",
    "A bitch slap.",
    "When you fart and a little bit comes out.",
    "Robert Downey, Jr.",
    "Ronald Reagan.",
    "AIDS.",
    "Pac-Man uncontrollably guzzling cum.",
    "My relationship status.",
    "Fiery poops.",
    "Eugenics.",
    "Hurricane Katrina.",
    "Assless chaps.",
    "The Pope.",
    "Eating the last known bison.",
    "Attitude.",
    "Concealing a boner.",
    "Riding off into the sunset.",
    "A gassy antelope.",
    "Darth Vader.",
    "Natural male enhancement.",
    "Waiting 'til marriage.",
    "Chunks of dead prostitute.",
    "Cybernetic enhancements.",
    "Nipple blades.",
    "Anal beads.",
    "Guys who don't call.",
    "My soul.",
    "Getting really high.",
    "Michelle Obama's arms.",
    "Extremely tight pants.",
    "A tribe of warrior women.",
    "The Amish.",
    "Drinking alone.",
    "Two midgets shitting into a bucket.",
    "A hot mess.",
    "The token minority.",
    "The Little Engine That Could.",
    "The hardworking Mexican.",
    "Waking up half-naked in a Denny's parking lot.",
    "Dry heaving.",
    "Repression.",
    "Christopher Walken.",
    "Scalping.",
    "Elderly Japanese men.",
    "Soup that is too hot.",
    "Hot cheese.",
    "The Underground Railroad.",
    "Cards Against Humanity.",
    "Necrophilia.",
    "A micropig wearing a tiny raincoat and booties.",
    "MechaHitler.",
    "Destroying the evidence.",
    "Shaquille O'Neal's acting career.",
    "Hulk Hogan.",
    "Child beauty pageants.",
    "Stephen Hawking talking dirty.",
    "Asians who aren't good at math.",
    "An M16 assault rifle.",
    "The violation of our most basic human rights.",
    "The Jews.",
    "A Super Soaker™; full of cat pee.",
    "Children on leashes.",
    "My inner demons.",
    "Pulling out.",
    "Half-assed foreplay.",
    "Gandhi.",
    "Barack Obama.",
    "My vagina.",
    "The female orgasm.",
    "The Devil himself.",
    "Lunchables™;.",
    "Friction.",
    "The homosexual agenda.",
    "8 oz. of sweet Mexican black-tar heroin.",
    "A robust mongoloid.",
    "Dead parents.",
    "Not wearing pants.",
    "Five-Dollar Footlongs™;.",
    "A lifetime of sadness.",
    "Take-backsies.",
    "Leprosy.",
    "A really cool hat.",
    "Pedophiles.",
    "The entire Mormon Tabernacle Choir.",
    "Altar boys.",
    "The Holy Bible.",
    "Puberty.",
    "Pooping back and forth. Forever.",
    "Panda sex.",
    "Lactation.",
    "Sexual tension.",
    "Balls.",
    "Dick Cheney.",
    "Ghosts.",
    "My humps.",
    "Pabst Blue Ribbon.",
    "Her Majesty, Queen Elizabeth II.",
    "A micropenis.",
    "Doing the right thing.",
    "Rush Limbaugh's soft, shitty body.",
    "Daddy issues.",
    "Me time.",
    "Unfathomable stupidity.",
    "World peace.",
    "The Virginia Tech Massacre.",
    "Pictures of boobs.",
    "An Oedipus complex.",
    "Exactly what you'd expect.",
    "One trillion dollars.",
    "New Age music.",
    "A bag of magic beans.",
    "The South.",
    "An asymmetric boob job.",
    "Adderall™;.",
    "Sexy pillow fights.",
    "Queefing.",
    "Saxophone solos.",
    "The Tempur-Pedic® Swedish Sleep System™;.",
    "Helplessly giggling at the mention of Hutus and Tutsis.",
    "Synergistic management solutions.",
    "Flying sex snakes.",
    "Sunshine and rainbows.",
    "Making a pouty face.",
    "William Shatner.",
    "Historically black colleges.",
    "Vehicular manslaughter.",
    "A sausage festival.",
    "The Dance of the Sugar Plum Fairy.",
    "The Rapture.",
    "Throwing a virgin into a volcano.",
    "An ugly face.",
    "Sniffing glue.",
    "Edible underpants.",
    "Being a motherfucking sorcerer.",
    "A monkey smoking a cigar.",
    "A fetus.",
    "The Care Bear Stare.",
    "White privilege.",
    "Emotions.",
    "Active listening.",
    "A spastic nerd.",
    "Land mines.",
    "Grave robbing.",
    "Dying.",
    "Surprise sex!",
    "An oversized lollipop.",
    "Hope.",
    "Getting drunk on mouthwash.",
    "Opposable thumbs.",
    "Self-loathing.",
    "The Übermensch.",
    "Gloryholes.",
    "German dungeon porn.",
    "A good sniff.",
    "Bill Nye the Science Guy.",
    "Third base.",
    "Amputees.",
    "Fancy Feast®.",
    "The Hamburglar.",
    "Crucifixion.",
    "Mr. Clean, right behind you.",
    "Domino's™; Oreo™; Dessert Pizza.",
    "Estrogen.",
    "Hot people.",
    "Tangled Slinkys.",
    "Pretending to care.",
    "Smallpox blankets.",
    "Nazis.",
    "Horse meat.",
    "An icepick lobotomy.",
    "RoboCop.",
    "Black people.",
    "Peeing a little bit.",
    "The milk man.",
    "A falcon with a cap on its head.",
    "Battlefield amputations.",
    "The chronic.",
    "Public ridicule.",
    "Hormone injections.",
    "Jewish fraternities.",
    "A Bop It™;.",
    "Overcompensation.",
    "Coat hanger abortions.",
    "50,000 volts straight to the nipples.",
    "Scrubbing under the folds.",
    "Inappropriate yodeling.",
    "A stray pube.",
    "My collection of high-tech sex toys.",
    "Mouth herpes.",
    "Sarah Palin.",
    "The Big Bang.",
    "A homoerotic volleyball montage.",
    "The Boy Scouts of America.",
    "Goblins.",
    "Natural selection.",
    "Natalie Portman.",
    "Parting the Red Sea.",
    "Leaving an awkward voicemail.",
    "Friends with benefits.",
    "Used panties.",
    "The Three-Fifths compromise.",
    "Fingering.",
    "Wiping her butt.",
    "Women's suffrage.",
    "Kamikaze pilots.",
    "Actually taking candy from a baby.",
    "The inevitable heat death of the universe.",
    "Penis envy.",
    "A gentle caress of the inner thigh.",
    "Bees?",
    "Sean Connery.",
    "Doin' it in the butt.",
    "Passive-aggressive Post-it notes.",
    "Being marginalized.",
    "Poor people.",
    "Consensual sex.",
    "Passing a kidney stone.",
    "Home video of Oprah sobbing into a Lean Cuisine®.",
    "The heart of a child.",
    "Testicular torsion.",
    "Sean Penn.",
    "A bucket of fish heads.",
    "Object permanence.",
    "The KKK.",
    "Lumberjack fantasies.",
    "Some god-damn peace and quiet.",
    "Capturing Newt Gingrich and forcing him to dance in a monkey suit.",
    "Racially-biased SAT questions.",
    "Agriculture.",
    "A tiny horse.",
    "Alcoholism.",
    "A sad handjob.",
    "Swooping.",
    "Flightless birds.",
    "Tom Cruise.",
    "Classist undertones.",
    "The Kool-Aid Man.",
    "Same-sex ice dancing.",
    "Another goddamn vampire movie.",
    "A zesty breakfast burrito.",
    "A subscription to Men's Fitness.",
    "Aaron Burr.",
    "Licking things to claim them as your own.",
    "A time travel paradox.",
    "Women in yogurt commercials.",
    "Keanu Reeves.",
    "Winking at old people.",
    "A mating display.",
    "A can of whoop-ass.",
    "Preteens.",
    "Being fabulous.",
    "AXE Body Spray.",
    "The Chinese gymnastics team.",
    "A disappointing birthday party.",
    "Sexting.",
    "The clitoris.",
    "My sex life.",
    "A murder most foul.",
    "Whipping it out.",
    "Old-people smell.",
    "Lady Gaga.",
    "Feeding Rosie O'Donnell.",
    "All-you-can-eat shrimp for $4.99.",
    "Laying an egg.",
    "The folly of man.",
    "Free samples.",
    "Homeless people.",
    "Civilian casualties.",
    "An uppercut.",
    "Science.",
    "Bingeing and purging.",
    "Kids with ass cancer.",
    "Seppuku.",
    "Expecting a burp and vomiting on the floor.",
    "Growing a pair.",
    "An erection that lasts longer than four hours.",
    "Teaching a robot to love.",
    "Brown people.",
    "Being a dick to children.",
    "Horrifying laser hair removal accidents.",
    "Firing a rifle into the air while balls deep in a squealing hog.",
    "Catapults."
  ]
};

const { blackCards, whiteCards } = data;

export { blackCards, whiteCards, MAX_PLAYERS };