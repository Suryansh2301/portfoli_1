# Suryansh Kumar Pathak — Portfolio

A two-part project: a static frontend and a small Node/Express backend
that serves it and hands out the resume as a real file download.

## What's in this update

- **Photo**: your actual headshot is wired in — a gradient-framed photo
  card in the hero, plus a small circular avatar in the nav bar.
  Lives at `frontend/assets/profile.jpg`.
- **Color-coded skills**: each of the 6 skill categories has its own
  accent color (amber, rose, teal, sky blue, green, violet) applied to
  both the heading and the tag pills.
- **View Code buttons**: every project card has a "View Code" link
  with a GitHub icon. They currently point at your GitHub profile as
  a placeholder — swap in each project's real repo URL (look for the
  `<!-- TODO -->` comments in `frontend/index.html`).
- **Fixed**: the hero's "Download Resume" button was pointing at a
  static file path that the server never actually exposes
  (`/backend/files/...`) — it now uses the working `/api/resume/pdf`
  route, same as the button in the Contact section. Also fixed a
  filename mismatch between `server.js` and the file in
  `backend/files/` — both now consistently use
  `Suryansh_Kumar_Pathak_Resume.pdf`. Also closed a missing `</div>`
  in the Contact section.

## Structure

```
portfolio/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── profile.jpg
├── backend/
│   ├── server.js
│   ├── package.json
│   └── files/
│       └── Suryansh_Kumar_Pathak_Resume.pdf
├── .gitignore
└── README.md
```

## Running it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
cd backend
npm install
npm start
```

Then open **http://localhost:3000**.

## Still to do

Replace the 4 placeholder `View Code` links in `frontend/index.html`
with each project's actual GitHub repo URL:
- RAG Copilot
- Customer Support RAG Assistant
- AI Medical Assistant
- IMDB Sentiment Analysis

## Deploying

Any Node host works. On Render: root/start directory `backend/`,
build command `npm install`, start command `npm start`. `server.js`
already reads `process.env.PORT`, so no code changes are needed.

## Updating content

```drawio width=800
<mxfile>
  <diagram id="default" name="Page-1">
    <mxGraphModel>
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```


- **Resume**: replace `backend/files/Suryansh_Kumar_Pathak_Resume.pdf`
  — keep the exact filename, or update the path in `server.js` to match.
- **Photo**: replace `frontend/assets/profile.jpg` — keep the exact
  filename, or update the two `src="assets/profile.jpg"` references
  in `frontend/index.html`.
- **Page copy**: edit `frontend/index.html` directly.
- **Colors/fonts/spacing**: edit `frontend/style.css`.
