import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | D2N Digital Marketing",
  description: "Privacy Policy for D2N Digital Marketing Agency in Coimbatore.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 lg:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <p><strong>Last Updated:</strong> October 2026</p>

        <p>
          At <strong>D2N Digital Marketing</strong> ("we", "our", or "us"), we value your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website <strong>d2ndigitalmarketing.com</strong> or use our services. 
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
          please do not access the site.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as chat or contact forms.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Create and manage your account.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <address className="not-italic mt-4 p-6 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <strong>D2N Digital Marketing</strong><br />
          Saravanampatti Road, Jeeva Nagar,<br />
          Cheran Ma Nagar, Villankurichi,<br />
          Coimbatore, Tamil Nadu 641035, India<br />
          <strong>Phone:</strong> +91 97872 05707<br />
        </address>
      </div>
    </div>
  );
}
