import { defineTable, column } from "astro:db";
import Country from "./Country";

const Visa = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    name: column.text(),
    code: column.text(),
    type: column.text(),
    duration: column.text(),
    validity: column.text(),
    description: column.text({ optional: true }),
    numberOfEntries: column.text(),
  },
});

export default Visa;
