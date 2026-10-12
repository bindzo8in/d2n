export function GlobalJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://d2ndigitalmarketing.com/#organization",
    "name": "D2N Digital Marketing",
    "url": "https://d2ndigitalmarketing.com/",
    "logo": "https://d2ndigitalmarketing.com/img/d2n_logo.webp",
    "image": "https://d2ndigitalmarketing.com/img/d2n_logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9787205707",
      "contactType": "technical support",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.instagram.com/d2ndigitalmarketing/",
      "https://www.facebook.com/d2ndigitalmarketing",
      "https://www.youtube.com/@D2NDigitalMarketing"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://d2ndigitalmarketing.com/#localbusiness",
    "name": "D2N Digital Marketing",
    "url": "https://d2ndigitalmarketing.com/",
    "image": "https://d2ndigitalmarketing.com/img/d2n_logo.webp",
    "telephone": "+91-9787205707",
    "priceRange": "₹₹",
    "description": "D2N Digital Marketing is a digital marketing agency in Coimbatore providing SEO, Local SEO, Google Ads, Meta Ads, social media marketing, lead generation and website development services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Saravanampatti Road, Jeeva Nagar, Cheran Ma Nagar, Villankurichi",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
