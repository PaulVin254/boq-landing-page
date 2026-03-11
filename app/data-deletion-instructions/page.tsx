import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Eris Engineering",
  description:
    "User Data Deletion Instructions for Eris Engineering WhatsApp Business API interactions.",
  alternates: {
    canonical: "https://audit.eris.co.ke/data-deletion-instructions",
  },
};

export default function DataDeletionInstructionsPage() {
  return (
    <>
      <main className="flex-1 min-h-dvh flex flex-col pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              User Data Deletion Instructions
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Effective Date: March 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-base leading-7">
            <section className="space-y-4">
              <p>
                In accordance with Meta Platform Policy and our commitment to
                data sovereignty, Eris Engineering provides a straightforward
                mechanism for users to request the permanent removal of their
                data from our systems. If you have interacted with our WhatsApp
                Business API and wish to trigger a &quot;Forensic Purge&quot; of
                your information, please follow the steps below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                1. Your Right to Deletion
              </h2>
              <p>
                As a user of the Eris Engineering audit service, you have the
                absolute right to request the deletion of all Platform Data we
                have collected, including your personal identifiers and any
                project-specific documents.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                2. The Deletion Process (3-Step Manual Request)
              </h2>
              <p>
                To initiate a User Data Deletion Request, please perform the
                following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Compose an Email:</strong> Send a message from your
                  registered email address to{" "}
                  <a
                    href="mailto:wpwakoli@gmail.com"
                    className="text-primary hover:underline"
                  >
                    wpwakoli@gmail.com
                  </a>
                  .
                </li>
                <li>
                  <strong>Subject Line:</strong> Use the exact subject:
                  &quot;Data Deletion Request - [Your WhatsApp Phone
                  Number]&quot;.
                </li>
                <li>
                  <strong>Statement of Intent:</strong> Include a brief sentence
                  in the body stating: &quot;I request that Eris Engineering
                  permanently purges all my personal data and project files from
                  its records.&quot;
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                3. Scope of the &quot;Forensic Purge&quot;
              </h2>
              <p>
                Once your request is verified, our administrators will manually
                execute a complete wipe of your data across our infrastructure:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>The Vault (Supabase Storage):</strong> All binary PDF
                  assets, project plans, and media files will be permanently
                  erased.
                </li>
                <li>
                  <strong>The Brain (PostgreSQL Database):</strong> All
                  associated metadata, phone records, and audit summaries stored
                  in our Supabase database will be purged.
                </li>
                <li>
                  <strong>Orchestration Logs:</strong> Any transient data stored
                  within our self-hosted n8n instance at n8n.sitesync.tech will
                  be cleared.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4">
                4. Timeline & Confirmation (SLA)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Processing Time:</strong> We commit to completing the
                  manual purge within 72 hours of receiving your email request.
                </li>
                <li>
                  <strong>Final Confirmation:</strong> Upon successful deletion,
                  we will send a follow-up email confirming that your data has
                  been removed from the Eris Engineering ecosystem.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
