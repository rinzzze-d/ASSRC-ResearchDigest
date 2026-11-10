# ASSRC Research Digest

A static front-end website for the Ateneo Social Science Research Center (ASSRC) at Ateneo de Naga University, built during my first year of college (2025) while working as a student researcher/assistant. The digest was meant to be a central, browsable place for the center's publications and stories.

**Live demo:** https://rinzzze-d.github.io/ASSRC-ResearchDigest/

> **Status: Archived / Unfinished.** The center ultimately moved to WordPress so staff could update content without editing code. Development on this version stopped, and the repository is kept as a record of the work completed.

## Overview

The site organizes the center's output into two main areas:

- **Publications:** Journal Articles, Books, Conference Papers, Project Abstracts, Infographics, Newsletters, and Manuals
- **Stories:** Events & Updates, Field Notes, and Press Releases

It also includes a shared header banner, navigation with dropdown menus, and a footer with contact details, partner networks, and quick links.

## Features Completed

- Multi-page site structure with a consistent header, logo, and footer
- Navigation bar with dropdown menus for Publications and Stories
- Landing page for each section, with card-based links to its sub-pages
- Separate page templates for each publication and story category
- Responsive viewport setup
- Footer with contact information, network partners, and external links
- Deployed on GitHub Pages

## Not Implemented

- Final content and images (several cards still use placeholder images)
- A way to add or edit entries without changing the HTML
- Search or filtering of publications
- A CMS, or content management system 
## Built With

- **HTML5**
- **CSS3**
- **JavaScript**
  
## Getting Started

No dependencies or build step required.

1. Clone the repository
   ```bash
   git clone https://github.com/rinzzze-d/ASSRC-ResearchDigest.git
   ```
2. Open `index.html` in your browser, or visit the live demo above.

## Project Structure

```
├── index.html
├── publications/
│   ├── publications.html
│   ├── journal-articles.html
│   ├── books.html
│   ├── conference-papers.html
│   ├── project-abstract.html
│   ├── infographics.html
│   ├── newsletter.html
│   └── manuals.html
├── stories/
│   ├── stories.html
│   ├── events-updates.html
│   ├── field-notes.html
│   └── press-release.html
└── assets/
    ├── images/
    ├── script.js
    └── style.css
```

## Why It Was Discontinued

The center needed a platform its researchers and staff could update on their own. In this version, every new entry meant editing HTML, so WordPress was the more sustainable choice. It was a practical decision, and it taught me early how much maintainability and the end user's technical comfort should shape technology choices.

## What I Learned

- Planning a multi-page site's information architecture around a client's content
- Building consistent layouts and dropdown navigation in plain HTML, CSS, and JavaScript
- Deploying with GitHub Pages
- Working with a real stakeholder and adapting when requirements changed

## Credits & Ownership

This project was built for the Ateneo Social Science Research Center (ASSRC), Ateneo de Naga University. The content, logos, and images are the center's. The site design and layout were provided to me as a reference, and my role was to implement them in HTML, CSS, and JavaScript as a student research assistant.

This repository is shared for portfolio purposes only and is not licensed for reuse.


## Acknowledgments

Built for the Ateneo Social Science Research Center, Ateneo de Naga University.
