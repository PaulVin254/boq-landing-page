import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Eris Engineering",
  description:
    "Terms of Service and Professional Engagement Agreement for Eris Engineering forensic BOQ audit services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <main className="flex-1 min-h-dvh flex flex-col pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Terms of Service & Professional Engagement Agreement
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Effective Date: March 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-base leading-7">
            <section className="space-y-4">
              <p>
                <strong>Platform:</strong> Eris Engineering (&ldquo;the
                Firm&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;)
              </p>
              <p>
                <strong>Service:</strong> Expert-Led Forensic BOQ Audit and
                Analysis (&ldquo;the Service&rdquo;)
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                1. Scope of Service: Consultative Forensic Audit
              </h2>
              <p>
                The Service consists of a forensic review of Bills of Quantities
                (BOQ) and construction project plans by certified Quantity
                Surveyors (QS) and Engineers.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Not a Guarantee:</strong> The Audit Report is a
                  Consultative Forensic Analysis and does not constitute a
                  guarantee of construction success, project financing, or the
                  structural integrity of the site.
                </li>
                <li>
                  <strong>Advisory Only:</strong> Our findings are intended to
                  assist in identifying cost leakage and mathematical variances;
                  they are not a substitute for on-site project management or
                  statutory inspections.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                2. User Responsibilities & Data Rights
              </h2>
              <p>
                By submitting project documents (PDFs, spreadsheets, blueprints)
                via the WhatsApp Business API, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Legal Authority:</strong> You have the absolute legal
                  right and authority to share the uploaded documents and that
                  doing so does not violate any third-party confidentiality or
                  non-disclosure agreements.
                </li>
                <li>
                  <strong>Accuracy:</strong> You are responsible for the
                  accuracy of the source documents; Eris Engineering is not
                  liable for audit errors resulting from incomplete or falsified
                  project plans.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                3. Intellectual Property (IP) Ownership
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Client Assets:</strong> You retain ownership of all
                  original project documents uploaded to the &quot;Vault&quot;
                  (Supabase Storage).
                </li>
                <li>
                  <strong>Audit Assets:</strong> Eris Engineering retains
                  exclusive ownership of the Audit Report, the forensic
                  methodology used to generate it, and any proprietary n8n
                  orchestration logic used to process the data.
                </li>
                <li>
                  <strong>Usage License:</strong> Upon full payment, the client
                  is granted a non-exclusive, non-transferable license to use
                  the Audit Report for their internal project decision-making.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                4. Payment, Delivery, and Communication
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Paid Service:</strong> The Audit is a premium
                  professional service; fees must be settled as per the
                  &quot;Direct Strike&quot; pricing menu provided via WhatsApp.
                </li>
                <li>
                  <strong>The Window:</strong> Reports are delivered via the
                  WhatsApp &quot;Customer Service Window&quot; (24 hours
                  post-audit completion) or secure download links from our
                  Supabase infrastructure.
                </li>
                <li>
                  <strong>Delivery Timeline:</strong> While we aim for rapid
                  turnaround, forensic audits require &quot;Deep Work&quot; by
                  experts; specific delivery dates are estimates and not
                  binding.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                5. Indemnification & Liability Limitation
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Procurement Shield:</strong> You agree to indemnify
                  and hold Eris Engineering harmless from any legal actions,
                  financial losses, or construction disputes arising from your
                  procurement decisions based on the Audit Report.
                </li>
                <li>
                  <strong>Maximum Liability:</strong> To the fullest extent
                  permitted by law, the Firm&rsquo;s total liability for any
                  claim shall not exceed the amount paid for the specific Audit
                  Service in question.
                </li>
                <li>
                  <strong>Transit Liability:</strong> We utilize encrypted n8n
                  and Supabase layers but are not liable for data breaches
                  occurring in the WhatsApp/Meta transit layer.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                6. Dispute Resolution: Mandatory Arbitration
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Venue:</strong> Any disputes arising from this Service
                  shall be governed by the laws of the Republic of Kenya.
                </li>
                <li>
                  <strong>Arbitration:</strong> Before seeking judicial
                  intervention, both parties agree to undergo mandatory, binding
                  arbitration in Nairobi, Kenya, specifically for
                  construction-related or financial disputes.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                7. Termination of Service
              </h2>
              <p>
                Eris Engineering reserves the right to refuse or terminate
                service immediately if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Integrity Failure:</strong> Project plans are found to
                  be fraudulent, incomplete, or involve illegal construction
                  activities.
                </li>
                <li>
                  <strong>Payment Failure:</strong> Services will be suspended
                  if technical fees or professional retainers are not met.
                </li>
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
                <strong>Host Site:</strong> audit.eris.co.ke
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
