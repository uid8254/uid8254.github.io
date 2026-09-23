# veex.studio

Minimal information pages for **Silicon Yard**.

## URLs (for App Store / Play)

| | |
|---|---|
| Privacy | https://veex.studio/siliconyard/policy |
| Terms | https://veex.studio/siliconyard/terms |
| Contacts | https://veex.studio/siliconyard/contacts |
| Support | https://veex.studio/siliconyard/support |

Package id: `studio.veex.siliconyard` (reverse of veex.studio).

## Deploy

Point the domain to any static host and upload this folder as the site root.

### Cloudflare Pages (simple)

1. DNS for `veex.studio` → Cloudflare
2. Pages → upload `website/` or connect this repo with root `website`
3. Create mailbox / forward `support@veex.studio` (Cloudflare Email Routing or your registrar)

### Local preview

```bash
cd website && python3 -m http.server 8080
# open http://localhost:8080
```

## Email

Create or forward: `support@veex.studio` (used in privacy + support pages).
