export interface BlogJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  authorName?: string;
}

export function BlogJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  authorName = "D2N Digital Marketing"
}: BlogJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    ...(image ? { "image": image } : {}),
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://d2ndigitalmarketing.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "D2N Digital Marketing",
      "url": "https://d2ndigitalmarketing.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://d2ndigitalmarketing.com/img/d2n_logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
