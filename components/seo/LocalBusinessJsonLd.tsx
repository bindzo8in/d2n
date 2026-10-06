export interface LocalBusinessJsonLdProps {
  name?: string;
  url?: string;
  telephone?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  latitude?: number;
  longitude?: number;
  openingHours?: string[];
  image?: string;
  description?: string;
  priceRange?: string;
}

export function LocalBusinessJsonLd({
  name = "D2N Digital Marketing",
  url = "https://d2ndigitalmarketing.com/",
  telephone = "+91-9787205707",
  streetAddress = "Saravanampatti Road, Jeeva Nagar, Cheran Ma Nagar, Villankurichi",
  addressLocality = "Coimbatore",
  addressRegion = "Tamil Nadu",
  postalCode = "641035",
  addressCountry = "IN",
  openingHours = ["Mo-Fr 09:00-18:00"],
  latitude = 11.0500, // Approximated for Villankurichi
  longitude = 77.0167,
  image = "https://d2ndigitalmarketing.com/twitter-image.png",
  description = "D2N Digital Marketing is a digital marketing agency in Coimbatore providing SEO, Local SEO, Google Ads, Meta Ads, social media marketing, lead generation and website development services.",
  priceRange = "₹₹"
}: LocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#localbusiness`,
    "name": name,
    "image": image,
    "url": url,
    "telephone": telephone,
    "priceRange": priceRange,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "openingHoursSpecification": openingHours.map(() => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    })),
    "areaServed": [
      {
        "@type": "City",
        "name": "Coimbatore"
      },
      {
        "@type": "Place",
        "name": "Peelamedu"
      },
      {
        "@type": "Place",
        "name": "Saravanampatti"
      },
      {
        "@type": "Place",
        "name": "Gandhipuram"
      },
      {
        "@type": "Place",
        "name": "RS Puram"
      },
      {
        "@type": "Place",
        "name": "Singanallur"
      },
      {
        "@type": "Place",
        "name": "Kalapatti"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
