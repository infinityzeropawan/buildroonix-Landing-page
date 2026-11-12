"use client";

import Link from "next/link";
import { ExternalLink, CheckCircle2, ShieldCheck, Zap, Users, BookOpen, Dumbbell, Cpu, Box } from "lucide-react";

export function UiMockup({ type = "library-os", accent = "#26a9ff" }) {
  const c = accent;

  // ── 1. LIBRARY MANAGEMENT SYSTEM (LIBRARY OS) ──────────────────────────────
  if (type === "library-os") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">library.buildroonix.com/admin/dashboard</span>
          <span className="mk-badge" style={{ color: "#38bdf8", borderColor: "rgba(56, 189, 248, 0.4)" }}>
            Roles: Manager · Admin · Superadmin
          </span>
        </div>
        <div className="mk-body">
          {/* Role Filter Tabs */}
          <div className="mk-erp-tabs">
            <span className="active" style={{ background: "rgba(38, 169, 255, 0.15)", color: "#38bdf8", border: "1px solid rgba(38, 169, 255, 0.4)" }}>
              <BookOpen size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
              Manager View: Book Circulation
            </span>
            <span>Admin: Fine Reconciliation</span>
            <span>Superadmin: Multi-Branch Audit</span>
          </div>

          {/* Metric KPIs */}
          <div className="mk-kpi-row">
            <div className="mk-kpi"><span>Total Catalog</span><strong>14,280 Books</strong></div>
            <div className="mk-kpi"><span>Currently Issued</span><strong style={{ color: "#38bdf8" }}>1,420 Active</strong></div>
            <div className="mk-kpi"><span>Overdue Fines</span><strong style={{ color: "#f59e0b" }}>₹ 4,850</strong></div>
            <div className="mk-kpi"><span>Barcode / RFID</span><strong style={{ color: "#10b981" }}>Scanner Ready</strong></div>
          </div>

          {/* Circulation Table */}
          <div className="mk-table">
            <div className="mk-tr head">
              <span>Book Title &amp; ISBN</span>
              <span>Patron / Member</span>
              <span>Due Date</span>
              <span>Action / Status</span>
            </div>
            <div className="mk-tr">
              <span>Data Structures &amp; Algorithms in C++</span>
              <span>CS-2024-042 (Pawan)</span>
              <span>18 Nov 2026</span>
              <span className="mk-tag" style={{ color: "#10b981" }}>Issued (Active)</span>
            </div>
            <div className="mk-tr">
              <span>Microelectronic Circuits (Sedra &amp; Smith)</span>
              <span>EC-2023-118 (Rahul V.)</span>
              <span>10 Nov 2026</span>
              <span className="mk-tag" style={{ color: "#ef4444" }}>Overdue (₹ 40 Fine)</span>
            </div>
            <div className="mk-tr">
              <span>Clean Code &amp; Software Architecture</span>
              <span>Prof. S. Sharma (Faculty)</span>
              <span>28 Nov 2026</span>
              <span className="mk-tag" style={{ color: "#38bdf8" }}>Renewed Online</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "12px", color: "#94a3b8" }}>
            <span>⚡ Automated Overdue SMS &amp; Email Reminders Enabled</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="button" style={{ background: "rgba(38,169,255,0.15)", color: "#38bdf8", border: "1px solid rgba(38,169,255,0.3)", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", cursor: "pointer" }}>
                + Issue via Barcode
              </button>
              <button type="button" style={{ background: "rgba(255,255,255,0.05)", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", cursor: "pointer" }}>
                Export Circulation PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── 2. GYM MANAGEMENT SOFTWARE (GYM OS) ────────────────────────────────────
  if (type === "gym-os") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">gym.buildroonix.com/operations/members</span>
          <span className="mk-badge" style={{ color: "#ff7212", borderColor: "rgba(255, 114, 18, 0.4)" }}>
            Roles: Trainer · Manager · Admin · Superadmin
          </span>
        </div>
        <div className="mk-body">
          {/* Role Filter Tabs */}
          <div className="mk-erp-tabs">
            <span className="active" style={{ background: "rgba(255, 114, 18, 0.15)", color: "#ff7212", border: "1px solid rgba(255, 114, 18, 0.4)" }}>
              <Dumbbell size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
              Manager: Membership &amp; Renewals
            </span>
            <span>Trainer: Workout &amp; Diet Plans</span>
            <span>Admin: Revenue &amp; Payroll</span>
          </div>

          {/* Metric KPIs */}
          <div className="mk-kpi-row">
            <div className="mk-kpi"><span>Active Members</span><strong>342 Enrolled</strong></div>
            <div className="mk-kpi"><span>Expiring (7 Days)</span><strong style={{ color: "#ef4444" }}>18 Renewals Due</strong></div>
            <div className="mk-kpi"><span>Today&#39;s Check-ins</span><strong style={{ color: "#10b981" }}>124 (QR / Biometric)</strong></div>
            <div className="mk-kpi"><span>Monthly Revenue</span><strong style={{ color: "#38bdf8" }}>₹ 2,84,000</strong></div>
          </div>

          {/* Member Operations Table */}
          <div className="mk-table">
            <div className="mk-tr head">
              <span>Member Name</span>
              <span>Package &amp; Goal</span>
              <span>Assigned Trainer</span>
              <span>Renewal &amp; WhatsApp Alert</span>
            </div>
            <div className="mk-tr">
              <span>Vikram Singh</span>
              <span>12-Month Pro (Hypertrophy)</span>
              <span>Trainer Rajesh</span>
              <span className="mk-tag" style={{ color: "#f59e0b" }}>Expiring in 2 Days · [Send WhatsApp]</span>
            </div>
            <div className="mk-tr">
              <span>Neha Sharma</span>
              <span>6-Month Strength &amp; Cardio</span>
              <span>Trainer Priya</span>
              <span className="mk-tag" style={{ color: "#10b981" }}>Active (Diet Plan Synced)</span>
            </div>
            <div className="mk-tr">
              <span>Aman Verma</span>
              <span>Personal Training (Fat Loss)</span>
              <span>Trainer Rajesh</span>
              <span className="mk-tag" style={{ color: "#38bdf8" }}>Checked In (07:15 AM)</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "12px", color: "#94a3b8" }}>
            <span>💬 Automated WhatsApp Payment &amp; Diet Reminders Running</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button type="button" style={{ background: "rgba(255,114,18,0.15)", color: "#ff7212", border: "1px solid rgba(255,114,18,0.3)", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", cursor: "pointer" }}>
                + Add Walk-in Member
              </button>
              <button type="button" style={{ background: "rgba(255,255,255,0.05)", color: "#f1f5f9", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", cursor: "pointer" }}>
                Sync Biometric Gate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── 3. UPCOMING SAAS ROADMAP (PG, SCHOOL, BUSINESS ERP) ────────────────────
  if (type === "upcoming-saas" || type === "saas-tenant" || type === "enterprise-erp") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">software.buildroonix.com/roadmap</span>
          <span className="mk-badge" style={{ color: "#10b981", borderColor: "rgba(16, 185, 129, 0.4)" }}>
            Buildroonix SaaS Roadmap
          </span>
        </div>
        <div className="mk-body">
          <div className="mk-tenant-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            <div className="mk-tenant-box" style={{ borderColor: "rgba(38, 169, 255, 0.4)", background: "rgba(38, 169, 255, 0.04)" }}>
              <small style={{ color: "#38bdf8", fontWeight: 700 }}>SAAS ROADMAP 01</small>
              <strong style={{ fontSize: "14px", marginTop: "4px", display: "block" }}>PG &amp; Hostel Management</strong>
              <p style={{ fontSize: "11px", color: "#94a3b8", margin: "6px 0 10px" }}>
                Bed allocation, monthly rent dues, mess/meal counts, and tenant police verification KYC.
              </p>
              <span className="mk-tag" style={{ color: "#38bdf8", border: "1px solid rgba(38,169,255,0.3)" }}>● Active Engineering</span>
            </div>

            <div className="mk-tenant-box" style={{ borderColor: "rgba(255, 114, 18, 0.4)", background: "rgba(255, 114, 18, 0.04)" }}>
              <small style={{ color: "#ff7212", fontWeight: 700 }}>SAAS ROADMAP 02</small>
              <strong style={{ fontSize: "14px", marginTop: "4px", display: "block" }}>School Management System</strong>
              <p style={{ fontSize: "11px", color: "#94a3b8", margin: "6px 0 10px" }}>
                Student admissions, fee receipts, parent SMS notifications, timetables, and report cards.
              </p>
              <span className="mk-tag" style={{ color: "#ff7212", border: "1px solid rgba(255,114,18,0.3)" }}>● Q2 2026 Release</span>
            </div>

            <div className="mk-tenant-box" style={{ borderColor: "rgba(16, 185, 129, 0.4)", background: "rgba(16, 185, 129, 0.04)" }}>
              <small style={{ color: "#10b981", fontWeight: 700 }}>SAAS ROADMAP 03</small>
              <strong style={{ fontSize: "14px", marginTop: "4px", display: "block" }}>Business Management ERP</strong>
              <p style={{ fontSize: "11px", color: "#94a3b8", margin: "6px 0 10px" }}>
                GST billing, SKU inventory ledgers, vendor purchase orders, and staff payroll management.
              </p>
              <span className="mk-tag" style={{ color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }}>● Q3 2026 Release</span>
            </div>
          </div>

          <div style={{ marginTop: "14px", padding: "12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", fontSize: "12px", color: "#cbd5e1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>🏢 All Buildroonix software includes role-based access (RBAC), multi-tenant data isolation, and automated cloud backups.</span>
            <span style={{ color: "#38bdf8", fontWeight: 600 }}>Custom Deployment Available</span>
          </div>
        </div>
      </div>
    );
  }

  // ── 4. STUDENT ELECTRONICS & EMBEDDED PROJECTS ─────────────────────────────
  if (type === "student-electronics" || type === "iot-hardware") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">embedded.buildroonix.com/student-projects</span>
          <span className="mk-badge" style={{ color: "#a855f7", borderColor: "rgba(168, 85, 247, 0.4)" }}>
            B.Tech / Diploma / Polytechnic Projects
          </span>
        </div>
        <div className="mk-body">
          <div className="mk-erp-tabs">
            <span className="active" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", border: "1px solid rgba(168, 85, 247, 0.4)" }}>
              <Cpu size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
              Turnkey Project Package Breakdown
            </span>
            <span>Firmware (ESP32/STM32)</span>
            <span>3D Enclosures &amp; PCB</span>
          </div>

          <div className="mk-kpi-row">
            <div className="mk-kpi"><span>Hardware Circuit</span><strong style={{ color: "#10b981" }}>Tested &amp; Working</strong></div>
            <div className="mk-kpi"><span>Microcontrollers</span><strong>ESP32 · STM32 · Arduino</strong></div>
            <div className="mk-kpi"><span>3D Custom Body</span><strong style={{ color: "#38bdf8" }}>Included</strong></div>
            <div className="mk-kpi"><span>Project Documentation</span><strong style={{ color: "#f59e0b" }}>Report + PPT + Code</strong></div>
          </div>

          <div className="mk-table">
            <div className="mk-tr head">
              <span>Popular Student Project Modules</span>
              <span>Hardware &amp; Sensors</span>
              <span>Cloud / App Interface</span>
              <span>Viva Preparation Support</span>
            </div>
            <div className="mk-tr">
              <span>IoT Smart Biometric Attendance</span>
              <span>ESP32 + Optical Fingerprint + OLED</span>
              <span>Cloud Google Sheets / REST API</span>
              <span className="mk-tag" style={{ color: "#10b981" }}>Complete Synopsis &amp; Viva Q&amp;A</span>
            </div>
            <div className="mk-tr">
              <span>Automated Patient Health Monitor</span>
              <span>Pulse Oximeter + Temperature + LoRa</span>
              <span>Real-Time Mobile App Dashboard</span>
              <span className="mk-tag" style={{ color: "#10b981" }}>Full Circuit Schematic &amp; PCB</span>
            </div>
            <div className="mk-tr">
              <span>Smart Agriculture &amp; Irrigation Node</span>
              <span>Soil NPK + Relay Pump + Solar Reg</span>
              <span>Telemetry Cloud Dashboard</span>
              <span className="mk-tag" style={{ color: "#10b981" }}>Academic Distinction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── 5. 3D PRINTING STUDIO & LITHOPHANES ─────────────────────────────────────
  if (type === "3d-printing-studio" || type === "digital-manufacturing") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">3d.buildroonix.com/store</span>
          <span className="mk-badge" style={{ color: "#10b981", borderColor: "rgba(16, 185, 129, 0.4)" }}>
            Official 3D Storefront
          </span>
        </div>
        <div className="mk-body">
          <div className="mk-erp-tabs">
            <span className="active" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.4)" }}>
              <Box size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
              Live 3D Products &amp; Custom Fabrication
            </span>
            <span>Lithophane Photo Lamps</span>
            <span>Figurines &amp; Collectibles</span>
            <span>Custom Rapid Prototyping</span>
          </div>

          <div className="mk-kpi-row">
            <div className="mk-kpi"><span>Lithophane Lamps</span><strong>Heart, Curved &amp; Hex Base</strong></div>
            <div className="mk-kpi"><span>Figurines</span><strong>Anime, Models &amp; Sculptures</strong></div>
            <div className="mk-kpi"><span>Print Materials</span><strong>PLA+ · PETG · Tough Resin</strong></div>
            <div className="mk-kpi"><span>Dedicated Store</span><strong style={{ color: "#10b981" }}>3d.buildroonix.com</strong></div>
          </div>

          <div style={{ marginTop: "14px", padding: "16px", background: "rgba(16, 185, 129, 0.05)", borderRadius: "10px", border: "1px solid rgba(16, 185, 129, 0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong style={{ color: "#f8fafc", fontSize: "14px", display: "block" }}>Looking to order a customized 3D Lithophane Lamp or Figurine?</strong>
              <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0" }}>
                Visit our dedicated 3D storefront with instant photo upload, 3D previewer, and secure pan-India checkout.
              </p>
            </div>
            <a
              href="https://3d.buildroonix.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap"
              }}
            >
              Open 3D Store ↗
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Fallback default
  return (
    <div className="ui-mockup">
      <div className="mk-topbar">
        <span className="mk-dots"><i /><i /><i /></span>
        <span className="mk-url">software.buildroonix.com/system-overview</span>
        <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>Buildroonix OS</span>
      </div>
      <div className="mk-body">
        <div className="mk-flow-nodes">
          <div className="mk-flow-node"><strong>Library OS</strong><span>Manager · Admin · Superadmin</span></div>
          <div className="mk-pipe-arrow">→</div>
          <div className="mk-flow-node" style={{ borderColor: `${c}88` }}><strong>Gym OS</strong><span>Trainer · Manager · Admin</span></div>
          <div className="mk-pipe-arrow">→</div>
          <div className="mk-flow-node"><strong>3D &amp; IoT Hub</strong><span>3d.buildroonix.com</span></div>
        </div>
      </div>
    </div>
  );
}
