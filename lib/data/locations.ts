export interface LocationData {
  slug: string;
  cityName: string;
  region: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  heroImage: string;
  metaDescription: string;
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: "coimbatore",
    cityName: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641035",
    latitude: 11.0168,
    longitude: 76.9558,
    heroImage: "/img/contact-office.jpg", // Placeholder relevant image or generic digital marketing
    metaDescription: "Top rated Digital Marketing Agency in Coimbatore. Expert SEO, Google Ads, and Lead Generation services customized for local businesses in Coimbatore."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS_DATA.find((loc) => loc.slug === slug);
}
