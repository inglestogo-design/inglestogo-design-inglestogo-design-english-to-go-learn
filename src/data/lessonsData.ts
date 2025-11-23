import { LessonData } from "@/components/lessons/LessonContent";

export const lessons: LessonData[] = [
  {
    number: 1,
    title: "Apresentação Pessoal",
    titleEn: "Personal Introduction",
    objective: "Aprenda a se apresentar em inglês",
    modelPhrase: {
      text: "Hi, I'm Maria",
      pronunciation: "rái, áim Maríia",
      translation: "Oi, eu sou Maria"
    },
    fillBlanks: [
      {
        sentence: "Hi, ___ John",
        blank: "I'm",
        options: ["I'm", "I am", "My", "Me"],
        correct: "I'm"
      },
      {
        sentence: "Nice to ___ you",
        blank: "meet",
        options: ["meet", "met", "meeting", "meets"],
        correct: "meet"
      },
      {
        sentence: "What's ___ name?",
        blank: "your",
        options: ["your", "you", "yours", "you're"],
        correct: "your"
      }
    ],
    multipleChoice: [
      {
        question: "Como você diz 'prazer em conhecê-lo' em inglês?",
        options: ["Nice to meet you", "Good to see you", "How are you", "What's up"],
        correct: "Nice to meet you"
      },
      {
        question: "Qual a resposta correta para 'What's your name?'",
        options: ["I'm Carlos", "My name Carlos", "Carlos is me", "Name is Carlos"],
        correct: "I'm Carlos"
      },
      {
        question: "Como você pergunta o nome de alguém?",
        options: ["What's your name?", "Who are you?", "What you name?", "Your name is?"],
        correct: "What's your name?"
      }
    ],
    finalPractice: [
      {
        text: "Hello, my name is Ana",
        pronunciation: "relôu, mái nêim iz Ána",
        translation: "Olá, meu nome é Ana"
      },
      {
        text: "Nice to meet you too",
        pronunciation: "náis tu míit iú tú",
        translation: "Prazer em conhecê-lo também"
      }
    ]
  },
  {
    number: 2,
    title: "Falando Idade",
    titleEn: "Talking About Age",
    objective: "Aprenda a dizer e perguntar sobre idade",
    modelPhrase: {
      text: "I'm twenty years old",
      pronunciation: "áim tuénti íerz ôuld",
      translation: "Eu tenho vinte anos"
    },
    fillBlanks: [
      {
        sentence: "How ___ are you?",
        blank: "old",
        options: ["old", "age", "years", "much"],
        correct: "old"
      },
      {
        sentence: "I'm fifteen ___ old",
        blank: "years",
        options: ["years", "year", "age", "old"],
        correct: "years"
      },
      {
        sentence: "She ___ thirty years old",
        blank: "is",
        options: ["is", "are", "am", "be"],
        correct: "is"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta a idade de alguém educadamente?",
        options: ["How old are you?", "What's your age?", "How many years?", "Age please?"],
        correct: "How old are you?"
      },
      {
        question: "Como você diz 'Eu tenho 25 anos'?",
        options: ["I'm twenty-five years old", "I have 25 years", "My age is 25", "I'm 25 age"],
        correct: "I'm twenty-five years old"
      },
      {
        question: "Qual está correto?",
        options: ["He is forty years old", "He have 40 years", "He are forty", "He's forty year"],
        correct: "He is forty years old"
      }
    ],
    finalPractice: [
      {
        text: "I'm eighteen years old",
        pronunciation: "áim êitíin íerz ôuld",
        translation: "Eu tenho dezoito anos"
      },
      {
        text: "How old is your brother?",
        pronunciation: "ráu ôuld iz iór brâder?",
        translation: "Quantos anos tem seu irmão?"
      }
    ]
  },
  {
    number: 3,
    title: "De Onde Você É",
    titleEn: "Where Are You From",
    objective: "Aprenda a dizer e perguntar de onde alguém é",
    modelPhrase: {
      text: "I'm from Brazil",
      pronunciation: "áim frôm Brézil",
      translation: "Eu sou do Brasil"
    },
    fillBlanks: [
      {
        sentence: "Where are you ___?",
        blank: "from",
        options: ["from", "of", "in", "at"],
        correct: "from"
      },
      {
        sentence: "I'm ___ Mexico",
        blank: "from",
        options: ["from", "in", "of", "at"],
        correct: "from"
      },
      {
        sentence: "She's from the United ___",
        blank: "States",
        options: ["States", "State", "Country", "America"],
        correct: "States"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta de onde alguém é?",
        options: ["Where are you from?", "Where you from?", "From where you are?", "You from where?"],
        correct: "Where are you from?"
      },
      {
        question: "Como você diz 'Eu sou da Argentina'?",
        options: ["I'm from Argentina", "I'm of Argentina", "I from Argentina", "I'm in Argentina"],
        correct: "I'm from Argentina"
      },
      {
        question: "Qual está correto?",
        options: ["He's from Japan", "He from Japan", "He's of Japan", "He's in Japan"],
        correct: "He's from Japan"
      }
    ],
    finalPractice: [
      {
        text: "I'm from São Paulo, Brazil",
        pronunciation: "áim frôm Sãu Páulu, Brézil",
        translation: "Eu sou de São Paulo, Brasil"
      },
      {
        text: "Where is she from?",
        pronunciation: "uér iz chí frôm?",
        translation: "De onde ela é?"
      }
    ]
  },
  {
    number: 4,
    title: "Família",
    titleEn: "Family",
    objective: "Aprenda a falar sobre sua família",
    modelPhrase: {
      text: "I have two brothers",
      pronunciation: "ái rév tú brâderz",
      translation: "Eu tenho dois irmãos"
    },
    fillBlanks: [
      {
        sentence: "This is my ___",
        blank: "sister",
        options: ["sister", "brother", "mother", "father"],
        correct: "sister"
      },
      {
        sentence: "I ___ one brother",
        blank: "have",
        options: ["have", "has", "am", "is"],
        correct: "have"
      },
      {
        sentence: "My ___ is a teacher",
        blank: "mother",
        options: ["mother", "mom", "parent", "family"],
        correct: "mother"
      }
    ],
    multipleChoice: [
      {
        question: "Como você diz 'Esta é minha irmã'?",
        options: ["This is my sister", "She is my sister", "My sister is this", "This my sister"],
        correct: "This is my sister"
      },
      {
        question: "Como você diz 'Eu tenho três irmãs'?",
        options: ["I have three sisters", "I has three sisters", "I'm three sisters", "I have three sister"],
        correct: "I have three sisters"
      },
      {
        question: "Qual está correto?",
        options: ["My father is a doctor", "My father are doctor", "Father is a doctor", "My father doctor"],
        correct: "My father is a doctor"
      }
    ],
    finalPractice: [
      {
        text: "I have one sister and two brothers",
        pronunciation: "ái rév uân síster énd tú brâderz",
        translation: "Eu tenho uma irmã e dois irmãos"
      },
      {
        text: "This is my family",
        pronunciation: "dís iz mái fémili",
        translation: "Esta é minha família"
      }
    ]
  },
  {
    number: 5,
    title: "Profissões",
    titleEn: "Professions",
    objective: "Aprenda a falar sobre profissões",
    modelPhrase: {
      text: "I'm a teacher",
      pronunciation: "áim ã títcher",
      translation: "Eu sou professor(a)"
    },
    fillBlanks: [
      {
        sentence: "I'm ___ doctor",
        blank: "a",
        options: ["a", "an", "the", "one"],
        correct: "a"
      },
      {
        sentence: "What do you ___?",
        blank: "do",
        options: ["do", "does", "are", "is"],
        correct: "do"
      },
      {
        sentence: "She's ___ engineer",
        blank: "an",
        options: ["an", "a", "the", "one"],
        correct: "an"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta a profissão de alguém?",
        options: ["What do you do?", "What's your work?", "What you work?", "You work what?"],
        correct: "What do you do?"
      },
      {
        question: "Como você diz 'Eu sou enfermeira'?",
        options: ["I'm a nurse", "I'm nurse", "I a nurse", "I'm the nurse"],
        correct: "I'm a nurse"
      },
      {
        question: "Qual está correto?",
        options: ["He's an artist", "He's a artist", "He an artist", "He's artist"],
        correct: "He's an artist"
      }
    ],
    finalPractice: [
      {
        text: "I'm a software engineer",
        pronunciation: "áim ã sóftuér endjiníer",
        translation: "Eu sou engenheiro(a) de software"
      },
      {
        text: "She's a lawyer",
        pronunciation: "chíz ã lóier",
        translation: "Ela é advogada"
      }
    ]
  },
  {
    number: 6,
    title: "Cores Favoritas",
    titleEn: "Favorite Colors",
    objective: "Aprenda a falar sobre cores favoritas",
    modelPhrase: {
      text: "My favorite color is blue",
      pronunciation: "mái fêivorit kâler iz blú",
      translation: "Minha cor favorita é azul"
    },
    fillBlanks: [
      {
        sentence: "What's your favorite ___?",
        blank: "color",
        options: ["color", "colour", "colors", "paint"],
        correct: "color"
      },
      {
        sentence: "I like the color ___",
        blank: "green",
        options: ["green", "red", "blue", "yellow"],
        correct: "green"
      },
      {
        sentence: "Her favorite ___ is purple",
        blank: "color",
        options: ["color", "thing", "one", "like"],
        correct: "color"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta a cor favorita de alguém?",
        options: ["What's your favorite color?", "What color you like?", "Your favorite color?", "Like what color?"],
        correct: "What's your favorite color?"
      },
      {
        question: "Como você diz 'Eu gosto de vermelho'?",
        options: ["I like red", "I like the red", "I'm like red", "Like red I"],
        correct: "I like red"
      },
      {
        question: "Qual está correto?",
        options: ["My favorite color is orange", "My favorite is orange color", "Orange is my color favorite", "Is orange my favorite color"],
        correct: "My favorite color is orange"
      }
    ],
    finalPractice: [
      {
        text: "I love the color green",
        pronunciation: "ái lâv dã kâler gríin",
        translation: "Eu amo a cor verde"
      },
      {
        text: "What's your favorite color?",
        pronunciation: "uóts iór fêivorit kâler?",
        translation: "Qual é sua cor favorita?"
      }
    ]
  },
  {
    number: 7,
    title: "Comida Favorita",
    titleEn: "Favorite Food",
    objective: "Aprenda a falar sobre comidas favoritas",
    modelPhrase: {
      text: "I like pizza",
      pronunciation: "ái láik pítza",
      translation: "Eu gosto de pizza"
    },
    fillBlanks: [
      {
        sentence: "Do you ___ coffee?",
        blank: "like",
        options: ["like", "likes", "liked", "liking"],
        correct: "like"
      },
      {
        sentence: "I ___ ice cream",
        blank: "love",
        options: ["love", "loves", "loved", "loving"],
        correct: "love"
      },
      {
        sentence: "She doesn't ___ fish",
        blank: "like",
        options: ["like", "likes", "liked", "liking"],
        correct: "like"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta se alguém gosta de café?",
        options: ["Do you like coffee?", "You like coffee?", "Like you coffee?", "Coffee you like?"],
        correct: "Do you like coffee?"
      },
      {
        question: "Como você diz 'Eu amo chocolate'?",
        options: ["I love chocolate", "I'm love chocolate", "Love I chocolate", "I loving chocolate"],
        correct: "I love chocolate"
      },
      {
        question: "Qual está correto?",
        options: ["She likes pasta", "She like pasta", "She liking pasta", "She's like pasta"],
        correct: "She likes pasta"
      }
    ],
    finalPractice: [
      {
        text: "I don't like vegetables",
        pronunciation: "ái dôunt láik védjetabols",
        translation: "Eu não gosto de vegetais"
      },
      {
        text: "Do you like Brazilian food?",
        pronunciation: "du iú láik Brézilian fúud?",
        translation: "Você gosta de comida brasileira?"
      }
    ]
  },
  {
    number: 8,
    title: "Números e Preços",
    titleEn: "Numbers and Prices",
    objective: "Aprenda a falar sobre números e preços",
    modelPhrase: {
      text: "It costs five dollars",
      pronunciation: "ít kósts fáiv dólers",
      translation: "Custa cinco dólares"
    },
    fillBlanks: [
      {
        sentence: "How ___ is it?",
        blank: "much",
        options: ["much", "many", "cost", "price"],
        correct: "much"
      },
      {
        sentence: "It's twenty ___",
        blank: "dollars",
        options: ["dollars", "dollar", "reais", "money"],
        correct: "dollars"
      },
      {
        sentence: "I have ___ brothers",
        blank: "two",
        options: ["two", "to", "too", "second"],
        correct: "two"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta o preço?",
        options: ["How much is it?", "What the price?", "Cost how much?", "Price is?"],
        correct: "How much is it?"
      },
      {
        question: "Como você diz 'Custa dez dólares'?",
        options: ["It costs ten dollars", "It cost ten dollars", "Costs ten dollars", "Ten dollars it costs"],
        correct: "It costs ten dollars"
      },
      {
        question: "Qual está correto?",
        options: ["I have three cats", "I have tree cats", "I has three cats", "I have three cat"],
        correct: "I have three cats"
      }
    ],
    finalPractice: [
      {
        text: "The book costs fifteen dollars",
        pronunciation: "dã búk kósts fiftíin dólers",
        translation: "O livro custa quinze dólares"
      },
      {
        text: "I need two tickets",
        pronunciation: "ái níid tú tíkets",
        translation: "Eu preciso de dois ingressos"
      }
    ]
  },
  {
    number: 9,
    title: "Dias da Semana",
    titleEn: "Days of the Week",
    objective: "Aprenda os dias da semana",
    modelPhrase: {
      text: "Today is Monday",
      pronunciation: "tudêi iz mândei",
      translation: "Hoje é segunda-feira"
    },
    fillBlanks: [
      {
        sentence: "See you ___ Friday",
        blank: "on",
        options: ["on", "in", "at", "to"],
        correct: "on"
      },
      {
        sentence: "What day is ___ today?",
        blank: "it",
        options: ["it", "this", "that", "the"],
        correct: "it"
      },
      {
        sentence: "I work from Monday ___ Friday",
        blank: "to",
        options: ["to", "until", "at", "in"],
        correct: "to"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta que dia é hoje?",
        options: ["What day is it today?", "What day today?", "Today what day?", "Day is today?"],
        correct: "What day is it today?"
      },
      {
        question: "Como você diz 'Te vejo na sexta'?",
        options: ["See you on Friday", "See you in Friday", "See you Friday", "Friday see you"],
        correct: "See you on Friday"
      },
      {
        question: "Qual está correto?",
        options: ["Tomorrow is Saturday", "Tomorrow are Saturday", "Is tomorrow Saturday", "Saturday is tomorrow"],
        correct: "Tomorrow is Saturday"
      }
    ],
    finalPractice: [
      {
        text: "I have class on Wednesday",
        pronunciation: "ái rév kléss ón uénzdei",
        translation: "Eu tenho aula na quarta-feira"
      },
      {
        text: "The weekend starts on Friday",
        pronunciation: "dã uíkend stárts ón fráidei",
        translation: "O fim de semana começa na sexta"
      }
    ]
  },
  {
    number: 10,
    title: "Horas",
    titleEn: "Time",
    objective: "Aprenda a dizer e perguntar as horas",
    modelPhrase: {
      text: "It's three o'clock",
      pronunciation: "íts zrí oklók",
      translation: "São três horas"
    },
    fillBlanks: [
      {
        sentence: "What ___ is it?",
        blank: "time",
        options: ["time", "hour", "clock", "watch"],
        correct: "time"
      },
      {
        sentence: "It's half ___ five",
        blank: "past",
        options: ["past", "after", "to", "before"],
        correct: "past"
      },
      {
        sentence: "I wake up ___ seven",
        blank: "at",
        options: ["at", "on", "in", "to"],
        correct: "at"
      }
    ],
    multipleChoice: [
      {
        question: "Como você pergunta as horas?",
        options: ["What time is it?", "What's the time?", "What hour is?", "Time is?"],
        correct: "What time is it?"
      },
      {
        question: "Como você diz 'São cinco e meia'?",
        options: ["It's half past five", "It's five and half", "It's five thirty", "Half past five"],
        correct: "It's half past five"
      },
      {
        question: "Qual está correto?",
        options: ["I wake up at six", "I wake up in six", "I wake up on six", "I wake up six"],
        correct: "I wake up at six"
      }
    ],
    finalPractice: [
      {
        text: "It's quarter past two",
        pronunciation: "íts kuórter pést tú",
        translation: "São duas e quinze"
      },
      {
        text: "What time do you go to bed?",
        pronunciation: "uót táim du iú gôu tu béd?",
        translation: "Que horas você vai dormir?"
      }
    ]
  }
];
