export interface AuPairLesson {
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

export const auPairLessons: AuPairLesson[] = [
  {
    id: 1,
    title: "What Is an Au Pair?",
    titlePt: "O que é Au Pair?",
    pronunciation: "uót iz ãn ou pér?",
    objective: "Understand what an Au Pair program is and how it works",
    objectivePt: "Entender o que é o programa Au Pair e como funciona",
    content: [
      {
        text: "An Au Pair is a young person who travels abroad to live with a host family and help with childcare.",
        textPt: "Au Pair é uma pessoa jovem que viaja para o exterior para morar com uma família anfitriã e ajudar com o cuidado das crianças.",
        pronunciation: "ãn ou pér iz â iãng pêrsãn ru trévâls âbród tu liv uíth â rôust fémili énd relp uíth tcháildkér"
      },
      {
        text: "Au Pairs are not babysitters or employees. They are considered part of the family.",
        textPt: "Au Pairs não são babás ou empregados. São considerados parte da família.",
        pronunciation: "ou pérs ar nót béibisítârs or emploiíz. dhêi ar kãnsídârd part óv dha fémili"
      },
      {
        text: "The program includes free room and board, a weekly stipend, and the opportunity to study.",
        textPt: "O programa inclui quarto e alimentação grátis, uma remuneração semanal e a oportunidade de estudar.",
        pronunciation: "dha prôugrém inklúdz fri rum énd bord, â uíkli stáipend, énd dhi oportiúniti tu stâdi"
      },
      {
        text: "Most Au Pair programs last 12 months, with the option to extend for another 6, 9, or 12 months.",
        textPt: "A maioria dos programas Au Pair duram 12 meses, com opção de estender por mais 6, 9 ou 12 meses.",
        pronunciation: "môust ou pér prôugréms lést tuélv mânths, uíth dhi ópshãn tu ikstênd for ânâdhâr siks, náin, or tuélv mânths"
      },
      {
        text: "Popular Au Pair countries include the USA, Germany, France, Spain, Netherlands, and Australia.",
        textPt: "Países populares para Au Pair incluem EUA, Alemanha, França, Espanha, Holanda e Austrália.",
        pronunciation: "pópulâr ou pér kântriz inklúd dha iú-és-êi, djêrmâni, fréns, spêin, nédhârlândz, énd osstréiliâ"
      }
    ],
    quiz: [
      {
        question: "What is an Au Pair?",
        questionPt: "O que é um Au Pair?",
        options: [
          "A tourist / Um turista",
          "A young person living with a host family / Uma pessoa jovem morando com uma família anfitriã",
          "A professional nanny / Uma babá profissional",
          "A hotel worker / Um trabalhador de hotel"
        ],
        correct: 1
      },
      {
        question: "How long does a typical Au Pair program last?",
        questionPt: "Quanto tempo dura um programa Au Pair típico?",
        options: [
          "3 months / 3 meses",
          "6 months / 6 meses",
          "12 months / 12 meses",
          "24 months / 24 meses"
        ],
        correct: 2
      },
      {
        question: "What does the Au Pair program include?",
        questionPt: "O que o programa Au Pair inclui?",
        options: [
          "Only accommodation / Apenas acomodação",
          "Room, board, and stipend / Quarto, alimentação e remuneração",
          "Only money / Apenas dinheiro",
          "Only meals / Apenas refeições"
        ],
        correct: 1
      }
    ],
    summary: "An Au Pair is a cultural exchange program where young people live with host families abroad, helping with childcare while experiencing a new culture and language.",
    summaryPt: "Au Pair é um programa de intercâmbio cultural onde jovens moram com famílias anfitriãs no exterior, ajudando com cuidado infantil enquanto vivenciam uma nova cultura e idioma."
  },
  {
    id: 2,
    title: "What to Expect From the Experience",
    titlePt: "O que Esperar da Experiência",
    pronunciation: "uót tu ikspékt frôm dhi ikspíriâns",
    objective: "Learn about daily responsibilities and realistic expectations",
    objectivePt: "Aprender sobre responsabilidades diárias e expectativas realistas",
    content: [
      {
        text: "Au Pairs typically work 25-45 hours per week, depending on the country and agreement.",
        textPt: "Au Pairs geralmente trabalham 25-45 horas por semana, dependendo do país e acordo.",
        pronunciation: "ou pérs típikâli uôrk tuénti-fáiv tu fórti-fáiv áuârs pêr uík, dipênding ón dha kântri énd âgríment"
      },
      {
        text: "Daily tasks include preparing meals for children, helping with homework, and organizing activities.",
        textPt: "Tarefas diárias incluem preparar refeições para as crianças, ajudar com lição de casa e organizar atividades.",
        pronunciation: "dêili tésks inklúd pripéring mílz for tchíldrân, rélping uíth rôumuôrk, énd orgânaizing éktívitiz"
      },
      {
        text: "You will have free time to attend language classes, explore the city, and make new friends.",
        textPt: "Você terá tempo livre para frequentar aulas de idioma, explorar a cidade e fazer novos amigos.",
        pronunciation: "iú uíl rév fri táim tu âtênd lénguidj kléssâz, iksplór dha síti, énd mêik niú frêndz"
      },
      {
        text: "Living with a family means adapting to their routines, rules, and cultural habits.",
        textPt: "Morar com uma família significa se adaptar às suas rotinas, regras e hábitos culturais.",
        pronunciation: "líving uíth â fémili mínz âdépting tu dhér rutínz, rulz, énd kâltchârâl rébits"
      },
      {
        text: "You will experience cultural differences and may face homesickness, but this is part of personal growth.",
        textPt: "Você vai vivenciar diferenças culturais e pode sentir saudades de casa, mas isso faz parte do crescimento pessoal.",
        pronunciation: "iú uíl ikspíriâns kâltchârâl dífârânsiz énd mêi fêis rôumsíknes, bât dhis iz part óv pêrsânâl grôuth"
      }
    ],
    quiz: [
      {
        question: "How many hours per week do Au Pairs typically work?",
        questionPt: "Quantas horas por semana os Au Pairs geralmente trabalham?",
        options: [
          "10-20 hours / 10-20 horas",
          "25-45 hours / 25-45 horas",
          "50-60 hours / 50-60 horas",
          "60+ hours / 60+ horas"
        ],
        correct: 1
      },
      {
        question: "What is NOT a typical Au Pair responsibility?",
        questionPt: "O que NÃO é uma responsabilidade típica de Au Pair?",
        options: [
          "Preparing children's meals / Preparar refeições das crianças",
          "Helping with homework / Ajudar com lição de casa",
          "Heavy house cleaning / Limpeza pesada da casa",
          "Organizing activities / Organizar atividades"
        ],
        correct: 2
      },
      {
        question: "What should you expect when living with a host family?",
        questionPt: "O que você deve esperar ao morar com uma família anfitriã?",
        options: [
          "Complete independence / Independência completa",
          "Adapting to their routines / Adaptar-se às suas rotinas",
          "Hotel-like service / Serviço tipo hotel",
          "No rules / Sem regras"
        ],
        correct: 1
      }
    ],
    summary: "The Au Pair experience includes 25-45 hours of childcare work per week, free time for personal activities, and adapting to a new family and culture.",
    summaryPt: "A experiência Au Pair inclui 25-45 horas de trabalho com cuidado infantil por semana, tempo livre para atividades pessoais e adaptação a uma nova família e cultura."
  },
  {
    id: 3,
    title: "Basic Requirements",
    titlePt: "Requisitos Básicos",
    pronunciation: "bêisik rikuáiârmânts",
    objective: "Understand the essential requirements to become an Au Pair",
    objectivePt: "Entender os requisitos essenciais para se tornar Au Pair",
    content: [
      {
        text: "You must be between 18 and 26 years old (age limits vary by country).",
        textPt: "Você deve ter entre 18 e 26 anos (limites de idade variam por país).",
        pronunciation: "iú mâst bi bituín êitín énd tuénti-síks iírz ôuld (êidj límits véri bái kântri)"
      },
      {
        text: "You need at least 200 hours of documented childcare experience (babysitting, tutoring, camps, etc.).",
        textPt: "Você precisa de pelo menos 200 horas de experiência documentada com cuidado infantil (babá, tutoria, acampamentos, etc.).",
        pronunciation: "iú níd ét líst tu rândrâd áuârs óv dókiumêntid tcháildkér ikspíriâns"
      },
      {
        text: "A valid driver's license is required for most programs, especially in the USA.",
        textPt: "Carteira de motorista válida é exigida para a maioria dos programas, especialmente nos EUA.",
        pronunciation: "â válid dráivârz láisâns iz rikuáiârd for môust prôugréms, ispéshâli in dha iú-és-êi"
      },
      {
        text: "You must have intermediate to advanced English skills (or the language of the host country).",
        textPt: "Você deve ter habilidades de inglês intermediárias a avançadas (ou o idioma do país anfitrião).",
        pronunciation: "iú mâst rév intârmídiât tu âdvénst ínglish skílz"
      },
      {
        text: "You need to be unmarried and have no children of your own.",
        textPt: "Você precisa ser solteiro(a) e não ter filhos próprios.",
        pronunciation: "iú níd tu bi ânmérid énd rév nôu tchíldrân óv iór ôun"
      }
    ],
    quiz: [
      {
        question: "What is the typical age range for Au Pairs?",
        questionPt: "Qual é a faixa etária típica para Au Pairs?",
        options: [
          "16-20 years / 16-20 anos",
          "18-26 years / 18-26 anos",
          "21-30 years / 21-30 anos",
          "25-35 years / 25-35 anos"
        ],
        correct: 1
      },
      {
        question: "How many hours of childcare experience are typically required?",
        questionPt: "Quantas horas de experiência com cuidado infantil são geralmente exigidas?",
        options: [
          "50 hours / 50 horas",
          "100 hours / 100 horas",
          "200 hours / 200 horas",
          "500 hours / 500 horas"
        ],
        correct: 2
      },
      {
        question: "Is a driver's license required?",
        questionPt: "Carteira de motorista é obrigatória?",
        options: [
          "No, never / Não, nunca",
          "Only in Europe / Apenas na Europa",
          "Yes, for most programs / Sim, para a maioria dos programas",
          "Only if you're over 25 / Apenas se você tiver mais de 25"
        ],
        correct: 2
      }
    ],
    summary: "Basic Au Pair requirements include being 18-26 years old, having 200+ hours of childcare experience, a driver's license, intermediate English skills, and being unmarried without children.",
    summaryPt: "Requisitos básicos de Au Pair incluem ter 18-26 anos, 200+ horas de experiência com cuidado infantil, carteira de motorista, inglês intermediário e ser solteiro(a) sem filhos."
  },
  {
    id: 4,
    title: "Choosing the Right Agency",
    titlePt: "Escolhendo a Agência Certa",
    pronunciation: "tchúzing dha ráit êidjânsi",
    objective: "Learn how to select a trustworthy Au Pair agency",
    objectivePt: "Aprender como selecionar uma agência Au Pair confiável",
    content: [
      {
        text: "Research agencies that are officially accredited in your destination country.",
        textPt: "Pesquise agências que são oficialmente credenciadas no seu país de destino.",
        pronunciation: "risêrtch êidjânsiz dhét ar âfíshâli âkrédited in iór dêstinêishân kântri"
      },
      {
        text: "Ask about agency fees, what's included, and if there are any hidden costs.",
        textPt: "Pergunte sobre taxas da agência, o que está incluído e se há custos ocultos.",
        pronunciation: "ésk âbáut êidjânsi fíz, uóts inklúdid, énd if dhér ar éni rídân kósts"
      },
      {
        text: "Look for agencies with good reviews from past Au Pairs and transparent processes.",
        textPt: "Procure agências com boas avaliações de Au Pairs anteriores e processos transparentes.",
        pronunciation: "lúk for êidjânsiz uíth gúd riviúz frôm pést ou pérs énd trénspérânt prôsessiz"
      },
      {
        text: "Red flags include agencies that guarantee quick matches, charge excessive fees, or lack support.",
        textPt: "Sinais de alerta incluem agências que garantem matches rápidos, cobram taxas excessivas ou não têm suporte.",
        pronunciation: "réd flégz inklúd êidjânsiz dhét gérânti kuík métchiz, tchardj iksséssiv fíz, or lék sâport"
      },
      {
        text: "Choose an agency that offers pre-departure orientation and ongoing support during your stay.",
        textPt: "Escolha uma agência que oferece orientação pré-partida e suporte contínuo durante sua estadia.",
        pronunciation: "tchúz ãn êidjânsi dhét ófârz prí-dipártchur oriântêishân énd óngôuing sâport diúring iór stêi"
      }
    ],
    quiz: [
      {
        question: "What should you look for in an Au Pair agency?",
        questionPt: "O que você deve procurar em uma agência Au Pair?",
        options: [
          "Cheapest price / Preço mais barato",
          "Official accreditation / Credenciamento oficial",
          "Fastest process / Processo mais rápido",
          "No requirements / Sem requisitos"
        ],
        correct: 1
      },
      {
        question: "What is a red flag when choosing an agency?",
        questionPt: "O que é um sinal de alerta ao escolher uma agência?",
        options: [
          "Transparent fees / Taxas transparentes",
          "Good reviews / Boas avaliações",
          "Excessive fees / Taxas excessivas",
          "Pre-departure support / Suporte pré-partida"
        ],
        correct: 2
      },
      {
        question: "What should an agency provide?",
        questionPt: "O que uma agência deve fornecer?",
        options: [
          "Only application processing / Apenas processamento da inscrição",
          "Pre-departure orientation and ongoing support / Orientação pré-partida e suporte contínuo",
          "Just visa assistance / Apenas assistência com visto",
          "Nothing after matching / Nada após o match"
        ],
        correct: 1
      }
    ],
    summary: "Choose accredited agencies with transparent fees, good reviews, and ongoing support. Avoid agencies that make unrealistic promises or charge excessive fees.",
    summaryPt: "Escolha agências credenciadas com taxas transparentes, boas avaliações e suporte contínuo. Evite agências que fazem promessas irrealistas ou cobram taxas excessivas."
  },
  {
    id: 5,
    title: "What Happens at the Agency",
    titlePt: "O que Acontece na Agência",
    pronunciation: "uót répâns ét dhi êidjânsi",
    objective: "Understand the agency application and preparation process",
    objectivePt: "Entender o processo de inscrição e preparação da agência",
    content: [
      {
        text: "You will have an initial interview where the agency assesses your motivation and suitability.",
        textPt: "Você terá uma entrevista inicial onde a agência avalia sua motivação e adequação.",
        pronunciation: "iú uíl rév ãn iníshâl íntârviú uér dhi êidjânsi âsésâz iór môutivêishân énd sutâbíliti"
      },
      {
        text: "You'll take an English test to verify your language level (usually intermediate or above).",
        textPt: "Você fará um teste de inglês para verificar seu nível de idioma (geralmente intermediário ou acima).",
        pronunciation: "iúl têik ãn ínglish têst tu vérifi iór lénguidj lével"
      },
      {
        text: "The agency will help you create your Au Pair profile, including photos, a letter to families, and references.",
        textPt: "A agência vai ajudá-lo a criar seu perfil Au Pair, incluindo fotos, carta para famílias e referências.",
        pronunciation: "dhi êidjânsi uíl rélp iú kriêit iór ou pér prôufáil, inklúding fôutôuz, â létâr tu fémiliz, énd réfârânsiz"
      },
      {
        text: "You will receive training on childcare techniques, safety procedures, and cultural awareness.",
        textPt: "Você receberá treinamento sobre técnicas de cuidado infantil, procedimentos de segurança e consciência cultural.",
        pronunciation: "iú uíl risív trêining ón tcháildkér têkníks, sêifti prôusídjârz, énd kâltchârâl âuérnâs"
      },
      {
        text: "The agency guides you through document preparation and explains the visa process step by step.",
        textPt: "A agência orienta você na preparação de documentos e explica o processo de visto passo a passo.",
        pronunciation: "dhi êidjânsi gáidz iú thru dókiumânt prêpârêishân énd iksplêinz dha vízâ prôusés stép bái stép"
      }
    ],
    quiz: [
      {
        question: "What happens during the initial agency interview?",
        questionPt: "O que acontece durante a entrevista inicial da agência?",
        options: [
          "They give you money / Eles te dão dinheiro",
          "They assess your motivation and suitability / Eles avaliam sua motivação e adequação",
          "They book your flight / Eles reservam seu voo",
          "They match you with a family / Eles te dão match com uma família"
        ],
        correct: 1
      },
      {
        question: "What is included in your Au Pair profile?",
        questionPt: "O que está incluído no seu perfil Au Pair?",
        options: [
          "Only photos / Apenas fotos",
          "Photos, letter, and references / Fotos, carta e referências",
          "Just your age / Apenas sua idade",
          "Only your name / Apenas seu nome"
        ],
        correct: 1
      },
      {
        question: "What training does the agency provide?",
        questionPt: "Que treinamento a agência fornece?",
        options: [
          "No training / Nenhum treinamento",
          "Only English classes / Apenas aulas de inglês",
          "Childcare, safety, and cultural training / Cuidado infantil, segurança e treinamento cultural",
          "Just driving lessons / Apenas aulas de direção"
        ],
        correct: 2
      }
    ],
    summary: "At the agency, you complete an interview, English test, create your profile, receive childcare training, and get guidance on documents and visa process.",
    summaryPt: "Na agência, você completa uma entrevista, teste de inglês, cria seu perfil, recebe treinamento em cuidado infantil e orientação sobre documentos e processo de visto."
  },
  {
    id: 6,
    title: "Passport and Documents Preparation",
    titlePt: "Preparação de Passaporte e Documentos",
    pronunciation: "péspórt énd dókiumânts prêpârêishân",
    objective: "Learn about required documents and visa procedures",
    objectivePt: "Aprender sobre documentos necessários e procedimentos de visto",
    content: [
      {
        text: "Your passport must be valid for at least 6 months beyond your planned stay.",
        textPt: "Seu passaporte deve ser válido por pelo menos 6 meses além da sua estadia planejada.",
        pronunciation: "iór péspórt mâst bi válid for ét líst síks mânths biiónd iór plénd stêi"
      },
      {
        text: "For the USA, you need a J-1 visa. For Europe, requirements vary by country (often a long-stay visa).",
        textPt: "Para os EUA, você precisa de visto J-1. Para a Europa, os requisitos variam por país (geralmente visto de longa permanência).",
        pronunciation: "for dha iú-és-êi, iú níd â djêi-uân vízâ"
      },
      {
        text: "Required documents typically include: passport, birth certificate, criminal background check, medical exam, and childcare references.",
        textPt: "Documentos necessários geralmente incluem: passaporte, certidão de nascimento, checagem de antecedentes criminais, exame médico e referências de cuidado infantil.",
        pronunciation: "rikuáiârd dókiumânts típikâli inklúd: péspórt, bêrth sârtífikât, krímânâl békgráund tchék, médikâl igzém, énd tcháildkér réfârânsiz"
      },
      {
        text: "Some countries require proof of health insurance coverage during your entire stay.",
        textPt: "Alguns países exigem comprovante de cobertura de seguro saúde durante toda a sua estadia.",
        pronunciation: "sâm kântriz rikuáiâr pruf óv rélth inchiúrâns kâvâridj diúring iór intáiâr stêi"
      },
      {
        text: "Start the document process early – visa applications can take 2-4 months.",
        textPt: "Comece o processo de documentação cedo – pedidos de visto podem levar 2-4 meses.",
        pronunciation: "start dha dókiumânt prôusés êrli – vízâ éplikêishâns kén têik tu tu for mânths"
      }
    ],
    quiz: [
      {
        question: "How long must your passport be valid?",
        questionPt: "Por quanto tempo seu passaporte deve ser válido?",
        options: [
          "3 months / 3 meses",
          "6 months beyond your stay / 6 meses além da estadia",
          "1 year / 1 ano",
          "Only during your stay / Apenas durante a estadia"
        ],
        correct: 1
      },
      {
        question: "What visa do you need for the USA Au Pair program?",
        questionPt: "Que visto você precisa para o programa Au Pair nos EUA?",
        options: [
          "Tourist visa / Visto de turista",
          "Work visa / Visto de trabalho",
          "J-1 visa / Visto J-1",
          "Student visa / Visto de estudante"
        ],
        correct: 2
      },
      {
        question: "How long can the visa application process take?",
        questionPt: "Quanto tempo pode levar o processo de pedido de visto?",
        options: [
          "1 week / 1 semana",
          "2-4 weeks / 2-4 semanas",
          "2-4 months / 2-4 meses",
          "1 year / 1 ano"
        ],
        correct: 2
      }
    ],
    summary: "Prepare your passport (valid 6+ months), gather required documents (birth certificate, background check, medical exam), and apply for the appropriate visa early (2-4 months process).",
    summaryPt: "Prepare seu passaporte (válido 6+ meses), reúna documentos necessários (certidão de nascimento, checagem de antecedentes, exame médico) e solicite o visto apropriado cedo (processo de 2-4 meses)."
  },
  {
    id: 7,
    title: "Matching Process With the Family",
    titlePt: "Processo de Match com a Família",
    pronunciation: "métching prôusés uíth dha fémili",
    objective: "Understand how to find and connect with the right host family",
    objectivePt: "Entender como encontrar e se conectar com a família anfitriã certa",
    content: [
      {
        text: "Families will review your profile and contact you if they're interested.",
        textPt: "Famílias vão revisar seu perfil e entrar em contato se estiverem interessadas.",
        pronunciation: "fémiliz uíl riviú iór prôufáil énd kóntékt iú if dhêir íntârestid"
      },
      {
        text: "You will have video interviews with potential families to get to know each other.",
        textPt: "Você terá entrevistas por vídeo com famílias em potencial para se conhecerem.",
        pronunciation: "iú uíl rév vídio íntârviúz uíth pôtênshâl fémiliz tu guét tu nôu ítch âdhâr"
      },
      {
        text: "Ask important questions: How many children? Ages? Daily schedule? House rules? Expectations?",
        textPt: "Faça perguntas importantes: Quantas crianças? Idades? Rotina diária? Regras da casa? Expectativas?",
        pronunciation: "ésk impórtânt kuêstchâns: ráu méni tchíldrân? êidjâz? dêili skédjul? ráus rulz? ekspéktêishâns?"
      },
      {
        text: "Trust your instincts – if something feels wrong, it's okay to decline and wait for another match.",
        textPt: "Confie nos seus instintos – se algo parecer errado, está tudo bem recusar e esperar por outro match.",
        pronunciation: "trâst iór ínstinkts – if sâmthing filz róng, its ôukêi tu diklái énd uêit for ânâdhâr métch"
      },
      {
        text: "Once both parties agree, you'll sign a contract outlining responsibilities, schedule, and terms.",
        textPt: "Uma vez que ambas as partes concordem, você assinará um contrato detalhando responsabilidades, horário e termos.",
        pronunciation: "uâns bôuth pártiz âgrí, iúl sáin â kóntrékt áutláining rispônsâbílitiz, skédjul, énd têrmz"
      }
    ],
    quiz: [
      {
        question: "How do families initially contact you?",
        questionPt: "Como as famílias entram em contato inicialmente?",
        options: [
          "They don't contact you / Elas não entram em contato",
          "They review your profile and reach out / Elas revisam seu perfil e entram em contato",
          "You never meet them / Você nunca as conhece",
          "Only through the agency / Apenas pela agência"
        ],
        correct: 1
      },
      {
        question: "What should you do during video interviews?",
        questionPt: "O que você deve fazer durante entrevistas por vídeo?",
        options: [
          "Just listen / Apenas ouvir",
          "Ask important questions / Fazer perguntas importantes",
          "Say yes immediately / Dizer sim imediatamente",
          "Not ask anything / Não perguntar nada"
        ],
        correct: 1
      },
      {
        question: "What happens after both parties agree?",
        questionPt: "O que acontece depois que ambas as partes concordam?",
        options: [
          "Nothing / Nada",
          "You travel immediately / Você viaja imediatamente",
          "You sign a contract / Você assina um contrato",
          "You change families / Você muda de família"
        ],
        correct: 2
      }
    ],
    summary: "The matching process involves families reviewing your profile, video interviews, asking important questions, trusting your instincts, and signing a contract with agreed terms.",
    summaryPt: "O processo de match envolve famílias revisando seu perfil, entrevistas por vídeo, fazer perguntas importantes, confiar nos seus instintos e assinar um contrato com termos acordados."
  },
  {
    id: 8,
    title: "Cultural Preparation",
    titlePt: "Preparação Cultural",
    pronunciation: "kâltchârâl prêpârêishân",
    objective: "Prepare for cultural differences and adaptation challenges",
    objectivePt: "Preparar-se para diferenças culturais e desafios de adaptação",
    content: [
      {
        text: "Every country has different customs, communication styles, and social norms.",
        textPt: "Cada país tem costumes, estilos de comunicação e normas sociais diferentes.",
        pronunciation: "évri kântri réz dífârânt kâstâmz, kâmiúnikêishân stáilz, énd sôushâl nórmz"
      },
      {
        text: "Culture shock is normal and happens in stages: honeymoon, frustration, adjustment, and acceptance.",
        textPt: "Choque cultural é normal e acontece em estágios: lua de mel, frustração, ajuste e aceitação.",
        pronunciation: "kâltchur shók iz nórmâl énd répânz in stêidjâz: rânimun, frâstrêishân, âdjâstmânt, énd éksséptâns"
      },
      {
        text: "Be open-minded, patient, and willing to learn from your host family.",
        textPt: "Seja mente aberta, paciente e disposto a aprender com sua família anfitriã.",
        pronunciation: "bi ôupân-máindid, pêishânt, énd uíling tu lêrn frôm iór rôust fémili"
      },
      {
        text: "Research your destination country's holidays, food culture, tipping customs, and social etiquette.",
        textPt: "Pesquise os feriados do seu país de destino, cultura alimentar, costumes de gorjeta e etiqueta social.",
        pronunciation: "risêrtch iór dêstinêishân kântriz rólidêiz, fud kâltchur, típing kâstâmz, énd sôushâl étikêt"
      },
      {
        text: "Stay connected with other Au Pairs to share experiences and get support during difficult moments.",
        textPt: "Mantenha-se conectado com outros Au Pairs para compartilhar experiências e obter apoio durante momentos difíceis.",
        pronunciation: "stêi kânéktid uíth âdhâr ou pérs tu shér ikspíriânsiz énd guét sâport diúring dífikâlt môumânts"
      }
    ],
    quiz: [
      {
        question: "What is culture shock?",
        questionPt: "O que é choque cultural?",
        options: [
          "A disease / Uma doença",
          "Normal adaptation stages / Estágios normais de adaptação",
          "Something to avoid / Algo a evitar",
          "Only for weak people / Apenas para pessoas fracas"
        ],
        correct: 1
      },
      {
        question: "What should you research about your destination?",
        questionPt: "O que você deve pesquisar sobre seu destino?",
        options: [
          "Nothing / Nada",
          "Only the weather / Apenas o clima",
          "Holidays, food, customs, and etiquette / Feriados, comida, costumes e etiqueta",
          "Just the language / Apenas o idioma"
        ],
        correct: 2
      },
      {
        question: "How should you approach cultural differences?",
        questionPt: "Como você deve abordar diferenças culturais?",
        options: [
          "Ignore them / Ignorá-las",
          "Complain about them / Reclamar delas",
          "Be open-minded and willing to learn / Ser mente aberta e disposto a aprender",
          "Reject them / Rejeitá-las"
        ],
        correct: 2
      }
    ],
    summary: "Cultural preparation involves understanding that culture shock is normal, researching your destination's customs, staying open-minded, and connecting with other Au Pairs for support.",
    summaryPt: "Preparação cultural envolve entender que choque cultural é normal, pesquisar costumes do seu destino, manter mente aberta e conectar-se com outros Au Pairs para apoio."
  },
  {
    id: 9,
    title: "Travel and Arrival",
    titlePt: "Viagem e Chegada",
    pronunciation: "trévâl énd âráivâl",
    objective: "Learn about travel logistics and first days in the host country",
    objectivePt: "Aprender sobre logística de viagem e primeiros dias no país anfitrião",
    content: [
      {
        text: "Pack essentials: clothes for all seasons, personal documents, medications, and comfort items from home.",
        textPt: "Embale itens essenciais: roupas para todas as estações, documentos pessoais, medicamentos e itens de conforto de casa.",
        pronunciation: "pék êsênshâlz: klôudhz for ól sízânz, pêrsânâl dókiumânts, mêdikêishânz, énd kâmfârt áitâmz frôm rôum"
      },
      {
        text: "Your host family or agency representative will pick you up at the airport.",
        textPt: "Sua família anfitriã ou representante da agência vai buscá-lo no aeroporto.",
        pronunciation: "iór rôust fémili or êidjânsi rêprêzêntâtiv uíl pik iú âp ét dhi érpórt"
      },
      {
        text: "The first week is orientation: learning house rules, routines, children's schedules, and emergency procedures.",
        textPt: "A primeira semana é orientação: aprender regras da casa, rotinas, horários das crianças e procedimentos de emergência.",
        pronunciation: "dha fêrst uík iz oriântêishân: lêrning ráus rulz, rutínz, tchíldrânz skédjulz, énd imêrdjânsi prôusídjârz"
      },
      {
        text: "Be patient with yourself during the adjustment period – it's normal to feel overwhelmed at first.",
        textPt: "Seja paciente consigo mesmo durante o período de adaptação – é normal se sentir sobrecarregado no início.",
        pronunciation: "bi pêishânt uíth iorsélf diúring dhi âdjâstmânt píriâd – its nórmâl tu fil ôuvâruélmd ét fêrst"
      },
      {
        text: "Set up essentials in your first days: local SIM card, bank account, transportation pass, and emergency contacts.",
        textPt: "Configure itens essenciais nos primeiros dias: chip local, conta bancária, passe de transporte e contatos de emergência.",
        pronunciation: "sét âp êsênshâlz in iór fêrst dêiz: lôukâl sim kard, bénk âkáunt, trénspórtêishân pés, énd imêrdjânsi kóntékts"
      }
    ],
    quiz: [
      {
        question: "Who picks you up at the airport?",
        questionPt: "Quem te busca no aeroporto?",
        options: [
          "Nobody / Ninguém",
          "Host family or agency rep / Família anfitriã ou representante da agência",
          "You take a taxi alone / Você pega um táxi sozinho",
          "The government / O governo"
        ],
        correct: 1
      },
      {
        question: "What happens during the first week?",
        questionPt: "O que acontece durante a primeira semana?",
        options: [
          "You work full-time immediately / Você trabalha período integral imediatamente",
          "Orientation period / Período de orientação",
          "You travel around / Você viaja por aí",
          "Nothing / Nada"
        ],
        correct: 1
      },
      {
        question: "What should you set up in your first days?",
        questionPt: "O que você deve configurar nos primeiros dias?",
        options: [
          "Nothing / Nada",
          "Only clothes / Apenas roupas",
          "SIM card, bank account, transportation / Chip, conta bancária, transporte",
          "Just sleep / Apenas dormir"
        ],
        correct: 2
      }
    ],
    summary: "Travel preparation includes packing essentials, being picked up at the airport, spending the first week in orientation, adjusting patiently, and setting up local necessities.",
    summaryPt: "Preparação para viagem inclui embalar itens essenciais, ser buscado no aeroporto, passar a primeira semana em orientação, adaptar-se pacientemente e configurar necessidades locais."
  },
  {
    id: 10,
    title: "Tips for a Successful Au Pair Experience",
    titlePt: "Dicas para uma Experiência Au Pair de Sucesso",
    pronunciation: "típs for â sâksésful ou pér ikspíriâns",
    objective: "Learn strategies for making the most of your Au Pair year",
    objectivePt: "Aprender estratégias para aproveitar ao máximo seu ano como Au Pair",
    content: [
      {
        text: "Communicate openly with your host family about expectations, concerns, and feedback.",
        textPt: "Comunique-se abertamente com sua família anfitriã sobre expectativas, preocupações e feedback.",
        pronunciation: "kâmiúnikêit ôupânli uíth iór rôust fémili âbáut ekspéktêishâns, kânsêrnz, énd fídbék"
      },
      {
        text: "Be proactive: suggest activities for the children, help without being asked, and show initiative.",
        textPt: "Seja proativo: sugira atividades para as crianças, ajude sem ser solicitado e mostre iniciativa.",
        pronunciation: "bi prôuéktiv: sâdjést éktívitiz for dha tchíldrân, rélp uithout bíing éskt, énd shôu inishiâtiv"
      },
      {
        text: "Take advantage of your free time: take language classes, travel, explore, and make friends.",
        textPt: "Aproveite seu tempo livre: faça aulas de idioma, viaje, explore e faça amigos.",
        pronunciation: "têik âdvéntidj óv iór fri táim: têik lénguidj klésâz, trévâl, iksplór, énd mêik frêndz"
      },
      {
        text: "When conflicts arise, address them calmly and respectfully through honest conversation.",
        textPt: "Quando conflitos surgirem, aborde-os com calma e respeito através de conversa honesta.",
        pronunciation: "uén kônflíkts âráiz, âdrés dhém kámli énd rispéktfâli thru ónist kônvârsêishân"
      },
      {
        text: "Document your experience with photos and journal entries – this is a once-in-a-lifetime adventure!",
        textPt: "Documente sua experiência com fotos e entradas de diário – esta é uma aventura única na vida!",
        pronunciation: "dókiumânt iór ikspíriâns uíth fôutôuz énd djêrnâl éntriz – dhis iz â uâns-in-â-láiftáim âdvêntchur"
      }
    ],
    quiz: [
      {
        question: "How should you handle conflicts?",
        questionPt: "Como você deve lidar com conflitos?",
        options: [
          "Ignore them / Ignorá-los",
          "Get angry / Ficar bravo",
          "Address calmly and respectfully / Abordar com calma e respeito",
          "Leave immediately / Sair imediatamente"
        ],
        correct: 2
      },
      {
        question: "What should you do during free time?",
        questionPt: "O que você deve fazer durante o tempo livre?",
        options: [
          "Just sleep / Apenas dormir",
          "Stay home always / Ficar em casa sempre",
          "Take classes, travel, explore / Fazer aulas, viajar, explorar",
          "Work more / Trabalhar mais"
        ],
        correct: 2
      },
      {
        question: "What makes an Au Pair successful?",
        questionPt: "O que torna um Au Pair bem-sucedido?",
        options: [
          "Only following rules / Apenas seguir regras",
          "Being passive / Ser passivo",
          "Open communication and initiative / Comunicação aberta e iniciativa",
          "Avoiding the family / Evitar a família"
        ],
        correct: 2
      }
    ],
    summary: "Success as an Au Pair requires open communication, being proactive, taking advantage of opportunities, handling conflicts respectfully, and documenting this unique experience.",
    summaryPt: "Sucesso como Au Pair requer comunicação aberta, ser proativo, aproveitar oportunidades, lidar com conflitos respeitosamente e documentar esta experiência única."
  }
];
