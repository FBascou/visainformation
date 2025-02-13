import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";

const VisaRequirement = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    id: column.number({ primaryKey: true, unique: true }),
    applicationFormName: column.text(),
    applicationFormCode: column.text(),
    applicationFormUrl: column.text(),
    documentType: column.text(),
    documentValidity: column.text(),
    documentPhotocopyQuantity: column.text({ optional: true }),
    eligibilityAge: column.text({ optional: true }),
    eligibilityAgeRange: column.text({ optional: true }),
    eligibilityOccupation: column.text({ optional: true }),
    eligibilityFamilyMember: column.text({ optional: true }),
    feeLocalCurrency: column.text(),
    feeLocal: column.number(),
    feeUsd: column.number(),
    photoType: column.text(),
    photoSizeMm: column.text(),
    photoSizeIn: column.text(),
    photoBackgroundColor: column.text(),
    photoQuantity: column.number(),
    appointmentConfirmationRequired: column.boolean(),
    bankStatementRequired: column.boolean(),
    bankStatementAmountLocal: column.number(),
    bankStatementAmountUsd: column.number(),
    bankStatementAmountMonths: column.number(),
    employmentProofRequired: column.boolean(),
    healthInsuranceRequired: column.boolean(),
    healthInsuranceCoverageAmountLocal: column.number(),
    healthInsuranceCoverageAmountUsd: column.number(),
    healthInsuranceReport: column.text(),
    transportTicketRequired: column.boolean(),
    transportReturnTicketRequired: column.boolean(),
    accomodationProofRequired: column.boolean(),
    invitationLetterRequired: column.boolean(),
    criminalReportRequired: column.boolean(),
    legalGuardianConsentRequired: column.boolean(),
  },
});

export default VisaRequirement;
