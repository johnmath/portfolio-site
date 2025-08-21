# vscode-portfolio
[![Open is Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/itsnitinr/vscode-portfolio)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![vscode-portfolio banner](https://imgur.com/JXJ9mpO.gif)

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Papers System

The portfolio includes a papers management system for displaying academic publications with rich metadata and interactive features.

### Data Files

- **`data/papers.json`**: Generated data file containing papers with BibTeX entries
- **`data/papers_overrides.json`**: Manual overrides for custom titles, venues, abstracts, links, and other metadata

### Fields Supported

**Base fields** (from fetch script):
- `title`, `authors`, `venue`, `year`, `bibtex`

**Override fields** (in `papers_overrides.json`):
- `slug`: Unique identifier for the paper
- `custom_title`: Override the display title 
- `custom_venue`: Override the venue name
- `abstract`: Paper abstract (collapsible)
- `pdf_url`, `code_url`, `video_url`: Resource links
- `doi`: DOI identifier (creates DOI badge/link)
- `arxiv_id`: arXiv identifier (creates arXiv badge/link)  
- `tags`: Array of topic tags (displayed as badges)
- `notes`: Additional notes (collapsible, only shown if present)
- `featured`: Boolean to highlight important papers
- `custom_order`: Numeric ordering within same year

### Fetch Script

Run `node scripts/fetch_papers.mjs` to update papers data from Google Scholar. The script:
- Fetches publications for user ID `3jYQ3FsAAAAJ` 
- Merges with overrides from `papers_overrides.json`
- Generates BibTeX entries for each paper
- On fetch failure, preserves existing `data/papers.json` and logs warning

### Display Features

Papers page (`/papers`) shows:
- **Sorting**: Year desc → custom_order desc → title asc
- **Badges**: Venue, DOI (linkable), arXiv (linkable), tags, featured
- **Links row**: PDF | Code | Video (when available)  
- **BibTeX copy**: Copy to clipboard button
- **Collapsible sections**: Abstract (default collapsed), Notes (collapsed, only if present)

### Limitations

- Mock Google Scholar integration (real scraping would require additional setup)
- BibTeX generation is simplified (basic article format)
- No direct Google Scholar API (would need third-party service or scraping)

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
