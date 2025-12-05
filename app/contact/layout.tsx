import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Frontier Restoration LLC | Fairbanks, Alaska",
  description:
    "Contact Frontier Restoration LLC for 24/7 emergency restoration services in Fairbanks, Alaska. Call (907) 987-2916 or visit us at 2155 Frank Ave, Fairbanks, AK 99701.",
  openGraph: {
    title: "Contact Us | Frontier Restoration LLC",
    description:
      "Contact Frontier Restoration LLC for 24/7 emergency restoration services in Fairbanks, Alaska.",
    url: "https://frontierrestorationllc.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

