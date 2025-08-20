# vscode-portfolio
[![Open is Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/itsnitinr/vscode-portfolio)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![vscode-portfolio banner](https://imgur.com/JXJ9mpO.gif)

## Features

- 🏠 **About Page as Landing Page**: Clean introduction with professional bio
- 📚 **Publications**: Automatically synced from Google Scholar with manual override support
- 📝 **Articles**: Integration with dev.to articles
- 💼 **CV/Resume**: Professional experience and education
- 🐙 **GitHub**: Repository showcase
- 📧 **Contact**: Contact information and links
- 🎨 **Multiple Themes**: GitHub Dark, Dracula, Ayu, Nord
- 📱 **Responsive Design**: Works on all devices

## Publications System

The publications page automatically fetches your research publications from Google Scholar and supports manual overrides for adding custom links and descriptions.

### Google Scholar Setup

1. Update the `SCHOLAR_ID` in `scripts/fetch_scholar.py` with your Google Scholar ID
2. Install Python dependencies: `pip install -r requirements.txt`
3. Run the fetch script: `npm run fetch-publications`

### Manual Overrides

Edit `data/publications_overrides.yml` to add custom PDF links, videos, code repositories, or descriptions:

```yaml
your-paper-slug:
  pdf_url: "https://example.com/your-paper.pdf"
  video_url: "https://youtube.com/watch?v=your-talk"
  code_url: "https://github.com/you/your-repo"
  custom_description: "Custom description override"
  featured: true
```

### Build Integration

Publications are automatically fetched during the build process. For builds without fetching (e.g., if the service is unavailable), use:

```bash
npm run build:skip-fetch
```

## Features Roadmap

- [x] Publications with Google Scholar integration
- [x] About page as landing page  
- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

For fetching your articles from dev.to, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
