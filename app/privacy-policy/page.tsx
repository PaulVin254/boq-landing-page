import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Eris Engineering",
  description:
    "Privacy Policy and Professional Data Protocol for Eris Engineering forensic BOQ auditing services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="flex-1 min-h-dvh flex flex-col pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Privacy Policy & Professional Data Protocol
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Effective Date: March 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-base leading-7">
            <section className="space-y-4">
              <p>
                <strong>Entity:</strong> Eris Engineering (&ldquo;the
                Firm&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;)
              </p>
              <p>
                <strong>Service:</strong> Expert-Led Forensic BOQ Auditing
                (&ldquo;the Service&rdquo;)
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                1. The Data Pipeline: Secure Ingestion
              </h2>
              <p>
                Eris Engineering utilizes a high-security &quot;Deep Work&quot;
                pipeline to ingest sensitive project data. By submitting a Bill
                of Quantities (BOQ) or project plans via our WhatsApp Business
                API, you authorize the collection of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data:</strong> WhatsApp account metadata,
                  including phone number and display name.
                </li>
                <li>
                  <strong>Project Assets:</strong> PDF documents, spreadsheets,
                  and media files containing proprietary construction data.
                </li>
                <li>
                  <strong>Communication Logs:</strong> Any text-based
                  instructions or queries provided to facilitate the audit.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                2. Expert Review Disclosure (Human-in-the-Loop)
              </h2>
              <p>
                Unlike generic automated tools, Eris Engineering provides
                high-value forensic analysis conducted by certified human
                professionals.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>The Review Process:</strong> All uploaded documents
                  are routed via our n8n orchestration layer to our internal
                  engineering team.
                </li>
                <li>
                  <strong>Professional Audit:</strong> Analysis is performed by
                  certified Quantity Surveyors (QS) and Engineers to ensure 100%
                  forensic accuracy during this market validation phase.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Every auditor is bound by
                  strict professional engineering confidentiality standards.
                  Your blueprints and financial data are never shared outside
                  the specific audit team assigned to your project.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                3. Infrastructure & Data Sovereignty
              </h2>
              <p>
                We align our operations with the Kenyan Data Protection Act
                (2019) while maintaining a global-scale technical stack:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Local Orchestration:</strong> Our self-hosted n8n
                  instance at n8n.sitesync.tech manages the secure routing of
                  your data.
                </li>
                <li>
                  <strong>The Vault:</strong> Documents are stored in encrypted
                  Supabase Buckets and PostgreSQL tables, leveraging world-class
                  security protocols.
                </li>
                <li>
                  <strong>Global Transit:</strong> You acknowledge that data
                  transmitted via WhatsApp undergoes international transit
                  through Meta&rsquo;s secure global infrastructure before
                  reaching our internal &quot;Vault&quot;.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                4. Retention & The &quot;90-Day Vault&quot;
              </h2>
              <p>
                To ensure project continuity while respecting data privacy, we
                implement the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Retention Period:</strong> All uploaded project plans
                  are stored for a maximum of 90 days post-audit.
                </li>
                <li>
                  <strong>Automatic Purge:</strong> On the 91st day, the binary
                  PDF files are permanently purged from our Supabase storage.
                </li>
                <li>
                  <strong>Historical Data:</strong> Numerical audit summaries
                  may be kept in an anonymized format for internal market-rate
                  trending and statistical analysis.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                5. Professional Liability Shield
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Forensic Disclaimer:</strong> The audits provided by
                  Eris Engineering are professional opinions intended to assist
                  in cost-leakage detection.
                </li>
                <li>
                  <strong>No Construction Liability:</strong> Eris Engineering
                  is not liable for structural failures, site accidents, or
                  procurement errors occurring on-site. Reliance on our audit
                  results for final procurement is at the client&rsquo;s
                  professional discretion.
                </li>
                <li>
                  <strong>Financial Outcomes:</strong> While we strive for
                  absolute forensic accuracy, Eris Engineering does not
                  guarantee specific financial savings or project outcomes.
                </li>
                <li>
                  <strong>Transit Risks:</strong> We are not responsible for
                  data breaches occurring within third-party transit layers
                  (e.g., Meta or local ISPs) before the data reaches our secure
                  n8n orchestration layer.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                6. Client Rights
              </h2>
              <p>
                Under the Data Protection Act (2019), you reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Request a Record of all documents currently held in the
                  &quot;Vault.&quot;
                </li>
                <li>
                  Command Immediate Deletion of any project asset prior to the
                  90-day purge.
                </li>
                <li>Update project instructions via the WhatsApp interface.</li>
              </ul>
            </section>

            <section className="space-y-4 mt-12 bg-muted p-6 rounded-lg">
              <p className="font-medium">
                <strong>Contact:</strong>{" "}
                <a
                  href="mailto:wpwakoli@gmail.com"
                  className="text-primary hover:underline"
                >
                  wpwakoli@gmail.com
                </a>
              </p>
              <p className="font-medium">
                <strong>Technical Infrastructure:</strong> n8n.sitesync.tech
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
