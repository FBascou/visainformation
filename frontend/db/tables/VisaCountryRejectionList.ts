import { defineTable, column } from "astro:db";
import Country from "./Country";
import Visa from "./Visa";

const VisaCountryRejectionList = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    visaId: column.number({ references: () => Visa.columns.id }),
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    name: column.text(),
  },
});

export default VisaCountryRejectionList;
