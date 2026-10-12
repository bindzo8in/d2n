export interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceJsonLd({ name, description, url, image }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    ...(image ? { "image": image } : {}),
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://d2ndigitalmarketing.com/#localbusiness",
      "name": "D2N Digital Marketing",
      "telephone": "+91-9787205707",
      "url": "https://d2ndigitalmarketing.com/"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Coimbatore"
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
