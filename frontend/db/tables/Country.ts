import { defineTable, column, NOW } from "astro:db";

const Country = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    name: column.text(),
    countryCode: column.text(),
    capital: column.text(),
    currencyName: column.text(),
    currencyCode: column.text(),
    currencySymbol: column.text(),
    timeZone: column.text(),
    website: column.text(),
    createdAt: column.date({ default: NOW }),
  },
});

export default Country;
