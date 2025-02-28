export const CountryAL = {
  id: 2,
  name: "Albania",
  countryCode: "Type AL",
  capital: "Tirana",
  currencyName: "Albanian Lek",
  currencyCode: "Type ALL",
  currencySymbol: "L",
  timeZone: "UTC+1",
  website: "https://e-visa.al/",
  createdAt: new Date(),
};

export const VisaAL = [
  // {
  //   id: 0,
  //   countryId: CountryAL.id,
  //   name: "Transit Visa",
  //   code: "Type Type A",
  //   type: "Transit",
  //   duration: "Depends on flight itinerary",
  //   validity: "",
  //   description:
  //     "Allows transit through Albania's international airport for a specific amount of time based on the traveler's flight itinerary. Can be issued as a single, double, or multiple-entry visa.",
  //   numberOfEntries: "Single, Double, Multiple",
  // },
  // {
  //   id: 1,
  //   countryId: CountryAL.id,
  //   name: "Short Stay Visa",
  //   code: "Type Type C",
  //   type: "Short Stay",
  //   duration: "Up to 90 days within 180 days",
  //   validity: "Upon arrival",
  //   description:
  //     "Valid for tourism, scientific, cultural, sports, humanitarian reasons, official visits, medical reasons, professional, commercial, and business purposes. Can be issued for up to 90 days within a 180-day period.",
  //   numberOfEntries: "Single, Double, Multiple",
  // },
  // {
  //   id: 2,
  //   countryId: CountryAL.id,
  //   name: "Long Stay Visa",
  //   code: "Type Type D",
  //   type: "Long Stay",
  //   duration: "More to 90 days per entry",
  //   validity: "Up to 1 year",
  //   description:
  //     "Valid for stays exceeding 90 days within 180 days. Required for obtaining an Albanian residence permit. Types include Study visa, Family Reunion visa, Humanitarian/religious activities visa, etc.",
  //   numberOfEntries: "Single, Double, Multiple",
  // },
  {
    id: 0,
    countryId: CountryAL.id,
    name: "Airport Transit Visa",
    code: "Type A",
    type: "Transit",
    duration: "Depends on flight itinerary",
    validity: "Upon arrival",
    description:
      "Allows transit through Albania's international airport for a specific amount of time based on the traveler's flight itinerary.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 1,
    countryId: CountryAL.id,
    name: "Tourism Visa",
    code: "Type C",
    type: "Tourism",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for tourism purposes. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 2,
    countryId: CountryAL.id,
    name: "Tourism Visa - Organized Groups",
    code: "Type C",
    type: "Tourism",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for tourism purposes, organized in tourist groups invited by an Albanian tourism agency. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 3,
    countryId: CountryAL.id,
    name: "Scientific, Cultural, Sports, and Humanitarian Reasons Visa",
    code: "Type C",
    type: "Scientific, Cultural, Sports, and Humanitarian Reasons",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for scientific, cultural, sports, and humanitarian reasons. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 4,
    countryId: CountryAL.id,
    name: "Official Visit Visa",
    code: "Type C",
    type: "Official Visit",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for official visits. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 5,
    countryId: CountryAL.id,
    name: "Medical Reasons Visa",
    code: "Type C",
    type: "Medical Reasons",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for medical reasons. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 6,
    countryId: CountryAL.id,
    name: "Professional, Commercial, and Business Purposes Visa",
    code: "Type C",
    type: "Professional, Commercial, and Business Purposes",
    duration: "Up to 90 days within 180 days",
    validity: "Upon arrival",
    description:
      "Valid for professional, commercial, and business purposes. Can be issued for up to 90 days within a 180-day period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 7,
    countryId: CountryAL.id,
    name: "Study Visa",
    code: "Type D",
    type: "Study",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for study purposes. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 8,
    countryId: CountryAL.id,
    name: "Family Reunion Visa",
    code: "Type D",
    type: "Family Reunion",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for family reunion. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 9,
    countryId: CountryAL.id,
    name: "Humanitarian or Religious Activities Visa",
    code: "Type D",
    type: "Humanitarian or Religious Activities",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for humanitarian or religious activities. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 10,
    countryId: CountryAL.id,
    name: "Diplomatic Visa or Visa Service",
    code: "Type D",
    type: "Diplomatic or Service",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Issued for diplomatic missions and consular offices. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 11,
    countryId: CountryAL.id,
    name: "Seasonal Employment Purposes Visa",
    code: "Type D",
    type: "Seasonal Employment",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for seasonal employment. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 12,
    countryId: CountryAL.id,
    name: "Unpaid Trainee Visa",
    code: "Type D",
    type: "Unpaid Trainee",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For unpaid traineeships. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 13,
    countryId: CountryAL.id,
    name: "Au Pair Visa",
    code: "Type D",
    type: "Au Pair",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For au pairs. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 14,
    countryId: CountryAL.id,
    name: "Youth Exchanges Visa",
    code: "Type D",
    type: "Youth Exchange",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for youth exchange programs. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 15,
    countryId: CountryAL.id,
    name: "Research Visa",
    code: "Type D",
    type: "Research",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For research purposes. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 16,
    countryId: CountryAL.id,
    name: "Employee Visa",
    code: "Type D",
    type: "Employee",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For employees working in Albania. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 17,
    countryId: CountryAL.id,
    name: "In-house Transferees Visa",
    code: "Type D",
    type: "In-house Transferee",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For employees transferred within the company. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 18,
    countryId: CountryAL.id,
    name: "Vocational Training Visa",
    code: "Type D",
    type: "Vocational Training",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for vocational training purposes. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 19,
    countryId: CountryAL.id,
    name: "Athletes Visa",
    code: "Type D",
    type: "Athlete",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For athletes participating in sports events. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 20,
    countryId: CountryAL.id,
    name: "Voluntary Service Visa",
    code: "Type D",
    type: "Voluntary Service",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For individuals engaging in voluntary service. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 21,
    countryId: CountryAL.id,
    name: "Highly Qualified Employees Visa",
    code: "Type D",
    type: "Highly Qualified Employee",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For highly qualified professionals. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 22,
    countryId: CountryAL.id,
    name: "Self-employed People Visa",
    code: "Type D",
    type: "Self-employed",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For self-employed individuals. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 23,
    countryId: CountryAL.id,
    name: "Digital Mobile Workers Visa",
    code: "Type D",
    type: "Digital Mobile Worker",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For digital nomads and remote workers. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 24,
    countryId: CountryAL.id,
    name: "Investors Visa",
    code: "Type D",
    type: "Investor",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For foreign investors. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 25,
    countryId: CountryAL.id,
    name: "Visa for Contracting Services",
    code: "Type D",
    type: "Contracting Services",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For individuals engaged in contracting services. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 26,
    countryId: CountryAL.id,
    name: "Visa for the Crew of Vessels",
    code: "Type D",
    type: "Crew of Vessels",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for crew members of vessels. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 27,
    countryId: CountryAL.id,
    name: "Visa for Use of Owned Immovable Property",
    code: "Type D",
    type: "Use of Owned Immovable Property",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "For individuals who own immovable property in Albania. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
  {
    id: 28,
    countryId: CountryAL.id,
    name: "Visa for Pensioners (Retired)",
    code: "Type D",
    type: "Pensioner",
    duration: "Up to 90 days per entry",
    validity: "Up to 1 year",
    description:
      "Required for retired individuals. Valid for up to 90 days per entry within a 1-year period.",
    numberOfEntries: "Single, Double, Multiple",
  },
];

export const VisaRequirementAF = [
  {
    id: 0,
    countryId: CountryAL.id,
    visaId: 0,
    applicationFormName: "Visa Application Form",
    applicationFormCode: "Type ",
    applicationFormUrl: "http://econsulate.mfa.gov.af/Visa.aspx",
    documentType: "Passport",
    documentValidity: "",
    documentPhotocopyQuantity: "",
    eligibilityAge: "",
    eligibilityAgeRange: "",
    eligibilityOccupation: "",
    eligibilityFamilyMember: "",
    feeLocalCurrency: "",
    feeLocal: 0,
    feeUsd: 0,
    photoType: "",
    photoSizeMm: "",
    photoSizeIn: "",
    photoBackgroundColor: "",
    photoQuantity: 0,
    appointmentConfirmationRequired: false,
    bankStatementRequired: false,
    bankStatementAmountLocal: 0,
    bankStatementAmountUsd: 0,
    bankStatementAmountMonths: 0,
    employmentProofRequired: false,
    healthInsuranceRequired: false,
    healthInsuranceCoverageAmountLocal: 0,
    healthInsuranceCoverageAmountUsd: 0,
    healthInsuranceReport: "",
    transportTicketRequired: false,
    transportReturnTicketRequired: false,
    accomodationProofRequired: false,
    invitationLetterRequired: false,
    criminalReportRequired: false,
    legalGuardianConsentRequired: false,
  },
];
