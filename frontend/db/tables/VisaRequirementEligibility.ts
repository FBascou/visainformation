import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementEligibility = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    age: column.number({ optional: true }),
    ageRange: column.text({ optional: true }),
    occupation: column.text({ optional: true }),
    familyMember: column.text({ optional: true }),
    other: column.text({ optional: true }),
  },
});

export default VisaRequirementEligibility;
