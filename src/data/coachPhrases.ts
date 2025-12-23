export interface CoachPhrase {
  id: number;
  portuguese: string;
  english: string;
  pronunciation: string;
  category: string;
  isFree?: boolean;
}

export const coachPhrases: CoachPhrase[] = [
  // Informações Básicas - GRATUITAS (10 primeiras)
  { id: 1, portuguese: "Qual é o seu nome?", english: "What's your name?", pronunciation: "uóts iôr nêim", category: "Básico", isFree: true },
  { id: 2, portuguese: "Meu nome é John.", english: "My name is John.", pronunciation: "mai nêim iz djón", category: "Básico", isFree: true },
  { id: 3, portuguese: "Como você está?", english: "How are you?", pronunciation: "ráu ar iú", category: "Básico", isFree: true },
  { id: 4, portuguese: "Estou bem, obrigado.", english: "I'm fine, thank you.", pronunciation: "aim fain, thénk iú", category: "Básico", isFree: true },
  { id: 5, portuguese: "De onde você é?", english: "Where are you from?", pronunciation: "uér ar iú fróm", category: "Básico", isFree: true },
  { id: 6, portuguese: "Eu sou do Brasil.", english: "I'm from Brazil.", pronunciation: "aim fróm brãzíu", category: "Básico", isFree: true },
  { id: 7, portuguese: "O que você faz?", english: "What do you do?", pronunciation: "uót du iú dú", category: "Básico", isFree: true },
  { id: 8, portuguese: "Eu sou professor(a).", english: "I'm a teacher.", pronunciation: "aim â títcher", category: "Básico", isFree: true },
  { id: 9, portuguese: "Você fala inglês?", english: "Do you speak English?", pronunciation: "du iú spík ínglish", category: "Básico", isFree: true },
  { id: 10, portuguese: "Sim, eu falo inglês.", english: "Yes, I speak English.", pronunciation: "iés, ai spík ínglish", category: "Básico", isFree: true },
  
  // PREMIUM - Restante das frases
  { id: 11, portuguese: "Quantos anos você tem?", english: "How old are you?", pronunciation: "ráu ôuld ar iú", category: "Básico" },
  { id: 12, portuguese: "Eu tenho 25 anos.", english: "I'm 25 years old.", pronunciation: "aim tuénti faiv iírz ôuld", category: "Básico" },
  { id: 13, portuguese: "Que horas são?", english: "What time is it?", pronunciation: "uót taim iz it", category: "Básico" },
  { id: 14, portuguese: "São 3 horas.", english: "It's 3 o'clock.", pronunciation: "its thrí ôclók", category: "Básico" },
  { id: 15, portuguese: "Você pode me ajudar?", english: "Can you help me?", pronunciation: "kén iú rélp mi", category: "Básico" },
  { id: 16, portuguese: "Claro, eu posso te ajudar.", english: "Of course, I can help you.", pronunciation: "óv kôrs, ai kén rélp iú", category: "Básico" },
  { id: 17, portuguese: "Onde fica o banheiro?", english: "Where is the bathroom?", pronunciation: "uér iz dhâ báthruum", category: "Básico" },
  { id: 18, portuguese: "O banheiro fica ali.", english: "The bathroom is over there.", pronunciation: "dhâ báthruum iz ôver dhér", category: "Básico" },
  { id: 19, portuguese: "Quanto isso custa?", english: "How much does this cost?", pronunciation: "ráu mâtch dâz dhis kóst", category: "Básico" },
  { id: 20, portuguese: "Custa 10 dólares.", english: "It costs $10.", pronunciation: "it kósts tén dólarz", category: "Básico" },

  // Preferências e Gostos
  { id: 21, portuguese: "Qual é a sua cor favorita?", english: "What's your favorite color?", pronunciation: "uóts iôr fêivorit kâlor", category: "Preferências" },
  { id: 22, portuguese: "Minha cor favorita é azul.", english: "My favorite color is blue.", pronunciation: "mai fêivorit kâlor iz blú", category: "Preferências" },
  { id: 23, portuguese: "Você gosta de música?", english: "Do you like music?", pronunciation: "du iú laik miúzik", category: "Preferências" },
  { id: 24, portuguese: "Sim, eu gosto de música.", english: "Yes, I like music.", pronunciation: "iés, ai laik miúzik", category: "Preferências" },
  { id: 25, portuguese: "Qual é a sua comida favorita?", english: "What's your favorite food?", pronunciation: "uóts iôr fêivorit fúd", category: "Preferências" },
  { id: 26, portuguese: "Minha comida favorita é pizza.", english: "My favorite food is pizza.", pronunciation: "mai fêivorit fúd iz pítsa", category: "Preferências" },
  { id: 27, portuguese: "Você gosta de filmes?", english: "Do you like movies?", pronunciation: "du iú laik múviz", category: "Preferências" },
  { id: 28, portuguese: "Sim, eu gosto de filmes.", english: "Yes, I like movies.", pronunciation: "iés, ai laik múviz", category: "Preferências" },
  { id: 29, portuguese: "Qual é o seu filme favorito?", english: "What's your favorite movie?", pronunciation: "uóts iôr fêivorit múvi", category: "Preferências" },
  { id: 30, portuguese: "Meu filme favorito é Titanic.", english: "My favorite movie is Titanic.", pronunciation: "mai fêivorit múvi iz taitânik", category: "Preferências" },

  // Família e Relacionamentos
  { id: 31, portuguese: "Você é casado(a)?", english: "Are you married?", pronunciation: "ar iú mérrid", category: "Família" },
  { id: 32, portuguese: "Não, eu não sou casado(a).", english: "No, I'm not married.", pronunciation: "nôu, aim nót mérrid", category: "Família" },
  { id: 33, portuguese: "Você tem filhos?", english: "Do you have children?", pronunciation: "du iú rév tchíldren", category: "Família" },
  { id: 34, portuguese: "Sim, eu tenho dois filhos.", english: "Yes, I have two children.", pronunciation: "iés, ai rév tú tchíldren", category: "Família" },
  { id: 35, portuguese: "Quem é seu melhor amigo?", english: "Who is your best friend?", pronunciation: "rú iz iôr bést frénd", category: "Família" },
  { id: 36, portuguese: "Minha melhor amiga é Maria.", english: "My best friend is Maria.", pronunciation: "mai bést frénd iz mãríâ", category: "Família" },

  // Localização e Moradia
  { id: 37, portuguese: "Posso te fazer uma pergunta?", english: "Can I ask you a question?", pronunciation: "kén ai ásk iú â kuéstchân", category: "Conversação" },
  { id: 38, portuguese: "Claro, pode perguntar.", english: "Sure, go ahead.", pronunciation: "chúr, gôu ârréd", category: "Conversação" },
  { id: 39, portuguese: "Onde você mora?", english: "Where do you live?", pronunciation: "uér du iú liv", category: "Localização" },
  { id: 40, portuguese: "Eu moro em Nova York.", english: "I live in New York.", pronunciation: "ai liv in nôu iôrk", category: "Localização" },
  { id: 41, portuguese: "Qual é o seu número de telefone?", english: "What's your phone number?", pronunciation: "uóts iôr fôun nâmber", category: "Localização" },
  { id: 42, portuguese: "Meu número é 123-456-7890.", english: "My number is 123-456-7890.", pronunciation: "mai nâmber iz uan tu thrí, fôr faiv siks, sévân êit nain zírou", category: "Localização" },

  // Viagens
  { id: 43, portuguese: "Como foi seu dia?", english: "How was your day?", pronunciation: "ráu uóz iôr dêi", category: "Conversação" },
  { id: 44, portuguese: "Meu dia foi bom.", english: "My day was good.", pronunciation: "mai dêi uóz gúd", category: "Conversação" },
  { id: 45, portuguese: "Você gosta de viajar?", english: "Do you like to travel?", pronunciation: "du iú laik tu trével", category: "Viagens" },
  { id: 46, portuguese: "Sim, eu adoro viajar.", english: "Yes, I love to travel.", pronunciation: "iés, ai lâv tu trével", category: "Viagens" },
  { id: 47, portuguese: "Você já esteve em outro país?", english: "Have you ever been to another country?", pronunciation: "rév iú éver bín tu ânâdher kântri", category: "Viagens" },
  { id: 48, portuguese: "Sim, eu estive na Espanha.", english: "Yes, I've been to Spain.", pronunciation: "iés, aiv bín tu spêin", category: "Viagens" },

  // Animais de Estimação
  { id: 49, portuguese: "Você tem animais de estimação?", english: "Do you have any pets?", pronunciation: "du iú rév éni pets", category: "Animais" },
  { id: 50, portuguese: "Sim, eu tenho um cachorro.", english: "Yes, I have a dog.", pronunciation: "iés, ai rév â dóg", category: "Animais" },
  { id: 51, portuguese: "Qual é seu animal favorito?", english: "What's your favorite animal?", pronunciation: "uóts iôr fêivorit ânimâl", category: "Animais" },
  { id: 52, portuguese: "Meu animal favorito é cachorro.", english: "My favorite animal is a dog.", pronunciation: "mai fêivorit ânimâl iz â dóg", category: "Animais" },
  { id: 53, portuguese: "Você prefere gatos ou cachorros?", english: "Do you like cats or dogs?", pronunciation: "du iú laik káts or dógz", category: "Animais" },
  { id: 54, portuguese: "Eu prefiro cachorros.", english: "I prefer dogs.", pronunciation: "ai prifêr dógz", category: "Animais" },

  // Fim de Semana e Lazer
  { id: 55, portuguese: "O que você geralmente faz nos finais de semana?", english: "What do you usually do on weekends?", pronunciation: "uót du iú iújuâli dú on uíkéndz", category: "Lazer" },
  { id: 56, portuguese: "Normalmente eu descanso e assisto filmes.", english: "I usually rest and watch movies.", pronunciation: "ai iújuâli rést énd uótch múviz", category: "Lazer" },
  { id: 57, portuguese: "Quais são seus hobbies?", english: "What are your hobbies?", pronunciation: "uót ar iôr róbiz", category: "Lazer" },
  { id: 58, portuguese: "Eu gosto de ler e pintar.", english: "I like reading and painting.", pronunciation: "ai laik ríding énd pêinting", category: "Lazer" },

  // Habilidades
  { id: 59, portuguese: "Você sabe dirigir?", english: "Can you drive?", pronunciation: "kén iú dráiv", category: "Habilidades" },
  { id: 60, portuguese: "Sim, eu sei dirigir.", english: "Yes, I can drive.", pronunciation: "iés, ai kén dráiv", category: "Habilidades" },
  { id: 61, portuguese: "Você sabe nadar?", english: "Can you swim?", pronunciation: "kén iú suím", category: "Habilidades" },
  { id: 62, portuguese: "Sim, eu sei nadar.", english: "Yes, I can swim.", pronunciation: "iés, ai kén suím", category: "Habilidades" },
  { id: 63, portuguese: "Você sabe andar de bicicleta?", english: "Can you ride a bike?", pronunciation: "kén iú raid â báik", category: "Habilidades" },
  { id: 64, portuguese: "Sim, eu sei andar de bicicleta.", english: "Yes, I can ride a bike.", pronunciation: "iés, ai kén raid â báik", category: "Habilidades" },
  { id: 65, portuguese: "Você toca algum instrumento?", english: "Do you play any instruments?", pronunciation: "du iú plêi éni ínstruments", category: "Habilidades" },
  { id: 66, portuguese: "Sim, eu toco violão.", english: "Yes, I play the guitar.", pronunciation: "iés, ai plêi dhâ guitár", category: "Habilidades" },

  // Estudos
  { id: 67, portuguese: "Você é estudante?", english: "Are you a student?", pronunciation: "ar iú â stiúdent", category: "Estudos" },
  { id: 68, portuguese: "Sim, eu sou estudante.", english: "Yes, I'm a student.", pronunciation: "iés, aim â stiúdent", category: "Estudos" },
  { id: 69, portuguese: "Quantos idiomas você fala?", english: "How many languages do you speak?", pronunciation: "ráu méni lénguâdgiz du iú spík", category: "Estudos" },
  { id: 70, portuguese: "Eu falo dois idiomas.", english: "I speak two languages.", pronunciation: "ai spík tú lénguâdgiz", category: "Estudos" },
  { id: 71, portuguese: "Você gosta de aprender idiomas?", english: "Do you like learning languages?", pronunciation: "du iú laik lêrning lénguâdgiz", category: "Estudos" },
  { id: 72, portuguese: "Sim, eu gosto de aprender idiomas.", english: "Yes, I like learning languages.", pronunciation: "iés, ai laik lêrning lénguâdgiz", category: "Estudos" },
  { id: 73, portuguese: "Você já estudou no exterior?", english: "Have you ever studied abroad?", pronunciation: "rév iú éver stâdid âbród", category: "Estudos" },
  { id: 74, portuguese: "Não, eu nunca estudei no exterior.", english: "No, I haven't studied abroad.", pronunciation: "nôu, ai révânt stâdid âbród", category: "Estudos" },
  { id: 75, portuguese: "Qual é sua matéria favorita?", english: "What's your favorite subject?", pronunciation: "uóts iôr fêivorit sâbdjekt", category: "Estudos" },
  { id: 76, portuguese: "Minha matéria favorita é inglês.", english: "My favorite subject is English.", pronunciation: "mai fêivorit sâbdjekt iz ínglish", category: "Estudos" },

  // Esportes
  { id: 77, portuguese: "Você gosta de esportes?", english: "Do you like sports?", pronunciation: "du iú laik spôrts", category: "Esportes" },
  { id: 78, portuguese: "Sim, eu gosto de esportes.", english: "Yes, I enjoy sports.", pronunciation: "iés, ai endjói spôrts", category: "Esportes" },
  { id: 79, portuguese: "Qual é seu esporte favorito?", english: "What's your favorite sport?", pronunciation: "uóts iôr fêivorit spôrt", category: "Esportes" },
  { id: 80, portuguese: "Meu esporte favorito é futebol.", english: "My favorite sport is soccer.", pronunciation: "mai fêivorit spôrt iz sóker", category: "Esportes" },
  { id: 81, portuguese: "Com que frequência você se exercita?", english: "How often do you exercise?", pronunciation: "ráu ófen du iú éksersaiz", category: "Esportes" },
  { id: 82, portuguese: "Eu me exercito três vezes por semana.", english: "I exercise three times a week.", pronunciation: "ai éksersaiz thrí taimz â uík", category: "Esportes" },
  { id: 83, portuguese: "Você gosta de correr?", english: "Do you like running?", pronunciation: "du iú laik râning", category: "Esportes" },
  { id: 84, portuguese: "Sim, eu gosto de correr.", english: "Yes, I like running.", pronunciation: "iés, ai laik râning", category: "Esportes" },
  { id: 85, portuguese: "Você já correu uma maratona?", english: "Have you ever run a marathon?", pronunciation: "rév iú éver rân â mérâthon", category: "Esportes" },
  { id: 86, portuguese: "Não, eu nunca corri uma maratona.", english: "No, I haven't run a marathon.", pronunciation: "nôu, ai révânt rân â mérâthon", category: "Esportes" },

  // Atividades Diárias
  { id: 87, portuguese: "O que você fez ontem?", english: "What did you do yesterday?", pronunciation: "uót did iú dú iésterdêi", category: "Rotina" },
  { id: 88, portuguese: "Ontem eu trabalhei o dia todo.", english: "Yesterday I worked all day.", pronunciation: "iésterdêi ai uôrkt ól dêi", category: "Rotina" },
  { id: 89, portuguese: "O que você está fazendo agora?", english: "What are you doing now?", pronunciation: "uót ar iú dúing náu", category: "Rotina" },
  { id: 90, portuguese: "Estou estudando inglês agora.", english: "I'm studying English now.", pronunciation: "aim stâdiing ínglish náu", category: "Rotina" },

  // Leitura
  { id: 91, portuguese: "Você gosta de ler?", english: "Do you like reading?", pronunciation: "du iú laik ríding", category: "Leitura" },
  { id: 92, portuguese: "Sim, eu gosto de ler.", english: "Yes, I like reading.", pronunciation: "iés, ai laik ríding", category: "Leitura" },
  { id: 93, portuguese: "Que livro você está lendo?", english: "What book are you reading?", pronunciation: "uót búk ar iú ríding", category: "Leitura" },
  { id: 94, portuguese: "Estou lendo Harry Potter.", english: "I'm reading Harry Potter.", pronunciation: "aim ríding réri póter", category: "Leitura" },
  { id: 95, portuguese: "Você gosta de ler livros?", english: "Do you like reading books?", pronunciation: "du iú laik ríding búks", category: "Leitura" },
  { id: 96, portuguese: "Sim, eu gosto de ler livros.", english: "Yes, I like reading books.", pronunciation: "iés, ai laik ríding búks", category: "Leitura" },
  { id: 97, portuguese: "Estou lendo 1984.", english: "I'm reading 1984.", pronunciation: "aim ríding naintín êiti fôr", category: "Leitura" },
  { id: 98, portuguese: "O que você gosta de ler?", english: "What do you like to read?", pronunciation: "uót du iú laik tu ríd", category: "Leitura" },
  { id: 99, portuguese: "Eu gosto de ler sobre ciência.", english: "I like reading about science.", pronunciation: "ai laik ríding âbáut sáiâns", category: "Leitura" },

  // Bebidas e Comida
  { id: 100, portuguese: "Você gosta de café ou chá?", english: "Do you like coffee or tea?", pronunciation: "du iú laik kófi or tí", category: "Comida" },
  { id: 101, portuguese: "Eu prefiro café.", english: "I prefer coffee.", pronunciation: "ai prifêr kófi", category: "Comida" },
  { id: 102, portuguese: "Você está com fome?", english: "Are you hungry?", pronunciation: "ar iú rângri", category: "Comida" },
  { id: 103, portuguese: "Sim, estou com fome.", english: "Yes, I'm hungry.", pronunciation: "iés, aim rângri", category: "Comida" },
  { id: 104, portuguese: "O que você comeu hoje?", english: "What did you eat today?", pronunciation: "uót did iú ít tudêi", category: "Comida" },
  { id: 105, portuguese: "Eu comi um sanduíche.", english: "I ate a sandwich.", pronunciation: "ai êit â sénduitch", category: "Comida" },
  { id: 106, portuguese: "Você gosta de cozinhar?", english: "Do you like cooking?", pronunciation: "du iú laik kúking", category: "Comida" },
  { id: 107, portuguese: "Sim, eu gosto de cozinhar.", english: "Yes, I like cooking.", pronunciation: "iés, ai laik kúking", category: "Comida" },
  { id: 108, portuguese: "Qual é seu prato favorito?", english: "What's your favorite dish?", pronunciation: "uóts iôr fêivorit dish", category: "Comida" },
  { id: 109, portuguese: "Meu prato favorito é macarrão.", english: "My favorite dish is pasta.", pronunciation: "mai fêivorit dish iz pástâ", category: "Comida" },
  { id: 110, portuguese: "Você sabe cozinhar comida italiana?", english: "Can you cook Italian food?", pronunciation: "kén iú kúk itéliân fúd", category: "Comida" },
  { id: 111, portuguese: "Sim, eu sei cozinhar comida italiana.", english: "Yes, I can cook Italian food.", pronunciation: "iés, ai kén kúk itéliân fúd", category: "Comida" },
  { id: 112, portuguese: "Qual é sua bebida favorita?", english: "What's your favorite drink?", pronunciation: "uóts iôr fêivorit drink", category: "Comida" },
  { id: 113, portuguese: "Minha bebida favorita é água.", english: "My favorite drink is water.", pronunciation: "mai fêivorit drink iz uóter", category: "Comida" },
  { id: 114, portuguese: "Você prefere refrigerante ou suco?", english: "Do you like soda or juice?", pronunciation: "du iú laik sôudâ or djús", category: "Comida" },
  { id: 115, portuguese: "Eu prefiro suco.", english: "I prefer juice.", pronunciation: "ai prifêr djús", category: "Comida" },

  // Clima
  { id: 116, portuguese: "Como está o tempo hoje?", english: "How's the weather today?", pronunciation: "ráuz dhâ uédher tudêi", category: "Clima" },
  { id: 117, portuguese: "O tempo está ensolarado.", english: "The weather is sunny.", pronunciation: "dhâ uédher iz sâni", category: "Clima" },
  { id: 118, portuguese: "Está chovendo?", english: "Is it raining?", pronunciation: "iz it rêining", category: "Clima" },
  { id: 119, portuguese: "Não, não está chovendo.", english: "No, it's not raining.", pronunciation: "nôu, its nót rêining", category: "Clima" },
  { id: 120, portuguese: "Qual é a sua estação favorita?", english: "What's your favorite season?", pronunciation: "uóts iôr fêivorit sízan", category: "Clima" },
  { id: 121, portuguese: "Minha estação favorita é verão.", english: "My favorite season is summer.", pronunciation: "mai fêivorit sízan iz sâmer", category: "Clima" },
  { id: 122, portuguese: "Você prefere inverno ou verão?", english: "Do you like winter or summer?", pronunciation: "du iú laik uínter or sâmer", category: "Clima" },
  { id: 123, portuguese: "Eu prefiro o verão.", english: "I prefer summer.", pronunciation: "ai prifêr sâmer", category: "Clima" },

  // Natureza
  { id: 124, portuguese: "Você gosta de ir à praia?", english: "Do you like going to the beach?", pronunciation: "du iú laik gôuing tu dhâ bítch", category: "Natureza" },
  { id: 125, portuguese: "Sim, eu adoro a praia.", english: "Yes, I love the beach.", pronunciation: "iés, ai lâv dhâ bítch", category: "Natureza" },
  { id: 126, portuguese: "Você já foi para as montanhas?", english: "Have you ever been to the mountains?", pronunciation: "rév iú éver bín tu dhâ máuntins", category: "Natureza" },
  { id: 127, portuguese: "Sim, eu já fui às montanhas.", english: "Yes, I've been to the mountains.", pronunciation: "iés, aiv bín tu dhâ máuntins", category: "Natureza" },
  { id: 128, portuguese: "Você gosta da praia?", english: "Do you like the beach?", pronunciation: "du iú laik dhâ bítch", category: "Natureza" },
  { id: 129, portuguese: "Sim, eu gosto da praia.", english: "Yes, I like the beach.", pronunciation: "iés, ai laik dhâ bítch", category: "Natureza" },
  { id: 130, portuguese: "Você gosta de nadar no mar?", english: "Do you like swimming in the sea?", pronunciation: "du iú laik suíming in dhâ sí", category: "Natureza" },
  { id: 131, portuguese: "Sim, eu gosto de nadar no mar.", english: "Yes, I like swimming in the sea.", pronunciation: "iés, ai laik suíming in dhâ sí", category: "Natureza" },
  { id: 132, portuguese: "Você gosta das montanhas?", english: "Do you like the mountains?", pronunciation: "du iú laik dhâ máuntins", category: "Natureza" },
  { id: 133, portuguese: "Sim, eu gosto das montanhas.", english: "Yes, I like the mountains.", pronunciation: "iés, ai laik dhâ máuntins", category: "Natureza" },
  { id: 134, portuguese: "Você gosta de acampar?", english: "Do you like camping?", pronunciation: "du iú laik kémping", category: "Natureza" },
  { id: 135, portuguese: "Sim, eu gosto de acampar.", english: "Yes, I like camping.", pronunciation: "iés, ai laik kémping", category: "Natureza" },
  { id: 136, portuguese: "Você gosta de fazer trilha?", english: "Do you like hiking?", pronunciation: "du iú laik ráiking", category: "Natureza" },
  { id: 137, portuguese: "Sim, eu gosto de fazer trilha.", english: "Yes, I like hiking.", pronunciation: "iés, ai laik ráiking", category: "Natureza" },
  { id: 138, portuguese: "Você gosta de fazer trilhas nas montanhas?", english: "Do you like hiking in the mountains?", pronunciation: "du iú laik ráiking in dhâ máuntins", category: "Natureza" },
  { id: 139, portuguese: "Sim, eu gosto de fazer trilhas nas montanhas.", english: "Yes, I like hiking in the mountains.", pronunciation: "iés, ai laik ráiking in dhâ máuntins", category: "Natureza" },

  // Transporte
  { id: 140, portuguese: "Como você vai para o trabalho?", english: "How do you go to work?", pronunciation: "ráu du iú gôu tu uôrk", category: "Transporte" },
  { id: 141, portuguese: "Eu vou para o trabalho de carro.", english: "I go to work by car.", pronunciation: "ai gôu tu uôrk bai kár", category: "Transporte" },
  { id: 142, portuguese: "Você prefere ônibus ou trem?", english: "Do you prefer buses or trains?", pronunciation: "du iú prifêr bâsiz or trêinz", category: "Transporte" },
  { id: 143, portuguese: "Eu prefiro trens.", english: "I prefer trains.", pronunciation: "ai prifêr trêinz", category: "Transporte" },
  { id: 144, portuguese: "Como você vai para a escola/trabalho?", english: "How do you go to school/work?", pronunciation: "ráu du iú gôu tu skúl/uôrk", category: "Transporte" },
  { id: 145, portuguese: "Eu vou para a escola/trabalho de ônibus.", english: "I go to school/work by bus.", pronunciation: "ai gôu tu skúl/uôrk bai bâs", category: "Transporte" },
  { id: 146, portuguese: "Você usa transporte público?", english: "Do you use public transport?", pronunciation: "du iú iúz pâblik tránspôrt", category: "Transporte" },
  { id: 147, portuguese: "Sim, eu uso transporte público.", english: "Yes, I use public transport.", pronunciation: "iés, ai iúz pâblik tránspôrt", category: "Transporte" },
  { id: 148, portuguese: "Você prefere carro ou ônibus?", english: "Do you prefer the car or the bus?", pronunciation: "du iú prifêr dhâ kár or dhâ bâs", category: "Transporte" },
  { id: 149, portuguese: "Eu prefiro o carro.", english: "I prefer the car.", pronunciation: "ai prifêr dhâ kár", category: "Transporte" },
  { id: 150, portuguese: "Você gosta de viajar de avião?", english: "Do you like traveling by plane?", pronunciation: "du iú laik tréveling bai plêin", category: "Transporte" },
  { id: 151, portuguese: "Sim, eu gosto de viajar de avião.", english: "Yes, I like traveling by plane.", pronunciation: "iés, ai laik tréveling bai plêin", category: "Transporte" },
  { id: 152, portuguese: "Você já viajou de avião?", english: "Have you ever flown?", pronunciation: "rév iú éver flôun", category: "Transporte" },
  { id: 153, portuguese: "Sim, eu já viajei de avião.", english: "Yes, I've flown before.", pronunciation: "iés, aiv flôun bifôr", category: "Transporte" },
  { id: 154, portuguese: "Você gosta de trens?", english: "Do you like trains?", pronunciation: "du iú laik trêinz", category: "Transporte" },
  { id: 155, portuguese: "Sim, eu gosto de trens.", english: "Yes, I like trains.", pronunciation: "iés, ai laik trêinz", category: "Transporte" },
  { id: 156, portuguese: "Você já andou de trem?", english: "Have you ever been on a train?", pronunciation: "rév iú éver bín on â trêin", category: "Transporte" },
  { id: 157, portuguese: "Sim, eu já andei de trem.", english: "Yes, I've been on a train.", pronunciation: "iés, aiv bín on â trêin", category: "Transporte" },

  // Compras
  { id: 158, portuguese: "Você gosta de ir a festas?", english: "Do you like going to parties?", pronunciation: "du iú laik gôuing tu pártiz", category: "Social" },
  { id: 159, portuguese: "Sim, eu gosto de ir a festas.", english: "Yes, I like going to parties.", pronunciation: "iés, ai laik gôuing tu pártiz", category: "Social" },
  { id: 160, portuguese: "O que você geralmente veste?", english: "What do you usually wear?", pronunciation: "uót du iú iújuâli uér", category: "Roupas" },
  { id: 161, portuguese: "Eu geralmente visto roupas casuais.", english: "I usually wear casual clothes.", pronunciation: "ai iújuâli uér kéjuâl klôudhz", category: "Roupas" },
  { id: 162, portuguese: "Você está vestindo algo novo?", english: "Are you wearing something new?", pronunciation: "ar iú uéring sâmthing niú", category: "Roupas" },
  { id: 163, portuguese: "Sim, estou vestindo algo novo.", english: "Yes, I'm wearing something new.", pronunciation: "iés, aim uéring sâmthing niú", category: "Roupas" },
  { id: 164, portuguese: "Você gosta de fazer compras?", english: "Do you like shopping?", pronunciation: "du iú laik chóping", category: "Compras" },
  { id: 165, portuguese: "Sim, eu gosto de fazer compras.", english: "Yes, I like shopping.", pronunciation: "iés, ai laik chóping", category: "Compras" },
  { id: 166, portuguese: "Com que frequência você vai às compras?", english: "How often do you go shopping?", pronunciation: "ráu ófen du iú gôu chóping", category: "Compras" },
  { id: 167, portuguese: "Eu faço compras uma vez por semana.", english: "I go shopping once a week.", pronunciation: "ai gôu chóping uâns â uík", category: "Compras" },
  { id: 168, portuguese: "O que você geralmente compra?", english: "What do you usually buy?", pronunciation: "uót du iú iújuâli bái", category: "Compras" },
  { id: 169, portuguese: "Eu geralmente compro roupas e sapatos.", english: "I usually buy clothes and shoes.", pronunciation: "ai iújuâli bái klôudhz énd chúz", category: "Compras" },

  // Restaurantes
  { id: 170, portuguese: "Você gosta de restaurantes?", english: "Do you like restaurants?", pronunciation: "du iú laik réstoránts", category: "Restaurantes" },
  { id: 171, portuguese: "Sim, eu gosto de restaurantes.", english: "Yes, I like restaurants.", pronunciation: "iés, ai laik réstoránts", category: "Restaurantes" },
  { id: 172, portuguese: "Qual é seu restaurante favorito?", english: "What's your favorite restaurant?", pronunciation: "uóts iôr fêivorit réstorânt", category: "Restaurantes" },
  { id: 173, portuguese: "Meu restaurante favorito é italiano.", english: "My favorite restaurant is Italian.", pronunciation: "mai fêivorit réstorânt iz itéliân", category: "Restaurantes" },
  { id: 174, portuguese: "Você gosta de fast food?", english: "Do you like fast food?", pronunciation: "du iú laik fást fúd", category: "Restaurantes" },
  { id: 175, portuguese: "Sim, eu gosto de fast food às vezes.", english: "Yes, I like fast food sometimes.", pronunciation: "iés, ai laik fást fúd sâmtaimz", category: "Restaurantes" },
  { id: 176, portuguese: "Com que frequência você come fora?", english: "How often do you eat out?", pronunciation: "ráu ófen du iú ít áut", category: "Restaurantes" },
  { id: 177, portuguese: "Eu como fora duas vezes por semana.", english: "I eat out twice a week.", pronunciation: "ai ít áut tuáis â uík", category: "Restaurantes" },
  { id: 178, portuguese: "Você gosta de cozinhar em casa?", english: "Do you like cooking at home?", pronunciation: "du iú laik kúking ét rôum", category: "Restaurantes" },
  { id: 179, portuguese: "Sim, eu gosto de cozinhar em casa.", english: "Yes, I like cooking at home.", pronunciation: "iés, ai laik kúking ét rôum", category: "Restaurantes" },

  // Esportes Diversos
  { id: 180, portuguese: "Você sabe praticar esportes?", english: "Can you play sports?", pronunciation: "kén iú plêi spôrts", category: "Esportes" },
  { id: 181, portuguese: "Sim, eu sei praticar esportes.", english: "Yes, I can play sports.", pronunciation: "iés, ai kén plêi spôrts", category: "Esportes" },
  { id: 182, portuguese: "Você gosta de basquete?", english: "Do you like basketball?", pronunciation: "du iú laik báskitból", category: "Esportes" },
  { id: 183, portuguese: "Sim, eu gosto de basquete.", english: "Yes, I like basketball.", pronunciation: "iés, ai laik báskitból", category: "Esportes" },
  { id: 184, portuguese: "Você gosta de futebol?", english: "Do you like football?", pronunciation: "du iú laik fútból", category: "Esportes" },
  { id: 185, portuguese: "Sim, eu gosto de futebol.", english: "Yes, I like football.", pronunciation: "iés, ai laik fútból", category: "Esportes" },
  { id: 186, portuguese: "Que esporte você pratica?", english: "What sport do you practice?", pronunciation: "uót spôrt du iú práktis", category: "Esportes" },
  { id: 187, portuguese: "Eu pratico futebol.", english: "I practice soccer.", pronunciation: "ai práktis sóker", category: "Esportes" },
  { id: 188, portuguese: "Você gosta de nadar?", english: "Do you like swimming?", pronunciation: "du iú laik suíming", category: "Esportes" },
  { id: 189, portuguese: "Sim, eu gosto de nadar.", english: "Yes, I like swimming.", pronunciation: "iés, ai laik suíming", category: "Esportes" },
  { id: 190, portuguese: "Você gosta de esportes de inverno?", english: "Do you like winter sports?", pronunciation: "du iú laik uínter spôrts", category: "Esportes" },
  { id: 191, portuguese: "Sim, eu gosto de esportes de inverno.", english: "Yes, I like winter sports.", pronunciation: "iés, ai laik uínter spôrts", category: "Esportes" },
  { id: 192, portuguese: "Você esquia?", english: "Do you ski?", pronunciation: "du iú skí", category: "Esportes" },
  { id: 193, portuguese: "Sim, eu esquio.", english: "Yes, I ski.", pronunciation: "iés, ai skí", category: "Esportes" },
  { id: 194, portuguese: "Você pratica snowboard?", english: "Do you snowboard?", pronunciation: "du iú snôubôrd", category: "Esportes" },
  { id: 195, portuguese: "Sim, eu pratico snowboard.", english: "Yes, I snowboard.", pronunciation: "iés, ai snôubôrd", category: "Esportes" },
  { id: 196, portuguese: "Você gosta de esportes de verão?", english: "Do you like summer sports?", pronunciation: "du iú laik sâmer spôrts", category: "Esportes" },
  { id: 197, portuguese: "Sim, eu gosto de esportes de verão.", english: "Yes, I like summer sports.", pronunciation: "iés, ai laik sâmer spôrts", category: "Esportes" },
  { id: 198, portuguese: "Você joga vôlei?", english: "Do you play volleyball?", pronunciation: "du iú plêi vóliból", category: "Esportes" },
  { id: 199, portuguese: "Sim, eu jogo vôlei.", english: "Yes, I play volleyball.", pronunciation: "iés, ai plêi vóliból", category: "Esportes" },
  { id: 200, portuguese: "Você joga tênis?", english: "Do you play tennis?", pronunciation: "du iú plêi ténis", category: "Esportes" },
  { id: 201, portuguese: "Sim, eu jogo tênis.", english: "Yes, I play tennis.", pronunciation: "iés, ai plêi ténis", category: "Esportes" },
  { id: 202, portuguese: "Você joga golfe?", english: "Do you play golf?", pronunciation: "du iú plêi gólf", category: "Esportes" },
  { id: 203, portuguese: "Sim, eu jogo golfe.", english: "Yes, I play golf.", pronunciation: "iés, ai plêi gólf", category: "Esportes" },

  // TV e Entretenimento
  { id: 204, portuguese: "Você gosta de assistir TV?", english: "Do you like watching TV?", pronunciation: "du iú laik uótching tíví", category: "Entretenimento" },
  { id: 205, portuguese: "Sim, eu gosto de assistir TV.", english: "Yes, I like watching TV.", pronunciation: "iés, ai laik uótching tíví", category: "Entretenimento" },
  { id: 206, portuguese: "Qual é seu programa de TV favorito?", english: "What's your favorite TV show?", pronunciation: "uóts iôr fêivorit tíví chôu", category: "Entretenimento" },
  { id: 207, portuguese: "Meu programa de TV favorito é Friends.", english: "My favorite TV show is Friends.", pronunciation: "mai fêivorit tíví chôu iz fréndz", category: "Entretenimento" },
  { id: 208, portuguese: "Meu filme favorito é Inception.", english: "My favorite movie is Inception.", pronunciation: "mai fêivorit múvi iz insépchân", category: "Entretenimento" },
  { id: 209, portuguese: "Você assiste Netflix?", english: "Do you watch Netflix?", pronunciation: "du iú uótch nétfliks", category: "Entretenimento" },
  { id: 210, portuguese: "Sim, eu assisto Netflix.", english: "Yes, I watch Netflix.", pronunciation: "iés, ai uótch nétfliks", category: "Entretenimento" },
  { id: 211, portuguese: "O que você gosta de assistir online?", english: "What do you like to watch online?", pronunciation: "uót du iú laik tu uótch ónlain", category: "Entretenimento" },
  { id: 212, portuguese: "Eu gosto de assistir documentários.", english: "I like watching documentaries.", pronunciation: "ai laik uótching dókiuméntâriz", category: "Entretenimento" },

  // Revistas e Escrita
  { id: 213, portuguese: "Você gosta de revistas?", english: "Do you like magazines?", pronunciation: "du iú laik mégâzínz", category: "Leitura" },
  { id: 214, portuguese: "Sim, eu gosto de revistas.", english: "Yes, I like magazines.", pronunciation: "iés, ai laik mégâzínz", category: "Leitura" },
  { id: 215, portuguese: "Você escreve e-mails?", english: "Do you write emails?", pronunciation: "du iú ráit ímêilz", category: "Comunicação" },
  { id: 216, portuguese: "Sim, eu escrevo e-mails.", english: "Yes, I write emails.", pronunciation: "iés, ai ráit ímêilz", category: "Comunicação" },
  { id: 217, portuguese: "Você gosta de escrever?", english: "Do you like writing?", pronunciation: "du iú laik ráiting", category: "Comunicação" },
  { id: 218, portuguese: "Sim, eu gosto de escrever.", english: "Yes, I like writing.", pronunciation: "iés, ai laik ráiting", category: "Comunicação" },

  // Redes Sociais e Tecnologia
  { id: 219, portuguese: "Você gosta de redes sociais?", english: "Do you like social media?", pronunciation: "du iú laik sôuchâl mídiâ", category: "Tecnologia" },
  { id: 220, portuguese: "Sim, eu gosto de redes sociais.", english: "Yes, I like social media.", pronunciation: "iés, ai laik sôuchâl mídiâ", category: "Tecnologia" },
  { id: 221, portuguese: "Você usa Facebook?", english: "Do you use Facebook?", pronunciation: "du iú iúz fêisbuk", category: "Tecnologia" },
  { id: 222, portuguese: "Sim, eu uso Facebook.", english: "Yes, I use Facebook.", pronunciation: "iés, ai iúz fêisbuk", category: "Tecnologia" },
  { id: 223, portuguese: "Você usa Instagram?", english: "Do you use Instagram?", pronunciation: "du iú iúz ínstâgrâm", category: "Tecnologia" },
  { id: 224, portuguese: "Sim, eu uso Instagram.", english: "Yes, I use Instagram.", pronunciation: "iés, ai iúz ínstâgrâm", category: "Tecnologia" },
  { id: 225, portuguese: "Você usa WhatsApp?", english: "Do you use WhatsApp?", pronunciation: "du iú iúz uótsâp", category: "Tecnologia" },
  { id: 226, portuguese: "Sim, eu uso WhatsApp.", english: "Yes, I use WhatsApp.", pronunciation: "iés, ai iúz uótsâp", category: "Tecnologia" },
  { id: 227, portuguese: "Você gosta de tecnologia?", english: "Do you like technology?", pronunciation: "du iú laik teknólodji", category: "Tecnologia" },
  { id: 228, portuguese: "Sim, eu gosto de tecnologia.", english: "Yes, I like technology.", pronunciation: "iés, ai laik teknólodji", category: "Tecnologia" },
  { id: 229, portuguese: "Você usa computador?", english: "Do you use a computer?", pronunciation: "du iú iúz â kômpiúter", category: "Tecnologia" },
  { id: 230, portuguese: "Sim, eu uso computador.", english: "Yes, I use a computer.", pronunciation: "iés, ai iúz â kômpiúter", category: "Tecnologia" },
  { id: 231, portuguese: "Você gosta de jogar videogame?", english: "Do you like playing video games?", pronunciation: "du iú laik plêiing vídiou gêimz", category: "Tecnologia" },
  { id: 232, portuguese: "Sim, eu gosto de jogar videogame.", english: "Yes, I like playing video games.", pronunciation: "iés, ai laik plêiing vídiou gêimz", category: "Tecnologia" },
  { id: 233, portuguese: "Você tem um smartphone?", english: "Do you have a smartphone?", pronunciation: "du iú rév â smártfôun", category: "Tecnologia" },
  { id: 234, portuguese: "Sim, eu tenho um smartphone.", english: "Yes, I have a smartphone.", pronunciation: "iés, ai rév â smártfôun", category: "Tecnologia" },
  { id: 235, portuguese: "Você gosta de aplicativos?", english: "Do you like apps?", pronunciation: "du iú laik éps", category: "Tecnologia" },
  { id: 236, portuguese: "Sim, eu gosto de aplicativos.", english: "Yes, I like apps.", pronunciation: "iés, ai laik éps", category: "Tecnologia" },
  { id: 237, portuguese: "Qual é seu aplicativo favorito?", english: "What's your favorite app?", pronunciation: "uóts iôr fêivorit ép", category: "Tecnologia" },
  { id: 238, portuguese: "Meu aplicativo favorito é Spotify.", english: "My favorite app is Spotify.", pronunciation: "mai fêivorit ép iz spótifai", category: "Tecnologia" },

  // Fotografia e Arte
  { id: 239, portuguese: "Você gosta de fotografia?", english: "Do you like photography?", pronunciation: "du iú laik fôtógrâfi", category: "Arte" },
  { id: 240, portuguese: "Sim, eu gosto de fotografia.", english: "Yes, I like photography.", pronunciation: "iés, ai laik fôtógrâfi", category: "Arte" },
  { id: 241, portuguese: "Você tira fotos com frequência?", english: "Do you take photos often?", pronunciation: "du iú têik fôutôuz ófen", category: "Arte" },
  { id: 242, portuguese: "Sim, eu tiro fotos com frequência.", english: "Yes, I take photos often.", pronunciation: "iés, ai têik fôutôuz ófen", category: "Arte" },
  { id: 243, portuguese: "Você gosta de arte?", english: "Do you like art?", pronunciation: "du iú laik árt", category: "Arte" },
  { id: 244, portuguese: "Sim, eu gosto de arte.", english: "Yes, I like art.", pronunciation: "iés, ai laik árt", category: "Arte" },
  { id: 245, portuguese: "Você pinta ou desenha?", english: "Do you paint or draw?", pronunciation: "du iú pêint or dró", category: "Arte" },
  { id: 246, portuguese: "Sim, eu pinto e desenho.", english: "Yes, I paint and draw.", pronunciation: "iés, ai pêint énd dró", category: "Arte" },
  { id: 247, portuguese: "Você gosta de museus?", english: "Do you like museums?", pronunciation: "du iú laik miuzíâmz", category: "Arte" },
  { id: 248, portuguese: "Sim, eu gosto de museus.", english: "Yes, I like museums.", pronunciation: "iés, ai laik miuzíâmz", category: "Arte" },

  // Estudos Gerais
  { id: 249, portuguese: "Você gosta de história?", english: "Do you like history?", pronunciation: "du iú laik rístori", category: "Estudos" },
  { id: 250, portuguese: "Sim, eu gosto de história.", english: "Yes, I like history.", pronunciation: "iés, ai laik rístori", category: "Estudos" },
  { id: 251, portuguese: "Você gosta de ciência?", english: "Do you like science?", pronunciation: "du iú laik sáiâns", category: "Estudos" },
  { id: 252, portuguese: "Sim, eu gosto de ciência.", english: "Yes, I like science.", pronunciation: "iés, ai laik sáiâns", category: "Estudos" },
  { id: 253, portuguese: "Você gosta de matemática?", english: "Do you like math?", pronunciation: "du iú laik méth", category: "Estudos" },
  { id: 254, portuguese: "Sim, eu gosto de matemática.", english: "Yes, I like math.", pronunciation: "iés, ai laik méth", category: "Estudos" },
  { id: 255, portuguese: "Você gosta de idiomas?", english: "Do you like languages?", pronunciation: "du iú laik lénguâdgiz", category: "Estudos" },
  { id: 256, portuguese: "Sim, eu gosto de idiomas.", english: "Yes, I like languages.", pronunciation: "iés, ai laik lénguâdgiz", category: "Estudos" },
  { id: 257, portuguese: "Você fala espanhol?", english: "Do you speak Spanish?", pronunciation: "du iú spík spénish", category: "Estudos" },
  { id: 258, portuguese: "Sim, eu falo espanhol.", english: "Yes, I speak Spanish.", pronunciation: "iés, ai spík spénish", category: "Estudos" },
  { id: 259, portuguese: "Você fala francês?", english: "Do you speak French?", pronunciation: "du iú spík fréntch", category: "Estudos" },
  { id: 260, portuguese: "Sim, eu falo francês.", english: "Yes, I speak French.", pronunciation: "iés, ai spík fréntch", category: "Estudos" },
  { id: 261, portuguese: "Você fala alemão?", english: "Do you speak German?", pronunciation: "du iú spík djêrmân", category: "Estudos" },
  { id: 262, portuguese: "Sim, eu falo alemão.", english: "Yes, I speak German.", pronunciation: "iés, ai spík djêrmân", category: "Estudos" },
  { id: 263, portuguese: "Você gosta de inglês?", english: "Do you like English?", pronunciation: "du iú laik ínglish", category: "Estudos" },
  { id: 264, portuguese: "Sim, eu gosto de inglês.", english: "Yes, I like English.", pronunciation: "iés, ai laik ínglish", category: "Estudos" },
  { id: 265, portuguese: "Você gosta da escola?", english: "Do you like school?", pronunciation: "du iú laik skúl", category: "Estudos" },
  { id: 266, portuguese: "Sim, eu gosto da escola.", english: "Yes, I like school.", pronunciation: "iés, ai laik skúl", category: "Estudos" },
  { id: 267, portuguese: "Você gosta de lição de casa?", english: "Do you like homework?", pronunciation: "du iú laik rôumuôrk", category: "Estudos" },
  { id: 268, portuguese: "Não, eu não gosto de lição de casa.", english: "No, I don't like homework.", pronunciation: "nôu, ai dôunt laik rôumuôrk", category: "Estudos" },
  { id: 269, portuguese: "Você gosta de provas?", english: "Do you like exams?", pronunciation: "du iú laik igzémz", category: "Estudos" },
  { id: 270, portuguese: "Não, eu não gosto de provas.", english: "No, I don't like exams.", pronunciation: "nôu, ai dôunt laik igzémz", category: "Estudos" },
  { id: 271, portuguese: "Você gosta dos professores?", english: "Do you like teachers?", pronunciation: "du iú laik títchers", category: "Estudos" },
  { id: 272, portuguese: "Sim, eu gosto dos professores.", english: "Yes, I like teachers.", pronunciation: "iés, ai laik títchers", category: "Estudos" },

  // Personalidade e Social
  { id: 273, portuguese: "Você gosta de conhecer pessoas novas?", english: "Do you like meeting new people?", pronunciation: "du iú laik míting niú pípâl", category: "Social" },
  { id: 274, portuguese: "Sim, eu gosto de conhecer pessoas novas.", english: "Yes, I like meeting new people.", pronunciation: "iés, ai laik míting niú pípâl", category: "Social" },
  { id: 275, portuguese: "Você é tímido(a)?", english: "Are you shy?", pronunciation: "ar iú chái", category: "Personalidade" },
  { id: 276, portuguese: "Não, eu não sou tímido(a).", english: "No, I'm not shy.", pronunciation: "nôu, aim nót chái", category: "Personalidade" },
  { id: 277, portuguese: "Você é extrovertido(a)?", english: "Are you outgoing?", pronunciation: "ar iú áutgôuing", category: "Personalidade" },
  { id: 278, portuguese: "Sim, eu sou extrovertido(a).", english: "Yes, I'm outgoing.", pronunciation: "iés, aim áutgôuing", category: "Personalidade" },
  { id: 279, portuguese: "Você gosta de festas?", english: "Do you like parties?", pronunciation: "du iú laik pártiz", category: "Social" },
  { id: 280, portuguese: "Sim, eu gosto de festas.", english: "Yes, I like parties.", pronunciation: "iés, ai laik pártiz", category: "Social" },
  { id: 281, portuguese: "Você gosta de festivais de música?", english: "Do you like music festivals?", pronunciation: "du iú laik miúzik féstivâlz", category: "Social" },
  { id: 282, portuguese: "Sim, eu gosto de festivais de música.", english: "Yes, I like music festivals.", pronunciation: "iés, ai laik miúzik féstivâlz", category: "Social" },
  { id: 283, portuguese: "Você gosta de dançar?", english: "Do you like dancing?", pronunciation: "du iú laik dánsing", category: "Social" },
  { id: 284, portuguese: "Sim, eu gosto de dançar.", english: "Yes, I like dancing.", pronunciation: "iés, ai laik dánsing", category: "Social" },
  { id: 285, portuguese: "Você sabe dançar?", english: "Can you dance?", pronunciation: "kén iú dáns", category: "Habilidades" },
  { id: 286, portuguese: "Sim, eu sei dançar.", english: "Yes, I can dance.", pronunciation: "iés, ai kén dáns", category: "Habilidades" },
  { id: 287, portuguese: "Você gosta de cantar?", english: "Do you like singing?", pronunciation: "du iú laik sínguing", category: "Habilidades" },
  { id: 288, portuguese: "Sim, eu gosto de cantar.", english: "Yes, I like singing.", pronunciation: "iés, ai laik sínguing", category: "Habilidades" },
  { id: 289, portuguese: "Você sabe cantar?", english: "Can you sing?", pronunciation: "kén iú sing", category: "Habilidades" },
  { id: 290, portuguese: "Sim, eu sei cantar.", english: "Yes, I can sing.", pronunciation: "iés, ai kén sing", category: "Habilidades" },
  { id: 291, portuguese: "Você gosta de encontrar amigos?", english: "Do you like meeting friends?", pronunciation: "du iú laik míting fréndz", category: "Social" },
  { id: 292, portuguese: "Sim, eu gosto de encontrar amigos.", english: "Yes, I like meeting friends.", pronunciation: "iés, ai laik míting fréndz", category: "Social" },

  // Música
  { id: 293, portuguese: "Qual é sua música favorita?", english: "What's your favorite music?", pronunciation: "uóts iôr fêivorit miúzik", category: "Música" },
  { id: 294, portuguese: "Eu gosto de música pop.", english: "I like pop music.", pronunciation: "ai laik póp miúzik", category: "Música" },
];

export const getRandomPhrase = (): CoachPhrase => {
  // All phrases are now available for free
  const availablePhrases = coachPhrases;
  
  const randomIndex = Math.floor(Math.random() * availablePhrases.length);
  return availablePhrases[randomIndex];
};

export const getFreePhrases = (): CoachPhrase[] => {
  return coachPhrases.filter(phrase => phrase.isFree);
};

export const getPremiumPhrases = (): CoachPhrase[] => {
  return coachPhrases.filter(phrase => !phrase.isFree);
};

export const getPhrasesByCategory = (category: string): CoachPhrase[] => {
  return coachPhrases.filter(phrase => phrase.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(coachPhrases.map(phrase => phrase.category)));
};
