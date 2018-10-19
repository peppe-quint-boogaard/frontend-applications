export default [
  [
    {
      question: "Geslacht",
      id: 0,
      options: [
        { label: "Man", value: -0.12611},
        { label: "Vrouw", value: 0.00}
      ]
    },
    {
      question: "Slachtoffer",
      id: 1,
      options: [
        { label: "Ja", value: 0.23639},
        { label: "Nee", value: 0.00}
      ]
    },
  ],
  [
    {
      question: "Leeftijd moeder bij geboorte",
      id: 2,
      options: [
        {label: "Jonger dan 20 jaar", value: 0.45150},
        {label: "20 tot 25 jaar", value: 0.10852},
        {label: "25 tot 30 jaar", value: -0.08841},
        {label: "30 tot 35 jaar", value: 0.00},
        {label: "35 tot 40 jaar", value: 0.23988},
        {label: "40 jaar en ouder", value: -0.11153}
      ]
    },
    {
      question: "Leeftijd vader bij geboorte",
      id: 3,
      options: [
        {label: "Jonger dan 25 jaar", value: -0.00587},
        {label: "20 tot 25 jaar", value: 0.03107},
        {label: "25 tot 30 jaar", value: 0.03107},
        {label: "30 tot 35 jaar", value: 0.00},
        {label: "35 tot 40 jaar", value: -0.21624},
        {label: "40 jaar en ouder", value: -0.32645}
      ]
    },
    {
      question: "Leeftijdsverschil ouders",
      id: 4,
      options: [
        {label: "Minder dan 5 jaar", value: 0.00},
        {label: "Meer dan 5 jaar", value: 0.28581}
      ]
    },
    {
      question: "Herkomst ouders",
      id: 5,
      options: [
        {label: "Beide ouders Nederlands", value: 0.00},
        {label: "Beide ouders niet Nederlands", value: 0.16972},
        {label: "Een van de ouders Nederlands en de andere niet Nederlands", value: -0.08943}
      ]
    },
    {
      question: "Gescheiden ouders",
      id: 6,
      options: [
        {label: "Ja", value: 0.27683},
        {label: "Nee", value: 0.00}
      ]
    },
  ],
  [
    {
      question: "Soort onderwijs",
      id: 7,
      options: [
        {label: "Regulier onderwijs",  value: 0.00},
        {label: "Onbekend",  value: -0.76957},
        {label: "Niet-regulier onderwijs", value: -0.33031}
      ]
    },
    {
      question: "Actueel onderwijs niveau",
      id: 8,
      options: [
        {label: "Basisonderwijs", value: 0.25232},
        {label: "Onderwijs onbekend", value: 0.00},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: 0.87842},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.56882},
        {label: "Havo onderbouw, Havo bovenbouw of Hbo bachelor", value: 0.00},
        {label: "Vwo of Wo bachelor", value: -0.83566}
      ]
    },
    {
      question: "Verandering onderwijs niveau",
      id: 9,
      options: [
        {label: "Opschalen of gelijk blijvend", value: 0.00},
        {label: "Afschalen", value: 0.58732},
        {label: "Onbekend", value: -1.11682}
      ]
    },
    {
      question: "Voortijdig schoolverlaten",
      id: 10,
      options: [
        {label: "Door in onderwijs", value: 0.00},
        {label: "Onbekend", value: 0.80564},
        {label: "Niet van toepassing", value: 0.38736},
        {label: "Uit onderwijs met startkwalificatie", value: -13.64193},
        {label: "Voortijdig schoolverlaten", value: 0.34684}
      ]
    },
  ],
  [
    {
      question: "Soort woning",
      id: 11,
      options: [
        {label: "Eigen woning", value: 0.00},
        {label: "Huurwoning met huurtoeslag", value: 0.38401},
        {label: "Huurwoning zonder huurtoeslag", value: 0.40420},
        {label: "Onbekend", value: 2.40126}
      ]
    },
    {
      question: "Type huishouden",
      id: 12,
      options: [
        {label: "Gehuwd paar met kinderen", value: 0.00},
        {label: "Eenouderhuishouden", value: 0.49608},
        {label: "Eenpersoonshuishouden", value: 1.71859},
        {label: "Gehuwd paar zonder kinderen", value: 1.06108},
        {label: "Institutioneel huishouden", value: 1.92321},
        {label: "Niet-gehuwd paar met kinderen", value: 0.32694},
        {label: "Niet-gehuwd paar zonder kinderen", value: -14.15530},
        {label: "Overig huishouden", value: 0.91365},
        {label: "Onbekend huishouden", value: -13.81002}
      ]
    },
  ],
  [
    {
      question: "Werk vader",
      id: 13,
      options: [
        {label: "Werkend of overig actief", value: 0.00},
        {label: "Geen werk en niet actief", value: 0.33772},
        {label: "Onbekend", value: 0.23486}
      ]
    },
    {
      question: "Werk moeder",
      id: 14,
      options: [
        {label: "Werkend of overig actief", value: 0.00},
        {label: "Geen werk en niet actief", value: 0.36958},
        {label: "Onbekend", value: -0.95012}
      ]
    },
    {
      question: "Hoogst behaalde diploma vader",
      id: 15,
      options: [
        {label: "Onderwijs onbekend", value: 0.88464},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: -0.21630},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.67119},
        {label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master", value: 0.00},
        {label: "Vwo, Wo bachelor of Wo master", value: -12.08995}
      ]
    },
    {
      question: "Hoogst behaalde diploma moeder",
      id: 16,
      options: [
        {label: "Onderwijs onbekend", value: 0.03655},
        {label: "Vmbo b/k, mbo 1 of mbo 2", value: 0.15936},
        {label: "Vmbo g/t, mbo 3 of mbo 4", value: 0.03334},
        {label: "Havo onderbouw, Havo bovenbouw, Hbo bachelor of Hbo master", value: 0.00},
        {label: "Vwo, Wo bachelor of Wo master", value: -13.03162}
      ]
    },
  ],
  [
    {
      question: "Kind verdacht",
      id: 17,
      options: [
        {label: "Ja", value: 0.94738},
        {label: "Nee", value: 0.00}
      ]
    },
    {
      question: "Halt delict",
      id: 18,
      options: [
        {label: "Ja", value: 0.36448},
        {label: "Nee", value: 0.00}
      ]
    },
    {
      question: "Vader of moeder verdacht",
      id: 19,
      options: [
        {label: "Ja", value: 0.50027},
        {label: "Nee",  value: 0.00}
      ]
    },
    {
      question: "Traject vooraf",
      id: 20,
      options: [
        {label: "Geen jeugdhulp zonder verblijf gehad", value: 0.00},
        {label: "Jeugdhulp zonder verblijf gehad", value: 1.52774}
      ]
    },
    {
      question: "Zwaar traject",
      id: 21,
      options: [
        {label: "Nee", value: 1},
        {label: "Ja", value: 1}
      ]
    }
  ],
];
