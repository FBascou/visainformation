type VisaRequirementDocumentsType = {
  description: string;
  applicationForm: boolean;
  applicationFormUrl: string;
  documentType: string;
  documentValidity: string;
  documentPhotocopyQuantity: number;
  other: string;
};

type VisaRequirementFeesType = { local: number; usd: number };

type VisaRequirementFinanceType = {
  description: string;
  bankStatement: boolean;
  amountLocal: number;
  amountUsd: number;
  employmentProof: string;
  other: string;
};

type VisaRequirementPhotoType = {
  description: string;
  photoType: string;
  size: { sizeMm: string; sizeIn: string };
  quantity: number;
  backgroundColor: string;
  other: string;
};

type VisaRequirementHealthType = {
  description: string;
  insurance: boolean;
  insuranceCoverageAmountLocal: number;
  insuranceCoverageAmountUsd: number;
  report: boolean;
  vaccines: {};
  other: string;
};

type VisaRequirementTransportType = {
  description: string;
  ticket: boolean;
  returnTicket: boolean;
  other: string;
};

type VisaRequirementAccomodationType = {
  description: string;
  accomodationProof: boolean;
  invitationLetter: boolean;
  other: string;
};

type VisaRequirementLegalType = {
  criminalReport: boolean;
  legalGuardianConsent: string;
  other: string;
};

type VisaRequirementExtraType = {}[];

type VisaRequirementType = {
  eligibility: string[]; // list of people who are elligible to get this visa (age, occupation, family member, etc.)
  documents: VisaRequirementDocumentsType;
  fees: VisaRequirementFeesType;
  finance: VisaRequirementFinanceType;
  photo: VisaRequirementPhotoType;
  health: VisaRequirementHealthType;
  transport: VisaRequirementTransportType;
  accomodation: VisaRequirementAccomodationType;
  legal: VisaRequirementLegalType;
  extraRequirements: VisaRequirementExtraType;
};

type VisaRequirementProcessType = {
  eVisa: boolean;
  onArrival: boolean;
  regular: boolean;
  eTA: boolean;
};

type VisaApplicationProcessType = {
  description: string;
  application: {};
  method: VisaRequirementProcessType;
  interviewNeeded: boolean;
  durationWait: string;
  durationProcess: string;
  appointment: {};
  steps: {};
};

type VisaRenewalProcessType = {
  description: string;
  application: {};
  method: VisaRequirementProcessType;
  interviewNeeded: boolean;
  durationWait: string;
  durationProcess: string;
  appointment: {};
  steps: {};
};

type VisaExpirationProcessType = {
  description: string;
  application: {};
  method: VisaRequirementProcessType;
  interviewNeeded: boolean;
  durationWait: string;
  durationProcess: string;
  appointment: {};
  steps: {};
};

type VisaNumberOfEntriesAmountType = "one" | "two" | "multiple";

type VisaNumberOfEntriesType = {
  id: number;
  amount: VisaNumberOfEntriesAmountType;
};

type VisaTypeType = "work" | "tourism"; // etc.

type VisaType = {
  id: number;
  name: string;
  code: string;
  type: VisaTypeType;
  duration: number; // schengen: 30days
  validity: number; // validity 90days
  description: null | string;
  numberOfEntries: string;
  requirements: VisaRequirementType;
  processApplication: VisaApplicationProcessType;
  processRenewal: VisaRenewalProcessType;
  processExpiration: VisaExpirationProcessType;
  countryExemptionList: string[];
  countryRejectionList: string[];
  news: {};
};

type VisaListType = {
  count: number;
  list: VisaType[];
};

type DiplomaticMissionListMissionType = "embassy" | "consulate" | "other";

type DiplomaticMissionListHeadOfMissionType = {
  fullName: string;
  position: string;
};

type DiplomaticMissionListOpenedDaysType = {
  date: string;
  time: string;
};

type DiplomaticMissionListClosedDaysType = {
  date: string;
  holiday: string;
  comment: string;
};

type DiplomaticMissionListCountryType = {
  id: number;
  name: string;
  type: DiplomaticMissionListMissionType;
  fullAddress: string;
  phoneMain: string;
  phoneEmergency: string;
  headOfMission: DiplomaticMissionListHeadOfMissionType;
  email: string;
  openedDays: DiplomaticMissionListOpenedDaysType[];
  closedDays: DiplomaticMissionListClosedDaysType[];
};

// the search should just return the relevant missions for both the pC, dC, and others
// not all the missions
type DiplomaticMissionListType = {
  passportCountry: {
    list: DiplomaticMissionListCountryType[];
  };
  destinationCountry: {
    list: DiplomaticMissionListCountryType[];
  };
  other?: {
    // third party companies that handle visa
    list: DiplomaticMissionListCountryType[];
  };
};

type ImagesType = {
  flag: string;
  icon: string;
};

type CountryType = {
  id: number;
  name: string;
  countryCode: string;
  capital: string;
  currency: string;
  timeZone: string;
  callingCode: string;
  website: string;
  images: ImagesType;
  createdAt: Date;
  diplomaticMissionList?: DiplomaticMissionListType;
  visaList?: VisaListType;
};
