import { Search, MapPin, MousePointerClick, Share2, Users, Code, LineChart, Target, Zap, Layout, Globe, Briefcase } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  icon: LucideIcon;
  benefits: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "seo-services",
    title: "SEO Services",
    shortDescription: "Rank higher on Google for the keywords your customers actually search.",
    longDescription: "Our comprehensive Search Engine Optimization (SEO) strategy focuses on technical health, high-quality content, and authoritative backlinks. We don't just chase traffic; we target high-intent keywords that bring qualified leads to your business in Coimbatore and beyond.",
    heroImage: "/images/services/seo-services.jpg",
    icon: Search,
    benefits: [
      {
        title: "Technical SEO Audit",
        description: "We fix site speed, mobile responsiveness, and crawlability issues so Google loves your site.",
        icon: Code,
      },
      {
        title: "On-Page Optimization",
        description: "Optimized title tags, meta descriptions, and semantic HTML structure for every page.",
        icon: Layout,
      },
      {
        title: "Link Building",
        description: "Acquiring high-quality backlinks from relevant, authoritative domains in your industry.",
        icon: Share2,
      }
    ],
    process: [
      { step: "01", title: "Comprehensive Audit", description: "We analyze your website's technical health, backlink profile, and current keyword rankings." },
      { step: "02", title: "Keyword Strategy", description: "Identifying high-intent, low-competition keywords to target for maximum ROI." },
      { step: "03", title: "On-Page Fixes", description: "Optimizing metadata, heading structures, and internal linking across all critical pages." },
      { step: "04", title: "Off-Page Growth", description: "Building authority through targeted outreach, guest posting, and digital PR." }
    ],
    faqs: [
      { question: "How long does SEO take in Coimbatore?", answer: "Typically, you will start seeing measurable improvements in rankings and traffic within 3 to 6 months, depending on the competitiveness of your industry." },
      { question: "Do you guarantee #1 rankings?", answer: "No reputable agency can guarantee a #1 spot due to Google's constantly changing algorithm. However, we guarantee a data-driven strategy that consistently improves your visibility." },
      { question: "What's included in your SEO packages?", answer: "Our packages are comprehensive, covering technical audits, on-page optimization, content creation, and ongoing link building." }
    ]
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortDescription: "Get found on Google Maps when Coimbatore customers search nearby.",
    longDescription: "Dominate the local search results in Coimbatore. We optimize your Google Business Profile, build local citations, and generate reviews so you appear in the coveted Google 'Local Pack' when nearby customers search for your services.",
    heroImage: "/images/services/local-seo.jpg",
    icon: MapPin,
    benefits: [
      {
        title: "Google Business Profile",
        description: "Complete setup, optimization, and monthly management of your GBP listing.",
        icon: MapPin,
      },
      {
        title: "Review Generation",
        description: "Automated systems and strategies to get more 5-star reviews from happy customers.",
        icon: Users,
      },
      {
        title: "Local Citations",
        description: "Consistent NAP (Name, Address, Phone) data across all major local directories.",
        icon: Target,
      }
    ],
    process: [
      { step: "01", title: "GBP Audit & Optimization", description: "We claim, verify, and fully optimize your Google Business Profile with accurate categories and descriptions." },
      { step: "02", title: "Citation Building", description: "Ensuring your business NAP data is perfectly consistent across Yelp, JustDial, and local Coimbatore directories." },
      { step: "03", title: "Review Strategy", description: "Implementing SMS and email campaigns to encourage satisfied customers to leave positive Google reviews." },
      { step: "04", title: "Localized Content", description: "Creating geo-specific landing pages targeting neighborhoods like RS Puram, Peelamedu, and Gandhipuram." }
    ],
    faqs: [
      { question: "Why is my business not showing up on Google Maps?", answer: "It could be due to a lack of proximity, relevance, or prominence. We fix this by optimizing your GBP, building citations, and generating local reviews." },
      { question: "How important are Google reviews?", answer: "Extremely important. They not only influence customer trust but are a massive ranking factor for the Google Local Pack." },
      { question: "Do I need a physical address for Local SEO?", answer: "Yes, you need a verified physical address or a recognized service area business profile to rank in Google Maps." }
    ]
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortDescription: "Get in front of customers the moment they search for you on Google.",
    longDescription: "Pay-Per-Click advertising that actually delivers ROI. We manage Search, Display, and Performance Max campaigns, constantly optimizing bids and targeting to lower your Cost Per Acquisition (CPA) and increase conversions.",
    heroImage: "/images/services/google-ads.jpg",
    icon: MousePointerClick,
    benefits: [
      {
        title: "Keyword Bidding",
        description: "Laser-focused bidding on commercial-intent keywords to avoid wasted ad spend.",
        icon: Target,
      },
      {
        title: "High-Converting Ad Copy",
        description: "A/B tested headlines and descriptions designed to maximize click-through rates.",
        icon: Zap,
      },
      {
        title: "Conversion Tracking",
        description: "Flawless tracking setup so you know exactly which ads are generating leads.",
        icon: LineChart,
      }
    ],
    process: [
      { step: "01", title: "Market & Competitor Research", description: "We analyze your competitors' ads and find the most profitable keywords in your niche." },
      { step: "02", title: "Campaign Structuring", description: "Building highly granular ad groups to ensure extreme relevance between search terms, ads, and landing pages." },
      { step: "03", title: "Tracking Setup", description: "Implementing precise conversion tracking using Google Tag Manager to measure exact ROI." },
      { step: "04", title: "Continuous Optimization", description: "Daily monitoring, negative keyword additions, and bid adjustments to maximize your budget." }
    ],
    faqs: [
      { question: "How much should I spend on Google Ads?", answer: "We recommend starting with a budget that allows for enough clicks to gather statistically significant data—usually around ₹15,000 to ₹30,000 per month minimum in Coimbatore." },
      { question: "How fast will I see results?", answer: "Google Ads can drive traffic and leads within 24 to 48 hours of campaign launch, making it the fastest way to acquire new customers." },
      { question: "What is Performance Max?", answer: "It's a campaign type that accesses all Google Ads inventory (Search, Display, YouTube, Maps) from a single campaign using Google's AI." }
    ]
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortDescription: "Laser-targeted campaigns on Facebook and Instagram to drive immediate sales.",
    longDescription: "Leverage the power of social media advertising to reach your ideal audience. From brand awareness to direct response lead generation, we build full-funnel Meta Ads strategies that scale your revenue.",
    heroImage: "/images/services/meta-ads.jpg",
    icon: Users,
    benefits: [
      {
        title: "Audience Targeting",
        description: "Lookalike audiences and detailed demographic targeting to find your best buyers.",
        icon: Target,
      },
      {
        title: "Creative Testing",
        description: "Continuous testing of images, videos, and carousels to find winning creatives.",
        icon: Layout,
      },
      {
        title: "Retargeting",
        description: "Bring back website visitors who didn't convert the first time with irresistible offers.",
        icon: Share2,
      }
    ],
    process: [
      { step: "01", title: "Pixel & API Setup", description: "Ensuring the Meta Pixel and Conversions API are perfectly configured for accurate tracking." },
      { step: "02", title: "Creative Development", description: "Designing scroll-stopping image and video creatives tailored for the Facebook and Instagram feeds." },
      { step: "03", title: "Audience Segmentation", description: "Building cold audiences (interests/lookalikes) and warm audiences (retargeting) for a full-funnel approach." },
      { step: "04", title: "Scaling Winners", description: "Rapidly testing ad variations and shifting budget to the top-performing creatives." }
    ],
    faqs: [
      { question: "Are Meta Ads better than Google Ads?", answer: "They serve different purposes. Google Ads captures existing intent (people actively searching), while Meta Ads create intent through visual disruption and demographic targeting." },
      { question: "Do I need video ads to succeed?", answer: "While static images can work well, short-form video (Reels/Stories) currently offers the highest engagement and lowest CPAs on the platform." },
      { question: "What is a good ROAS (Return on Ad Spend)?", answer: "A 'good' ROAS depends on your profit margins, but generally, e-commerce brands aim for a 3x to 5x ROAS to be highly profitable." }
    ]
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    shortDescription: "Build a loyal local following with engaging content and brand storytelling.",
    longDescription: "Turn your social media channels into vibrant communities. We handle everything from content creation and calendar planning to community management across Instagram, Facebook, and LinkedIn.",
    heroImage: "/images/services/social-media.jpg",
    icon: Share2,
    benefits: [
      {
        title: "Content Strategy",
        description: "A customized monthly calendar featuring educational, entertaining, and promotional posts.",
        icon: Layout,
      },
      {
        title: "Brand Aesthetics",
        description: "Beautiful, cohesive feed design that reflects your brand's premium identity.",
        icon: Zap,
      },
      {
        title: "Community Management",
        description: "Active engagement with comments, messages, and mentions to build brand loyalty.",
        icon: Users,
      }
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "We define your brand voice, visual identity, and key content pillars." },
      { step: "02", title: "Content Creation", description: "Designing graphics, writing copy, and planning Reels/Stories for the upcoming month." },
      { step: "03", title: "Approval & Scheduling", description: "You review the content calendar, and we schedule posts for optimal engagement times." },
      { step: "04", title: "Engagement & Growth", description: "Actively engaging with your target audience and industry peers to grow your organic reach." }
    ],
    faqs: [
      { question: "Which platforms should my business be on?", answer: "It depends on your audience. B2B companies thrive on LinkedIn, while B2C retail and food brands do best on Instagram and Facebook." },
      { question: "How often should we post?", answer: "Consistency is more important than frequency. We typically recommend 3 to 5 high-quality posts per week." },
      { question: "Do you handle negative comments?", answer: "Yes, our community management protocols include swift, professional responses to all customer feedback." }
    ]
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Fast, conversion-optimized websites that turn visitors into paying customers.",
    longDescription: "Your website is your 24/7 salesperson. We build blazing-fast, mobile-responsive, and SEO-friendly websites using modern frameworks like Next.js and React that are designed specifically to convert traffic into leads.",
    heroImage: "/images/services/website-development.jpg",
    icon: Code,
    benefits: [
      {
        title: "Lightning Fast",
        description: "Optimized for core web vitals ensuring instant load times for better user experience.",
        icon: Zap,
      },
      {
        title: "Conversion Focused",
        description: "Strategic layout and UX/UI design to guide visitors toward taking action.",
        icon: Target,
      },
      {
        title: "Mobile First",
        description: "Flawless rendering and interaction on all smartphone and tablet devices.",
        icon: Layout,
      }
    ],
    process: [
      { step: "01", title: "Wireframing & UX", description: "Mapping out the user journey and creating structural wireframes." },
      { step: "02", title: "UI Design", description: "Applying your brand aesthetics to create beautiful, high-fidelity mockups." },
      { step: "03", title: "Development", description: "Coding the site using modern, secure, and performant frameworks (Next.js/React)." },
      { step: "04", title: "Launch & QA", description: "Rigorous testing across browsers and devices before going live." }
    ],
    faqs: [
      { question: "What platform do you use to build websites?", answer: "We specialize in modern stacks like Next.js and React for ultimate performance, but also build on WordPress or Shopify depending on client needs." },
      { question: "Will my website be mobile-friendly?", answer: "Absolutely. 100% of the websites we build are designed mobile-first, ensuring they look perfect on all devices." },
      { question: "How long does it take to build a website?", answer: "A standard corporate website takes 3-5 weeks from discovery to launch, while complex e-commerce builds may take 6-8 weeks." }
    ]
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    shortDescription: "End-to-end funnels designed to fill your sales pipeline with qualified prospects.",
    longDescription: "We don't just run ads; we build comprehensive lead generation engines. By combining landing pages, lead magnets, automated email follow-ups, and targeted traffic, we deliver a consistent flow of high-quality leads.",
    heroImage: "/images/services/lead-generation.jpg",
    icon: Target,
    benefits: [
      {
        title: "Custom Funnels",
        description: "Tailored customer journeys from first click to final conversion.",
        icon: Share2,
      },
      {
        title: "Landing Pages",
        description: "High-converting standalone pages optimized for a single call-to-action.",
        icon: Layout,
      },
      {
        title: "CRM Integration",
        description: "Seamless transfer of lead data directly into your sales team's CRM.",
        icon: Code,
      }
    ],
    process: [
      { step: "01", title: "Offer Creation", description: "Developing a compelling lead magnet or offer that your target audience actually wants." },
      { step: "02", title: "Landing Page Build", description: "Designing a high-speed, conversion-optimized landing page without distracting navigation." },
      { step: "03", title: "Traffic Generation", description: "Deploying targeted Google and Meta ads to drive qualified traffic to the funnel." },
      { step: "04", title: "Nurture Sequence", description: "Setting up automated email and SMS sequences to turn warm leads into booked appointments." }
    ],
    faqs: [
      { question: "What qualifies as a 'good' lead?", answer: "A good lead is someone who matches your ideal customer profile and has expressed direct interest in your service by providing accurate contact information." },
      { question: "Where do the leads go?", answer: "We can instantly route leads to your email, a Google Sheet, or directly integrate them via API into your CRM (like HubSpot or Salesforce)." },
      { question: "How do you improve lead quality?", answer: "We improve quality by adding qualifying questions to lead forms, refining ad targeting, and writing clearer ad copy that repels bad fits." }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Strategy",
    shortDescription: "Holistic, omni-channel marketing strategies for aggressive local growth.",
    longDescription: "Our flagship service. We act as your outsourced Chief Marketing Officer, combining SEO, Paid Ads, Social Media, and Web Development into a unified, high-performance strategy designed to dominate your industry in Coimbatore.",
    heroImage: "/images/services/digital-marketing.jpg",
    icon: Globe,
    benefits: [
      {
        title: "Omni-Channel Approach",
        description: "Seamless integration across all digital touchpoints for a unified brand experience.",
        icon: Share2,
      },
      {
        title: "Advanced Analytics",
        description: "Deep dive into your data to uncover hidden growth opportunities and plug revenue leaks.",
        icon: LineChart,
      },
      {
        title: "Dedicated Growth Team",
        description: "Access to a full team of specialists (SEO, Ads, Design) working in harmony.",
        icon: Briefcase,
      }
    ],
    process: [
      { step: "01", title: "Business Audit", description: "Deep analysis of your current marketing, sales process, and unit economics." },
      { step: "02", title: "Strategy Blueprint", description: "Crafting a multi-channel 12-month roadmap tailored to your specific revenue goals." },
      { step: "03", title: "Aggressive Execution", description: "Deploying integrated campaigns across Search, Social, and Email simultaneously." },
      { step: "04", title: "Quarterly Reviews", description: "In-depth strategic realignments to adapt to market changes and scale what's working." }
    ],
    faqs: [
      { question: "Why do I need a full digital strategy?", answer: "Siloed marketing rarely works. A unified strategy ensures that your SEO, Ads, and Social efforts are all compounding on each other." },
      { question: "Who will manage my account?", answer: "You will have a dedicated Account Manager acting as your single point of contact, coordinating our entire team of specialists." },
      { question: "How do you measure success?", answer: "We measure success in revenue and closed deals, not just clicks and impressions. We tie our reporting directly to your bottom line." }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
