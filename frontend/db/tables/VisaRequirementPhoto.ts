import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementPhoto = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    type: column.text(),
    sizeMm: column.text(),
    sizeIn: column.text(),
    backgroundColor: column.text(),
    quantity: column.number(),
  },
});

export default VisaRequirementPhoto;
