# Srinivasan Dhakshanamoorthy Portfolio

ASP.NET Core Razor Pages portfolio for a Paris-based .NET Engineer and Data/AI Specialist.

## Tech Stack

- ASP.NET Core Razor Pages targeting .NET 10
- C# page models
- Razor views with shared layout and tag helpers
- Bootstrap, custom CSS, and vanilla JavaScript
- Static assets under `wwwroot`
- Downloadable CV PDFs under `wwwroot/CV`

## Pages

- `/` - Home page with hero, recruiter fast-scan, skill chips, company proof points, and stats.
- `/About` - Bio, CV downloads, services, language profile, trust signals, and contact flow.
- `/Experience` - Work and education timeline with category filters.
- `/Projects` - Enterprise and academic project cards, featured case studies, and GitHub evidence links.
- `/Privacy` - Privacy notice covering displayed profile data, contact data, local storage, external services, analytics, and contact.
- `/Error` - Default ASP.NET Core error page.

## Local Development

```powershell
dotnet build PortfolioWebsite.csproj --no-restore
dotnet run --no-build --urls http://localhost:5266
```

Open `http://localhost:5266/` in a browser.

## Verification Checklist

- Home: fast-scan row shows availability, location, roles, modes, and languages.
- About: testimonials/trust section appears before contact.
- About: contact form supports Gmail, default mail app, copy message, and copy email.
- Projects: featured case-study cards and open-source evidence strip appear above project cards.
- Privacy: real privacy content replaces the default template.
- Browser page source: meta description, Open Graph, Twitter card, canonical URL, and JSON-LD are present.

## Deployment Notes

The layout assumes the production domain is `https://srinivasand.com` for canonical URLs and social metadata. Update `_Layout.cshtml` if the production domain changes.
