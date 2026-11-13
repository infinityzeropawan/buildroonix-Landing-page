import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Truck, Package, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy — Buildroonix",
  description:
    "Shipping and Delivery policy for Buildroonix custom 3D lithophane lamps, figurines, and student embedded electronics kits across India.",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <SiteHeader activeSection="shipping-policy" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#7c3aed" }}>Shipping Policy</span>
          </div>
          <span className="section-kicker kicker-light">
            <Truck size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            PAN-INDIA EXPRESS LOGISTICS
          </span>
          <h1>Shipping &amp; Delivery Policy</h1>
          <p>
            Effective Date: November 13, 2026 · Buildroonix Engineering Studio
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
          <div className="about-story-body" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>1. Manufacturing &amp; Processing Timelines</h2>
              <p>
                Every custom 3D print (photo lithophane lamps, anime figurines, custom enclosures) is individually sliced, manufactured in high-density PLA+/PETG, hand-finished, and quality-tested:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Custom 3D Lithophane Lamps:</strong> 2 to 3 business days from image approval to completion.</li>
                <li><strong>Stock Figurines &amp; Catalog Prints:</strong> 1 to 2 business days.</li>
                <li><strong>Student IoT &amp; Embedded Hardware:</strong> 2 to 4 business days for circuit assembly, firmware flashing, 3D enclosure printing, and quality verification.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>2. Pan-India Delivery Timelines</h2>
              <p>
                We partner with tier-1 Indian courier networks (BlueDart, DTDC, Delhivery, and India Post Speed Post) to guarantee secure and prompt transit across all states and union territories:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "16px" }}>
                <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "16px" }}>
                  <h4 style={{ color: "#7c3aed", fontSize: "15px", marginBottom: "6px" }}>Metro &amp; Tier-1 Cities</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)" }}>2 to 4 business days after parcel dispatch (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Kolkata, Chennai).</p>
                </div>
                <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "16px" }}>
                  <h4 style={{ color: "#7c3aed", fontSize: "15px", marginBottom: "6px" }}>Tier-2 &amp; Regional Towns</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)" }}>3 to 5 business days after parcel dispatch across Uttar Pradesh, Bihar, Maharashtra, Rajasthan, MP, and southern states.</p>
                </div>
                <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "16px" }}>
                  <h4 style={{ color: "#7c3aed", fontSize: "15px", marginBottom: "6px" }}>Remote &amp; Island Regions</h4>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)" }}>5 to 8 business days via Speed Post (NE states, J&amp;K, A&amp;N islands).</p>
                </div>
              </div>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>3. Order Tracking &amp; Notifications</h2>
              <p>
                Once your parcel is handed over to our courier partner, you will automatically receive:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li>A real-time tracking link and Air Waybill (AWB) number delivered via WhatsApp and email.</li>
                <li>Live milestone notifications: Dispatched → In Transit → Out for Delivery → Delivered.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>4. Protective Packaging Standards</h2>
              <p>
                Lithophane panels and sensitive microcontroller circuits require careful cushioning. Every package is packed with multi-layer bubble wrap, protective foam inserts, and rigid corrugated outer boxes to ensure zero transit vibration or crushing damage.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>5. Software Platforms Delivery</h2>
              <p>
                Institutional software platforms (Library OS, Gym OS, PG/School SaaS) are delivered digitally. Cloud tenant provisioning is typically completed within <strong>24 to 48 hours</strong> of agreement, accompanied by guided remote admin onboarding.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>6. Shipping Inquiries</h2>
              <p>Need urgent delivery or special event deadline coordination? Contact our dispatch desk:</p>
              <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
                <p><strong>Buildroonix Dispatch Desk</strong></p>
                <p>WhatsApp / Call: <a href="tel:+919580181697" style={{ color: "#7c3aed" }}>+91 9580181697</a></p>
                <p>Email: <a href="mailto:support@buildroonix.com" style={{ color: "#7c3aed" }}>support@buildroonix.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

