#!/usr/bin/env node
/**
 * Generates individual optimized HTML landing pages AND
 * complete business-in-a-box documentation for every package
 */
const fs = require("fs");
const path = require("path");
const { PACKAGES } = require("./provision.js");

const SITES_DIR = "/home/claude/dynasty-automation/sites";
const DOCS_DIR = "/home/claude/dynasty-automation/docs";
fs.mkdirSync(SITES_DIR, { recursive: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });

const CASE_STUDIES = {
  "AI Automation": { name: "PA CROP Services", metrics: "146 API endpoints · 8 n8n workflows · AI voice agent · Full comms stack", headline: "From zero to fully automated business operations in 6 weeks" },
  "Web Development": { name: "LeadOS-Gov + PA CROP", metrics: "Next.js 14 · Clerk · Neon · Stripe · 9-phase build spec", headline: "Production SaaS platforms shipped to live users" },
  "Directories": { name: "ImmigrationSmarts", metrics: "123 categories · 3 tiers · Stripe · Google Maps · Programmatic SEO", headline: "Niche directory launched with 3 monetization tiers" },
  "Content Production": { name: "Dynasty Video Factory", metrics: "75+ tools · 10-phase pipeline · AI production · Multi-platform", headline: "Automated content production at scale" },
  "Hosting": { name: "20i + Vercel Stack", metrics: "Pinnacle hosting · CI/CD · SSL · CDN · Monitoring", headline: "Managed infrastructure powering live production systems" },
  "Business Setup": { name: "Dynasty Entity Structure", metrics: "Wyoming Trust · Holdings · 6+ LLCs · Asset protection", headline: "Multi-entity architecture for multi-generational wealth" },
  "UX Research": { name: "AWS Fintech + Gannon", metrics: "332 citations · h-index 8 · $2B+ decisions informed", headline: "Academic rigor meets industry speed" },
  "Real Estate": { name: "Erie PA Portfolio", metrics: "Multiple properties · Creative finance · SubTo community", headline: "Real deals with real numbers in real markets" }
};

const VERTICAL_COLORS = {
  "AI Automation": { primary: "#38bdf8", dark: "#0c4a6e", gradient: "linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%)" },
  "Web Development": { primary: "#a78bfa", dark: "#4c1d95", gradient: "linear-gradient(135deg, #4c1d95 0%, #1a1a2e 100%)" },
  "Directories": { primary: "#4ade80", dark: "#14532d", gradient: "linear-gradient(135deg, #14532d 0%, #052e16 100%)" },
  "Content Production": { primary: "#fb923c", dark: "#7c2d12", gradient: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)" },
  "Hosting": { primary: "#60a5fa", dark: "#1e3a5f", gradient: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)" },
  "Business Setup": { primary: "#fbbf24", dark: "#78350f", gradient: "linear-gradient(135deg, #78350f 0%, #44403c 100%)" },
  "UX Research": { primary: "#c084fc", dark: "#581c87", gradient: "linear-gradient(135deg, #581c87 0%, #2e1065 100%)" },
  "Real Estate": { primary: "#f87171", dark: "#7f1d1d", gradient: "linear-gradient(135deg, #7f1d1d 0%, #1c1917 100%)" }
};

