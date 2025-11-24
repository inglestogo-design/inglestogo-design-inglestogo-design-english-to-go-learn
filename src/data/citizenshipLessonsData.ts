export interface CitizenshipLesson {
  id: number;
  level: 1 | 2 | 3;
  title: string;
  titlePronunciation: string;
  objective: string;
  objectivePronunciation?: string;
  content: {
    portuguese: string;
    english: string;
    pronunciation: string;
  }[];
  quiz: {
    question: string;
    questionPronunciation: string;
    options: {
      portuguese: string;
      english: string;
      pronunciation: string;
      correct: boolean;
    }[];
  };
  summary: string;
  summaryPronunciation?: string;
}

export const citizenshipLessons: CitizenshipLesson[] = [
  {
    id: 1,
    level: 1,
    title: "Os Três Poderes do Governo / The Three Branches of Government",
    titlePronunciation: "Dhi Thrí Brênchis âv Guvérnmênt",
    objective: "Entender os três poderes e suas funções / Understand the three branches and their functions",
    content: [
      {
        portuguese: "Legislativo: cria as leis",
        english: "Legislative: makes laws",
        pronunciation: "Lédjislâtiv"
      },
      {
        portuguese: "Executivo: aplica as leis",
        english: "Executive: enforces laws",
        pronunciation: "Igzékutiv"
      },
      {
        portuguese: "Judiciário: interpreta as leis",
        english: "Judicial: interprets laws",
        pronunciation: "Djúdishal"
      }
    ],
    quiz: {
      question: "Qual poder é responsável por criar as leis? / Which branch makes the laws?",
      questionPronunciation: "Uíchi brênchi méiks dhi lóz?",
      options: [
        {
          portuguese: "Executivo",
          english: "Executive",
          pronunciation: "Igzékutiv",
          correct: false
        },
        {
          portuguese: "Legislativo",
          english: "Legislative",
          pronunciation: "Lédjislâtiv",
          correct: true
        },
        {
          portuguese: "Judiciário",
          english: "Judicial",
          pronunciation: "Djúdishal",
          correct: false
        }
      ]
    },
    summary: "Acrônimo para memorizar: L-E-J → Legislativo, Executivo, Judiciário / L-E-J → Legislative, Executive, Judicial",
    summaryPronunciation: "Lédjislâtiv, Igzékutiv, Djúdishal"
  },
  {
    id: 2,
    level: 1,
    title: "Direitos do Cidadão / Citizens' Rights",
    titlePronunciation: "Sítizens Raíts",
    objective: "Conhecer os direitos básicos de um cidadão / Know the basic rights of a citizen",
    content: [
      {
        portuguese: "Direito ao voto",
        english: "Right to vote",
        pronunciation: "Ráit tu vóut"
      },
      {
        portuguese: "Direito à educação",
        english: "Right to education",
        pronunciation: "Ráit tu édjukeishân"
      },
      {
        portuguese: "Liberdade de expressão",
        english: "Freedom of speech",
        pronunciation: "Frídum âv spíitch"
      },
      {
        portuguese: "Direito à segurança",
        english: "Right to safety",
        pronunciation: "Ráit tu séifti"
      }
    ],
    quiz: {
      question: "Verdadeiro ou falso: Todo cidadão tem direito ao voto / True or False: Every citizen has the right to vote",
      questionPronunciation: "Tru or fóls: Évri sítizen rás dhi ráit tu vóut",
      options: [
        {
          portuguese: "Verdadeiro",
          english: "True",
          pronunciation: "Tru",
          correct: true
        },
        {
          portuguese: "Falso",
          english: "False",
          pronunciation: "Fóls",
          correct: false
        }
      ]
    },
    summary: "Todos os cidadãos têm direitos fundamentais protegidos pela Constituição / All citizens have fundamental rights protected by the Constitution"
  },
  // Level 2 - Interview Procedures
  {
    id: 3,
    level: 2,
    title: "Chegando para a Entrevista / Arriving for the Interview",
    titlePronunciation: "Arráiving fór dhi Ínterviú",
    objective: "Saber como se preparar e o que esperar no dia da entrevista / Know how to prepare and what to expect on interview day",
    content: [
      {
        portuguese: "Chegar com antecedência",
        english: "Arrive early",
        pronunciation: "Arráiv ârli"
      },
      {
        portuguese: "Trazer documentos importantes",
        english: "Bring important documents",
        pronunciation: "Bríng ímpórtant dâkiuments"
      },
      {
        portuguese: "Cumprimentar com educação",
        english: "Greet politely",
        pronunciation: "Grít pólaitli"
      }
    ],
    quiz: {
      question: "O que você deve fazer ao chegar? / What should you do when you arrive?",
      questionPronunciation: "Uát shúd yu dú uén yu arráiv?",
      options: [
        {
          portuguese: "Chegar atrasado",
          english: "Arrive late",
          pronunciation: "Arráiv léit",
          correct: false
        },
        {
          portuguese: "Trazer documentos",
          english: "Bring documents",
          pronunciation: "Bríng dâkiuments",
          correct: true
        },
        {
          portuguese: "Ignorar o oficial",
          english: "Ignore the officer",
          pronunciation: "Ígnór dhi ófísêr",
          correct: false
        }
      ]
    },
    summary: "Chegar preparado = menos estresse / Being prepared = less stress",
    summaryPronunciation: "Bíing pripérd = lés stress"
  },
  {
    id: 4,
    level: 2,
    title: "Primeiras Perguntas / Initial Questions",
    titlePronunciation: "Íníshal Kwéstchans",
    objective: "Conhecer perguntas básicas feitas no início da entrevista / Know basic questions asked at the start",
    content: [
      {
        portuguese: "Nome completo",
        english: "Full name",
        pronunciation: "Fúl néim"
      },
      {
        portuguese: "Endereço atual",
        english: "Current address",
        pronunciation: "Kárent âdrés"
      },
      {
        portuguese: "Data de nascimento",
        english: "Date of birth",
        pronunciation: "Dêit âv bórth"
      }
    ],
    quiz: {
      question: "Qual pergunta é feita primeiro? / What is usually asked first?",
      questionPronunciation: "Uát iz yúzhuâli áskt fôrst?",
      options: [
        {
          portuguese: "Nome completo",
          english: "Full name",
          pronunciation: "Fúl néim",
          correct: true
        },
        {
          portuguese: "Ocupação",
          english: "Occupation",
          pronunciation: "Ákupéishân",
          correct: false
        },
        {
          portuguese: "Nacionalidade",
          english: "Nationality",
          pronunciation: "Náshonalité",
          correct: false
        }
      ]
    },
    summary: "Responda com clareza e calma / Answer clearly and calmly",
    summaryPronunciation: "Ánsêr clíerli ând câmli"
  },
  {
    id: 5,
    level: 2,
    title: "Perguntas sobre Viagens / Travel Questions",
    titlePronunciation: "Trável Kwéstchans",
    objective: "Saber como responder sobre viagens e tempo fora dos EUA / Know how to answer about trips and time abroad",
    content: [
      {
        portuguese: "Contar viagens fora do país",
        english: "Report trips abroad",
        pronunciation: "Ríport tríps âbród"
      },
      {
        portuguese: "Explicar ausências longas",
        english: "Explain long absences",
        pronunciation: "Ikspléin lóng ábsénsis"
      }
    ],
    quiz: {
      question: "O que é considerado uma ausência longa? / What is considered a long absence?",
      questionPronunciation: "Uát iz kônsíderd â lóng ábsêns?",
      options: [
        {
          portuguese: "Menos de 6 meses",
          english: "Less than 6 months",
          pronunciation: "Lés dhén siks mónths",
          correct: false
        },
        {
          portuguese: "Mais de 6 meses",
          english: "More than 6 months",
          pronunciation: "Mór dhén siks mónths",
          correct: true
        },
        {
          portuguese: "Uma viagem de final de semana",
          english: "A weekend trip",
          pronunciation: "Â uíkênd tríp",
          correct: false
        }
      ]
    },
    summary: "Documente todas as viagens longas / Document all long trips"
  },
  {
    id: 6,
    level: 2,
    title: "Trabalho e Educação / Employment and Education",
    titlePronunciation: "Implóiment ând Édjukeishân",
    objective: "Responder perguntas sobre empregos, estudos e experiência / Answer questions about jobs, education, and experience",
    content: [
      {
        portuguese: "Nome do empregador atual",
        english: "Name of current employer",
        pronunciation: "Nêim âv kárent implóier"
      },
      {
        portuguese: "Escolaridade",
        english: "Education level",
        pronunciation: "Édjukeishân lével"
      },
      {
        portuguese: "Experiência profissional anterior",
        english: "Previous work experience",
        pronunciation: "Prívíus wérk ikspíriens"
      }
    ],
    quiz: {
      question: "Como dizer 'empregador atual' em inglês? / How do you say 'current employer' in English?",
      questionPronunciation: "Ráu dú yu sêi kárent implóier in ínglish?",
      options: [
        {
          portuguese: "Chefe presente",
          english: "Present boss",
          pronunciation: "Prézent bóss",
          correct: false
        },
        {
          portuguese: "Empregador atual",
          english: "Current employer",
          pronunciation: "Kárent implóier",
          correct: true
        },
        {
          portuguese: "Título do trabalho",
          english: "Job title",
          pronunciation: "Djób táitl",
          correct: false
        }
      ]
    },
    summary: "Tenha informações sobre seu emprego atual e histórico / Have information about your current job and history ready"
  },
  {
    id: 7,
    level: 2,
    title: "Família e Estado Civil / Family and Marital Status",
    titlePronunciation: "Fémili ând Mèritâl Státus",
    objective: "Responder perguntas sobre estado civil e membros da família / Answer questions about marital status and family members",
    content: [
      {
        portuguese: "Cônjuge",
        english: "Spouse",
        pronunciation: "Spáus"
      },
      {
        portuguese: "Filhos",
        english: "Children",
        pronunciation: "Tchíldren"
      },
      {
        portuguese: "Casado(a), divorciado(a), viúvo(a)",
        english: "Married, divorced, widow/widower",
        pronunciation: "Mérid, divórst, uído/uídôuer"
      }
    ],
    quiz: {
      question: "Quem é viúvo? / Who is a widow?",
      questionPronunciation: "Rú iz â uído?",
      options: [
        {
          portuguese: "Uma pessoa divorciada",
          english: "A divorced person",
          pronunciation: "Â divórst pêrsan",
          correct: false
        },
        {
          portuguese: "Cônjuge que faleceu",
          english: "A spouse who passed away",
          pronunciation: "Â spáus rú pásd âwé",
          correct: true
        },
        {
          portuguese: "Pessoa solteira",
          english: "A single person",
          pronunciation: "Â síngl pêrsan",
          correct: false
        }
      ]
    },
    summary: "Conheça os termos de estado civil em inglês / Know marital status terms in English"
  },
  {
    id: 8,
    level: 2,
    title: "Termos Legais e Criminais / Legal and Criminal Terms",
    titlePronunciation: "Lígal ând Kríminal Térms",
    objective: "Saber termos legais usados no teste / Know legal terms used in the test",
    content: [
      {
        portuguese: "Prisão",
        english: "Arrest",
        pronunciation: "Arést"
      },
      {
        portuguese: "Condenação",
        english: "Conviction",
        pronunciation: "Kânvíkshân"
      },
      {
        portuguese: "Tribunal",
        english: "Court",
        pronunciation: "Córt"
      },
      {
        portuguese: "Multa",
        english: "Fine",
        pronunciation: "Fáin"
      },
      {
        portuguese: "Liberdade condicional",
        english: "Probation",
        pronunciation: "Prôbéishân"
      }
    ],
    quiz: {
      question: "O que é uma condenação? / What is a conviction?",
      questionPronunciation: "Uát iz â kânvíkshân?",
      options: [
        {
          portuguese: "Ir ao tribunal",
          english: "Going to court",
          pronunciation: "Góing tu córt",
          correct: false
        },
        {
          portuguese: "Considerado culpado de um crime",
          english: "Found guilty of a crime",
          pronunciation: "Fáund gílti óv â kráim",
          correct: true
        },
        {
          portuguese: "Pagar uma multa",
          english: "Paying a fine",
          pronunciation: "Péing â fáin",
          correct: false
        }
      ]
    },
    summary: "Termos legais são importantes para o N-400 / Legal terms are important for N-400"
  },
  {
    id: 9,
    level: 2,
    title: "Status de Imigração / Immigration Status",
    titlePronunciation: "Ímigreichân Státus",
    objective: "Responder sobre visto, green card e naturalização / Answer about visa, green card, and naturalization",
    content: [
      {
        portuguese: "Visto",
        english: "Visa",
        pronunciation: "Víza"
      },
      {
        portuguese: "Green Card",
        english: "Green Card",
        pronunciation: "Grín Kárd"
      },
      {
        portuguese: "Ajuste de Status",
        english: "Adjustment of Status",
        pronunciation: "Adjâstment âv Státus"
      },
      {
        portuguese: "Naturalização",
        english: "Naturalization",
        pronunciation: "Nâtchuralâizêishân"
      },
      {
        portuguese: "USCIS",
        english: "USCIS",
        pronunciation: "Iú-Es-Sí-Ai-Es"
      }
    ],
    quiz: {
      question: "Qual termo significa tornar-se cidadão americano? / Which term means becoming a U.S. citizen?",
      questionPronunciation: "Uích térm míns bikâming â Iú.És. sítizen?",
      options: [
        {
          portuguese: "Ajuste de Status",
          english: "Adjustment of Status",
          pronunciation: "Adjâstment âv Státus",
          correct: false
        },
        {
          portuguese: "Naturalização",
          english: "Naturalization",
          pronunciation: "Nâtchuralâizêishân",
          correct: true
        },
        {
          portuguese: "Visto",
          english: "Visa",
          pronunciation: "Víza",
          correct: false
        }
      ]
    },
    summary: "Naturalização é o processo de se tornar cidadão / Naturalization is the process of becoming a citizen"
  },
  {
    id: 10,
    level: 2,
    title: "Juramentos e Testes de Civismo / Oaths and Civics",
    titlePronunciation: "Óuths ând Sívics",
    objective: "Preparar para o teste de civismo e juramento / Prepare for civics test and oath",
    content: [
      {
        portuguese: "Juramento de fidelidade",
        english: "Oath of Allegiance",
        pronunciation: "Óuth óv Alígêns"
      },
      {
        portuguese: "Constituição",
        english: "Constitution",
        pronunciation: "Kónstichushân"
      },
      {
        portuguese: "Teste de civismo",
        english: "Civics Test",
        pronunciation: "Sívics Tést"
      },
      {
        portuguese: "Entrevista com USCIS",
        english: "Immigration Interview",
        pronunciation: "Ímigreichân Ínterviú"
      }
    ],
    quiz: {
      question: "O que é o Oath of Allegiance? / What is the Oath of Allegiance?",
      questionPronunciation: "Uát iz dhi Óuth óv Alígêns?",
      options: [
        {
          portuguese: "Teste sobre história",
          english: "Test about history",
          pronunciation: "Tést âbáut hístory",
          correct: false
        },
        {
          portuguese: "Promessa de apoiar os EUA",
          english: "Promise to support the U.S.",
          pronunciation: "Prómis tu supôrt dhi iú-Es",
          correct: true
        },
        {
          portuguese: "Entrevista",
          english: "Interview",
          pronunciation: "Ínterviú",
          correct: false
        }
      ]
    },
    summary: "O juramento é o passo final para cidadania / The oath is the final step to citizenship"
  }
];
