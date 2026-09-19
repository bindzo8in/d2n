import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, PhoneCall } from "lucide-react";
import { LOCATIONS_DATA, getLocationBySlug } from "@/lib/data/locations";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import CTASection from "@/components/sections/CTASection";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Digital Marketing Agency in ${location.cityName} | D2N`,
    description: location.metaDescription,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  return (
    <main className="w-full bg-background min-h-screen pt-32 flex flex-col items-center">
      <LocalBusinessJsonLd 
        addressLocality={location.cityName}
        addressRegion={location.region}
        postalCode={location.postalCode}
        latitude={location.latitude}
        longitude={location.longitude}
      />

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none -z-10" />

        <div className="flex flex-col gap-8">
          <FadeIn delay={0.2} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <MapPin size={16} />
              <span className="text-sm font-semibold">{location.cityName}, {location.region}</span>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            <RevealText as="h1" delay={0.2} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              {`Grow Your Business in ${location.cityName}`}
            </RevealText>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                Partner with the leading digital marketing agency in {location.cityName}. We drive targeted traffic, generate qualified leads, and help local businesses dominate their market.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up" className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-md gap-2" })}>
                 Get a Free Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:+919787205707" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 text-md gap-2" })}>
                 <PhoneCall size={18} /> Call Now
              </a>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={0.6} direction="left" className="relative w-full h-[50vh] lg:h-full lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
           <ParallaxImage 
             src={location.heroImage}
             alt={`Digital Marketing Services in ${location.cityName}`}
             priority
           />
           <div className="absolute inset-0 bg-linear-to-tr from-background/40 via-transparent to-transparent pointer-events-none" />
        </FadeIn>
      </section>

      {/* SEO Services specific to Location */}
      <section className="w-full bg-muted/30 border-y border-border py-24 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center items-center">
          <RevealText as="h2" className="text-3xl md:text-4xl font-bold font-heading max-w-2xl">
            {`Dominate ${location.cityName}'s Local Search Results`}
          </RevealText>
          <FadeIn delay={0.2} className="max-w-3xl">
            <p className="text-muted-foreground text-lg text-balance">
              When customers in {location.cityName} search for your services, you need to be at the top. Our comprehensive local SEO and paid advertising strategies ensure your brand captures local intent and converts it into revenue.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
             <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 text-left flex flex-col gap-4">
               <h3 className="text-xl font-bold">Local SEO</h3>
               <p className="text-muted-foreground">Optimize your Google Business Profile and local citations to rank in the coveted Map Pack for {location.cityName}.</p>
             </div>
             <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 text-left flex flex-col gap-4">
               <h3 className="text-xl font-bold">Performance Ads</h3>
               <p className="text-muted-foreground">Geo-targeted Google and Meta ads specifically designed to reach high-intent customers in and around {location.cityName}.</p>
             </div>
             <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 text-left flex flex-col gap-4">
               <h3 className="text-xl font-bold">Web Design</h3>
               <p className="text-muted-foreground">Fast, conversion-optimized websites that build trust with your local audience and turn clicks into loyal customers.</p>
             </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
