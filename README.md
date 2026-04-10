# Dynasty Empire — Done-For-You Services Portfolio

## 42 Productized Packages · 8 Revenue Verticals · 462 Assets

**Live site:** [dynasty-services.vercel.app](https://dynasty-services.vercel.app)

### Repository Contents

```
├── public/index.html              # Portfolio site (all 42 package pages)
├── sow-templates/                 # 31 package-specific SOW .docx files
├── n8n-workflows/                 # 4 production n8n workflow JSON files
│   ├── 01_master_onboarding.json  # Client onboarding (Stripe → SuiteDash → email → SMS)
│   ├── 02_post_sale_drip.json     # 9-email drip sequence
│   ├── 03_cold_outreach.json      # Cold email outreach engine
│   └── 04_proposal_generator.json # Automated proposal generation
├── assets/
│   ├── Dynasty_Empire_Pitch_Deck.pptx
│   ├── Dynasty_Empire_SOW_Template.docx (master template)
│   ├── Dynasty_Empire_Marketing_Operations_Playbook.md
│   └── Dynasty_Empire_Productized_Packages_Catalog.md
└── vercel.json                    # Vercel deployment config
```

### Per-Package Assets (embedded in portfolio site)

Each of the 42 packages includes:
1. **Sales landing page** with hero, pricing, features, personas
2. **Email outreach sequence** (4 emails per package)
3. **Social media content** (LinkedIn post + Twitter thread)
4. **Case study** (mapped to PA CROP, LeadOS-Gov, etc.)
5. **Client intake form** with package-specific fields
6. **n8n workflow spec** (onboarding steps)
7. **Proposal template** (6-section branded proposal)

### Deployment

- **Vercel:** Auto-deploys from `main` branch
- **n8n:** Import JSON files at `https://n8n.audreysplace.place`
- **SOWs:** Upload to Documentero for variable injection
- **Emails:** Import sequences into Acumbamail

### Infrastructure

- Vercel Project: `prj_fT78bXWrtnvp8O5XWFbzJDI2AhKr`
- GitHub: `pinohu/dynasty-services`
- Domain: `dynasty-services.vercel.app`

Built by Dr. Ikechukwu Ohu · Dynasty Empire LLC
