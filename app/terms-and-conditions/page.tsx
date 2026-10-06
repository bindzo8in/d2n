import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | D2N Digital Marketing",
  description: "Terms and Conditions for D2N Digital Marketing Agency in Coimbatore.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 lg:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms and Conditions</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <p><strong>Last Updated:</strong> October 2026</p>

        <p>
          Welcome to <strong>D2N Digital Marketing</strong>. These terms and conditions outline the rules and regulations 
          for the use of D2N Digital Marketing's Website, located at <strong>d2ndigitalmarketing.com</strong>.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use 
          D2N Digital Marketing if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. License</h2>
        <p>
          Unless otherwise stated, D2N Digital Marketing and/or its licensors own the intellectual property rights for 
          all material on D2N Digital Marketing. All intellectual property rights are reserved. You may access this 
          from D2N Digital Marketing for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Republish material from D2N Digital Marketing</li>
          <li>Sell, rent or sub-license material from D2N Digital Marketing</li>
          <li>Reproduce, duplicate or copy material from D2N Digital Marketing</li>
          <li>Redistribute content from D2N Digital Marketing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. User Comments</h2>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in 
          certain areas of the website. D2N Digital Marketing does not filter, edit, publish or review Comments prior 
          to their presence on the website. Comments do not reflect the views and opinions of D2N Digital Marketing, 
          its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views 
          and opinions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
        </p>
      </div>
    </div>
  );
}
