import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { BUILDROONIX_BRAND } from "@/lib/brand";

export const metadata = {
  title: "Privacy Policy — Buildroonix Engineering Studio",
  description:
    "Privacy Policy for Buildroonix and 3d.buildroonix.com. Learn how we safeguard your personal data, payment info via Razorpay, and confidential customer photos for custom 3D lithophane lamps.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader activeSection="privacy" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#7c3aed" }}>Privacy Policy</span>
          </div>
          <span className="section-kicker kicker-light">
            <ShieldCheck size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            DATA PRIVACY &amp; PHOTO CONFIDENTIALITY
          </span>
          <h1>Privacy Policy</h1>
          <p>
            Effective Date: November 13, 2026 · Buildroonix Engineering Studio (Varanasi, UP, India)
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap" style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
          <div className="about-story-body" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            
            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>1. Introduction &amp; Scope</h2>
              <p>
                BUILDROONIX (&quot;Buildroonix&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a verified MSME-registered enterprise (GSTIN: 09HQHPD9487C1ZE) operating in Varanasi, Uttar Pradesh, India. This Privacy Policy governs all websites, subdomains (including <code>buildroonix.com</code> and <code>3d.buildroonix.com</code>), software applications, and physical digital manufacturing services operated by Buildroonix.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>2. Confidentiality of Custom 3D Photos (Lithophane Lamps)</h2>
              <p>
                When you order personalized 3D lithophane lamps, keychains, or custom embossed gifts on <code>3d.buildroonix.com</code>, you may upload personal, family, or couple photographs. We treat your personal images with the highest level of confidentiality:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Purpose Limitation:</strong> Uploaded photographs are used exclusively to generate grayscale depth maps and toolpaths for 3D slicing and printing.</li>
                <li><strong>Zero Public Display:</strong> We will <em>never</em> publish, share, or display your private personal photos on social media or marketing portfolios without your explicit prior written consent.</li>
                <li><strong>Data Retention &amp; Deletion:</strong> Source photo files are deleted from our production slicing machines within 30 days of confirmed order delivery. You may request immediate deletion at any time by contacting <code>support@buildroonix.com</code>.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>3. Payment Processing via Razorpay</h2>
              <p>
                We accept payments through India&apos;s leading secure payment gateway, <strong>Razorpay</strong>, supporting UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and NetBanking.
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>We do not store, process, or have access to your credit/debit card numbers, CVVs, or bank net banking credentials.</strong> All transactions are securely encrypted and processed directly by Razorpay under PCI-DSS Level 1 compliance standards.
              </p>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>4. Software Application Data &amp; Multi-Tenant Isolation</h2>
              <p>
                For clients utilizing our institutional and commercial software solutions (e.g., Library OS, Gym OS, PG/Hostel Management, and custom client portals):
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Tenant Isolation:</strong> Client databases, member lists, attendance logs, and financial records are strictly isolated with role-based access control (RBAC).</li>
                <li><strong>Ownership:</strong> You retain 100% ownership of your business and student data. Buildroonix does not sell or monetize client operational data.</li>
                <li><strong>Backups &amp; Security:</strong> Institutional databases are backed up with automated encryption and SSL/TLS HTTPS protocols.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>5. Information We Collect</h2>
              <p>We may collect the following information when you place an order or submit a project consultation:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8", color: "var(--ink-secondary)" }}>
                <li><strong>Contact Information:</strong> Name, email address, phone/WhatsApp number, and postal shipping address for physical deliveries.</li>
                <li><strong>Project Specifications:</strong> Technical requirements, sensor choices, CAD files, or academic documentation briefs.</li>
                <li><strong>Log &amp; Analytics Data:</strong> Non-personally identifiable browser user-agent and IP logs for cybersecurity and server health monitoring.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>6. Grievance Officer &amp; Contact Information</h2>
              <p>
                If you have questions, data deletion requests, or grievances regarding our privacy practices, please contact our administrative desk:
              </p>
              <div style={{ background: "rgba(10, 15, 26, 0.7)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
                <p><strong>Buildroonix Engineering Studio</strong></p>
                <p>Attention: Privacy &amp; Data Compliance</p>
                <p>Location: Varanasi, Uttar Pradesh — 221005, India</p>
                <p>Email: <a href="mailto:support@buildroonix.com" style={{ color: "#7c3aed" }}>support@buildroonix.com</a></p>
                <p>Phone / WhatsApp: <a href="tel:+919580181697" style={{ color: "#7c3aed" }}>+91 9580181697</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

