export interface ToeflGlossaryTerm {
  term: string;
  pronunciation: string;
  definition: string;
  definitionPt: string;
  category: string;
}

export const toeflGlossary: ToeflGlossaryTerm[] = [
  // Test Basics
  {
    term: "TOEFL",
    pronunciation: "tôufel",
    definition: "Test of English as a Foreign Language - standardized test measuring English proficiency",
    definitionPt: "Test of English as a Foreign Language - teste padronizado medindo proficiência em inglês",
    category: "Test Basics"
  },
  {
    term: "iBT",
    pronunciation: "ái-bí-tí",
    definition: "Internet-Based Test - TOEFL format taken on computer",
    definitionPt: "Internet-Based Test - formato TOEFL realizado no computador",
    category: "Test Basics"
  },
  {
    term: "Score",
    pronunciation: "skór",
    definition: "Points earned on the test (0-120 total)",
    definitionPt: "Pontos obtidos no teste (0-120 total)",
    category: "Test Basics"
  },
  {
    term: "Section",
    pronunciation: "sékshân",
    definition: "One of the four parts of TOEFL: Reading, Listening, Speaking, Writing",
    definitionPt: "Uma das quatro partes do TOEFL: Leitura, Audição, Fala, Escrita",
    category: "Test Basics"
  },
  {
    term: "Passage",
    pronunciation: "pésâdj",
    definition: "A text or reading selection in the Reading section",
    definitionPt: "Um texto ou seleção de leitura na seção de Leitura",
    category: "Test Basics"
  },
  
  // Reading Section
  {
    term: "Skim",
    pronunciation: "skím",
    definition: "To read quickly to get the main idea",
    definitionPt: "Ler rapidamente para captar a ideia principal",
    category: "Reading"
  },
  {
    term: "Scan",
    pronunciation: "skén",
    definition: "To look quickly for specific information",
    definitionPt: "Procurar rapidamente por informação específica",
    category: "Reading"
  },
  {
    term: "Topic Sentence",
    pronunciation: "tópik séntâns",
    definition: "The main sentence that states the paragraph's main idea",
    definitionPt: "A frase principal que declara a ideia principal do parágrafo",
    category: "Reading"
  },
  {
    term: "Main Idea",
    pronunciation: "mêin aidíâ",
    definition: "The central point or message of a text",
    definitionPt: "O ponto central ou mensagem de um texto",
    category: "Reading"
  },
  {
    term: "Supporting Detail",
    pronunciation: "sâpórting ditêil",
    definition: "Information that explains or proves the main idea",
    definitionPt: "Informação que explica ou prova a ideia principal",
    category: "Reading"
  },
  {
    term: "Context Clue",
    pronunciation: "kóntekst klu",
    definition: "Information in surrounding text that helps understand unknown words",
    definitionPt: "Informação no texto ao redor que ajuda a entender palavras desconhecidas",
    category: "Reading"
  },
  {
    term: "Inference",
    pronunciation: "ínfârâns",
    definition: "A conclusion based on evidence and reasoning",
    definitionPt: "Uma conclusão baseada em evidências e raciocínio",
    category: "Reading"
  },
  {
    term: "Paraphrase",
    pronunciation: "pérâfrêiz",
    definition: "To restate something in different words",
    definitionPt: "Reescrever algo com palavras diferentes",
    category: "Reading"
  },
  
  // Listening Section
  {
    term: "Lecture",
    pronunciation: "léktchur",
    definition: "An academic presentation or talk",
    definitionPt: "Uma apresentação ou palestra acadêmica",
    category: "Listening"
  },
  {
    term: "Conversation",
    pronunciation: "kônvârsêishân",
    definition: "A dialogue between two or more people",
    definitionPt: "Um diálogo entre duas ou mais pessoas",
    category: "Listening"
  },
  {
    term: "Note-Taking",
    pronunciation: "nôut-têiking",
    definition: "Writing down important information while listening",
    definitionPt: "Anotar informações importantes enquanto ouve",
    category: "Listening"
  },
  {
    term: "Signal Word",
    pronunciation: "sígnâl uôrd",
    definition: "Word that indicates important information (however, therefore, etc.)",
    definitionPt: "Palavra que indica informação importante (however, therefore, etc.)",
    category: "Listening"
  },
  {
    term: "Transition",
    pronunciation: "trénzíshân",
    definition: "Words or phrases connecting ideas (first, next, finally)",
    definitionPt: "Palavras ou frases conectando ideias (first, next, finally)",
    category: "Listening"
  },
  {
    term: "Tone",
    pronunciation: "tôun",
    definition: "The speaker's attitude or feeling expressed through voice",
    definitionPt: "A atitude ou sentimento do falante expressa pela voz",
    category: "Listening"
  },
  
  // Speaking Section
  {
    term: "Independent Task",
    pronunciation: "indipéndânt tésk",
    definition: "Speaking task based on personal opinion or experience",
    definitionPt: "Tarefa de fala baseada em opinião ou experiência pessoal",
    category: "Speaking"
  },
  {
    term: "Integrated Task",
    pronunciation: "íntâgrêitid tésk",
    definition: "Speaking task combining reading, listening, and speaking",
    definitionPt: "Tarefa de fala combinando leitura, audição e fala",
    category: "Speaking"
  },
  {
    term: "Preparation Time",
    pronunciation: "prêpârêishân táim",
    definition: "Time given to organize thoughts before speaking",
    definitionPt: "Tempo dado para organizar pensamentos antes de falar",
    category: "Speaking"
  },
  {
    term: "Response Time",
    pronunciation: "rispóns táim",
    definition: "Time allowed to speak your answer",
    definitionPt: "Tempo permitido para falar sua resposta",
    category: "Speaking"
  },
  {
    term: "Coherence",
    pronunciation: "kôurírâns",
    definition: "Logical and clear organization of ideas",
    definitionPt: "Organização lógica e clara de ideias",
    category: "Speaking"
  },
  {
    term: "Fluency",
    pronunciation: "flúânsi",
    definition: "Ability to speak smoothly without many pauses",
    definitionPt: "Capacidade de falar suavemente sem muitas pausas",
    category: "Speaking"
  },
  {
    term: "Pronunciation",
    pronunciation: "prânânsiêishân",
    definition: "How words are spoken and articulated",
    definitionPt: "Como as palavras são faladas e articuladas",
    category: "Speaking"
  },
  
  // Writing Section
  {
    term: "Essay",
    pronunciation: "éssêi",
    definition: "A written composition expressing ideas on a topic",
    definitionPt: "Uma composição escrita expressando ideias sobre um tópico",
    category: "Writing"
  },
  {
    term: "Thesis Statement",
    pronunciation: "thísis stêitmânt",
    definition: "Main argument or position stated in the introduction",
    definitionPt: "Argumento ou posição principal declarada na introdução",
    category: "Writing"
  },
  {
    term: "Body Paragraph",
    pronunciation: "bódi pérâgréf",
    definition: "Paragraph developing one main point with examples",
    definitionPt: "Parágrafo desenvolvendo um ponto principal com exemplos",
    category: "Writing"
  },
  {
    term: "Introduction",
    pronunciation: "intrâdâkshân",
    definition: "Opening paragraph presenting the topic and thesis",
    definitionPt: "Parágrafo de abertura apresentando o tópico e tese",
    category: "Writing"
  },
  {
    term: "Conclusion",
    pronunciation: "kânklúshân",
    definition: "Final paragraph summarizing main points",
    definitionPt: "Parágrafo final resumindo pontos principais",
    category: "Writing"
  },
  {
    term: "Topic Sentence",
    pronunciation: "tópik séntâns",
    definition: "First sentence of paragraph stating its main idea",
    definitionPt: "Primeira frase do parágrafo declarando sua ideia principal",
    category: "Writing"
  },
  {
    term: "Supporting Example",
    pronunciation: "sâpórting igzémpâl",
    definition: "Specific detail or story illustrating your point",
    definitionPt: "Detalhe ou história específica ilustrando seu ponto",
    category: "Writing"
  },
  {
    term: "Template",
    pronunciation: "témpléit",
    definition: "Pre-made structure or outline for essays",
    definitionPt: "Estrutura ou esboço pré-fabricado para redações",
    category: "Writing"
  },
  
  // Academic Terms
  {
    term: "Academic",
    pronunciation: "ékâdémik",
    definition: "Related to education and scholarly work",
    definitionPt: "Relacionado à educação e trabalho acadêmico",
    category: "Academic"
  },
  {
    term: "Proficiency",
    pronunciation: "prâfíshânsi",
    definition: "Level of skill or competence in a language",
    definitionPt: "Nível de habilidade ou competência em um idioma",
    category: "Academic"
  },
  {
    term: "Standardized Test",
    pronunciation: "sténdârdáizd tést",
    definition: "Test given under consistent conditions to ensure fairness",
    definitionPt: "Teste aplicado sob condições consistentes para garantir equidade",
    category: "Academic"
  },
  {
    term: "University Level",
    pronunciation: "iunivêrsiti lével",
    definition: "Educational standard expected at college or university",
    definitionPt: "Padrão educacional esperado em faculdade ou universidade",
    category: "Academic"
  },
  {
    term: "Comprehension",
    pronunciation: "kômprirênshân",
    definition: "Understanding of what you read or hear",
    definitionPt: "Compreensão do que você lê ou ouve",
    category: "Academic"
  },
  
  // Test Strategies
  {
    term: "Time Management",
    pronunciation: "táim ménâdjmânt",
    definition: "Organizing time effectively during the test",
    definitionPt: "Organizar tempo efetivamente durante o teste",
    category: "Strategies"
  },
  {
    term: "Process of Elimination",
    pronunciation: "prôusés óv iliminêishân",
    definition: "Removing wrong answers to find the correct one",
    definitionPt: "Remover respostas erradas para encontrar a correta",
    category: "Strategies"
  },
  {
    term: "Practice Test",
    pronunciation: "préktis tést",
    definition: "Sample test for preparation purposes",
    definitionPt: "Teste de amostra para fins de preparação",
    category: "Strategies"
  },
  {
    term: "Diagnostic Test",
    pronunciation: "daiâgnóstik tést",
    definition: "Test identifying strengths and weaknesses",
    definitionPt: "Teste identificando pontos fortes e fracos",
    category: "Strategies"
  },
  {
    term: "Mock Exam",
    pronunciation: "mók igzém",
    definition: "Full-length practice test simulating real conditions",
    definitionPt: "Teste prático completo simulando condições reais",
    category: "Strategies"
  },
  
  // Scoring Terms
  {
    term: "Raw Score",
    pronunciation: "ró skór",
    definition: "Initial score before conversion to scaled score",
    definitionPt: "Pontuação inicial antes da conversão para pontuação escalonada",
    category: "Scoring"
  },
  {
    term: "Scaled Score",
    pronunciation: "skêild skór",
    definition: "Final score (0-30 per section, 0-120 total)",
    definitionPt: "Pontuação final (0-30 por seção, 0-120 total)",
    category: "Scoring"
  },
  {
    term: "Minimum Score",
    pronunciation: "mínimâm skór",
    definition: "Lowest score required for admission",
    definitionPt: "Pontuação mínima exigida para admissão",
    category: "Scoring"
  },
  {
    term: "Score Report",
    pronunciation: "skór ripórt",
    definition: "Official document showing your test results",
    definitionPt: "Documento oficial mostrando seus resultados do teste",
    category: "Scoring"
  },
  {
    term: "Rubric",
    pronunciation: "rúbrik",
    definition: "Scoring guidelines used by raters",
    definitionPt: "Diretrizes de pontuação usadas por avaliadores",
    category: "Scoring"
  }
];
