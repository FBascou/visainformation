// https://en.wikipedia.org/wiki/Australia

export const CountryAU = {
  id: 12,
  name: "Australia",
  countryCode: "AU",
  capital: "Canberra",
  currencyName: "Australian Dollar",
  currencyCode: "AUD",
  currencySymbol: "$",
  timeZone: "UTC+10",
  website: "https://immi.homeaffairs.gov.au/",
  createdAt: new Date(),
};

export const VisaAU = [
  {
    id: 0,
    countryId: CountryAU.id,
    name: "Electronic Travel Authority",
    code: "Subclass 601",
    type: "Tourism",
    duration: "Up to 3 months",
    validity: "12 months",
    description:
      "For short-term visits to Australia for tourism or business purposes.",
    numberOfEntries: "Multiple",
  },
  {
    id: 1,
    countryId: CountryAU.id,
    name: "eVisitor",
    code: "Subclass 651",
    type: "Tourism",
    duration: "Up to 3 months",
    validity: "12 months",
    description: "For European citizens visiting for tourism or business.",
    numberOfEntries: "Multiple",
  },
  {
    id: 2,
    countryId: CountryAU.id,
    name: "Transit Visa",
    code: "Subclass 771",
    type: "Tourism",
    duration: "Up to 72 hours",
    validity: "Single transit",
    description:
      "For transiting through Australia on the way to another country.",
    numberOfEntries: "Single",
  },
  {
    id: 3,
    countryId: CountryAU.id,
    name: "Visitor Visa",
    code: "Subclass 600",
    type: "Tourism",
    duration: "Up to 12 months",
    validity: "12 months",
    description: "For tourists, business visitors, or visiting family.",
    numberOfEntries: "Single or multiple",
  },
  {
    id: 4,
    countryId: CountryAU.id,
    name: "Work and Holiday Visa",
    code: "Subclass 462",
    type: "Work and Holiday",
    duration: "12 months",
    validity: "12 months",
    description:
      "For young people from specific countries to work and travel in Australia.",
    numberOfEntries: "Multiple",
  },
  {
    id: 5,
    countryId: CountryAU.id,
    name: "Working Holiday Visa",
    code: "Subclass 417",
    type: "Work and Holiday",
    duration: "12 months",
    validity: "12 months",
    description: "For young travelers to work and holiday in Australia.",
    numberOfEntries: "Multiple",
  },
  {
    id: 6,
    countryId: CountryAU.id,
    name: "Student Visa",
    code: "Subclass 500",
    type: "Study",
    duration: "Course duration + 2 months",
    validity: "Up to 5 years",
    description: "For students enrolled in full-time courses.",
    numberOfEntries: "Multiple",
  },
  {
    id: 7,
    countryId: CountryAU.id,
    name: "Student Guardian Visa",
    code: "Subclass 590",
    type: "Guardian",
    duration: "Until the student's visa ends",
    validity: "Varies",
    description: "For guardians of students under 18 or in exceptional cases.",
    numberOfEntries: "Multiple",
  },
];

export const VisaCountryExemptionListAU = [];
