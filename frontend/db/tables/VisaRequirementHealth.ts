import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementHealth = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    insurance: column.text(),
    insuranceCoverageAmountLocal: column.text(),
    insuranceCoverageAmountUsd: column.text(),
    insuranceReport: column.text(),
    vaccines: column.number(), // This should be a separate table
  },
});

export default VisaRequirementHealth;
