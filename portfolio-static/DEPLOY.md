# Deploy: Vercel + Namecheap HTTPS

Static export of the .NET portfolio (generated from Pages/*.cshtml).
Root Directory on Vercel = portfolio-static

1. Push whole repo to GitHub (existing repo srinivasan-portfolio is fine)
2. vercel.com → Add New → Project → Import srinivasan-portfolio
   - Framework Preset: Other
   - Root Directory: portfolio-static   ← IMPORTANT
   - Build/Output/Install commands: empty
3. Deploy → test *.vercel.app URL
4. Settings → Domains → add srinivasand.com + www.srinivasand.com
5. Namecheap → Advanced DNS: delete old Azure records, add
   A     @    76.76.21.21
   CNAME www  cname.vercel-dns.com
6. HTTPS automatic (Let's Encrypt). Verify: https://srinivasand.com

To regenerate after editing .cshtml files: ask Claude to rebuild, or edit
the HTML in this folder directly.
