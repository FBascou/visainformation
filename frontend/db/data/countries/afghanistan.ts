export const CountryAF = {
  id: 1,
  name: "Afghanistan",
  countryCode: "AF",
  capital: "Kabul",
  currencyName: "Afghan Afghani",
  currencyCode: "AFN",
  currencySymbol: "؋",
  timeZone: "UTC+4:30",
  website: "https://islamabad.mfa.gov.af/visa/",
  createdAt: new Date(),
};

export const VisaAF = [
  {
    id: 0,
    countryId: CountryAF.id,
    name: "Electronic Travel Authority",
    code: "Subclass 601",
    type: "Tourism",
    duration: "One month to one year",
    validity: "12 months",
    description:
      "For short-term visits to Australia for tourism or business purposes.",
    numberOfEntries: "Multiple",
  },
];

export const VisaRequirementAF = [
  {
    id: 0,
    countryId: CountryAF.id,
    visaId: 0,
    applicationFormName: "Visa Application Form",
    applicationFormCode: "",
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

// Legal
// Visa for applicants under the age of eighteen is issued only based on the written request of the parents, guardian or legal guardian of the person or with the permission of the court, and if the applicant is the mother of the person, they are required to establish their relationship from the area of ​​residence.

// Who needs visas
// https://en.wikipedia.org/wiki/Visa_requirements_for_Afghan_citizens
