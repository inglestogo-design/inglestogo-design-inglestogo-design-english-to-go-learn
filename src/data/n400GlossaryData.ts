export interface N400Question {
  id: number;
  question: string;
  questionPronunciation: string;
  answer: string;
  answerPronunciation: string;
  category?: string;
}

export const n400Glossary: N400Question[] = [
  {
    id: 1,
    question: "Do you owe any overdue Federal, state, or local taxes?",
    questionPronunciation: "Du yu ou éni óuvérdi fédral, stêit, ór lóucâl téixiz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Taxes"
  },
  {
    id: 2,
    question: "Can you explain what 'owe taxes' means?",
    questionPronunciation: "Kén yu ékspléin uát óu téixiz míns?",
    answer: "To owe the government money.",
    answerPronunciation: "Tu óu dhê guvérnment mâni",
    category: "Taxes"
  },
  {
    id: 3,
    question: "What does 'overdue' mean?",
    questionPronunciation: "Uát dâz óuvérdi mín?",
    answer: "Past a deadline.",
    answerPronunciation: "Pást â dédláin",
    category: "General"
  },
  {
    id: 4,
    question: "Have you ever been in jail or prison?",
    questionPronunciation: "Ráv yu éver bín in djêil ór prízon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 5,
    question: "Were you ever a worker, volunteer, or soldier, or did you otherwise ever serve in prison or jail?",
    questionPronunciation: "Uér yu éver â uérker, vâlunthíer, ór sóldier, ór díd yu ádérwaiz éver sérv in prízon ór djêil?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 6,
    question: "Can you explain what 'jail or prison' means?",
    questionPronunciation: "Kén yu ékspléin uát djêil ór prízon míns?",
    answer: "A place where prisoners are kept.",
    answerPronunciation: "Â plês uér prísoners ár képt",
    category: "General"
  },
  {
    id: 7,
    question: "Have you ever been a habitual drunkard?",
    questionPronunciation: "Ráv yu éver bín â hibítchuâl dránkard?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Moral Character"
  },
  {
    id: 8,
    question: "Can you define habitual drunkard?",
    questionPronunciation: "Kén yu dífáin hibítchuâl dránkard?",
    answer: "Someone who drinks too much alcohol regularly.",
    answerPronunciation: "Sâmwân rú drínks tú mâtch álcol régulârli",
    category: "Moral Character"
  },
  {
    id: 9,
    question: "Do you understand the full Oath of Allegiance to the United States?",
    questionPronunciation: "Du yu ândérstând dhê fúl Óuθ óv Âlídchêns tu dhê Iúnáitid Stêits?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Oath"
  },
  {
    id: 10,
    question: "Have you ever been involved in terrorist activities?",
    questionPronunciation: "Ráv yu éver bín invólvd in térorist áktivítiz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Security"
  },
  {
    id: 11,
    question: "Can you explain what 'terrorist activities' means?",
    questionPronunciation: "Kén yu ékspléin uát térorist áktivítiz míns?",
    answer: "Actions intended to scare or harm people for political or religious reasons.",
    answerPronunciation: "Ákshons inténdid tu skér ór hárm pípôl for polítikal ór rîlidjiós rízonz",
    category: "Security"
  },
  {
    id: 12,
    question: "Have you ever been involved in espionage or spying?",
    questionPronunciation: "Ráv yu éver bín invólvd in éspionêidj ór spáiing?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Security"
  },
  {
    id: 13,
    question: "Can you explain what 'espionage or spying' means?",
    questionPronunciation: "Kén yu ékspléin uát éspionêidj ór spáiing míns?",
    answer: "Watching or giving secret information to other countries.",
    answerPronunciation: "Wátching ór gíving síkrit infôrmêishon tu ádér kántris",
    category: "Security"
  },
  {
    id: 14,
    question: "Have you ever participated in genocide or killing of civilians?",
    questionPronunciation: "Ráv yu éver pártísipêitid in djênosáid ór kíling óv sívilianz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "War Crimes"
  },
  {
    id: 15,
    question: "Have you ever committed war crimes?",
    questionPronunciation: "Ráv yu éver kômítid uór kráimz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "War Crimes"
  },
  {
    id: 16,
    question: "Can you explain what 'war crimes' means?",
    questionPronunciation: "Kén yu ékspléin uát uór kráimz míns?",
    answer: "Illegal actions taken during war, like harming civilians.",
    answerPronunciation: "Ilígal ákshons téikén djúring uór, láik hárming sívilianz",
    category: "War Crimes"
  },
  {
    id: 17,
    question: "Have you ever been a member of a group that tried to overthrow the U.S. government?",
    questionPronunciation: "Ráv yu éver bín â mémbér óv â grup dhát tráid tu ôuvérthrô dhê Iú.És. guvérnment?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Security"
  },
  {
    id: 18,
    question: "Have you ever failed to pay taxes?",
    questionPronunciation: "Ráv yu éver féild tu pêi téixiz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Taxes"
  },
  {
    id: 19,
    question: "Can you explain what 'fail to pay taxes' means?",
    questionPronunciation: "Kén yu ékspléin uát féil tu pêi téixiz míns?",
    answer: "Not giving money owed to the government.",
    answerPronunciation: "Nôt gíving mâni óud tu dhê guvérnment",
    category: "Taxes"
  },
  {
    id: 20,
    question: "Have you ever lied about your income or financial situation?",
    questionPronunciation: "Ráv yu éver láid âbáut yór ínkâm ór fainánshal sítchuéishon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Financial"
  },
  {
    id: 21,
    question: "Have you ever failed to report any income to the government?",
    questionPronunciation: "Ráv yu éver féild tu ripôrt éni ínkâm tu dhê guvérnment?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Financial"
  },
  {
    id: 22,
    question: "Have you ever been deported from the United States?",
    questionPronunciation: "Ráv yu éver bín dipórtid from dhê Iúnaid Stêits?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 23,
    question: "Have you ever tried to get into the U.S. illegally?",
    questionPronunciation: "Ráv yu éver tráid tu gét íntu dhê Iú.És. ilígâli?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 24,
    question: "Can you explain what 'entering illegally' means?",
    questionPronunciation: "Kén yu ékspléin uát éntéring ilígâli míns?",
    answer: "Coming to the U.S. without permission from the government.",
    answerPronunciation: "Kâming tu dhê Iú.És. wídháut pêrmíshon from dhê guvérnment",
    category: "Immigration"
  },
  {
    id: 25,
    question: "Have you ever lied to get a U.S. visa or green card?",
    questionPronunciation: "Ráv yu éver láid tu gét â Iú.És. víza ór grín kárd?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 26,
    question: "Have you ever committed marriage fraud to get immigration benefits?",
    questionPronunciation: "Ráv yu éver kômítid mêridj frôd tu gét ímgréishon bénifits?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 27,
    question: "Can you explain what 'marriage fraud' means?",
    questionPronunciation: "Kén yu ékspléin uát mêridj frôd míns?",
    answer: "Pretending to be married to someone to get immigration advantages.",
    answerPronunciation: "Prêténding tu bí mêrid tu sâmwân tu gét ímgréishon ádvântidchiz",
    category: "Immigration"
  },
  {
    id: 28,
    question: "Have you ever helped anyone enter the U.S. illegally?",
    questionPronunciation: "Ráv yu éver hélpt éniwân éntér dhê Iú.És. ilígâli?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 29,
    question: "Have you ever been a member of a terrorist organization?",
    questionPronunciation: "Ráv yu éver bín â mémbér óv â térorist órgânêizêishon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Security"
  },
  {
    id: 30,
    question: "Have you ever been involved in genocide or persecution?",
    questionPronunciation: "Ráv yu éver bín invólvd in djênosáid ór pérsikúshon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "War Crimes"
  },
  {
    id: 31,
    question: "Have you ever committed a crime that could result in imprisonment?",
    questionPronunciation: "Ráv yu éver kômítid â kráim dhát kúd rizâlt in imprízônment?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 32,
    question: "Have you ever violated U.S. immigration laws?",
    questionPronunciation: "Ráv yu éver váioléitid Iú.És. ímgréishon lôz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 33,
    question: "Can you explain what 'violate immigration laws' means?",
    questionPronunciation: "Kén yu ékspléin uát váioléit ímgréishon lôz míns?",
    answer: "Breaking the rules for coming or staying in the U.S.",
    answerPronunciation: "Bréiking dhê rûlz for kâming ór stêiing in dhê Iú.És.",
    category: "Immigration"
  },
  {
    id: 34,
    question: "Have you ever lied on any immigration application?",
    questionPronunciation: "Ráv yu éver láid ón éni ímgréishon âplíkêishon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 35,
    question: "Have you ever claimed to be a U.S. citizen when you were not?",
    questionPronunciation: "Ráv yu éver kléimd tu bí â Iú.És. sítizen uén yu uér nôt?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 36,
    question: "Can you explain what 'claiming to be a citizen' means?",
    questionPronunciation: "Kén yu ékspléin uát kléiming tu bí â sítizen míns?",
    answer: "Saying you are a U.S. citizen when you are not legally one.",
    answerPronunciation: "Sêing yu ár â Iú.És. sítizen uén yu ár nôt lígali wân",
    category: "Immigration"
  },
  {
    id: 37,
    question: "Have you ever helped anyone lie to get immigration benefits?",
    questionPronunciation: "Ráv yu éver hélpt éniwân lái tu gét ímgréishon bénifits?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 38,
    question: "Have you ever been involved in illegal gambling?",
    questionPronunciation: "Ráv yu éver bín invólvd in ilígâl gámbôling?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 39,
    question: "Can you explain what 'illegal gambling' means?",
    questionPronunciation: "Kén yu ékspléin uát ilígâl gámbôling míns?",
    answer: "Betting money in games or sports that break the law.",
    answerPronunciation: "Bétching mâni in gêims ór spôrts dhát bréik dhê lô",
    category: "Criminal"
  },
  {
    id: 40,
    question: "Have you ever committed tax fraud?",
    questionPronunciation: "Ráv yu éver kômítid têks frôd?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Taxes"
  },
  {
    id: 41,
    question: "Can you explain what 'tax fraud' means?",
    questionPronunciation: "Kén yu ékspléin uát têks frôd míns?",
    answer: "Lying or cheating on taxes to pay less than required.",
    answerPronunciation: "Láiiing ór chíiting ón téixiz tu pêi lés dhân rikwáird",
    category: "Taxes"
  },
  {
    id: 42,
    question: "Have you ever lied to a U.S. government official?",
    questionPronunciation: "Ráv yu éver láid tu â Iú.És. guvérnment ófishol?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Moral Character"
  },
  {
    id: 43,
    question: "Have you ever been a member of a communist party?",
    questionPronunciation: "Ráv yu éver bín â mémbér óv â kómyunist pârti?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Political"
  },
  {
    id: 44,
    question: "Can you explain what 'communist party' means?",
    questionPronunciation: "Kén yu ékspléin uát kómyunist pârti míns?",
    answer: "A political group that wants government control of all property and resources.",
    answerPronunciation: "Â polítikal grup dhát wánts guvérnment kóntrôl óv ól próperty ând rîsôrsiz",
    category: "Political"
  },
  {
    id: 45,
    question: "Have you ever been forced to do anything against your will?",
    questionPronunciation: "Ráv yu éver bín fôrst tu dú éniθing agénst yór uíl?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "General"
  },
  {
    id: 46,
    question: "Can you explain what 'against your will' means?",
    questionPronunciation: "Kén yu ékspléin uát agénst yór uíl míns?",
    answer: "Doing something that you do not want to do.",
    answerPronunciation: "Dúing sâmθing dhát yu dú nôt wánt tu dú",
    category: "General"
  },
  {
    id: 47,
    question: "Have you ever failed to support the Constitution or U.S. laws?",
    questionPronunciation: "Ráv yu éver féild tu sâpórt dhê Kónstityushon ór Iú.És. lôz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Oath"
  },
  {
    id: 48,
    question: "Have you ever been ordered by a court to pay fines or restitution?",
    questionPronunciation: "Ráv yu éver bín órdérd bai â córt tu pêi fáins ór réstítushon?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 49,
    question: "Have you ever been involved in child abuse or neglect?",
    questionPronunciation: "Ráv yu éver bín invólvd in cháil dábûs ór nêgléct?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 50,
    question: "Can you explain what 'child abuse or neglect' means?",
    questionPronunciation: "Kén yu ékspléin uát cháil dábûs ór nêgléct míns?",
    answer: "Harming a child or failing to take care of them.",
    answerPronunciation: "Hárming â cháil dór féiling tu têik kêr óv dhêm",
    category: "Criminal"
  },
  {
    id: 51,
    question: "Have you ever been involved in human trafficking?",
    questionPronunciation: "Ráv yu éver bín invólvd in hýuman tráfikîng?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 52,
    question: "Can you explain what 'human trafficking' means?",
    questionPronunciation: "Kén yu ékspléin uát hýuman tráfikîng míns?",
    answer: "Buying, selling, or forcing people to work or serve against their will.",
    answerPronunciation: "Báiiing, séling, ór fôrsing pípôl tu wôrk ór sérv agénst dhêr uíl",
    category: "Criminal"
  },
  {
    id: 53,
    question: "Have you ever failed to pay child support?",
    questionPronunciation: "Ráv yu éver féild tu pêi cháild sâpórt?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Financial"
  },
  {
    id: 54,
    question: "Have you ever gambled illegally or been involved in illegal lotteries?",
    questionPronunciation: "Ráv yu éver gámbôld ilígâli ór bín invólvd in ilígâl lótéris?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 55,
    question: "Have you ever lied on any government form?",
    questionPronunciation: "Ráv yu éver láid ón éni guvérnment fôrm?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Moral Character"
  },
  {
    id: 56,
    question: "Can you explain what 'lying on a government form' means?",
    questionPronunciation: "Kén yu ékspléin uát láiiing ón â guvérnment fôrm míns?",
    answer: "Giving false information on official papers.",
    answerPronunciation: "Gíving fóls infôrmêishon ón ófishol péipers",
    category: "Moral Character"
  },
  {
    id: 57,
    question: "Have you ever been involved in bribery or corruption?",
    questionPronunciation: "Ráv yu éver bín invólvd in bráibêri ór kórupsion?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Criminal"
  },
  {
    id: 58,
    question: "Can you explain what 'bribery or corruption' means?",
    questionPronunciation: "Kén yu ékspléin uát bráibêri ór kórupsion míns?",
    answer: "Giving or taking money or gifts to get unfair advantages.",
    answerPronunciation: "Gíving ór téiking mâni ór gífts tu gét ânfér ádvântidchiz",
    category: "Criminal"
  },
  {
    id: 59,
    question: "Have you ever failed to pay any debts to the government?",
    questionPronunciation: "Ráv yu éver féild tu pêi éni déts tu dhê guvérnment?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Financial"
  },
  {
    id: 60,
    question: "Have you ever lied to gain any government benefits?",
    questionPronunciation: "Ráv yu éver láid tu géin éni guvérnment bénifits?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Moral Character"
  },
  {
    id: 61,
    question: "Can you explain what 'gain government benefits by lying' means?",
    questionPronunciation: "Kén yu ékspléin uát géin guvérnment bénifits bai láiiing míns?",
    answer: "Getting money, help, or advantages from the government by giving false information.",
    answerPronunciation: "Gétching mâni, hélp, ór ádvântidchiz from dhê guvérnment bai gíving fóls infôrmêishon",
    category: "Moral Character"
  },
  {
    id: 62,
    question: "Have you ever failed to support your family legally?",
    questionPronunciation: "Ráv yu éver féild tu sâpórt yór fámili lígali?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Financial"
  },
  {
    id: 63,
    question: "Have you ever refused to take the Oath of Allegiance?",
    questionPronunciation: "Ráv yu éver rifúzd tu téik dhê Ôuθ óv âlídchâns?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Oath"
  },
  {
    id: 64,
    question: "Can you explain what 'Oath of Allegiance' means?",
    questionPronunciation: "Kén yu ékspléin uát Ôuθ óv âlídchâns míns?",
    answer: "A promise to be loyal to the United States and obey its laws.",
    answerPronunciation: "Â prómis tu bí lôiâl tu dhê Iúnaid Stêits ând óbêi its lôz",
    category: "Oath"
  },
  {
    id: 65,
    question: "Have you ever been deported from the United States or asked to leave?",
    questionPronunciation: "Ráv yu éver bín dipórtid from dhê Iúnaid Stêits ór áskt tu lív?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Immigration"
  },
  {
    id: 66,
    question: "Are you willing to take the full Oath of Allegiance?",
    questionPronunciation: "Ár yu uíling tu téik dhê fúl Óuθ óv âlídchâns?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Oath"
  },
  {
    id: 67,
    question: "Will you support and defend the Constitution of the United States?",
    questionPronunciation: "Uíl yu sâpórt ând difénd dhê Kónstityushon óv dhê Iúnaid Stêits?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Oath"
  },
  {
    id: 68,
    question: "Are you willing to bear arms for the United States?",
    questionPronunciation: "Ár yu uíling tu bér ármz fór dhê Iúnaid Stêits?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Military"
  },
  {
    id: 69,
    question: "Are you willing to perform noncombatant services for the U.S.?",
    questionPronunciation: "Ár yu uíling tu pérfórm nónkômbatânt sérvisis fór dhê Iú.És.?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Military"
  },
  {
    id: 70,
    question: "Are you willing to perform work of national importance?",
    questionPronunciation: "Ár yu uíling tu pérfórm uôrk óv náshônâl ímpórtêns?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Oath"
  },
  {
    id: 71,
    question: "Do you promise to tell the truth during your interview?",
    questionPronunciation: "Du yu prómis tu tél dhê trúθ djúring yór íntêrviú?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Oath"
  },
  {
    id: 72,
    question: "What is your current legal name?",
    questionPronunciation: "Uát iz yór kárent lígâl nêim?",
    answer: "[Your legal name]",
    answerPronunciation: "[Yór lígâl nêim]",
    category: "Personal"
  },
  {
    id: 73,
    question: "What is your date of birth?",
    questionPronunciation: "Uát iz yór dêit óv bórθ?",
    answer: "[Your birth date]",
    answerPronunciation: "[Yór bórθ dêit]",
    category: "Personal"
  },
  {
    id: 74,
    question: "What is your country of birth?",
    questionPronunciation: "Uát iz yór kántri óv bórθ?",
    answer: "[Your country]",
    answerPronunciation: "[Yór kántri]",
    category: "Personal"
  },
  {
    id: 75,
    question: "What is your current address?",
    questionPronunciation: "Uát iz yór kárent âdrés?",
    answer: "[Your address]",
    answerPronunciation: "[Yór âdrés]",
    category: "Personal"
  },
  {
    id: 76,
    question: "How long have you lived at your current address?",
    questionPronunciation: "Ráu lóng ráv yu lívd ât yór kárent âdrés?",
    answer: "[Time period]",
    answerPronunciation: "[Táim píriod]",
    category: "Personal"
  },
  {
    id: 77,
    question: "What is your marital status?",
    questionPronunciation: "Uát iz yór mèritâl státus?",
    answer: "[Married/Single/Divorced/Widowed]",
    answerPronunciation: "[Mérid/Síngl/Divórst/Uídôd]",
    category: "Personal"
  },
  {
    id: 78,
    question: "How many times have you been married?",
    questionPronunciation: "Ráu méni táimz ráv yu bín mérid?",
    answer: "[Number]",
    answerPronunciation: "[Nâmbêr]",
    category: "Personal"
  },
  {
    id: 79,
    question: "Do you have any children?",
    questionPronunciation: "Du yu ráv éni tchíldren?",
    answer: "[Yes/No and number]",
    answerPronunciation: "[Iés/Nôu ând nâmbêr]",
    category: "Personal"
  },
  {
    id: 80,
    question: "What is your current occupation?",
    questionPronunciation: "Uát iz yór kárent ákiupéishon?",
    answer: "[Your job]",
    answerPronunciation: "[Yór djób]",
    category: "Personal"
  },
  {
    id: 81,
    question: "Who is your current employer?",
    questionPronunciation: "Rú iz yór kárent implóier?",
    answer: "[Employer name]",
    answerPronunciation: "[Implóier nêim]",
    category: "Personal"
  },
  {
    id: 82,
    question: "When did you become a permanent resident?",
    questionPronunciation: "Uén díd yu bikâm â pérmânênt rézidênt?",
    answer: "[Date]",
    answerPronunciation: "[Dêit]",
    category: "Immigration"
  },
  {
    id: 83,
    question: "How did you enter the United States?",
    questionPronunciation: "Ráu díd yu éntêr dhê Iúnaid Stêits?",
    answer: "[Visa type/method]",
    answerPronunciation: "[Víza táip/méθod]",
    category: "Immigration"
  },
  {
    id: 84,
    question: "Have you traveled outside the U.S. since becoming a permanent resident?",
    questionPronunciation: "Ráv yu trávêld áutsáid dhê Iú.És. síns bikâming â pérmânênt rézidênt?",
    answer: "[Yes/No]",
    answerPronunciation: "[Iés/Nôu]",
    category: "Travel"
  },
  {
    id: 85,
    question: "How many total days have you spent outside the U.S.?",
    questionPronunciation: "Ráu méni tótâl dêiz ráv yu spént áutsáid dhê Iú.És.?",
    answer: "[Number of days]",
    answerPronunciation: "[Nâmbêr óv dêiz]",
    category: "Travel"
  },
  {
    id: 86,
    question: "Have you ever claimed to be a non-resident for tax purposes?",
    questionPronunciation: "Ráv yu éver kléimd tu bí â nón-rézidênt fór têks pôrpôsiz?",
    answer: "No.",
    answerPronunciation: "Nôu",
    category: "Taxes"
  },
  {
    id: 87,
    question: "Do you pay U.S. taxes?",
    questionPronunciation: "Du yu pêi Iú.És. téixiz?",
    answer: "Yes.",
    answerPronunciation: "Iés",
    category: "Taxes"
  },
  {
    id: 88,
    question: "Are you registered with the Selective Service?",
    questionPronunciation: "Ár yu rédjistêrd uíθ dhê Sêléktiv Sérvís?",
    answer: "[Yes/No/Not applicable]",
    answerPronunciation: "[Iés/Nôu/Nôt âplíkâbl]",
    category: "Military"
  },
  {
    id: 89,
    question: "Why do you want to become a U.S. citizen?",
    questionPronunciation: "Uái du yu uánt tu bikâm â Iú.És. sítizen?",
    answer: "[Your reason]",
    answerPronunciation: "[Yór rízon]",
    category: "Motivation"
  },
  {
    id: 90,
    question: "What does the Constitution mean to you?",
    questionPronunciation: "Uát dâz dhê Kónstityushon mín tu yú?",
    answer: "[Your answer about rights and laws]",
    answerPronunciation: "[Yór ánsêr âbáut ráits ând lóz]",
    category: "Civics"
  }
];

export const categories = [
  "All",
  "Taxes",
  "Criminal",
  "Immigration",
  "Security",
  "War Crimes",
  "Financial",
  "Moral Character",
  "Oath",
  "Political",
  "Personal",
  "Travel",
  "Military",
  "Motivation",
  "Civics",
  "General"
];
