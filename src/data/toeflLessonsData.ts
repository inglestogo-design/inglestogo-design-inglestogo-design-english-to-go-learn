export interface ToeflLesson {
  id: number;
  title: string;
  titlePt: string;
  pronunciation: string;
  objective: string;
  objectivePt: string;
  content: Array<{
    text: string;
    textPt: string;
    pronunciation: string;
  }>;
  quiz: Array<{
    question: string;
    questionPt: string;
    options: string[];
    correct: number;
  }>;
  summary: string;
  summaryPt: string;
}

export const toeflLessons: ToeflLesson[] = [
  {
    id: 1,
    title: "What Is the TOEFL Exam?",
    titlePt: "O que é o Exame TOEFL?",
    pronunciation: "uót iz dha tôufel igzém?",
    objective: "Understand what TOEFL is and why it's important",
    objectivePt: "Entender o que é o TOEFL e por que é importante",
    content: [
      {
        text: "TOEFL stands for Test of English as a Foreign Language.",
        textPt: "TOEFL significa Test of English as a Foreign Language (Teste de Inglês como Língua Estrangeira).",
        pronunciation: "tôufel sténdz for tést óv ínglish éz â fórin lénguidj"
      },
      {
        text: "It measures your ability to use and understand English at university level.",
        textPt: "Ele mede sua capacidade de usar e entender inglês em nível universitário.",
        pronunciation: "it méjârz iór âbíliti tu iúz énd ândârsténd ínglish ét iunivêrsiti lével"
      },
      {
        text: "Over 11,000 universities and institutions in more than 150 countries accept TOEFL scores.",
        textPt: "Mais de 11.000 universidades e instituições em mais de 150 países aceitam notas do TOEFL.",
        pronunciation: "ôuvâr ilévân tháuzând iunivêrsitiz énd institiúshânz in mor dhén uân rândrâd énd fífti kântriz ékssépt tôufel skórz"
      },
      {
        text: "The test is offered in two formats: TOEFL iBT (Internet-based) and TOEFL Paper-based.",
        textPt: "O teste é oferecido em dois formatos: TOEFL iBT (baseado na internet) e TOEFL em papel.",
        pronunciation: "dha tést iz ófârd in tu fórmâts: tôufel ái-bí-tí (íntârnet-bêist) énd tôufel pêipâr-bêist"
      },
      {
        text: "TOEFL scores are valid for two years from the test date.",
        textPt: "As notas do TOEFL são válidas por dois anos a partir da data do teste.",
        pronunciation: "tôufel skórz ar válid for tu iírz frôm dha tést dêit"
      }
    ],
    quiz: [
      {
        question: "What does TOEFL stand for?",
        questionPt: "O que significa TOEFL?",
        options: [
          "Test Of English For Learning",
          "Test of English as a Foreign Language",
          "Teaching Of English Foreign Language",
          "Test Online For English Language"
        ],
        correct: 1
      },
      {
        question: "How long are TOEFL scores valid?",
        questionPt: "Por quanto tempo as notas do TOEFL são válidas?",
        options: [
          "1 year / 1 ano",
          "2 years / 2 anos",
          "3 years / 3 anos",
          "5 years / 5 anos"
        ],
        correct: 1
      },
      {
        question: "What level does TOEFL measure?",
        questionPt: "Que nível o TOEFL mede?",
        options: [
          "High school level / Nível de ensino médio",
          "University level / Nível universitário",
          "Elementary level / Nível elementar",
          "Professional level / Nível profissional"
        ],
        correct: 1
      }
    ],
    summary: "TOEFL is a standardized test that measures English proficiency at university level, accepted by over 11,000 institutions worldwide, with scores valid for 2 years.",
    summaryPt: "TOEFL é um teste padronizado que mede proficiência em inglês em nível universitário, aceito por mais de 11.000 instituições mundialmente, com notas válidas por 2 anos."
  },
  {
    id: 2,
    title: "Test Structure",
    titlePt: "Estrutura do Teste",
    pronunciation: "tést strâktchur",
    objective: "Learn about the four sections of the TOEFL exam",
    objectivePt: "Aprender sobre as quatro seções do exame TOEFL",
    content: [
      {
        text: "TOEFL iBT has four sections: Reading, Listening, Speaking, and Writing.",
        textPt: "O TOEFL iBT tem quatro seções: Leitura, Audição, Fala e Escrita.",
        pronunciation: "tôufel ái-bí-tí réz for sékshânz: ríding, lísâning, spíking, énd ráiting"
      },
      {
        text: "The Reading section takes 54-72 minutes with 3-4 passages and 10 questions each.",
        textPt: "A seção de Leitura leva 54-72 minutos com 3-4 textos e 10 perguntas cada.",
        pronunciation: "dha ríding sékshân têiks fífti-for tu sévânti-tu mínits uíth thrí tu for pésâdjâz énd tén kuêstchâns ítch"
      },
      {
        text: "The Listening section is 41-57 minutes with lectures and conversations.",
        textPt: "A seção de Audição tem 41-57 minutos com palestras e conversas.",
        pronunciation: "dha lísâning sékshân iz fórti-uân tu fífti-sévân mínits uíth léktchârz énd kônvârsêishânz"
      },
      {
        text: "The Speaking section has 4 tasks in 17 minutes: 1 independent and 3 integrated tasks.",
        textPt: "A seção de Fala tem 4 tarefas em 17 minutos: 1 independente e 3 tarefas integradas.",
        pronunciation: "dha spíking sékshân réz for tésks in sévântín mínits: uân indipéndânt énd thrí íntâgrêitid tésks"
      },
      {
        text: "The Writing section has 2 tasks in 50 minutes: 1 integrated and 1 independent essay.",
        textPt: "A seção de Escrita tem 2 tarefas em 50 minutos: 1 redação integrada e 1 independente.",
        pronunciation: "dha ráiting sékshân réz tu tésks in fífti mínits: uân íntâgrêitid énd uân indipéndânt éssêi"
      }
    ],
    quiz: [
      {
        question: "How many sections does TOEFL iBT have?",
        questionPt: "Quantas seções o TOEFL iBT tem?",
        options: [
          "2 sections / 2 seções",
          "3 sections / 3 seções",
          "4 sections / 4 seções",
          "5 sections / 5 seções"
        ],
        correct: 2
      },
      {
        question: "How long is the Speaking section?",
        questionPt: "Quanto tempo dura a seção de Fala?",
        options: [
          "10 minutes / 10 minutos",
          "17 minutes / 17 minutos",
          "25 minutes / 25 minutos",
          "50 minutes / 50 minutos"
        ],
        correct: 1
      },
      {
        question: "How many tasks are in the Writing section?",
        questionPt: "Quantas tarefas tem a seção de Escrita?",
        options: [
          "1 task / 1 tarefa",
          "2 tasks / 2 tarefas",
          "3 tasks / 3 tarefas",
          "4 tasks / 4 tarefas"
        ],
        correct: 1
      }
    ],
    summary: "TOEFL iBT has 4 sections testing Reading (54-72min), Listening (41-57min), Speaking (17min with 4 tasks), and Writing (50min with 2 essays).",
    summaryPt: "TOEFL iBT tem 4 seções testando Leitura (54-72min), Audição (41-57min), Fala (17min com 4 tarefas) e Escrita (50min com 2 redações)."
  },
  {
    id: 3,
    title: "Reading Strategies",
    titlePt: "Estratégias de Leitura",
    pronunciation: "ríding strétâdjiz",
    objective: "Master effective reading strategies for TOEFL",
    objectivePt: "Dominar estratégias eficazes de leitura para o TOEFL",
    content: [
      {
        text: "Skim the passage first to get the main idea before reading in detail.",
        textPt: "Passe os olhos pelo texto primeiro para captar a ideia principal antes de ler em detalhe.",
        pronunciation: "skím dha pésâdj fêrst tu guét dha mêin aidíâ bifór ríding in ditêil"
      },
      {
        text: "Read the questions before the passage to know what information to look for.",
        textPt: "Leia as perguntas antes do texto para saber que informação procurar.",
        pronunciation: "ríd dha kuêstchâns bifór dha pésâdj tu nôu uót infârmêishân tu lúk for"
      },
      {
        text: "Identify topic sentences (usually the first sentence of each paragraph).",
        textPt: "Identifique as frases-tópico (geralmente a primeira frase de cada parágrafo).",
        pronunciation: "aidéntifái tópik séntânsiz (iújuâli dha fêrst séntâns óv ítch pérâgréf)"
      },
      {
        text: "Don't spend too much time on vocabulary you don't know - use context clues.",
        textPt: "Não gaste muito tempo em vocabulário que você não conhece - use pistas do contexto.",
        pronunciation: "dôunt spénd tu mâtch táim ón vôukébiulâri iú dôunt nôu - iúz kóntekst klúz"
      },
      {
        text: "Practice time management: spend about 18 minutes per passage.",
        textPt: "Pratique gestão de tempo: gaste cerca de 18 minutos por texto.",
        pronunciation: "préktis táim ménâdjmânt: spénd âbáut êitín mínits pêr pésâdj"
      }
    ],
    quiz: [
      {
        question: "What should you do first when reading a passage?",
        questionPt: "O que você deve fazer primeiro ao ler um texto?",
        options: [
          "Read every word carefully / Ler cada palavra cuidadosamente",
          "Skim for the main idea / Passar os olhos pela ideia principal",
          "Answer the questions / Responder as perguntas",
          "Look up all unknown words / Procurar todas as palavras desconhecidas"
        ],
        correct: 1
      },
      {
        question: "Where is the topic sentence usually located?",
        questionPt: "Onde a frase-tópico geralmente está localizada?",
        options: [
          "At the end of the paragraph / No fim do parágrafo",
          "In the middle / No meio",
          "At the beginning of the paragraph / No início do parágrafo",
          "Nowhere specific / Nenhum lugar específico"
        ],
        correct: 2
      },
      {
        question: "How much time should you spend per passage?",
        questionPt: "Quanto tempo você deve gastar por texto?",
        options: [
          "10 minutes / 10 minutos",
          "18 minutes / 18 minutos",
          "25 minutes / 25 minutos",
          "30 minutes / 30 minutos"
        ],
        correct: 1
      }
    ],
    summary: "Effective reading strategies include skimming for main ideas, reading questions first, identifying topic sentences, using context clues, and managing time (18 min/passage).",
    summaryPt: "Estratégias eficazes de leitura incluem passar os olhos pelas ideias principais, ler perguntas primeiro, identificar frases-tópico, usar pistas de contexto e gerenciar tempo (18 min/texto)."
  },
  {
    id: 4,
    title: "Listening Strategies",
    titlePt: "Estratégias de Audição",
    pronunciation: "lísâning strétâdjiz",
    objective: "Develop effective listening skills for TOEFL",
    objectivePt: "Desenvolver habilidades eficazes de audição para o TOEFL",
    content: [
      {
        text: "Take notes while listening - write key words, not full sentences.",
        textPt: "Faça anotações enquanto ouve - escreva palavras-chave, não frases completas.",
        pronunciation: "têik nôuts uáil lísâning - ráit kí uôrdz, nót ful séntânsiz"
      },
      {
        text: "Focus on main ideas and supporting details, not every single word.",
        textPt: "Foque nas ideias principais e detalhes de suporte, não em cada palavra.",
        pronunciation: "fôukâs ón mêin aidíâz énd sâpórting ditêilz, nót évri síngâl uôrd"
      },
      {
        text: "Listen for signal words like 'however', 'therefore', 'in contrast', which indicate important information.",
        textPt: "Escute palavras-sinalizadoras como 'however', 'therefore', 'in contrast', que indicam informação importante.",
        pronunciation: "lísân for sígnâl uôrdz láik ráuévâr, dhérfor, in kóntrést, uítch índikêit impórtânt infârmêishân"
      },
      {
        text: "Pay attention to the speaker's tone and attitude - they often give clues to the answer.",
        textPt: "Preste atenção ao tom e atitude do falante - eles frequentemente dão pistas para a resposta.",
        pronunciation: "pêi âténshân tu dha spíkârz tôun énd étitúd - dhêi óftân guív klúz tu dhi énsâr"
      },
      {
        text: "Practice with authentic materials: TED Talks, podcasts, and academic lectures.",
        textPt: "Pratique com materiais autênticos: TED Talks, podcasts e palestras acadêmicas.",
        pronunciation: "préktis uíth ôthéntik mâtíriâlz: téd tóks, pódkésts, énd ékâdémik léktchârz"
      }
    ],
    quiz: [
      {
        question: "What should you write while listening?",
        questionPt: "O que você deve escrever enquanto ouve?",
        options: [
          "Full sentences / Frases completas",
          "Every word / Cada palavra",
          "Key words only / Apenas palavras-chave",
          "Nothing / Nada"
        ],
        correct: 2
      },
      {
        question: "What do signal words indicate?",
        questionPt: "O que palavras-sinalizadoras indicam?",
        options: [
          "Unimportant information / Informação sem importância",
          "Important information / Informação importante",
          "The end of the lecture / O fim da palestra",
          "Speaker's name / Nome do falante"
        ],
        correct: 1
      },
      {
        question: "What should you focus on while listening?",
        questionPt: "No que você deve focar enquanto ouve?",
        options: [
          "Every single word / Cada palavra",
          "Grammar mistakes / Erros de gramática",
          "Main ideas and supporting details / Ideias principais e detalhes de suporte",
          "Speaker's accent / Sotaque do falante"
        ],
        correct: 2
      }
    ],
    summary: "Effective listening strategies include taking keyword notes, focusing on main ideas, listening for signal words, paying attention to tone, and practicing with authentic materials.",
    summaryPt: "Estratégias eficazes de audição incluem fazer anotações de palavras-chave, focar em ideias principais, escutar palavras-sinalizadoras, prestar atenção ao tom e praticar com materiais autênticos."
  },
  {
    id: 5,
    title: "Speaking Structure",
    titlePt: "Estrutura da Fala",
    pronunciation: "spíking strâktchur",
    objective: "Understand the structure of TOEFL speaking tasks",
    objectivePt: "Entender a estrutura das tarefas de fala do TOEFL",
    content: [
      {
        text: "Task 1 is independent: express your opinion on a familiar topic (preparation: 15 sec, response: 45 sec).",
        textPt: "Tarefa 1 é independente: expresse sua opinião sobre um tópico familiar (preparação: 15 seg, resposta: 45 seg).",
        pronunciation: "tésk uân iz indipéndânt: iksprés iór âpíniân ón â fâmíliâr tópik (prêpârêishân: fíftín sékândz, rispóns: fórti-fáiv sékândz)"
      },
      {
        text: "Tasks 2-4 are integrated: combine reading, listening, and speaking skills.",
        textPt: "Tarefas 2-4 são integradas: combinam habilidades de leitura, audição e fala.",
        pronunciation: "tésks tu tu for ar íntâgrêitid: kômbáin ríding, lísâning, énd spíking skílz"
      },
      {
        text: "Use the PREP method: Point (state your opinion), Reason (explain why), Example (give specific examples), Point (restate).",
        textPt: "Use o método PREP: Ponto (declare sua opinião), Razão (explique por quê), Exemplo (dê exemplos específicos), Ponto (reafirme).",
        pronunciation: "iúz dha prép méthâd: póint (stêit iór âpíniân), rízân (iksplêin uái), igzémpâl (guív spâsífik igzémpâlz), póint (ristêit)"
      },
      {
        text: "Speak clearly and at a natural pace - don't rush or speak too slowly.",
        textPt: "Fale claramente e em ritmo natural - não se apresse nem fale muito devagar.",
        pronunciation: "spík klírli énd ét â nétchârâl pêis - dôunt râsh or spík tu slôuli"
      },
      {
        text: "Use transition words: 'First', 'Additionally', 'For example', 'In conclusion'.",
        textPt: "Use palavras de transição: 'First' (Primeiro), 'Additionally' (Adicionalmente), 'For example' (Por exemplo), 'In conclusion' (Em conclusão).",
        pronunciation: "iúz trénzíshân uôrdz: fêrst, âdíshânâli, for igzémpâl, in kânklújân"
      }
    ],
    quiz: [
      {
        question: "How long is the preparation time for Task 1?",
        questionPt: "Quanto tempo é a preparação para a Tarefa 1?",
        options: [
          "10 seconds / 10 segundos",
          "15 seconds / 15 segundos",
          "30 seconds / 30 segundos",
          "45 seconds / 45 segundos"
        ],
        correct: 1
      },
      {
        question: "What does PREP stand for?",
        questionPt: "O que significa PREP?",
        options: [
          "Prepare, Repeat, End, Practice",
          "Point, Reason, Example, Point",
          "Practice, Read, Explain, Perform",
          "Plan, Respond, Evaluate, Practice"
        ],
        correct: 1
      },
      {
        question: "How many speaking tasks are integrated?",
        questionPt: "Quantas tarefas de fala são integradas?",
        options: [
          "1 task / 1 tarefa",
          "2 tasks / 2 tarefas",
          "3 tasks / 3 tarefas",
          "4 tasks / 4 tarefas"
        ],
        correct: 2
      }
    ],
    summary: "TOEFL speaking has 4 tasks: 1 independent (45 sec) and 3 integrated. Use PREP method, speak clearly at natural pace, and use transition words.",
    summaryPt: "A fala do TOEFL tem 4 tarefas: 1 independente (45 seg) e 3 integradas. Use método PREP, fale claramente em ritmo natural e use palavras de transição."
  },
  {
    id: 6,
    title: "Speaking Practice",
    titlePt: "Prática de Fala",
    pronunciation: "spíking préktis",
    objective: "Learn practical tips for speaking practice",
    objectivePt: "Aprender dicas práticas para prática de fala",
    content: [
      {
        text: "Record yourself regularly and listen back to identify areas for improvement.",
        textPt: "Grave-se regularmente e ouça de volta para identificar áreas para melhoria.",
        pronunciation: "rikórd iorsélf régiulârli énd lísân bék tu aidéntifái ériâz for imprúvmânt"
      },
      {
        text: "Practice with sample questions daily - consistency is more important than duration.",
        textPt: "Pratique com perguntas de exemplo diariamente - consistência é mais importante que duração.",
        pronunciation: "préktis uíth sémpâl kuêstchâns dêili - kânsístânsi iz mor impórtânt dhén diurêishân"
      },
      {
        text: "Time yourself strictly: 15 seconds preparation, 45 seconds response for Task 1.",
        textPt: "Cronometre-se rigorosamente: 15 segundos preparação, 45 segundos resposta para Tarefa 1.",
        pronunciation: "táim iorsélf stríktli: fíftín sékândz prêpârêishân, fórti-fáiv sékândz rispóns for tésk uân"
      },
      {
        text: "Don't worry about perfection - focus on communicating your ideas clearly.",
        textPt: "Não se preocupe com perfeição - foque em comunicar suas ideias claramente.",
        pronunciation: "dôunt uôri âbáut pârfékshân - fôukâs ón kâmiúnikêiting iór aidíâz klírli"
      },
      {
        text: "Build a bank of personal examples you can adapt to different topics.",
        textPt: "Construa um banco de exemplos pessoais que você pode adaptar a diferentes tópicos.",
        pronunciation: "bíld â bénk óv pêrsânâl igzémpâlz iú kén âdépt tu dífârânt tópiks"
      }
    ],
    quiz: [
      {
        question: "What should you do to improve your speaking?",
        questionPt: "O que você deve fazer para melhorar sua fala?",
        options: [
          "Only read about it / Apenas ler sobre isso",
          "Record and listen to yourself / Gravar e ouvir a si mesmo",
          "Never practice / Nunca praticar",
          "Only speak once a month / Apenas falar uma vez por mês"
        ],
        correct: 1
      },
      {
        question: "What is more important in practice?",
        questionPt: "O que é mais importante na prática?",
        options: [
          "Perfection / Perfeição",
          "Duration / Duração",
          "Consistency / Consistência",
          "Speed / Velocidade"
        ],
        correct: 2
      },
      {
        question: "What should you focus on?",
        questionPt: "No que você deve focar?",
        options: [
          "Being perfect / Ser perfeito",
          "Communicating clearly / Comunicar claramente",
          "Using difficult words / Usar palavras difíceis",
          "Speaking very fast / Falar muito rápido"
        ],
        correct: 1
      }
    ],
    summary: "Effective speaking practice requires daily recording and self-review, strict timing, focus on clear communication over perfection, and building a bank of personal examples.",
    summaryPt: "Prática eficaz de fala requer gravação diária e auto-revisão, cronometragem rigorosa, foco em comunicação clara ao invés de perfeição e construção de um banco de exemplos pessoais."
  },
  {
    id: 7,
    title: "Writing Structure",
    titlePt: "Estrutura da Escrita",
    pronunciation: "ráiting strâktchur",
    objective: "Master the structure of TOEFL writing tasks",
    objectivePt: "Dominar a estrutura das tarefas de escrita do TOEFL",
    content: [
      {
        text: "Task 1 is integrated: read a passage, listen to a lecture, then write a summary (20 minutes, 150-225 words).",
        textPt: "Tarefa 1 é integrada: leia um texto, ouça uma palestra, depois escreva um resumo (20 minutos, 150-225 palavras).",
        pronunciation: "tésk uân iz íntâgrêitid: ríd â pésâdj, lísân tu â léktchur, dhén ráit â sâmâri (tuénti mínits, uân rândrâd fífti tu tu rândrâd tuénti-fáiv uôrdz)"
      },
      {
        text: "Task 2 is independent: write an essay expressing your opinion (30 minutes, at least 300 words).",
        textPt: "Tarefa 2 é independente: escreva uma redação expressando sua opinião (30 minutos, pelo menos 300 palavras).",
        pronunciation: "tésk tu iz indipéndânt: ráit ãn éssêi iksprésing iór âpíniân (thêrti mínits, ét líst thrí rândrâd uôrdz)"
      },
      {
        text: "Use the 5-paragraph structure: Introduction, Body 1, Body 2, Body 3, Conclusion.",
        textPt: "Use a estrutura de 5 parágrafos: Introdução, Corpo 1, Corpo 2, Corpo 3, Conclusão.",
        pronunciation: "iúz dha fáiv-pérâgréf strâktchur: intrâdâkshân, bódi uân, bódi tu, bódi thrí, kânklújân"
      },
      {
        text: "Include a clear thesis statement in your introduction that states your main argument.",
        textPt: "Inclua uma declaração de tese clara na sua introdução que declare seu argumento principal.",
        pronunciation: "inklúd â klír thísis stêitmânt in iór intrâdâkshân dhét stêits iór mêin árguiumânt"
      },
      {
        text: "Support each body paragraph with specific examples and clear explanations.",
        textPt: "Apoie cada parágrafo do corpo com exemplos específicos e explicações claras.",
        pronunciation: "sâport ítch bódi pérâgréf uíth spâsífik igzémpâlz énd klír ekspânêishânz"
      }
    ],
    quiz: [
      {
        question: "How long is the integrated writing task?",
        questionPt: "Quanto tempo dura a tarefa de escrita integrada?",
        options: [
          "10 minutes / 10 minutos",
          "20 minutes / 20 minutos",
          "30 minutes / 30 minutos",
          "50 minutes / 50 minutos"
        ],
        correct: 1
      },
      {
        question: "How many words minimum for the independent essay?",
        questionPt: "Quantas palavras no mínimo para a redação independente?",
        options: [
          "150 words / 150 palavras",
          "225 words / 225 palavras",
          "300 words / 300 palavras",
          "500 words / 500 palavras"
        ],
        correct: 2
      },
      {
        question: "How many paragraphs in the recommended structure?",
        questionPt: "Quantos parágrafos na estrutura recomendada?",
        options: [
          "3 paragraphs / 3 parágrafos",
          "4 paragraphs / 4 parágrafos",
          "5 paragraphs / 5 parágrafos",
          "6 paragraphs / 6 parágrafos"
        ],
        correct: 2
      }
    ],
    summary: "TOEFL writing has 2 tasks: integrated (20 min, 150-225 words) and independent (30 min, 300+ words). Use 5-paragraph structure with clear thesis and specific examples.",
    summaryPt: "A escrita do TOEFL tem 2 tarefas: integrada (20 min, 150-225 palavras) e independente (30 min, 300+ palavras). Use estrutura de 5 parágrafos com tese clara e exemplos específicos."
  },
  {
    id: 8,
    title: "Writing Practice",
    titlePt: "Prática de Escrita",
    pronunciation: "ráiting préktis",
    objective: "Develop effective writing practice habits",
    objectivePt: "Desenvolver hábitos eficazes de prática de escrita",
    content: [
      {
        text: "Write at least one essay per week and have it reviewed for feedback.",
        textPt: "Escreva pelo menos uma redação por semana e peça revisão para feedback.",
        pronunciation: "ráit ét líst uân éssêi pêr uík énd rév it riviúd for fídbék"
      },
      {
        text: "Create templates for common essay types to save time during the test.",
        textPt: "Crie modelos para tipos comuns de redação para economizar tempo durante o teste.",
        pronunciation: "kriêit témpléits for kómân éssêi táips tu sêiv táim diúring dha tést"
      },
      {
        text: "Practice typing in English - you need to type quickly and accurately.",
        textPt: "Pratique digitar em inglês - você precisa digitar rápido e com precisão.",
        pronunciation: "préktis táiping in ínglish - iú níd tu táip kuíkli énd ékiurâtli"
      },
      {
        text: "Learn common transitions: 'Furthermore', 'In addition', 'On the other hand', 'Consequently'.",
        textPt: "Aprenda transições comuns: 'Furthermore' (Além disso), 'In addition' (Adicionalmente), 'On the other hand' (Por outro lado), 'Consequently' (Consequentemente).",
        pronunciation: "lêrn kómân trénzíshânz: fêrdhârmor, in âdíshân, ón dhi âdhâr rénd, kónsikuêntli"
      },
      {
        text: "Always leave 3-5 minutes at the end to review and correct grammar and spelling errors.",
        textPt: "Sempre deixe 3-5 minutos no final para revisar e corrigir erros de gramática e ortografia.",
        pronunciation: "óluêiz lív thrí tu fáiv mínits ét dhi énd tu riviú énd kârrékt grémâr énd spéling érârz"
      }
    ],
    quiz: [
      {
        question: "How often should you write practice essays?",
        questionPt: "Com que frequência você deve escrever redações de prática?",
        options: [
          "Once a month / Uma vez por mês",
          "At least once a week / Pelo menos uma vez por semana",
          "Only before the test / Apenas antes do teste",
          "Never / Nunca"
        ],
        correct: 1
      },
      {
        question: "Why should you create templates?",
        questionPt: "Por que você deve criar modelos?",
        options: [
          "To cheat / Para trapacear",
          "To save time / Para economizar tempo",
          "To make it longer / Para deixar mais longo",
          "Templates are not allowed / Modelos não são permitidos"
        ],
        correct: 1
      },
      {
        question: "How much time should you leave for review?",
        questionPt: "Quanto tempo você deve deixar para revisão?",
        options: [
          "No time / Nenhum tempo",
          "1 minute / 1 minuto",
          "3-5 minutes / 3-5 minutos",
          "15 minutes / 15 minutos"
        ],
        correct: 2
      }
    ],
    summary: "Effective writing practice includes weekly essay writing with feedback, creating templates, practicing typing, learning transitions, and always reserving time for review.",
    summaryPt: "Prática eficaz de escrita inclui escrever redações semanalmente com feedback, criar modelos, praticar digitação, aprender transições e sempre reservar tempo para revisão."
  },
  {
    id: 9,
    title: "Study Plan",
    titlePt: "Plano de Estudo",
    pronunciation: "stâdi plén",
    objective: "Create an effective TOEFL study schedule",
    objectivePt: "Criar um cronograma eficaz de estudo para o TOEFL",
    content: [
      {
        text: "Start preparing at least 3 months before your test date for best results.",
        textPt: "Comece a se preparar pelo menos 3 meses antes da data do teste para melhores resultados.",
        pronunciation: "start pripéring ét líst thrí mânths bifór iór tést dêit for bést rizâlts"
      },
      {
        text: "Take a diagnostic test first to identify your strengths and weaknesses.",
        textPt: "Faça um teste diagnóstico primeiro para identificar seus pontos fortes e fracos.",
        pronunciation: "têik â daiâgnóstik tést fêrst tu aidéntifái iór strénths énd uíknâsiz"
      },
      {
        text: "Study each section systematically: spend 1-2 weeks focusing on each skill area.",
        textPt: "Estude cada seção sistematicamente: gaste 1-2 semanas focando em cada área de habilidade.",
        pronunciation: "stâdi ítch sékshân sistâmétikâli: spénd uân tu tu uíks fôukâsing ón ítch skíl ériâ"
      },
      {
        text: "Practice with official TOEFL materials and full-length practice tests.",
        textPt: "Pratique com materiais oficiais do TOEFL e testes práticos completos.",
        pronunciation: "préktis uíth âfíshâl tôufel mâtíriâlz énd ful-léngth préktis tésts"
      },
      {
        text: "Review your mistakes carefully - they are your best learning opportunities.",
        textPt: "Revise seus erros cuidadosamente - eles são suas melhores oportunidades de aprendizado.",
        pronunciation: "riviú iór mistêiks kérfuli - dhêi ar iór bést lêrning opârtiunítiz"
      }
    ],
    quiz: [
      {
        question: "How long before the test should you start preparing?",
        questionPt: "Quanto tempo antes do teste você deve começar a se preparar?",
        options: [
          "1 week / 1 semana",
          "1 month / 1 mês",
          "At least 3 months / Pelo menos 3 meses",
          "1 year / 1 ano"
        ],
        correct: 2
      },
      {
        question: "What should you do first?",
        questionPt: "O que você deve fazer primeiro?",
        options: [
          "Buy all study books / Comprar todos os livros de estudo",
          "Take a diagnostic test / Fazer um teste diagnóstico",
          "Register for the test / Registrar-se para o teste",
          "Start studying randomly / Começar a estudar aleatoriamente"
        ],
        correct: 1
      },
      {
        question: "What are your best learning opportunities?",
        questionPt: "Quais são suas melhores oportunidades de aprendizado?",
        options: [
          "Easy questions / Perguntas fáceis",
          "Your mistakes / Seus erros",
          "Perfect scores / Notas perfeitas",
          "Skipped questions / Perguntas puladas"
        ],
        correct: 1
      }
    ],
    summary: "An effective TOEFL study plan requires 3+ months preparation, starting with a diagnostic test, systematic section-by-section study, official materials practice, and careful mistake review.",
    summaryPt: "Um plano de estudo eficaz para o TOEFL requer preparação de 3+ meses, começando com teste diagnóstico, estudo sistemático seção por seção, prática com materiais oficiais e revisão cuidadosa de erros."
  },
  {
    id: 10,
    title: "Test Day Tips",
    titlePt: "Dicas para o Dia do Teste",
    pronunciation: "tést dêi típs",
    objective: "Learn how to perform your best on test day",
    objectivePt: "Aprender como ter o melhor desempenho no dia do teste",
    content: [
      {
        text: "Arrive at the test center 30 minutes early with required identification.",
        textPt: "Chegue ao centro de testes 30 minutos mais cedo com identificação obrigatória.",
        pronunciation: "âráiv ét dha tést séntâr thêrti mínits êrli uíth rikuáiârd aidéntifikêishân"
      },
      {
        text: "Get a good night's sleep and eat a proper breakfast - your brain needs energy.",
        textPt: "Tenha uma boa noite de sono e coma um café da manhã adequado - seu cérebro precisa de energia.",
        pronunciation: "guét â gúd náits slíp énd ít â própâr brékfâst - iór brêin nídz énârdji"
      },
      {
        text: "During the break, stretch, drink water, and eat a snack to maintain energy.",
        textPt: "Durante o intervalo, alongue-se, beba água e coma um lanche para manter energia.",
        pronunciation: "diúring dha brêik, strétch, drink uótâr, énd ít â snék tu mêintêin énârdji"
      },
      {
        text: "Stay calm if you encounter a difficult question - move on and come back if time allows.",
        textPt: "Mantenha a calma se encontrar uma pergunta difícil - prossiga e volte se o tempo permitir.",
        pronunciation: "stêi kám if iú inkáuntâr â dífikâlt kuêstchân - múv ón énd kâm bék if táim âláuz"
      },
      {
        text: "Trust your preparation - you've practiced for this, so stay confident and focused.",
        textPt: "Confie na sua preparação - você praticou para isso, então mantenha-se confiante e focado.",
        pronunciation: "trâst iór prêpârêishân - iúv préktist for dhis, sôu stêi kónfidânt énd fôukâst"
      }
    ],
    quiz: [
      {
        question: "When should you arrive at the test center?",
        questionPt: "Quando você deve chegar ao centro de testes?",
        options: [
          "Right on time / No horário exato",
          "5 minutes early / 5 minutos mais cedo",
          "30 minutes early / 30 minutos mais cedo",
          "1 hour late / 1 hora atrasado"
        ],
        correct: 2
      },
      {
        question: "What should you do during the break?",
        questionPt: "O que você deve fazer durante o intervalo?",
        options: [
          "Study more / Estudar mais",
          "Leave the center / Sair do centro",
          "Stretch and eat a snack / Alongar e comer um lanche",
          "Call friends / Ligar para amigos"
        ],
        correct: 2
      },
      {
        question: "What should you do with difficult questions?",
        questionPt: "O que você deve fazer com perguntas difíceis?",
        options: [
          "Spend all your time on them / Gastar todo seu tempo nelas",
          "Give up immediately / Desistir imediatamente",
          "Move on and return if time allows / Prosseguir e voltar se o tempo permitir",
          "Leave them blank / Deixá-las em branco"
        ],
        correct: 2
      }
    ],
    summary: "Test day success requires arriving early with ID, proper rest and nutrition, using breaks wisely, staying calm with difficult questions, and trusting your preparation.",
    summaryPt: "Sucesso no dia do teste requer chegar cedo com identificação, descanso e nutrição adequados, usar intervalos sabiamente, manter calma com perguntas difíceis e confiar na sua preparação."
  }
];
