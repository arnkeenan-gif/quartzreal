// ============================================================
// QUARTZ MØLLE — PRODUCT DATA
// ============================================================
// To add products: add to this array OR add via Supabase dashboard
// Images go in /images/ folder

const PRODUCTS = [
  {
    id: 'blaa-hvede-fuldkorn',
    name: 'Blå hvede',
    type: 'Fuldkornshvedemel',
    badge: null,
    color: '#3b4fa8',
    description: 'Blå hvede er en sjælden og smagfuld hvedesort med en karakteristisk dybblå farve. Malet på stenkværn bevares alle næringsstoffer og det nøddeagtige smag.',
    certifications: ['EU-Øko', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 108, image: 'images/Bla_-Fuldkorn-3kg.jpg' },
      { label: '12,5 kg', price: 330, image: 'images/Bla_-Fuldkorn-12_5.jpg' }
    ]
  },
  {
    id: 'dalarna-fuldkorn',
    name: 'Dalarna',
    type: 'Fuldkornshvedemel',
    badge: 'gammel',
    color: '#c0392b',
    description: 'Dalarna er en klassisk dansk hvedesort med en rig smag og god bageevne. Perfekt til rugbrød, boller og grovbrød. Dyrket og malet i Danmark.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Dalarna-3Kg-fuldkorn-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/Dalarna-12_5Kg-fuldkorn-96x139mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'dalarna-type85',
    name: 'Dalarna',
    type: 'Mellemsigtet hvedemel – Type 85',
    badge: 'gammel',
    color: '#c0392b',
    description: 'Dalarna Type 85 er et mellemsigtet mel der bevarer mere af kornets naturlige smag og næringsindhold end fintere mel. Ideel til brød med karakter.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Dalarna-3Kg-type85-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/Dalarna-12_5Kg-type85-96x139mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'mariagertoba-type70',
    name: 'Mariagertoba',
    type: 'Fintsigtet hvedemel – Type 70',
    badge: 'bestseller',
    color: '#d4890a',
    description: 'Mariagertoba er et fintsigtet hvedemel med fremragende bageegenskaber. Det giver luftige og velsmagende brød og boller. En af vores mest elskede sorter.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Mariagertoba-type70-3Kg-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/Mariagertoba-type70-12_5Kg-148x214_29mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'olands-fuldkorn',
    name: 'Ølands / Quarna',
    type: 'Fuldkornshvedemel',
    badge: 'gammel',
    color: '#5b8dd9',
    description: 'Ølandshvede er en gammel nordisk kornsort med en kompleks og nøddeagtig smag. Perfekt til surdejsbrød og håndværkerbrød der kræver karakter.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 99, image: 'images/ØlandsHvede-fuldkorn-3Kg-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 300, image: 'images/ØlandsHvede-fuldkorn-12_5Kg-148x214_29mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'olands-type85',
    name: 'Ølands / Quarna',
    type: 'Mellemsigtet hvedemel – Type 85',
    badge: 'gammel',
    color: '#5b8dd9',
    description: 'Ølands Type 85 kombinerer det bedste fra fuldkorn og hvidt mel. En alsidig meltype der giver brød med dybde og god struktur.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 99, image: 'images/ØlandsHvede-type85-3Kg-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/ØlandsHvede-type85-12_5Kg-148x214_29mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'purpurhvede-fuldkorn',
    name: 'Purpurhvede',
    type: 'Fuldkornshvedemel',
    badge: 'bestseller',
    color: '#7b2fbe',
    description: 'Purpurhvede er en smuk og sjælden hvedesort med en dyb, lilla farve. Rig på antioxidanter og med en markant, sødlig smag der løfter ethvert bagværk.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 108, image: 'images/Purpurhvede-fuldkorn-3Kg-96x139mm-outlined_copy.jpg' },
      { label: '12,5 kg', price: 330, image: 'images/Purpurhvede-fuldkorn-12_5Kg-148x214_29mm-outlined_copy.jpg' }
    ]
  },
  {
    id: 'quartz-special-fuldkorn',
    name: 'Quartz Special',
    type: 'Fuldkornsmel',
    badge: null,
    color: '#2d6a4f',
    description: 'Quartz Special er vores husets særlige blanding – en unik sammensætning af udvalgte kornsorter der giver et komplekst og smagfuldt fuldkornsmel.',
    certifications: ['DK-ØKO-100', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 108, image: 'images/QS-Fuldkorn-3kg-Webshop.jpg' },
      { label: '12,5 kg', price: 330, image: 'images/QS-Fuldkorn-12_5_Webshop.jpg' }
    ]
  },
  {
    id: 'quartz-special-type85',
    name: 'Quartz Special',
    type: 'Mellemsigtet mel – Type 85',
    badge: null,
    color: '#2d6a4f',
    description: 'Quartz Special Type 85 er vores husets mellemsigtede mel – en særlig blanding med fremragende bageegenskaber og en rig, kompleks smag.',
    certifications: ['DK-ØKO-100', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 108, image: 'images/QS-Type85-3kg-Webshop.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/QS-Type85-12_5_Webshop.jpg' }
    ]
  },
  {
    id: 'rod-hvede-fuldkorn',
    name: 'Rød hvede',
    type: 'Fuldkornshvedemel',
    badge: null,
    color: '#c0392b',
    description: 'Rød hvede er en klassisk dansk hvedesort med en smuk rødlig farve og en fyldig, robust smag. Ideel til grove brød og boller med karakter.',
    certifications: ['DK-ØKO-100', 'EU-Jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Rød-Fuldkorn-3kg.jpg' },
      { label: '12,5 kg', price: 300, image: 'images/Rød-Fuldkorn-12_5.jpg' }
    ]
  },
  {
    id: 'rod-hvede-type70',
    name: 'Rød hvede',
    type: 'Fintsigtet hvedemel – Type 70',
    badge: 'bestseller',
    color: '#c0392b',
    description: 'Rød hvede Type 70 er et let sigtet mel der giver luftige og velsmagende brød. Perfekt når du ønsker det bedste fra rød hvede i en finere tekstur.',
    certifications: ['DK-ØKO-100', 'EU-Jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Rød-Type70-3kg.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/Rød-Type70-12_5.jpg' }
    ]
  },
  {
    id: 'rod-hvede-type85',
    name: 'Rød hvede',
    type: 'Mellemsigtet hvedemel – Type 85',
    badge: null,
    color: '#c0392b',
    description: 'Rød hvede Type 85 er det perfekte kompromis mellem fuldkorn og finere mel. Beholder kornets naturlige smag med en mere tilgængelig tekstur.',
    certifications: ['DK-ØKO-100', 'EU-Jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 99, image: 'images/Rød-Type85-3kg.jpg' },
      { label: '12,5 kg', price: 315, image: 'images/Rød-Type85-12_5.jpg' }
    ]
  },
  {
    id: 'rug-fuldkorn',
    name: 'Rug',
    type: 'Rugmel fuldkorn',
    badge: 'bestseller',
    color: '#4a7c59',
    description: 'Vores rugmel er malet af hele rugkerner på stenkværn. Rig på fibre og med en dyb, jordnær smag der er uundværlig i det klassiske danske rugbrød.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Dyrket i Danmark & malet på stenkværn',
    weights: [
      { label: '3 kg', price: 85, image: 'images/RugGreen-3Kg-fuldkorn-96x139mm-outlined.jpg' },
      { label: '11 kg', price: 250, image: 'images/RugGreen-11Kg-fuldkorn-96x139mm-outlined.jpg' }
    ]
  },
  {
    id: 'spelt-fuldkorn',
    name: 'Spelt',
    type: 'Fuldkornsmel',
    badge: null,
    color: '#6b6b6b',
    description: 'Spelt er en urgammel kornsort med en nøddeagtig, sødlig smag. Lettere fordøjeligt end hvede og perfekt til brød, kager og pasta med en særlig karakter.',
    certifications: ['DK-ØKO-100', 'Dansk jordbrug', 'EU-jordbrug', 'Statskontrolleret Økologisk'],
    origin: 'Malet på stenkværn i Danmark',
    weights: [
      { label: '3 kg', price: 108, image: 'images/Spelt-fuldkorn-3kg-Webshop.jpg' },
      { label: '12,5 kg', price: 330, image: 'images/Spelt-fuldkorn-12_5_Webshop.jpg' }
    ]
  }
];

// Bestsellers for homepage
const BESTSELLERS = PRODUCTS.filter(p => p.badge === 'bestseller').slice(0, 4);
