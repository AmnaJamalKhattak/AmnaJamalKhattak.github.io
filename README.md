# amnajamalkhattak.github.io

Personal academic website of Amna Jamal. Live at <https://amnajamalkhattak.github.io>.

It is a small [Jekyll](https://jekyllrb.com) site. GitHub Pages builds it automatically on every push, so there is nothing to install to publish changes.

## Files

```
index.html            Homepage: intro, news, papers, current research, experience, etc.
blog/index.html       Blog page (lists every post automatically)
_posts/               Published blog posts (create this folder for the first post)
_drafts/              Templates for new posts (never published)
_layouts/default.html Shared page frame: <head>, navigation bar, footer
_includes/icons.html  Inline SVG icons (Font Awesome Free, CC BY 4.0)
theme.js              Light/dark mode toggle
_layouts/post.html    Layout for a single blog post
styles.css            All styling (colors are variables at the top, with a dark theme)
cv/Amna_Jamal_CV.pdf  CV linked from the site
images/               Photo and figures
_config.yml           Site title, description and URL
```

## Common updates

**Update the CV.** Replace `cv/Amna_Jamal_CV.pdf` with the new PDF, keeping the same file name. Every CV link keeps working.

**Add a news item.** In `index.html`, add a row at the top of the news table:

```html
<tr><th scope="row">Dec 2026</th><td>What happened.</td></tr>
```

Keep about six items visible and move older ones into the "Older news" list below it.

**Add a paper.** Copy one `<li class="paper">` block in the Research Papers section of `index.html` and change the title, authors (wrap your name in `<span class="me">`), venue and links. Add more buttons inside `paper-links` as needed, for example `<a href="...">Code</a>` or `<a href="...">arXiv</a>`.

**Add a teaser figure to a paper.** Save the image in `images/papers/` (a wide image, roughly 3:2, works best). In that paper's block, replace the `<div class="teaser placeholder">...</div>` line with:

```html
<img class="teaser" src="images/papers/your-figure.png" alt="Short description of the figure">
```

**Change a venue badge.** Edit the text of `<span class="badge">` (for example `ICLR`, `NeurIPS`, `arXiv`). Use `class="badge badge-muted"` for preprints.

**Write a blog post on this site.** Copy `_drafts/example-post.md` into `_posts/`, rename it `YYYY-MM-DD-short-title.md`, edit the front matter and write the post in Markdown.

**List a post published elsewhere** (LessWrong, Alignment Forum, Medium, Substack). Copy `_drafts/example-external-post.md` into `_posts/`, rename it with the publication date, and set `external_url` and `external_site`. The Blog page links straight to it.

## Preview locally (optional)

```bash
gem install jekyll
jekyll serve
```

Then open <http://localhost:4000>. Add `--drafts` to also see the draft templates.

## Credits

Design inspired by the [al-folio](https://github.com/alshedivat/al-folio) theme by Maruan Al-Shedivat. Icons from [Font Awesome Free](https://fontawesome.com) (CC BY 4.0).
