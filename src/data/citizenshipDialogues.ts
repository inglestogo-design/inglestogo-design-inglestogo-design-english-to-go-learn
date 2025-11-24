export interface DialogueLine {
  speaker: 'agent' | 'applicant';
  english: string;
  pronunciation: string;
}

export interface DialogueSection {
  id: string;
  title: string;
  dialogues: DialogueLine[];
}

export const citizenshipDialogues: DialogueSection[] = [
  {
    id: 'introduction',
    title: 'Introduction / First Meeting',
    dialogues: [
      {
        speaker: 'agent',
        english: 'How are you doing today?',
        pronunciation: 'Ráu ár iú dúin tudêi?'
      },
      {
        speaker: 'applicant',
        english: "I'm doing well, thank you. How are you?",
        pronunciation: 'Áim dúin uél, thénk iú. Ráu ár iú?'
      },
      {
        speaker: 'agent',
        english: 'Did you have any trouble getting here?',
        pronunciation: 'Díd iú rév éni trâbl guétin híer?'
      },
      {
        speaker: 'applicant',
        english: 'No, everything was fine, thank you.',
        pronunciation: 'Nóu, évriting uóz fáin, thénk iú.'
      },
      {
        speaker: 'agent',
        english: 'How was the traffic?',
        pronunciation: 'Ráu uóz dhé tráfic?'
      },
      {
        speaker: 'applicant',
        english: "It was okay, not too bad.",
        pronunciation: 'It uóz okêi, nót tchu bád.'
      },
      {
        speaker: 'agent',
        english: 'How did you come here? (by car, public transport, etc.)',
        pronunciation: 'Ráu díd iú kâm híer? (bái kár, páblik tránspórt, étc.)'
      },
      {
        speaker: 'applicant',
        english: 'I came by bus.',
        pronunciation: 'Ái kêm bái bãs.'
      },
      {
        speaker: 'agent',
        english: 'How long did it take you to get here?',
        pronunciation: 'Ráu lóng díd it têik iú tu guét híer?'
      },
      {
        speaker: 'applicant',
        english: 'About 30 minutes.',
        pronunciation: 'Abáut sârti mínits.'
      },
      {
        speaker: 'agent',
        english: 'Is anyone here with you today?',
        pronunciation: 'Íz éniuán híer wíd iú tudêi?'
      },
      {
        speaker: 'applicant',
        english: 'No, I came alone.',
        pronunciation: 'Nóu, ái kêm alôun.'
      },
      {
        speaker: 'agent',
        english: "What's the weather like today?",
        pronunciation: 'Uátss dhé uéther láik tudêi?'
      },
      {
        speaker: 'applicant',
        english: "It's sunny and warm.",
        pronunciation: 'Its sâni énd uórm.'
      },
      {
        speaker: 'agent',
        english: 'Do you feel ready for your interview?',
        pronunciation: 'Dú iú fíu rédi fór iór intérviú?'
      },
      {
        speaker: 'applicant',
        english: "Yes, I think I'm ready.",
        pronunciation: 'Iés, ái thínk áim rédi.'
      },
      {
        speaker: 'agent',
        english: 'Have you been here before?',
        pronunciation: 'Rév iú bín híer bifór?'
      },
      {
        speaker: 'applicant',
        english: 'No, this is my first time.',
        pronunciation: 'Nóu, dhis ís mái férst táim.'
      },
      {
        speaker: 'agent',
        english: 'Do you need any assistance while waiting?',
        pronunciation: 'Dú iú níid éni ásistâns uáil wêiting?'
      },
      {
        speaker: 'applicant',
        english: 'No, thank you.',
        pronunciation: 'Nóu, thénk iú.'
      }
    ]
  },
  {
    id: 'part-a',
    title: 'Part A – Arrival at the Office / Chegada ao Escritório',
    dialogues: [
      {
        speaker: 'agent',
        english: 'Good morning! May I see your documents, please?',
        pronunciation: 'Gud móorning! Mei ai sí iór dókumentss, plíz?'
      },
      {
        speaker: 'applicant',
        english: 'Good morning! Here are my passport and application form.',
        pronunciation: 'Gud móorning! Híer ár mai pásport énd áplicêishon fórm.'
      },
      {
        speaker: 'agent',
        english: 'Thank you. Are you here for your citizenship interview?',
        pronunciation: 'Thénk iú. Ár iú híer fór iór sítizênchip intérviú?'
      },
      {
        speaker: 'applicant',
        english: 'Yes, I am.',
        pronunciation: 'Iés, ai ám.'
      },
      {
        speaker: 'agent',
        english: 'Please have a seat. The officer will call you when it\'s your turn.',
        pronunciation: 'Plíz rév a síit. Dhó ófiser uíl kól iú uen íts iór têrn.'
      },
      {
        speaker: 'applicant',
        english: 'Thank you.',
        pronunciation: 'Thénk iú.'
      }
    ]
  },
  {
    id: 'part-b',
    title: 'Part B – Initial Questions / Perguntas Iniciais',
    dialogues: [
      {
        speaker: 'agent',
        english: 'Where were you born?',
        pronunciation: 'Uér uér iú bórn?'
      },
      {
        speaker: 'applicant',
        english: 'I was born in Brazil.',
        pronunciation: 'Ai uóz bórn in Brázil.'
      },
      {
        speaker: 'agent',
        english: 'Have you ever lived in another country?',
        pronunciation: 'Rév iú éver lívd in ánáder kántri?'
      },
      {
        speaker: 'applicant',
        english: 'No, I have always lived in Brazil.',
        pronunciation: 'Nóu, ai rév ólweiz lívd in Brázil.'
      }
    ]
  },
  {
    id: 'part-c',
    title: 'Part C – Legal Status & History / Status Legal e Histórico',
    dialogues: [
      {
        speaker: 'agent',
        english: 'Do you have any criminal record?',
        pronunciation: 'Dú iú rév éni kríminal ríkord?'
      },
      {
        speaker: 'applicant',
        english: "No, I don't.",
        pronunciation: 'Nóu, ai dóunt.'
      },
      {
        speaker: 'agent',
        english: 'Have you ever owed taxes?',
        pronunciation: 'Rév iú éver óud téixess?'
      },
      {
        speaker: 'applicant',
        english: 'No, I always pay my taxes.',
        pronunciation: 'Nóu, ai ólweiz pêi mai téixess.'
      }
    ]
  },
  {
    id: 'part-d',
    title: 'Part D – Interview Completion / Encerramento da Entrevista',
    dialogues: [
      {
        speaker: 'agent',
        english: 'Thank you. Your interview is complete. You will be notified about the next steps.',
        pronunciation: 'Thénk iú. Iór intérviú ís cómplit. Iú uíl bí nótifáid abáut dhó nékst stéps.'
      },
      {
        speaker: 'applicant',
        english: 'Thank you very much!',
        pronunciation: 'Thénk iú véri mátch!'
      },
      {
        speaker: 'agent',
        english: "You're welcome. Have a nice day!",
        pronunciation: 'Iór uélcom. Rév a náis déi!'
      }
    ]
  },
  {
    id: 'part-h',
    title: 'Part H – Oath & Final Steps / Juramento e Etapas Finais',
    dialogues: [
      {
        speaker: 'agent',
        english: 'Are you willing to take the Oath of Allegiance to the United States?',
        pronunciation: 'Ár iú uílin tu têik dhé Óuth óv Alígins tu dhé Iúnáited Stéits?'
      },
      {
        speaker: 'applicant',
        english: 'Yes, I am willing.',
        pronunciation: 'Iés, ái ám uílin.'
      },
      {
        speaker: 'agent',
        english: 'Please raise your right hand and repeat after me.',
        pronunciation: 'Plíz rêiz iór ráit hênd énd ripít áfter mí.'
      },
      {
        speaker: 'applicant',
        english: 'I hereby declare, on oath, that I absolutely and entirely renounce and abjure all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty, of whom or which I have heretofore been a subject or citizen; that I will support and defend the Constitution and laws of the United States of America against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; that I will bear arms on behalf of the United States when required by the law; that I will perform noncombatant service in the Armed Forces of the United States when required by the law; that I will perform work of national importance under civilian direction when required by the law; and that I take this obligation freely without any mental reservation or purpose of evasion; so help me God.',
        pronunciation: 'Ái hérbáiri díclér, ón óuth, dhét ái ábsólutli énd éntaíerli rênáuns énd ábjúôr ól alígins énd fídeliti tu éni fôréin príncipe, pôtêntêit, stêit, ór sóvrâniti, óv râm ór uích ái rév héretofór bín á sábdjéct ór sítizên; dhét ái uíl sâpôrt énd dífend dhé Cónstitúshon énd lóz óv dhé Iúnáited Stéits óv Amérika agénst ól éninmis, fôréin énd déméstic; dhét ái uíl bér trú féth énd alígins tu dhé séim; dhét ái uíl bér ármz ón bihálf óv dhé Iúnáited Stéits uén ríkwaird báy dhé ló; dhét ái uíl pêrfôrm nônkómbátânt sérvis in dhé Ármd Fôrsis óv dhé Iúnáited Stéits uén ríkwaird báy dhé ló; dhét ái uíl pêrfôrm uôrk óv náshonal impórtâns ânder sívílían dírékshon uén ríkwaird báy dhé ló; énd dhét ái têik dhis óbligéishon flíiri uídáut éni méntal rézérvéishon ór pêrpôs óv évejshon; só hélp mí Gód.'
      },
      {
        speaker: 'agent',
        english: 'Congratulations! You are now a citizen of the United States.',
        pronunciation: 'Cóngrátcheuleishons! Iú ár náu á sítizên óv dhé Iúnáited Stéits.'
      },
      {
        speaker: 'applicant',
        english: 'Thank you!',
        pronunciation: 'Thénk iú!'
      }
    ]
  }
];
