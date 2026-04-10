# AI Customer Support Bot — Business-in-a-Box

## Package Overview
- **Vertical:** AI Automation
- **Setup Fee:** $3,500
- **Monthly Retainer:** $500/mo
- **Delivery Timeline:** 10 days
- **Stripe Product:** prod_dynasty_ai_support

---

## 1. SALES PLAYBOOK

### Ideal Client Profile
- **Industry:** AI Automation-adjacent businesses
- **Revenue:** $500K-$5M/year
- **Pain Point:** Manual processes, tool sprawl, missed opportunities
- **Decision Maker:** Owner, CEO, COO, or Operations Manager
- **Budget:** Ready to invest in systems that generate ROI

### Qualifying Questions
1. How much time per week do you spend on manual ai automation tasks?
2. What tools are you currently using? How many overlap?
3. What would it mean for your business if this was fully automated?
4. What's your timeline for implementing a solution?
5. Have you tried solving this before? What happened?

### Objection Handling
| Objection | Response |
|-----------|----------|
| "Too expensive" | "What's the cost of NOT automating? $500/mo replaces $X,000 in manual labor." |
| "We can build it ourselves" | "You could — in 6-12 months. I deliver in 10 days because I've already built it." |
| "We need to think about it" | "Of course. The proposal is valid for 14 days. After that, pricing may change." |
| "Can you do it cheaper?" | "This is fixed-price based on proven delivery. Bundle 3+ packages for 15% off setup." |
| "What if it doesn't work?" | "Every system is proven in production. PA CROP runs 24/7 on this exact infrastructure." |

### Close Script
"Based on what you've shared, here's what I recommend: [Package Name] at $3,500 setup + $500/month. I can have it live in 10 days. Want me to send the proposal?"

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
1. **configure insighto agent** — {"action":"configure_insighto_agent","template":"customer-support","kb_articles"
2. **provision callscaler number** — {"action":"provision_callscaler_number","area_code":"{{client_area_code}}"}
3. **deploy chat widget** — {"action":"deploy_chat_widget","style":"{{client_brand}}"}
4. **configure trafft booking** — {"action":"configure_trafft_booking","services":"{{client_services}}"}
5. **create escalation rules** — {"action":"create_escalation_rules","channels":["email","slack"]}
6. **setup call recording** — {"action":"setup_call_recording","storage":"s3"}
7. **create analytics dashboard** — {"action":"create_analytics_dashboard","type":"support-metrics"}

### Deliverable Checklist
- [ ] Insighto voice agent configured and trained
- [ ] Chat widget installed on client site
- [ ] 25 knowledge base articles created
- [ ] Trafft booking integration active
- [ ] Escalation routing rules configured
- [ ] CallScaler number provisioned
- [ ] Call recording enabled
- [ ] Weekly analytics report automated
- [ ] Documentation delivered

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
- [ ] **Admin Guide** — Branded PDF delivered to client
- [ ] **User Guide** — Branded PDF delivered to client
- [ ] **Kb Template** — Branded PDF delivered to client
- [ ] **Escalation Playbook** — Branded PDF delivered to client
- [ ] **Training Video** — Branded PDF delivered to client
- [ ] **Sla** — Branded PDF delivered to client

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

### n8n Workflow: AI Customer Support Bot Onboarding

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
- **Setup revenue:** $3,500
- **Monthly recurring:** $500/mo
- **Annual recurring per client:** $6,000
- **Estimated delivery cost:** ~575/project (tools + time)
- **Gross margin:** ~85%

### Scaling Plan
| Clients | Monthly Recurring | Annual Revenue |
|---------|-------------------|----------------|
| 5 | $2,500 | $47,500 |
| 10 | $5,000 | $95,000 |
| 25 | $12,500 | $237,500 |

### Cross-Sell Opportunities
Clients who purchase this package are strong candidates for:
- Managed Hosting ($149/mo)
- AI Content Pipeline ($3,000 + $1,200/mo)
- Landing Page Conversion System ($2,000)
- Business Operations Suite ($5,500 + $800/mo)

---

## 6. CASE STUDY

### PA CROP Services
**From zero to fully automated business operations in 6 weeks**

**Key Metrics:** 146 API endpoints · 8 n8n workflows · AI voice agent · Full comms stack

**Challenge:** Client needed automated ai automation systems without scaling headcount.

**Solution:** Dynasty Empire built a comprehensive ai customer support bot system using production-grade infrastructure.

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
- Insighto
- CallScaler
- Trafft

### API Keys Required
- All keys stored in DYNASTY_TOOL_CONFIG env var
- Rotated quarterly
- Never hardcoded in client deliverables

---

*Generated by Dynasty Empire Automation Engine*
*Package ID: ai-support-bot*
*Last Updated: 2026-04-10*
