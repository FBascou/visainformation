import { defineDb } from "astro:db";
import Country from "./tables/Country";
import Images from "./tables/Images";
import Visa from "./tables/Visa";
import VisaCountryExemptionList from "./tables/VisaCountryExemptionList";
import VisaCountryRejectionList from "./tables/VisaCountryRejectionList";
import VisaRequirement from "./tables/VisaRequirement";
// https://docs.astro.build/en/guides/astro-db/#self-hosted-production-deployment

// https://astro.build/db/config
export default defineDb({
  tables: {
    Country,
    Images,
    Visa,
    VisaCountryExemptionList,
    VisaCountryRejectionList,
    VisaRequirement,
  },
});
