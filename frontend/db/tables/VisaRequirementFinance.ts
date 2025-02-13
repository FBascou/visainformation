import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementFinance = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    description: column.text(),
    bankStatement: column.boolean(),
    amountLocal: column.number(),
    amountUsd: column.number(),
    employmentProof: column.number(),
    other: column.text(),
  },
});

export default VisaRequirementFinance;
