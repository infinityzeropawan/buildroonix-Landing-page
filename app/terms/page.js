import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FileText, Scale, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — Buildroonix Engineering Studio",
  description:
    "Terms and Conditions governing software licensing, custom 3D printing orders, student engineering hardware, and payment operations on buildroonix.com and 3d.buildroonix.com.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader activeSection="terms" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#26a9ff" }}>Terms of Service</span>
          </div>
          <span className="section-kicker kicker-light">
            <Scale size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            LEGAL AGREEMENT &amp; SERVICE TERMS
          </span>
          <h1>Terms and Conditions</h1>
          <p>
            Last Updated: November 13, 2026 · Buildroonix Engineering Studio · MSME &amp; GSTIN Registered
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
          <div className="about-story-body" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>1. Agreement to Terms</h2>
              <p>
                By accessing or using <code>buildroonix.com</code>, <code>3d.buildroonix.com</code>, or any associated platforms operated by Buildroonix Engineering Studio (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not access our services.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>2. Custom 3D Manufacturing Orders (3d.buildroonix.com)</h2>
              <p>
                All 3D printed lithophane lamps, anime figurines, and rapid mechanical prototypes are custom-manufactured upon order confirmation:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Customer Previews &amp; Slicing:</strong> We provide digital preview models or dimensions before initiating prolonged physical print cycles. Customers are responsible for verifying spelling, uploaded photo clarity, and dimensions.</li>
                <li><strong>Material Characteristics:</strong> We use premium engineering-grade PLA+, PETG, and UV photopolymer resins. Minor surface layer lines are inherent to FDM additive manufacturing and are not considered manufacturing defects.</li>
                <li><strong>Dispatch Timelines:</strong> Standard custom fabrication requires 2–3 business days prior to carrier handover.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>3. Software Licensing &amp; IP Ownership</h2>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>SaaS Platforms (Library OS, Gym OS, PG/School SaaS):</strong> Access is provided on an authorized subscription or lifetime license agreement according to the chosen tier. Reverse engineering, unauthorized redistribution, or circumvention of licensing locks is strictly prohibited.</li>
                <li><strong>Custom Bespoke Client Engineering:</strong> For turnkey custom software contracts, full source code ownership, repository rights, and deployment credentials transfer to the client upon final milestone payment settlement.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>4. Student Engineering Hardware &amp; Academic Guidance</h2>
              <p>
                Buildroonix assists B.Tech, Polytechnic, and Diploma students with working embedded hardware prototypes (ESP32/STM32/Arduino), custom sensor circuits, 3D enclosures, and explanatory viva documentation:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Educational Purpose:</strong> All materials, code, circuit schematics, and synopses are provided strictly for educational and technical research purposes. Students are expected to understand the underlying engineering and defend their own project during viva evaluation.</li>
                <li><strong>Hardware Verification:</strong> Every student project undergoes comprehensive bench testing (power rails, sensor telemetry, and firmware execution) prior to parcel dispatch.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>5. Payments, Pricing &amp; Taxes</h2>
              <p>
                All prices are listed in Indian Rupees (INR). Payments are processed securely via Razorpay (UPI, Credit/Debit cards, NetBanking). As a registered Indian enterprise (GSTIN: 09HQHPD9487C1ZE), formal GST tax invoices are issued for all eligible B2B and institutional orders.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>6. Limitation of Liability &amp; Governing Law</h2>
              <p>
                In no event shall Buildroonix be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products or software. These Terms shall be governed by and construed in accordance with the laws of the Republic of India, and any disputes shall be subject exclusively to the courts of Varanasi, Uttar Pradesh.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

