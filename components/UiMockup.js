"use client";

export function UiMockup({ type = "workflow-auto", accent = "#26a9ff" }) {
  const c = accent;

  if (type === "web-portal") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">portal.client-workspace.in/overview</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>PWA Ready</span>
        </div>
        <div className="mk-body mk-grid-2">
          <div className="mk-sidebar-mini">
            <div className="mk-nav-item active" style={{ borderLeftColor: c }}>Dashboard</div>
            <div className="mk-nav-item">Client Requests</div>
            <div className="mk-nav-item">Documents &amp; Specs</div>
            <div className="mk-nav-item">API Credentials</div>
          </div>
          <div className="mk-main-mini">
            <div className="mk-kpi-row">
              <div className="mk-kpi"><span>Active Portals</span><strong>14</strong></div>
              <div className="mk-kpi"><span>Uptime SLA</span><strong style={{ color: "#10B981" }}>99.9%</strong></div>
              <div className="mk-kpi"><span>Open Tickets</span><strong>06</strong></div>
            </div>
            <div className="mk-table">
              <div className="mk-tr head"><span>Workspace</span><span>Role</span><span>Status</span></div>
              <div className="mk-tr"><span>Client Portal v2</span><span>Admin / RBAC</span><span className="mk-tag" style={{ color: "#10B981" }}>Live</span></div>
              <div className="mk-tr"><span>Order Tracker</span><span>Customer</span><span className="mk-tag" style={{ color: "#38BDF8" }}>Synced</span></div>
              <div className="mk-tr"><span>Knowledge Base</span><span>Public Docs</span><span className="mk-tag" style={{ color: "#10B981" }}>Live</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile-app") {
    return (
      <div className="ui-mockup mk-mobile-stage">
        <div className="mk-phone">
          <div className="mk-phone-notch" />
          <div className="mk-phone-head">
            <span>FieldOps Mobile</span>
            <span className="mk-sync-pill" style={{ color: "#10B981", borderColor: "rgba(16,185,129,0.4)" }}>● Offline Ready</span>
          </div>
          <div className="mk-phone-card" style={{ borderLeft: `3px solid ${c}` }}>
            <small>TASK #INS-204 · SITE B</small>
            <strong>Sensor Node Inspection</strong>
            <div className="mk-progress"><span style={{ width: "78%", background: c }} /></div>
          </div>
          <div className="mk-phone-card">
            <small>QUEUE STATUS</small>
            <strong>3 Reports Cached in SQLite</strong>
            <p>Auto-syncs on Wi-Fi / 4G</p>
          </div>
          <div className="mk-phone-nav">
            <span style={{ color: c }}>Tasks</span><span>Sync</span><span>Alerts</span><span>Profile</span>
          </div>
        </div>
        <div className="mk-mobile-aside">
          <div className="mk-aside-card">
            <span style={{ color: "#26a9ff" }}>API Payload Sync</span>
            <strong>REST + SQLite Queue</strong>
            <p>Zero data loss in low-signal zones</p>
          </div>
          <div className="mk-aside-card">
            <span style={{ color: "#ff7212" }}>Platforms</span>
            <strong>Android · iOS · Cross-Platform</strong>
            <p>Customer, workforce &amp; IoT companion apps</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "enterprise-erp") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">erp.enterprise-suite.internal/ledger</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>RBAC Enforced</span>
        </div>
        <div className="mk-body">
          <div className="mk-erp-tabs">
            <span className="active" style={{ background: `${c}26`, color: "#F8FAFC", border: `1px solid ${c}55` }}>Inventory</span>
            <span>GST Billing</span>
            <span>HRMS &amp; Payroll</span>
            <span>CRM Pipeline</span>
            <span>LMS / Clinic</span>
          </div>
          <div className="mk-kpi-row">
            <div className="mk-kpi"><span>Purchase Orders</span><strong>42 Active</strong></div>
            <div className="mk-kpi"><span>Invoices Issued</span><strong>₹ 18.4L</strong></div>
            <div className="mk-kpi"><span>Staff Synced</span><strong style={{ color: "#10B981" }}>128 / 128</strong></div>
          </div>
          <div className="mk-table">
            <div className="mk-tr head"><span>Module</span><span>Department</span><span>Audit State</span></div>
            <div className="mk-tr"><span>Stock &amp; Godown Transfer</span><span>Warehouse</span><span className="mk-tag" style={{ color: "#10B981" }}>Verified</span></div>
            <div className="mk-tr"><span>Monthly Payroll Batch</span><span>HR &amp; Accounts</span><span className="mk-tag" style={{ color: "#38BDF8" }}>Approved</span></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "saas-tenant") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">app.saas-platform.io/tenants</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>Multi-Tenant</span>
        </div>
        <div className="mk-body">
          <div className="mk-tenant-grid">
            <div className="mk-tenant-box" style={{ borderColor: `${c}66` }}>
              <small>TENANT WORKSPACE A</small>
              <strong>Apex Fitness Hub</strong>
              <span>Plan: Pro · 420 Members · Isolated DB</span>
            </div>
            <div className="mk-tenant-box">
              <small>TENANT WORKSPACE B</small>
              <strong>Kashi Residency PG</strong>
              <span>Plan: Growth · 185 Beds · Auto Billing</span>
            </div>
            <div className="mk-tenant-box">
              <small>SUBSCRIPTION ENGINE</small>
              <strong>Tier Gating &amp; Invoices</strong>
              <span>Role Policies · Usage Quotas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ai-assistant") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">ai-workflow.buildroonix/doc-parser</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>Grounded AI</span>
        </div>
        <div className="mk-body mk-ai-split">
          <div className="mk-ai-pane">
            <small>INPUT DOCUMENT / QUERY</small>
            <div className="mk-doc-line">Invoice_#4092.pdf → OCR Extracted</div>
            <div className="mk-doc-line">SOP Query: &quot;Warranty RMA workflow?&quot;</div>
          </div>
          <div className="mk-ai-pane">
            <small>STRUCTURED OUTPUT + GUARDRAILS</small>
            <div className="mk-json" style={{ color: "#10B981" }}>{`{ "vendor": "Verified", "gstin": "Valid", "confidence": 0.99 }`}</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "api-gateway") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">api.system-core/v1/health</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>REST + GraphQL</span>
        </div>
        <div className="mk-body">
          <div className="mk-endpoint"><span className="mk-verb post">POST</span><code>/api/v1/auth/rbac-token</code><span className="mk-status" style={{ color: "#10B981" }}>200 OK</span></div>
          <div className="mk-endpoint"><span className="mk-verb get">GET</span><code>/api/v1/telemetry/devices</code><span className="mk-status" style={{ color: "#10B981" }}>200 OK</span></div>
          <div className="mk-endpoint"><span className="mk-verb post">POST</span><code>/api/v1/webhooks/payment-sync</code><span className="mk-status" style={{ color: "#38BDF8" }}>202 Queued</span></div>
          <div className="mk-endpoint"><span className="mk-verb get">GET</span><code>/graphql (schema-validated)</code><span className="mk-status" style={{ color: "#10B981" }}>Active</span></div>
        </div>
      </div>
    );
  }

  if (type === "cloud-ops") {
    return (
      <div className="ui-mockup">
        <div className="mk-topbar">
          <span className="mk-dots"><i /><i /><i /></span>
          <span className="mk-url">ops.buildroonix/pipeline-deploy</span>
          <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>Zero-Downtime</span>
        </div>
        <div className="mk-body">
          <div className="mk-pipeline">
            <div className="mk-pipe-step done">Git Push</div>
            <div className="mk-pipe-arrow">→</div>
            <div className="mk-pipe-step done">QA &amp; Build</div>
            <div className="mk-pipe-arrow">→</div>
            <div className="mk-pipe-step done">Docker / PM2</div>
            <div className="mk-pipe-arrow">→</div>
            <div className="mk-pipe-step active" style={{ borderColor: c, color: "#38BDF8" }}>NGINX + SSL</div>
          </div>
          <div className="mk-kpi-row" style={{ marginTop: "12px" }}>
            <div className="mk-kpi"><span>Container Health</span><strong style={{ color: "#10B981" }}>Healthy</strong></div>
            <div className="mk-kpi"><span>Daily Snapshots</span><strong>Encrypted</strong></div>
            <div className="mk-kpi"><span>TLS Cert</span><strong>Auto-Renew</strong></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ui-mockup">
      <div className="mk-topbar">
        <span className="mk-dots"><i /><i /><i /></span>
        <span className="mk-url">flow.automation-hub/sync</span>
        <span className="mk-badge" style={{ color: c, borderColor: `${c}44` }}>Event Driven</span>
      </div>
      <div className="mk-body">
        <div className="mk-flow-nodes">
          <div className="mk-flow-node"><strong>Trigger</strong><span>Order / IoT Event</span></div>
          <div className="mk-pipe-arrow">→</div>
          <div className="mk-flow-node" style={{ borderColor: `${c}88` }}><strong>Middleware</strong><span>Validate &amp; Transform</span></div>
          <div className="mk-pipe-arrow">→</div>
          <div className="mk-flow-node"><strong>Targets</strong><span>ERP + WhatsApp + Print</span></div>
        </div>
      </div>
    </div>
  );
}
