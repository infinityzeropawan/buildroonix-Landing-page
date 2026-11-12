import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy — Buildroonix",
  description:
    "Refund and Cancellation policy for Buildroonix custom 3D lithophane lamps, software subscriptions (Library OS, Gym OS), and student hardware kits.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader activeSection="refund-policy" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#26a9ff" }}>Refund Policy</span>
          </div>
          <span className="section-kicker kicker-light">
            <RefreshCw size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            FAIR &amp; TRANSPARENT POLICY
          </span>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p>
            Effective Date: November 13, 2026 · Buildroonix Engineering Studio
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
          <div className="about-story-body" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>1. Custom 3D Products &amp; Lithophane Lamps</h2>
              <p>
                Because personalized photo lithophane lamps, customized nameplates, and bespoke 3D prints are made-to-order specifically for you, standard retail returns are not applicable once manufacturing has commenced.
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Cancellations:</strong> You may cancel your order within <strong>12 hours</strong> of placement for a 100% full refund, provided 3D slicing and printing have not yet started.</li>
                <li><strong>Transit Damage Guarantee:</strong> In the rare event that your lithophane lamp, wooden LED base, or figurine arrives damaged during transit, notify us within <strong>48 hours</strong> of package delivery with an unboxing photo or video via WhatsApp (+91 9580181697) or email (<code>support@buildroonix.com</code>). We will dispatch a <strong>free replacement</strong> at zero additional charge.</li>
                <li><strong>Manufacturing Defect:</strong> If the printed product has significant structural flaws or electrical faults in the LED base, we will replace the defective component immediately.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>2. Software Solutions (Library OS, Gym OS &amp; SaaS)</h2>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Onboarding &amp; Demos:</strong> We offer comprehensive live interactive demos and guided trials before any institutional software license is finalized.</li>
                <li><strong>Monthly SaaS Subscriptions:</strong> You may cancel recurring monthly software subscriptions at any time from your admin billing panel. Cancellation takes effect at the end of the current billing cycle with no subsequent charges.</li>
                <li><strong>Setup &amp; Customization Fees:</strong> Customized role setup, hardware scanner calibration, and dedicated on-premise installation services are non-refundable once engineering labor has been delivered.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>3. Student Embedded &amp; IoT Project Kits</h2>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>100% Working Hardware Guarantee:</strong> All microcontrollers, sensors, and power supplies are individually tested on our lab bench prior to shipping.</li>
                <li><strong>Defective Component Replacement:</strong> If any electronic sensor or module fails to function upon arrival, report it within <strong>5 days</strong> of parcel receipt. We will ship a replacement component via express courier at our cost.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>4. Refund Processing Timeline</h2>
              <p>
                Approved refunds are processed back to the original payment source (UPI, Debit/Credit Card, or NetBanking) through our <strong>Razorpay</strong> gateway within <strong>5 to 7 business days</strong>, in accordance with standard RBI and banking settlement cycles.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>5. How to Initiate a Return or Replacement</h2>
              <p>To request assistance with an order, please reach out with your order number:</p>
              <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
                <p><strong>Buildroonix Customer Support</strong></p>
                <p>WhatsApp / Call: <a href="tel:+919580181697" style={{ color: "#26a9ff" }}>+91 9580181697</a></p>
                <p>Email: <a href="mailto:support@buildroonix.com" style={{ color: "#26a9ff" }}>support@buildroonix.com</a></p>
                <p>Support Hours: Mon – Sat: 9:00 AM – 8:00 PM IST</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

