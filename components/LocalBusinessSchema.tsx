export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Frontier Restoration LLC",
    image: "https://frontierrestorationllc.com/logo.png",
    "@id": "https://frontierrestorationllc.com",
    url: "https://frontierrestorationllc.com",
    telephone: "+19079872916",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2155 Frank Ave",
      addressLocality: "Fairbanks",
      addressRegion: "AK",
      postalCode: "99701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 64.837778,
      longitude: -147.716389,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Fairbanks",
      },
      {
        "@type": "City",
        name: "North Pole",
      },
      {
        "@type": "City",
        name: "Eielson",
      },
      {
        "@type": "City",
        name: "Fort Wainwright",
      },
    ],
    serviceType: [
      "Water Damage Restoration",
      "Fire Damage Restoration",
      "Mold Remediation",
      "Structural Drying",
      "Sewage Backup Cleanup",
      "Air Quality Testing",
      "Content Cleaning",
    ],
    description:
      "24/7 Emergency Response • Licensed • IICRC Certified. Serving Fairbanks, North Pole, Eielson, Fort Wainwright & surrounding areas.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

