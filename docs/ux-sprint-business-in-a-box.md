# UX Research Sprint (2-Week) — Business-in-a-Box

## Package Overview
- **Vertical:** UX Research
- **Setup Fee:** $10,000
- **Monthly Retainer:** N/A
- **Delivery Timeline:** 2 weeks
- **Stripe Product:** prod_dynasty_ux_sprint

---

## 1. SALES PLAYBOOK

### Ideal Client Profile
- **Industry:** UX Research-adjacent businesses
- **Revenue:** $500K-$5M/year
- **Pain Point:** Manual processes, tool sprawl, missed opportunities
- **Decision Maker:** Owner, CEO, COO, or Operations Manager
- **Budget:** Ready to invest in systems that generate ROI

### Qualifying Questions
1. How much time per week do you spend on manual ux research tasks?
2. What tools are you currently using? How many overlap?
3. What would it mean for your business if this was fully automated?
4. What's your timeline for implementing a solution?
5. Have you tried solving this before? What happened?

### Objection Handling
| Objection | Response |
|-----------|----------|
| "Too expensive" | "What's the cost of NOT automating? $0/mo replaces $X,000 in manual labor." |
| "We can build it ourselves" | "You could — in 6-12 months. I deliver in 2 weeks because I've already built it." |
| "We need to think about it" | "Of course. The proposal is valid for 14 days. After that, pricing may change." |
| "Can you do it cheaper?" | "This is fixed-price based on proven delivery. Bundle 3+ packages for 15% off setup." |
| "What if it doesn't work?" | "Every system is proven in production. PA CROP runs 24/7 on this exact infrastructure." |

### Close Script
"Based on what you've shared, here's what I recommend: [Package Name] at $10,000 setup. I can have it live in 2 weeks. Want me to send the proposal?"

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
1. **schedule problem framing workshop** — {"action":"schedule_problem_framing_workshop"}
2. **create research plan** — {"action":"create_research_plan"}
3. **recruit participants** — {"action":"recruit_participants","count":8}
4. **conduct interviews** — {"action":"conduct_interviews","count":8}
5. **perform affinity mapping** — {"action":"perform_affinity_mapping"}
6. **synthesize insights** — {"action":"synthesize_insights"}
7. **create findings deck** — {"action":"create_findings_deck"}
8. **schedule handoff presentation** — {"action":"schedule_handoff_presentation"}

### Deliverable Checklist
- [ ] Problem framing workshop completed
- [ ] Research plan documented
- [ ] 5-8 participants recruited and interviewed
- [ ] Interview recordings and transcripts
- [ ] Affinity mapping and thematic analysis
- [ ] Insight synthesis document
- [ ] Findings deck (20-30 slides)
- [ ] Prioritized recommendations
- [ ] Handoff presentation delivered

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
- [ ] **Research Plan** — Branded PDF delivered to client
- [ ] **Interview Guide** — Branded PDF delivered to client
- [ ] **Findings Deck** — Branded PDF delivered to client
- [ ] **Recommendations Doc** — Branded PDF delivered to client

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

### n8n Workflow: UX Research Sprint (2-Week) Onboarding

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
- **Setup revenue:** $10,000
- **Monthly recurring:** $0/mo
- **Annual recurring per client:** $0
- **Estimated delivery cost:** ~1500/project (tools + time)
- **Gross margin:** ~85%

### Scaling Plan
| Clients | Monthly Recurring | Annual Revenue |
|---------|-------------------|----------------|
| 5 | $0 | $50,000 |
| 10 | $0 | $100,000 |
| 25 | $0 | $250,000 |

### Cross-Sell Opportunities
Clients who purchase this package are strong candidates for:
- Managed Hosting ($149/mo)
- AI Content Pipeline ($3,000 + $1,200/mo)
- Landing Page Conversion System ($2,000)
- Business Operations Suite ($5,500 + $800/mo)

---

## 6. CASE STUDY

### AWS Fintech + Gannon
**Academic rigor meets industry speed**

**Key Metrics:** 332 citations · h-index 8 · $2B+ decisions informed

**Challenge:** Client needed automated ux research systems without scaling headcount.

**Solution:** Dynasty Empire built a comprehensive ux research sprint (2-week) system using production-grade infrastructure.

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
*Package ID: ux-sprint*
*Last Updated: 2026-04-10*
