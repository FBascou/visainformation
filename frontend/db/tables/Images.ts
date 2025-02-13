import { defineTable, column } from "astro:db";
import Country from "./Country";

const Images = defineTable({
  columns: {
    countryId: column.number({ references: () => Country.columns.id }),
    flag: column.text(),
    icon: column.text(),
  },
});

export default Images;
