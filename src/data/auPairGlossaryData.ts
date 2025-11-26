export interface AuPairGlossaryTerm {
  term: string;
  pronunciation: string;
  definition: string;
  definitionPt: string;
  category: string;
}

export const auPairGlossary: AuPairGlossaryTerm[] = [
  // Program Basics
  {
    term: "Au Pair",
    pronunciation: "ou pér",
    definition: "A young person who lives with a host family abroad and helps with childcare in exchange for room, board, and cultural experience",
    definitionPt: "Jovem que mora com uma família anfitriã no exterior e ajuda com cuidado infantil em troca de quarto, alimentação e experiência cultural",
    category: "Program Basics"
  },
  {
    term: "Host Family",
    pronunciation: "rôust fémili",
    definition: "The family that welcomes an Au Pair into their home",
    definitionPt: "A família que recebe um Au Pair em sua casa",
    category: "Program Basics"
  },
  {
    term: "Stipend",
    pronunciation: "stáipend",
    definition: "Weekly payment given to the Au Pair for pocket money",
    definitionPt: "Pagamento semanal dado ao Au Pair para dinheiro de bolso",
    category: "Program Basics"
  },
  {
    term: "Room and Board",
    pronunciation: "rum énd bord",
    definition: "Free accommodation and meals provided by the host family",
    definitionPt: "Acomodação e refeições gratuitas fornecidas pela família anfitriã",
    category: "Program Basics"
  },
  {
    term: "Cultural Exchange",
    pronunciation: "kâltchârâl ikstchêindj",
    definition: "Sharing cultures, languages, and experiences between Au Pair and host family",
    definitionPt: "Compartilhar culturas, idiomas e experiências entre Au Pair e família anfitriã",
    category: "Program Basics"
  },
  
  // Agency and Application
  {
    term: "Agency",
    pronunciation: "êidjânsi",
    definition: "Organization that connects Au Pairs with host families",
    definitionPt: "Organização que conecta Au Pairs com famílias anfitriãs",
    category: "Agency"
  },
  {
    term: "Accredited",
    pronunciation: "âkrédited",
    definition: "Officially recognized and approved",
    definitionPt: "Oficialmente reconhecido e aprovado",
    category: "Agency"
  },
  {
    term: "Application",
    pronunciation: "éplikêishân",
    definition: "Formal request to join the Au Pair program",
    definitionPt: "Pedido formal para entrar no programa Au Pair",
    category: "Agency"
  },
  {
    term: "Profile",
    pronunciation: "prôufáil",
    definition: "Personal description including photos, letter, and experience",
    definitionPt: "Descrição pessoal incluindo fotos, carta e experiência",
    category: "Agency"
  },
  {
    term: "Matching",
    pronunciation: "métching",
    definition: "Process of finding the right family for an Au Pair",
    definitionPt: "Processo de encontrar a família certa para um Au Pair",
    category: "Agency"
  },
  {
    term: "Pre-departure Orientation",
    pronunciation: "prí-dipártchur oriântêishân",
    definition: "Training and preparation before leaving for the program",
    definitionPt: "Treinamento e preparação antes de partir para o programa",
    category: "Agency"
  },
  
  // Documents and Visa
  {
    term: "Passport",
    pronunciation: "péspórt",
    definition: "Official document for international travel",
    definitionPt: "Documento oficial para viagens internacionais",
    category: "Documents"
  },
  {
    term: "Visa",
    pronunciation: "vízâ",
    definition: "Permission to enter and stay in a foreign country",
    definitionPt: "Permissão para entrar e permanecer em um país estrangeiro",
    category: "Documents"
  },
  {
    term: "J-1 Visa",
    pronunciation: "djêi-uân vízâ",
    definition: "Exchange visitor visa required for Au Pairs in the USA",
    definitionPt: "Visto de visitante de intercâmbio necessário para Au Pairs nos EUA",
    category: "Documents"
  },
  {
    term: "Birth Certificate",
    pronunciation: "bêrth sârtífikât",
    definition: "Official record of birth",
    definitionPt: "Registro oficial de nascimento",
    category: "Documents"
  },
  {
    term: "Criminal Background Check",
    pronunciation: "krímânâl békgráund tchék",
    definition: "Verification that you have no criminal record",
    definitionPt: "Verificação de que você não tem antecedentes criminais",
    category: "Documents"
  },
  {
    term: "Medical Exam",
    pronunciation: "médikâl igzém",
    definition: "Health check required for visa application",
    definitionPt: "Exame de saúde necessário para pedido de visto",
    category: "Documents"
  },
  {
    term: "Driver's License",
    pronunciation: "dráivârz láisâns",
    definition: "Official permission to drive a vehicle",
    definitionPt: "Permissão oficial para dirigir um veículo",
    category: "Documents"
  },
  {
    term: "Health Insurance",
    pronunciation: "rélth inchiúrâns",
    definition: "Coverage for medical expenses during your stay",
    definitionPt: "Cobertura para despesas médicas durante sua estadia",
    category: "Documents"
  },
  
  // Childcare
  {
    term: "Childcare",
    pronunciation: "tcháildkér",
    definition: "Looking after and supervising children",
    definitionPt: "Cuidar e supervisionar crianças",
    category: "Childcare"
  },
  {
    term: "Babysitting",
    pronunciation: "béibisíting",
    definition: "Temporarily caring for children",
    definitionPt: "Cuidar temporariamente de crianças",
    category: "Childcare"
  },
  {
    term: "Diaper",
    pronunciation: "dáiâpâr",
    definition: "Absorbent garment worn by babies",
    definitionPt: "Roupa absorvente usada por bebês",
    category: "Childcare"
  },
  {
    term: "Feeding",
    pronunciation: "fíding",
    definition: "Giving food to children",
    definitionPt: "Dar comida para crianças",
    category: "Childcare"
  },
  {
    term: "Bedtime",
    pronunciation: "bédtáim",
    definition: "Time when children go to sleep",
    definitionPt: "Hora de as crianças irem dormir",
    category: "Childcare"
  },
  {
    term: "Nap Time",
    pronunciation: "nép táim",
    definition: "Period when children sleep during the day",
    definitionPt: "Período quando crianças dormem durante o dia",
    category: "Childcare"
  },
  {
    term: "Playground",
    pronunciation: "plêigráund",
    definition: "Outdoor area with equipment for children to play",
    definitionPt: "Área externa com equipamentos para crianças brincarem",
    category: "Childcare"
  },
  {
    term: "Homework",
    pronunciation: "rôumuôrk",
    definition: "School assignments done at home",
    definitionPt: "Tarefas escolares feitas em casa",
    category: "Childcare"
  },
  {
    term: "Pick Up",
    pronunciation: "pik âp",
    definition: "Collect children from school or activities",
    definitionPt: "Buscar crianças na escola ou atividades",
    category: "Childcare"
  },
  {
    term: "Drop Off",
    pronunciation: "dróp óf",
    definition: "Take children to school or activities",
    definitionPt: "Levar crianças para a escola ou atividades",
    category: "Childcare"
  },
  
  // Daily Life
  {
    term: "Schedule",
    pronunciation: "skédjul",
    definition: "Plan showing times and activities",
    definitionPt: "Plano mostrando horários e atividades",
    category: "Daily Life"
  },
  {
    term: "Chores",
    pronunciation: "tchórz",
    definition: "Regular household tasks",
    definitionPt: "Tarefas domésticas regulares",
    category: "Daily Life"
  },
  {
    term: "Light Housekeeping",
    pronunciation: "láit ráuskíping",
    definition: "Basic cleaning related to children's areas",
    definitionPt: "Limpeza básica relacionada às áreas das crianças",
    category: "Daily Life"
  },
  {
    term: "Meal Prep",
    pronunciation: "míl prép",
    definition: "Preparing food and meals",
    definitionPt: "Preparar comida e refeições",
    category: "Daily Life"
  },
  {
    term: "Laundry",
    pronunciation: "lóndri",
    definition: "Washing and caring for clothes",
    definitionPt: "Lavar e cuidar de roupas",
    category: "Daily Life"
  },
  {
    term: "Free Time",
    pronunciation: "fri táim",
    definition: "Time when you're not working",
    definitionPt: "Tempo quando você não está trabalhando",
    category: "Daily Life"
  },
  {
    term: "Day Off",
    pronunciation: "dêi óf",
    definition: "Full day when you don't work",
    definitionPt: "Dia completo quando você não trabalha",
    category: "Daily Life"
  },
  {
    term: "Curfew",
    pronunciation: "kêrfiú",
    definition: "Time by which you must be home",
    definitionPt: "Hora até a qual você deve estar em casa",
    category: "Daily Life"
  },
  
  // Communication
  {
    term: "House Rules",
    pronunciation: "ráus rulz",
    definition: "Family's expectations and regulations",
    definitionPt: "Expectativas e regulamentos da família",
    category: "Communication"
  },
  {
    term: "Expectations",
    pronunciation: "ekspéktêishâns",
    definition: "What the family hopes or requires from you",
    definitionPt: "O que a família espera ou exige de você",
    category: "Communication"
  },
  {
    term: "Feedback",
    pronunciation: "fídbék",
    definition: "Comments about your performance",
    definitionPt: "Comentários sobre seu desempenho",
    category: "Communication"
  },
  {
    term: "Conflict",
    pronunciation: "kônflíkt",
    definition: "Disagreement or problem between people",
    definitionPt: "Desacordo ou problema entre pessoas",
    category: "Communication"
  },
  {
    term: "Boundaries",
    pronunciation: "báundâriz",
    definition: "Limits in relationships and behavior",
    definitionPt: "Limites em relacionamentos e comportamento",
    category: "Communication"
  },
  
  // Cultural Adaptation
  {
    term: "Culture Shock",
    pronunciation: "kâltchur shók",
    definition: "Disorientation when experiencing a different culture",
    definitionPt: "Desorientação ao vivenciar uma cultura diferente",
    category: "Cultural"
  },
  {
    term: "Homesickness",
    pronunciation: "rôumsíknes",
    definition: "Feeling sad because you miss home",
    definitionPt: "Sentir-se triste porque sente falta de casa",
    category: "Cultural"
  },
  {
    term: "Adaptation",
    pronunciation: "édéptêishân",
    definition: "Process of adjusting to new circumstances",
    definitionPt: "Processo de ajustar-se a novas circunstâncias",
    category: "Cultural"
  },
  {
    term: "Open-minded",
    pronunciation: "ôupân-máindid",
    definition: "Willing to consider new ideas and experiences",
    definitionPt: "Disposto a considerar novas ideias e experiências",
    category: "Cultural"
  },
  {
    term: "Etiquette",
    pronunciation: "étikêt",
    definition: "Customary code of polite behavior",
    definitionPt: "Código costumeiro de comportamento educado",
    category: "Cultural"
  },
  
  // Emergency and Safety
  {
    term: "Emergency",
    pronunciation: "imêrdjânsi",
    definition: "Serious, unexpected situation requiring immediate action",
    definitionPt: "Situação séria e inesperada que requer ação imediata",
    category: "Safety"
  },
  {
    term: "First Aid",
    pronunciation: "fêrst êid",
    definition: "Emergency medical help before professional treatment",
    definitionPt: "Ajuda médica de emergência antes do tratamento profissional",
    category: "Safety"
  },
  {
    term: "Fire Drill",
    pronunciation: "fáiâr dríl",
    definition: "Practice for emergency evacuation",
    definitionPt: "Prática para evacuação de emergência",
    category: "Safety"
  },
  {
    term: "Allergies",
    pronunciation: "élârdjiz",
    definition: "Negative reactions to certain foods or substances",
    definitionPt: "Reações negativas a certos alimentos ou substâncias",
    category: "Safety"
  },
  {
    term: "CPR",
    pronunciation: "sí-pí-ár",
    definition: "Cardiopulmonary resuscitation - emergency life-saving procedure",
    definitionPt: "Ressuscitação cardiopulmonar - procedimento de emergência para salvar vidas",
    category: "Safety"
  },
  
  // Program Completion
  {
    term: "Extension",
    pronunciation: "iksténshân",
    definition: "Continuing the program beyond the original end date",
    definitionPt: "Continuar o programa além da data original de término",
    category: "Program"
  },
  {
    term: "Rematch",
    pronunciation: "rímétch",
    definition: "Finding a new host family during your program",
    definitionPt: "Encontrar uma nova família anfitriã durante seu programa",
    category: "Program"
  },
  {
    term: "Certificate",
    pronunciation: "sârtífikât",
    definition: "Official document proving program completion",
    definitionPt: "Documento oficial provando conclusão do programa",
    category: "Program"
  },
  {
    term: "Grace Period",
    pronunciation: "grêis píriâd",
    definition: "Time allowed to travel after program ends",
    definitionPt: "Tempo permitido para viajar após o término do programa",
    category: "Program"
  },
  {
    term: "References",
    pronunciation: "réfârânsiz",
    definition: "Letters from people who can vouch for your skills",
    definitionPt: "Cartas de pessoas que podem atestar suas habilidades",
    category: "Program"
  }
];
