import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementFees = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    localCurrency: column.text(),
    localFee: column.number(),
    usdFee: column.number(),
  },
});

export default VisaRequirementFees;
