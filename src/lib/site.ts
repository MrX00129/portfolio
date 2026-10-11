import type { Metadata } from "next";

export const SITE_URL = "https://webfix.expert";
export const BRAND_NAME = "WebFix Experts";
export const SHORT_BRAND_NAME = "WebFix";
export const FOUNDER_NAME = "ALI";
export const CONTACT_EMAIL = "ali@webfix.expert";
export const LOGO_PATH = "/logo4.png";

export const SITE_DESCRIPTION =
  "WebFix Experts provides web development, WordPress development, AI automation, SEO, paid advertising, website maintenance, and digital growth solutions for businesses.";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path,
  image = LOGO_PATH,
  noIndex = false,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND_NAME,
      type,
      images: [
        {
          url: imageUrl,
          alt: `${BRAND_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    alternateName: SHORT_BRAND_NAME,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    email: CONTACT_EMAIL,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
    },
    description: SITE_DESCRIPTION,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        url: absoluteUrl("/contact"),
        availableLanguage: ["en"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND_NAME,
    alternateName: SHORT_BRAND_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString();
}
