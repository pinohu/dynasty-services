# Multi-Entity Structuring — Business-in-a-Box

## Package Overview
- **Vertical:** Business Setup
- **Setup Fee:** $7,500
- **Monthly Retainer:** N/A
- **Delivery Timeline:** 2-4 weeks
- **Stripe Product:** prod_dynasty_biz_entity

---

## 1. SALES PLAYBOOK

### Ideal Client Profile
- **Industry:** Business Setup-adjacent businesses
- **Revenue:** $500K-$5M/year
- **Pain Point:** Manual processes, tool sprawl, missed opportunities
- **Decision Maker:** Owner, CEO, COO, or Operations Manager
- **Budget:** Ready to invest in systems that generate ROI

### Qualifying Questions
1. How much time per week do you spend on manual business setup tasks?
2. What tools are you currently using? How many overlap?
3. What would it mean for your business if this was fully automated?
4. What's your timeline for implementing a solution?
5. Have you tried solving this before? What happened?

### Objection Handling
| Objection | Response |
|-----------|----------|
| "Too expensive" | "What's the cost of NOT automating? $0/mo replaces $X,000 in manual labor." |
| "We can build it ourselves" | "You could — in 6-12 months. I deliver in 2-4 weeks because I've already built it." |
| "We need to think about it" | "Of course. The proposal is valid for 14 days. After that, pricing may change." |
| "Can you do it cheaper?" | "This is fixed-price based on proven delivery. Bundle 3+ packages for 15% off setup." |
| "What if it doesn't work?" | "Every system is proven in production. PA CROP runs 24/7 on this exact infrastructure." |

### Close Script
"Based on what you've shared, here's what I recommend: [Package Name] at $7,500 setup. I can have it live in 2-4 weeks. Want me to send the proposal?"

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
1. **analyze current entities** — {"action":"analyze_current_entities"}
2. **design holding structure** — {"action":"design_holding_structure"}
3. **file holding company** — {"action":"file_holding_company","state":"wyoming"}
4. **file operating llcs** — {"action":"file_operating_llcs","count":"{{llc_count}}"}
5. **create trust guidance doc** — {"action":"create_trust_guidance_doc"}
6. **draft inter entity agreements** — {"action":"draft_inter_entity_agreements"}
7. **create entity map** — {"action":"create_entity_map"}
8. **create compliance calendar** — {"action":"create_compliance_calendar"}

### Deliverable Checklist
- [ ] Current entity analysis complete
- [ ] Holding company designed and filed
- [ ] Operating LLCs formed (up to 3)
- [ ] Trust formation guidance document
- [ ] Inter-entity agreements drafted
- [ ] Entity map documented
- [ ] Compliance calendar for all entities
- [ ] BOI filing support provided
- [ ] Asset protection strategy documented
- [ ] Implementation review call completed

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
- [ ] **Entity Map** — Branded PDF delivered to client
- [ ] **Asset Protection Strategy** — Branded PDF delivered to client
- [ ] **Compliance Calendar** — Branded PDF delivered to client
- [ ] **Trust Guidance** — Branded PDF delivered to client

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

### n8n Workflow: Multi-Entity Structuring Onboarding

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
- **Setup revenue:** $7,500
- **Monthly recurring:** $0/mo
- **Annual recurring per client:** $0
- **Estimated delivery cost:** ~1125/project (tools + time)
- **Gross margin:** ~85%

### Scaling Plan
| Clients | Monthly Recurring | Annual Revenue |
|---------|-------------------|----------------|
| 5 | $0 | $37,500 |
| 10 | $0 | $75,000 |
| 25 | $0 | $187,500 |

### Cross-Sell Opportunities
Clients who purchase this package are strong candidates for:
- Managed Hosting ($149/mo)
- AI Content Pipeline ($3,000 + $1,200/mo)
- Landing Page Conversion System ($2,000)
- Business Operations Suite ($5,500 + $800/mo)

---

## 6. CASE STUDY

### Dynasty Entity Structure
**Multi-entity architecture for multi-generational wealth**

**Key Metrics:** Wyoming Trust · Holdings · 6+ LLCs · Asset protection

**Challenge:** Client needed automated business setup systems without scaling headcount.

**Solution:** Dynasty Empire built a comprehensive multi-entity structuring system using production-grade infrastructure.

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


### API Keys Required
- All keys stored in DYNASTY_TOOL_CONFIG env var
- Rotated quarterly
- Never hardcoded in client deliverables

---

*Generated by Dynasty Empire Automation Engine*
*Package ID: biz-entity*
*Last Updated: 2026-04-10*
