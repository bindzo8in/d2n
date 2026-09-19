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
}

export function LocalBusinessJsonLd({
  name = "D2N Digital Marketing",
  url = "https://d2ndigitalmarketing.in",
  telephone = "+91 97872 05707",
  streetAddress = "Saravanampatti Road, Jeeva Nagar, Cheran Ma Nagar, Villankurichi",
  addressLocality = "Coimbatore",
  addressRegion = "Tamil Nadu",
  postalCode = "641035",
  addressCountry = "IN",
  openingHours = ["Mo-Fr 09:00-18:00"],
  latitude = 11.0500, // Approximated for Villankurichi
  longitude = 77.0167,
  image = "https://d2ndigitalmarketing.in/twitter-image.png",
  description = "Top rated Digital Marketing Agency in Coimbatore offering SEO, Google Ads, Meta Ads, and comprehensive lead generation services."
}: LocalBusinessJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "image": image,
    "url": url,
    "telephone": telephone,
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
    "description": description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
