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
    slug: "best-digital-marketing-company-in-coimbatore",
    cityName: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641035",
    latitude: 11.0168,
    longitude: 76.9558,
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Top rated Digital Marketing Agency in Coimbatore. Expert SEO, Google Ads, and Lead Generation services customized for local businesses in Coimbatore."
  },
  {
    slug: "digital-marketing-agency-in-peelamedu",
    cityName: "Peelamedu",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641004",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Grow your business with professional digital marketing services in Peelamedu, Coimbatore, including SEO, Google Ads, social media marketing and website development."
  },
  {
    slug: "digital-marketing-agency-in-saravanampatti",
    cityName: "Saravanampatti",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641035",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Performance-focused digital marketing services in Saravanampatti for local businesses. Get SEO, paid advertising, social media and web design support."
  },
  {
    slug: "digital-marketing-agency-in-gandhipuram",
    cityName: "Gandhipuram",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641012",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Expert digital marketing agency services in Gandhipuram, Coimbatore, for lead generation, local SEO, Google Ads and social media growth."
  },
  {
    slug: "digital-marketing-agency-in-rs-puram",
    cityName: "RS Puram",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641002",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Professional SEO, Google Ads and social media marketing services for businesses in RS Puram, Coimbatore."
  },
  {
    slug: "digital-marketing-agency-in-singanallur",
    cityName: "Singanallur",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641005",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Digital marketing services in Singanallur, including local SEO, Google Ads, Meta Ads and website design for business growth."
  },
  {
    slug: "digital-marketing-agency-in-avinashi-road",
    cityName: "Avinashi Road",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641018",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Increase leads and online visibility with digital marketing services for businesses on Avinashi Road, Coimbatore."
  },
  {
    slug: "digital-marketing-agency-in-sulur",
    cityName: "Sulur",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641402",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Targeted digital marketing, SEO and paid advertising services for businesses in Sulur and nearby areas."
  },
  {
    slug: "digital-marketing-agency-in-sitra",
    cityName: "Sitra",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641014",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Grow your local business with SEO, Google Ads, social media marketing and website services in Sitra, Coimbatore."
  },
  {
    slug: "digital-marketing-agency-in-ondipudur",
    cityName: "Ondipudur",
    region: "Coimbatore, Tamil Nadu",
    postalCode: "641016",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "Digital marketing services in Ondipudur for lead generation, local search visibility, paid campaigns and website growth."
  },
  {
    slug: "digital-marketing-agency-in-tamil-nadu",
    cityName: "Tamil Nadu",
    region: "India",
    heroImage: "/images/locations/local-digital-growth.svg",
    metaDescription: "D2N Digital Marketing provides SEO, Google Ads, Meta Ads and website solutions for businesses across Tamil Nadu."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS_DATA.find((loc) => loc.slug === slug);
}
