# RISE Lab website

The reported live address is https://sumondatta.github.io/rise-lab/.
This package has nine content pages, arranged in the navigation order below,
plus six small redirect pages that preserve links to the former pages. Upload
all HTML files and the assets folder for this upgrade. The existing live site
changes only after you upload and commit.

## Publish this update

1. Extract the ZIP on your computer.
2. Open the existing `sumondatta/rise-lab` repository on GitHub.
3. Check for newer edits you made directly on GitHub before replacing files.
4. Select Add file > Upload files. Drag all extracted HTML files and the `assets`
   folder into the upload area, keeping their folder structure. Include `.nojekyll`
   and this README. Upload the contents, not the ZIP or its enclosing folder.
5. Commit to the publishing branch (normally `main`). Keep Pages configured as
   Deploy from a branch, `main`, `/ (root)`.
6. After deployment, open the homepage and check navigation, photos, and the CV.

All internal paths are relative, so the site works under `/rise-lab/` and at a
root domain. The name `rise-lab.github.io` requires an account or organization
named `rise-lab`, owning a repository named `rise-lab.github.io`.

## Pages and tab order

| Tab | Page | File | Contents |
| --- | --- | --- | --- |
| 1 | Home | index.html | Introduction, career statistics, About, Background, Student Advising, and Research |
| 2 | Grants | grants.html | Grants, funding totals, and funder logos |
| 3 | OASIS | oasis.html | OASIS tool |
| 4 | Lab Members | lab.html | Current and past lab members, student photos |
| 5 | Publications | publications.html | Publications and Extension factsheets |
| 6 | Teaching | teaching.html | Courses taught |
| 7 | Photos | photos.html | Photo gallery |
| 8 | News & Events | news.html | News headlines and selected links |
| 9 | Join the Lab | join.html | Joining the lab |

Edit these nine content pages directly. Shared appearance is in `assets/site.css`.
Navigation and footer markup are present in each content page. Update all nine
if changing the navigation or shared contact information. No build is required.

The former `about.html`, `background.html`, `advising.html`, and `research.html`
pages redirect to their corresponding sections on Home. `cv.html` redirects
to the Home footer, where the CV download and contact details remain. The former
`funders.html` page redirects to the funders section on Grants. These files are
compatibility redirects, not additional tabs. Keep them in the upload so older
bookmarks continue to work. Old homepage links such as `index.html#publications`
also redirect to the matching page.

## Google Analytics: retain in all future versions

Measurement ID: **G-CRK8LJ3YY7**.
Every content page includes one async Google tag and one configuration call in its
head. Preserve this ID on every existing page and add it to every future page.
Do not add a second tag. Page views distinguish the nine content pages. The six
compatibility redirects do not send extra page views before reaching their destination.

After uploading, visit the live website and check Google Analytics > Realtime.
Initial collection can take up to 30 minutes. Enable Enhanced measurement in
your Web stream settings for file-download and outbound-link click events.
File-download events indicate clicks, not confirmed PDF reads. Your own visits
may be counted; use Analytics filtering if you want to exclude them.

Reference: https://support.google.com/analytics/answer/9304153

## Add News & Events

The page is intentionally blank until you add your chosen updates. Each item is
a date, headline, and one or more links you select, such as LinkedIn or Facebook.
The newest ten appear first. See more reveals all older items on the same page;
See less collapses them. Dates determine order, not entry numbers.

1. On GitHub, open `news.html` and select the pencil icon to edit.
2. Find `<ul class="news-list" id="news-list"></ul>`.
3. Add the item below between that opening `<ul>` and its closing `</ul>`.
   Once items exist, insert each new item inside the same list.
4. Replace the date in BOTH places, the displayed date, headline, and URL.
5. Commit changes. GitHub Pages publishes the update automatically.

Template (replace every uppercase placeholder before saving):

```html
<li class="news-item" data-date="YYYY-MM-DD">
  <time class="news-date" datetime="YYYY-MM-DD">MONTH DAY, YEAR</time>
  <div>
    <h3 class="news-title">YOUR UPDATE HEADLINE</h3>
    <p class="news-links">
      <a href="YOUR_LINKEDIN_POST_URL" target="_blank" rel="noopener">LinkedIn ↗</a>
      <a href="YOUR_FACEBOOK_POST_URL" target="_blank" rel="noopener">Facebook ↗</a>
    </p>
  </div>
</li>
```

Use full URLs starting with `https://`. Delete either `<a>...</a>` line if you
want only one link. Dates use `YYYY-MM-DD`, such as `2026-09-17`.
Use `&amp;` for an ampersand in HTML text. Keep the scripts at the bottom of the
page; `assets/news.js` sorts entries and manages See more automatically.

## Replace the CV after editing it offline

1. Export your updated CV as a PDF on your computer.
2. Rename the exported file exactly `CV_main.pdf` (capitalization matters).
3. Open the `assets` folder inside your GitHub repository.
4. Select Add file > Upload files and upload the new `CV_main.pdf` there.
5. Commit changes to the publishing branch. This replaces `assets/CV_main.pdf`.
6. After deployment, open the website and test Download CV. Refresh the PDF if
   your browser is showing a cached version.

All pages link to this SAME PDF path, so you upload the PDF once. Do not upload
a ZIP or Word document in its place. Do not change the filename unless you also
update every CV link.

The CV download and contact details are in the footer of all nine content pages.
Update the displayed CV date in those footer labels when applicable. Replacing the
PDF does NOT automatically change webpage text, publication lists, grant totals,
or student details. Those need separate
HTML edits, or you can send the updated CV here for the next website revision.
The current package includes the latest supplied September 15, 2026 PDF unchanged.

## Add photos

1. Upload a new photo into `assets` with a short name such as `field-day-2026.jpg`.
2. Open `photos.html` and copy an existing complete `<button class="gtile">`
   block in the gallery.
3. Change `data-full` and the image `src` to the new asset path.
4. Update the caption in `data-cap`, image `alt`, and `class="gcap"` text.
5. Commit the edited HTML and uploaded image.

Student photos are in `assets/students` and referenced from `lab.html`.
Alok completed his M.S. in Summer 2026, joined as a Ph.D. student in August 2026,
and studies Q-Stable for groundwater management, with expected graduation in
Spring 2030. The group has four current Ph.D. advisees. Counts of directly
advised people count M.S.-to-Ph.D. students once; committee service is separate.

## Branding and editorial preferences

Use Research in Irrigation Scheduling and Engineering (RISE) Lab.
The supplied logo is `assets/brand/rise-logo-orange.png`. Funder logos and their
source notes are in `assets/logos`. Keep the original artwork and colors.
Use natural, direct language and no en or em dashes in editable site content.
Grants, Publications, and Extension Factsheets use descending item numbers
with existing chronological order preserved. Courses Taught and Background
have no item numbers. The three grant list starts are 25, 3, and 1.
Funding totals distinguish full project awards from the share for the program.
Keep News blank until the user supplies the headlines and links to publish.
