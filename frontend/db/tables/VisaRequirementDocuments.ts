import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";
import VisaRequirement from "./VisaRequirement";

const VisaRequirementDocuments = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    visaRequirementId: column.number({
      references: () => VisaRequirement.columns.id,
    }),
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    description: column.text(),
    applicationForm: column.text(),
    applicationFormUrl: column.text({ optional: true }),
    appointmentConfirmation: column.text({ optional: true }),
    documentType: column.text(),
    documentValidity: column.text(),
    documentPhotocopyQuantity: column.text({ optional: true }),
    other: column.text({ optional: true }),
  },
});

export default VisaRequirementDocuments;