// ============================================================
// GENERATE INDIVIDUAL SITE FOR EACH PACKAGE
// ============================================================
function generateSite(id, pkg) {
  const vc = VERTICAL_COLORS[pkg.vertical];
  const cs = CASE_STUDIES[pkg.vertical];
  const priceDisplay = pkg.price > 0 ? `$${pkg.price.toLocaleString()}` : '';
  const retainerDisplay = pkg.retainer > 0 ? `$${pkg.retainer.toLocaleString()}/mo` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${pkg.name} — Dynasty Empire</title>
<meta name="description" content="${pkg.name}: ${pkg.deliverable_checklist.slice(0,3).join(', ')}. Fixed price. Production-grade. By Dynasty Empire LLC.">
<meta property="og:title" content="${pkg.name} — Dynasty Empire">
<meta property="og:description" content="${pkg.deliverable_checklist[0]}. ${priceDisplay} setup${retainerDisplay ? ` + ${retainerDisplay}` : ''}.">
<meta property="og:type" content="website">
<link rel="canonical" href="https://dynasty-services.vercel.app/${id}">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=DM+Serif+Display&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--p:${vc.primary};--d:${vc.dark};--bg:#09090b;--card:#18181b;--border:#27272a;--text:#fafafa;--muted:#a1a1aa;--dim:#71717a}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
a{color:var(--p);text-decoration:none}
.c{max-width:900px;margin:0 auto;padding:0 24px}

nav{position:sticky;top:0;z-index:50;background:rgba(9,9,11,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);height:56px;display:flex;align-items:center;padding:0 24px}
nav .logo{font-weight:900;font-size:16px}
nav .logo span:first-child{color:var(--p)}
nav .logo span:last-child{color:var(--dim)}

.hero{padding:80px 0 60px;text-align:center}
.hero .tag{display:inline-block;background:color-mix(in srgb,var(--p) 12%,transparent);border:1px solid color-mix(in srgb,var(--p) 25%,transparent);border-radius:20px;padding:6px 16px;font-size:12px;font-weight:600;color:var(--p);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px}
.hero h1{font-family:'DM Serif Display',serif;font-size:clamp(32px,5vw,52px);line-height:1.1;margin-bottom:16px;letter-spacing:-0.5px}
.hero h1 em{color:var(--p);font-style:normal}
.hero .sub{color:var(--muted);font-size:17px;max-width:560px;margin:0 auto 32px}

.stats{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:48px}
.stat{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px 28px;text-align:center;min-width:140px}
.stat .val{font-size:28px;font-weight:900;color:var(--p)}
.stat .lbl{font-size:12px;color:var(--dim);text-transform:uppercase;letter-spacing:1px;margin-top:4px}

.section{margin-bottom:48px}
.section h2{font-family:'DM Serif Display',serif;font-size:28px;margin-bottom:20px}
.section h2 em{color:var(--p);font-style:normal}

.features{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:600px){.features{grid-template-columns:1fr}}
.feat{display:flex;gap:10px;align-items:flex-start;padding:14px 16px;background:var(--card);border:1px solid var(--border);border-radius:10px}
.feat .icon{color:var(--p);font-size:16px;margin-top:2px;flex-shrink:0}
.feat span{font-size:14px;color:#d4d4d8}

.checklist{list-style:none}
.checklist li{padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;color:#d4d4d8;display:flex;gap:10px}
.checklist li::before{content:'☐';color:var(--p);font-size:16px}

.case-study{background:${vc.gradient};border-radius:16px;padding:40px 32px;border:1px solid color-mix(in srgb,var(--p) 20%,transparent)}
.case-study h3{font-family:'DM Serif Display',serif;font-size:22px;margin-bottom:8px}
.case-study .headline{color:var(--muted);font-size:15px;margin-bottom:16px}
.case-study .metrics{color:var(--p);font-size:13px;font-weight:600}

.docs{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}
.doc-badge{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 16px;font-size:13px;color:#d4d4d8;display:flex;align-items:center;gap:8px}
.doc-badge::before{content:'📄';font-size:14px}

.automation{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:28px 24px}
.step{display:flex;gap:14px;margin-bottom:16px;align-items:flex-start}
.step .num{background:color-mix(in srgb,var(--p) 15%,transparent);color:var(--p);width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0}
.step .detail{font-size:14px;color:#d4d4d8}
.step .detail strong{color:var(--text);font-size:13px}

.cta{text-align:center;padding:60px 0;margin-top:32px}
.cta h2{font-family:'DM Serif Display',serif;font-size:32px;margin-bottom:12px}
.cta p{color:var(--muted);margin-bottom:28px;font-size:15px}
.cta button{background:var(--p);color:#000;border:none;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:800;cursor:pointer}
.cta button:hover{opacity:.9}

footer{border-top:1px solid var(--border);padding:32px 24px;text-align:center;color:var(--dim);font-size:12px;margin-top:40px}
</style>
</head>
<body>
<nav><div class="logo"><span>DYNASTY</span> <span>EMPIRE</span></div></nav>

<div class="c">
<section class="hero">
  <div class="tag">${pkg.vertical}</div>
  <h1>${pkg.name.replace(/&/g, '&amp;').split(' ').map((w,i) => i > 2 ? `<em>${w}</em>` : w).join(' ')}</h1>
  <p class="sub">${pkg.deliverable_checklist[0]}. Fixed price. Production-grade. Delivered in ${pkg.timeline}.</p>
  <div class="stats">
    ${pkg.price > 0 ? `<div class="stat"><div class="val">${priceDisplay}</div><div class="lbl">Setup Fee</div></div>` : ''}
    ${pkg.retainer > 0 ? `<div class="stat"><div class="val">${retainerDisplay}</div><div class="lbl">Monthly</div></div>` : ''}
    <div class="stat"><div class="val">${pkg.timeline}</div><div class="lbl">Delivery</div></div>
    <div class="stat"><div class="val">${pkg.deliverable_checklist.length}</div><div class="lbl">Deliverables</div></div>
  </div>
</section>

<section class="section">
  <h2>What <em>You Get</em></h2>
  <div class="features">
    ${pkg.deliverable_checklist.map(d => `<div class="feat"><span class="icon">✓</span><span>${d}</span></div>`).join('\n    ')}
  </div>
</section>

<section class="section">
  <h2>Automation <em>Pipeline</em></h2>
  <div class="automation">
    ${pkg.provision_steps.map((s, i) => `<div class="step"><div class="num">${i+1}</div><div class="detail"><strong>${s.action.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong></div></div>`).join('\n    ')}
  </div>
</section>

<section class="section">
  <h2>Proven <em>Results</em></h2>
  <div class="case-study">
    <h3>${cs.name}</h3>
    <div class="headline">${cs.headline}</div>
    <div class="metrics">${cs.metrics}</div>
  </div>
</section>

<section class="section">
  <h2>Documentation <em>Included</em></h2>
  <div class="docs">
    ${Object.keys(pkg.documentation).map(d => `<div class="doc-badge">${d.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>`).join('\n    ')}
  </div>
</section>

<section class="section">
  <h2>Delivery <em>Checklist</em></h2>
  <ul class="checklist">
    ${pkg.deliverable_checklist.map(d => `<li>${d}</li>`).join('\n    ')}
  </ul>
</section>

<section class="cta">
  <h2>Start Your <em>${pkg.name}</em></h2>
  <p>Book a 30-minute strategy call. No pressure — just a conversation about fit.</p>
  <button onclick="window.open('https://dynasty-services.vercel.app','_blank')">Book Strategy Call →</button>
</section>
</div>

<footer>
  <p>Dynasty Empire LLC · Dr. Ikechukwu Ohu, CEO · 924 W 23rd St, Erie, PA 16502</p>
  <p style="margin-top:8px">PhD Engineering · 332 Citations · Former AWS UX Researcher · Full Professor, Gannon University</p>
</footer>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${pkg.name}",
  "provider": {
    "@type": "Organization",
    "name": "Dynasty Empire LLC",
    "address": { "@type": "PostalAddress", "streetAddress": "924 W 23rd St", "addressLocality": "Erie", "addressRegion": "PA", "postalCode": "16502" }
  },
  "description": "${pkg.deliverable_checklist[0]}",
  ${pkg.price > 0 ? `"offers": { "@type": "Offer", "price": "${pkg.price}", "priceCurrency": "USD" },` : ''}
  "category": "${pkg.vertical}"
}
</script>
</body>
</html>`;
}

// ============================================================
// GENERATE BUSINESS-IN-A-BOX DOCS FOR EACH PACKAGE
// ============================================================
function generateBizDoc(id, pkg) {
  const cs = CASE_STUDIES[pkg.vertical];
  return `# ${pkg.name} — Business-in-a-Box

## Package Overview
- **Vertical:** ${pkg.vertical}
- **Setup Fee:** ${pkg.price > 0 ? '$' + pkg.price.toLocaleString() : 'N/A'}
- **Monthly Retainer:** ${pkg.retainer > 0 ? '$' + pkg.retainer.toLocaleString() + '/mo' : 'N/A'}
- **Delivery Timeline:** ${pkg.timeline}
- **Stripe Product:** ${pkg.stripe_product}

---

## 1. SALES PLAYBOOK

### Ideal Client Profile
- **Industry:** ${pkg.vertical}-adjacent businesses
- **Revenue:** $500K-$5M/year
- **Pain Point:** Manual processes, tool sprawl, missed opportunities
- **Decision Maker:** Owner, CEO, COO, or Operations Manager
- **Budget:** Ready to invest in systems that generate ROI

### Qualifying Questions
1. How much time per week do you spend on manual ${pkg.vertical.toLowerCase()} tasks?
2. What tools are you currently using? How many overlap?
3. What would it mean for your business if this was fully automated?
4. What's your timeline for implementing a solution?
5. Have you tried solving this before? What happened?

### Objection Handling
| Objection | Response |
|-----------|----------|
| "Too expensive" | "What's the cost of NOT automating? $${pkg.retainer}/mo replaces $X,000 in manual labor." |
| "We can build it ourselves" | "You could — in 6-12 months. I deliver in ${pkg.timeline} because I've already built it." |
| "We need to think about it" | "Of course. The proposal is valid for 14 days. After that, pricing may change." |
| "Can you do it cheaper?" | "This is fixed-price based on proven delivery. Bundle 3+ packages for 15% off setup." |
| "What if it doesn't work?" | "Every system is proven in production. PA CROP runs 24/7 on this exact infrastructure." |

### Close Script
"Based on what you've shared, here's what I recommend: [Package Name] at $${pkg.price > 0 ? pkg.price.toLocaleString() : '0'} setup${pkg.retainer > 0 ? ` + $${pkg.retainer.toLocaleString()}/month` : ''}. I can have it live in ${pkg.timeline}. Want me to send the proposal?"

---

## 2. DELIVERY PLAYBOOK

### Pre-Kickoff Checklist
- [ ] SOW signed and deposit received
- [ ] Client intake form completed
- [ ] Kickoff call scheduled (Trafft)
- [ ] Access credentials collected
- [ ] SuiteDash project created
- [ ] Slack channel created (#client-{{name}})

### Automated Provisioning Steps
${pkg.provision_steps.map((s, i) => `${i + 1}. **${s.action.replace(/_/g, ' ')}** — ${JSON.stringify(s).substring(0, 80)}`).join('\n')}

### Deliverable Checklist
${pkg.deliverable_checklist.map(d => `- [ ] ${d}`).join('\n')}

### Milestone Schedule
| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 1 | Discovery + Architecture | Requirements doc, system diagram |
| 2 | Core Build | Primary system functional |
| 3 | Integration + Testing | All integrations live, UAT |
| 4 | Launch + Handoff | Production, training, docs |

### QA Checklist
- [ ] All provisioning steps completed
- [ ] All integrations tested end-to-end
- [ ] Client UAT completed and signed off
- [ ] Documentation reviewed for accuracy
- [ ] Training video recorded and delivered
- [ ] Performance baseline established
- [ ] Monitoring and alerting configured
- [ ] Runbook reviewed with client

---

## 3. DOCUMENTATION SUITE

### Required Documents
${Object.entries(pkg.documentation).map(([doc, needed]) => needed ? `- [ ] **${doc.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}** — Branded PDF delivered to client` : '').filter(Boolean).join('\n')}

### Admin Guide Template
1. System Architecture Overview
2. Login and Access (credentials, roles)
3. Dashboard Navigation
4. Configuration Settings
5. User Management
6. Reporting and Analytics
7. Troubleshooting Common Issues
8. Support Contact Information

### User Guide Template
1. Getting Started
2. Core Features Walkthrough
3. Common Tasks (step-by-step with screenshots)
4. FAQ
5. Support Information

---

## 4. ONBOARDING AUTOMATION

### n8n Workflow: ${pkg.name} Onboarding

**Trigger:** Stripe checkout.session.completed

**Flow:**
1. Parse client data from Stripe metadata
2. Create SuiteDash contact + project
3. Send welcome email (branded HTML)
4. Send welcome SMS via SMS-iT
5. Generate SOW via Documentero
6. Schedule kickoff call (Trafft link)
7. Post to #new-clients Slack channel
8. Start onboarding drip sequence

**Drip Sequence:**
- Day 1: "Here's what to expect this week"
- Day 3: "Please complete your intake form" (if not done)
- Day 7: "Week 1 progress update"
- Day 14: "Halfway check-in"
- Day 21: "Final week — launch prep"
- Day 30: "You're live! Retainer details"
- Day 45: "How's everything running?"
- Day 60: "30-day retainer review"
- Day 90: "Quarter review — cross-sell opportunity"

---

## 5. PRICING & REVENUE MODEL

### Package Economics
- **Setup revenue:** $${pkg.price > 0 ? pkg.price.toLocaleString() : '0'}
- **Monthly recurring:** $${pkg.retainer > 0 ? pkg.retainer.toLocaleString() : '0'}/mo
- **Annual recurring per client:** $${(pkg.retainer * 12).toLocaleString()}
- **Estimated delivery cost:** ~${Math.round(pkg.price * 0.15 + pkg.retainer * 0.1)}/project (tools + time)
- **Gross margin:** ~85%

### Scaling Plan
| Clients | Monthly Recurring | Annual Revenue |
|---------|-------------------|----------------|
| 5 | $${(pkg.retainer * 5).toLocaleString()} | $${((pkg.price * 5) + (pkg.retainer * 5 * 12)).toLocaleString()} |
| 10 | $${(pkg.retainer * 10).toLocaleString()} | $${((pkg.price * 10) + (pkg.retainer * 10 * 12)).toLocaleString()} |
| 25 | $${(pkg.retainer * 25).toLocaleString()} | $${((pkg.price * 25) + (pkg.retainer * 25 * 12)).toLocaleString()} |

### Cross-Sell Opportunities
Clients who purchase this package are strong candidates for:
- Managed Hosting ($149/mo)
- AI Content Pipeline ($3,000 + $1,200/mo)
- Landing Page Conversion System ($2,000)
- Business Operations Suite ($5,500 + $800/mo)

---

## 6. CASE STUDY

### ${cs.name}
**${cs.headline}**

**Key Metrics:** ${cs.metrics}

**Challenge:** Client needed automated ${pkg.vertical.toLowerCase()} systems without scaling headcount.

**Solution:** Dynasty Empire built a comprehensive ${pkg.name.toLowerCase()} system using production-grade infrastructure.

**Result:** System runs 24/7 with zero manual intervention. ROI achieved within 30 days.

---

## 7. SLA (Service Level Agreement)

### Setup Phase
- Weekly progress updates
- Deliverables per milestone schedule
- UAT within 48 hours of completion notification
- Bug fixes within 24 hours during setup phase

### Retainer Phase
- Response time: 4 hours (business hours)
- Critical issue resolution: 24 hours
- Monthly performance report
- Quarterly optimization review
- Minor adjustments: included (up to X hours/month)
- Major changes: quoted separately

---

## 8. TOOLS & INFRASTRUCTURE

### Required Tools (Dynasty Arsenal)
${pkg.provision_steps.map(s => {
  const tool = s.action.includes('n8n') ? 'n8n' : s.action.includes('suitedash') ? 'SuiteDash' : s.action.includes('insighto') ? 'Insighto' : s.action.includes('callscaler') ? 'CallScaler' : s.action.includes('smsit') ? 'SMS-iT' : s.action.includes('trafft') ? 'Trafft' : s.action.includes('acumbamail') ? 'Acumbamail' : s.action.includes('stripe') ? 'Stripe' : s.action.includes('vercel') ? 'Vercel' : s.action.includes('neon') ? 'Neon' : s.action.includes('clerk') ? 'Clerk' : s.action.includes('20i') ? '20i' : s.action.includes('github') ? 'GitHub' : s.action.includes('wordpress') ? 'WordPress' : s.action.includes('writerzen') ? 'WriterZen' : s.action.includes('bd') ? 'Brilliant Directories' : s.action.includes('documentero') ? 'Documentero' : s.action.includes('castmagic') ? 'Castmagic' : s.action.includes('subscribr') ? 'Subscribr' : null;
  return tool ? `- ${tool}` : null;
}).filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join('\n')}

### API Keys Required
- All keys stored in DYNASTY_TOOL_CONFIG env var
- Rotated quarterly
- Never hardcoded in client deliverables

---

*Generated by Dynasty Empire Automation Engine*
*Package ID: ${id}*
*Last Updated: ${new Date().toISOString().split('T')[0]}*
`;
}

// ============================================================
// EXECUTE GENERATION
// ============================================================
let siteCount = 0;
let docCount = 0;

Object.entries(PACKAGES).forEach(([id, pkg]) => {
  // Generate individual site
  const siteHtml = generateSite(id, pkg);
  fs.writeFileSync(path.join(SITES_DIR, `${id}.html`), siteHtml);
  siteCount++;

  // Generate business-in-a-box doc
  const bizDoc = generateBizDoc(id, pkg);
  fs.writeFileSync(path.join(DOCS_DIR, `${id}-business-in-a-box.md`), bizDoc);
  docCount++;
});

console.log(`\n🏛️  DYNASTY EMPIRE — Asset Generation Complete`);
console.log(`   ✅ ${siteCount} individual package websites generated`);
console.log(`   ✅ ${docCount} business-in-a-box documents generated`);
console.log(`   📁 Sites: ${SITES_DIR}`);
console.log(`   📁 Docs: ${DOCS_DIR}\n`);
