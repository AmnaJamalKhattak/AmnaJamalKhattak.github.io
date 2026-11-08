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
_includes/icons.html  Inline SVG icons for the theme toggle (Font Awesome Free, CC BY 4.0)
theme.js              Light/dark mode toggle
_layouts/post.html    Layout for a single blog post
styles.css            All styling (colors are variables at the top, with a dark theme)
cv/Amna_Jamal_CV.pdf  CV linked from the site
images/               Photo and figures
_config.yml           Site title, description and URL
```

## Common updates

**Update the CV.** Replace `cv/Amna_Jamal_CV.pdf` with the new PDF, keeping the same file name. Every CV link keeps working.

**Add a news item.** In `index.html`, add a line at the top of the News list:

```html
<li><span class="date">Dec 2026</span><span>What happened.</span></li>
```

Keep about six items visible and move older ones into the "Older news" list below it.

**Add a paper.** Copy one `<li>` block in the Research Papers section of `index.html` and change the title, authors (wrap your name in `<strong>`), venue, role and the Paper link.

**Add a code link to a paper.** Each paper has a hidden Code button line:

```html
<!-- <a href="CODE-LINK" target="_blank" rel="noopener">Code</a> -->
```

Remove the `<!--` and `-->` and replace `CODE-LINK` with the repository URL. The Code button then appears next to Paper.

**Write a blog post on this site.** Copy `_drafts/example-post.md` into `_posts/`, rename it `YYYY-MM-DD-short-title.md`, edit the front matter and write the post in Markdown.

**List a post published elsewhere** (LessWrong, Alignment Forum, Medium, Substack). Copy `_drafts/example-external-post.md` into `_posts/`, rename it with the publication date, and set `external_url` and `external_site`. The Blog page links straight to it.

## Preview locally (optional)

```bash
gem install jekyll
jekyll serve
```

Then open <http://localhost:4000>. Add `--drafts` to also see the draft templates.

## Credits

Layout inspired by [Jon Barron's website](https://jonbarron.info). Icons from [Font Awesome Free](https://fontawesome.com) (CC BY 4.0).
