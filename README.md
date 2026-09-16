# RISE Lab: Sumon Datta’s website

This website is prepared for `https://rise-lab.github.io/`. It has not been
published. That address requires access to the GitHub account or organization
named `rise-lab`.

## Publish on GitHub Pages

1. Sign in to the GitHub account that manages `rise-lab`.
2. Create a public repository named `rise-lab.github.io`. If it already exists,
   check its contents before replacing any files.
3. Extract the ZIP and upload its contents to the repository root on `main`.
   Include `index.html`, `assets`, `.nojekyll`, and this README. Upload the files,
   not the ZIP or the folder containing them.
4. Under **Settings > Pages**, select **Deploy from a branch**, then `main`
   and `/ (root)`.
5. When deployment finishes, select **Visit site** and check the page,
   photos, and CV download.

GitHub’s [setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
cover these steps. A custom domain is optional. If you do not control `rise-lab`,
you will need another account name or a domain you own.

The existing [ChatGPT site](https://irrigation.sumon-datta.chatgpt.site) is unchanged.

## Edit the website

Open `index.html` in a text editor. Each section starts with a comment such as
`SECTION: ABOUT`. Change the text, save the file, and upload it to GitHub.
You can preview the page locally by opening `index.html` in a browser.
No build step is needed.

The page includes research, grants, publications, lab members, photos, teaching,
OASIS, and contact details. The figures and professional information were updated
in September 2026. Award totals include funding shared with collaborators;
each grant also shows the portion for Sumon Datta’s program.

Entries in Grants, Publications, and Extension Factsheets are numbered from
highest to lowest. Their existing year order is preserved. Courses Taught and
Background have no item numbers. Most numbered lists count automatically with HTML’s `reversed` attribute.
The three grant lists use `start` values of 25, 3, and 1 so the count continues
across institutional groups. Update those values when you add a grant.

### News & Updates

News appears as a list of dates, headlines, and links. The newest ten entries
show first. **See more** opens all older entries in the same section, and
**See less** closes them. The section is currently empty, ready for the headlines
and links you choose.

To add an update:

1. In `index.html`, find `SECTION: NEWS`.
2. Paste the template below inside the empty `<ul id="news-list">` element
   (which also has `class="news-list"`).
3. Give it an unused ID, such as `news-1`.
4. Set `data-date` and `datetime` to the post’s date in `YYYY-MM-DD` format.
   Update the date shown on the page too.
5. Write a short headline in `class="news-title"`.
6. Paste the full LinkedIn or Facebook post URL into the link’s `href`.
   Change the visible link label to `LinkedIn ↗` or `Facebook ↗`, and update
   the `aria-label` to describe that post and platform.

If the same update is on both platforms, add a second link inside
`class="news-links"`. Keep `target="_blank" rel="noopener"` on each link.
The page sorts posts by date automatically. Posts with the same date stay in
the order you put them in the file.

Replace every uppercase placeholder in this template before publishing:

```html
<li class="news-item" data-date="YYYY-MM-DD" id="news-1">
  <time class="news-date" datetime="YYYY-MM-DD">MONTH DAY, YEAR</time>
  <div>
    <h3 class="news-title">YOUR HEADLINE</h3>
    <p class="news-links">
      <a href="YOUR_POST_URL" target="_blank" rel="noopener"
         aria-label="Read YOUR HEADLINE on LinkedIn">LinkedIn ↗</a>
    </p>
  </div>
</li>
```

Use your selected LinkedIn or Facebook post URLs. There is no need to copy
the full post or its photos into this section.

### Photos

1. Save a new photo in `assets` with a short filename, such as `field-day-2026.jpg`.
2. Find `SECTION: GALLERY` in `index.html` and copy one complete
   `<button class="gtile" ...>` block inside `class="gallery"`.
3. Change both `data-full` and the image’s `src` to the new file path.
4. Update `data-cap`, `alt`, and the text in `class="gcap"` with a brief caption.
5. Upload the photo and the edited `index.html` to GitHub.

The new photo will appear in the gallery and open in the photo viewer when selected.

### Student photos and advising

The four current student profiles include the supplied photos of Jacob Kettner,
Alok Pandit, Abinava Yeshwanth KJ, and Satheesh Meadi. Original files are stored
in `assets/students`. To replace a photo, keep its filename or update the matching
image path in the Lab section of `index.html`.

The Student Advising summary follows the career statistics near the top of the
page. It shows four current Ph.D. advisees, seven people directly advised
across current and past groups, and ten graduate committee memberships.
Students who continued from an M.S. to a Ph.D. are counted once in the total
of people directly advised. Committee service is reported separately.

### CV

Replace `assets/CV_main.pdf` to update the download. Keep the filename so both
CV links continue to work.

The included PDF is the latest supplied September 15, 2026 CV, unchanged. It includes
a personal cell number and detailed teaching evaluations, so review those
before publishing the PDF. The webpage uses the office phone and professional email.

### Lab name and logos

The website uses **RISE Lab**, short for **Research in Irrigation Scheduling
and Engineering**. The full name appears in the top banner, About text, and
Director titles. The supplied orange logo appears beside the name at the top
of the page and serves as the browser tab icon. Its original artwork is stored
in `assets/brand/rise-logo-orange.png`.

Funder marks are stored in `assets/logos` and link to their organizations.
Some university units use their parent university’s logo, and the Ogallala
Aquifer Program uses its USDA parent identity. Sources are recorded in
`assets/logos/SOURCES.md`. The logo files retain their original artwork and colors.

The portrait and gallery photos are included as local files. Google Fonts has
system-font fallbacks. Links to publications, OASIS, and social posts open their
respective websites.
