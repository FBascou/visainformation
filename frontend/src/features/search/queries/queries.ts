import {
  db,
  eq,
  isNull,
  and,
  Country,
  Visa,
  VisaCountryExemptionList,
  VisaCountryRejectionList,
  VisaRequirement,
} from "astro:db";

export const getDestinationCountry = async (destinationCountry: string) => {
  return await db.select().from(Country).where(eq(Country.name, destinationCountry));
};

export const getVisaList = async (destinationCountry: string) => {
  return await db
    .select()
    .from(Visa)
    .innerJoin(Country, and(eq(Country.name, destinationCountry), eq(Country.id, Visa.countryId)));
};

export const getFilteredVisaList = async (
  destinationCountry: string,
  passportCountry: string,
  travelReason: string
) => {
  return await db
    .select()
    .from(Visa)
    .innerJoin(Country, and(eq(Country.name, destinationCountry), eq(Country.id, Visa.countryId)))
    .leftJoin(
      VisaCountryRejectionList,
      and(
        eq(Visa.id, VisaCountryRejectionList.visaId),
        eq(VisaCountryRejectionList.name, passportCountry)
      )
    )
    .leftJoin(
      VisaCountryExemptionList,
      and(
        eq(Visa.id, VisaCountryExemptionList.visaId),
        eq(VisaCountryExemptionList.name, passportCountry)
      )
    )
    .leftJoin(
      VisaRequirement,
      and(eq(Country.id, Visa.countryId), eq(Visa.id, VisaRequirement.visaId))
    )
    .where(and(eq(Visa.type, travelReason), isNull(VisaCountryRejectionList.visaId)));
};

export const getFilteredDestinationCountryVisaList = async (
  destinationCountry: string,
  duration: string = "",
  visaType: string = "",
  numberOfEntries: string = "",
  validity: string = ""
) => {
  return await db
    .select()
    .from(Visa)
    .innerJoin(Country, and(eq(Country.name, destinationCountry), eq(Country.id, Visa.countryId)))
    .where(eq(Visa.type, visaType));
  // .where(eq(Visa.duration, duration))
  // .where(eq(Visa.numberOfEntries, numberOfEntries))
  // .where(eq(Visa.validity, validity));
};

export const getPopularVisaTypesByDestinationCountry = async (destinationCountry: string) => {
  return await db
    .select()
    .from(Visa)
    .innerJoin(Country, and(eq(Country.name, destinationCountry), eq(Country.id, Visa.countryId)));
  // add here
};
