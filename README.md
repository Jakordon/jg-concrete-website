# JG Concrete Website

Built with [Astro](https://astro.build) — deployed to GitHub Pages with a custom domain.

---

## Before You Start

You'll need two things installed on your computer:

1. **Node.js** — download and install from [nodejs.org](https://nodejs.org) (click the "LTS" version)
2. **Git** — download and install from [git-scm.com](https://git-scm.com/download/win)

After installing both, restart your computer.

---

## Step 1 — Create a GitHub Account

If you don't have one yet:

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Use your email and create a password
4. Verify your email

---

## Step 2 — Create a New Repository on GitHub

A "repository" (repo) is just a folder that GitHub stores and tracks for you.

1. Log into GitHub
2. Click the **+** icon in the top right corner → **New repository**
3. Fill in:
   - **Repository name:** `jg-concrete-website`
   - **Description:** JG Concrete website (optional)
   - **Visibility:** Select **Public** (required for free GitHub Pages)
4. Leave everything else as default
5. Click **Create repository**
6. You'll see a page with some setup instructions — leave this open, you'll need it

---

## Step 3 — Open a Terminal on Your Computer

1. Press **Windows key + S** and search for **"Command Prompt"**
2. Click to open it
3. You'll see a black window with a blinking cursor — this is where you type commands

---

## Step 4 — Navigate to the Project Folder

Type the following command and press **Enter**:

```
cd "C:\Users\ysabe\OneDrive\Documents\JG Concrete Website"
```

You should see the folder path change in the terminal.

---

## Step 5 — Install Dependencies

Type this and press **Enter** (this downloads Astro and everything it needs):

```
npm install
```

Wait for it to finish — it may take 1-2 minutes. You'll see a lot of text scroll by, that's normal.

---

## Step 6 — Set Up Git in the Folder

Type each of these commands one at a time, pressing **Enter** after each:

```
git init
```

```
git add .
```

```
git commit -m "Initial commit"
```

```
git branch -M main
```

---

## Step 7 — Connect Your Folder to GitHub

Go back to the GitHub page you left open in Step 2. You'll see a line that looks like this:

```
git remote add origin https://github.com/jakordon/jg-concrete-website.git
```

Copy that exact line from GitHub (it will have your real username in it) and paste it into your terminal, then press **Enter**.

Then type:

```
git push -u origin main
```

Press **Enter**. GitHub may ask for your username and password — use your GitHub login.

---

## Step 8 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

GitHub will now automatically build and deploy your site every time you push new code.

Wait about 2-3 minutes, then go to:
`https://jakordon.github.io/jg-concrete-website`

You should see your website live!

---

## Step 9 — Connect Your Custom Domain (jgconcretedfw.com)

This makes your site load at `jgconcretedfw.com` instead of the long GitHub URL.

### In GitHub:
1. Go to your repo → **Settings** → **Pages**
2. Under **Custom domain**, type: `jgconcretedfw.com`
3. Click **Save**
4. Check **Enforce HTTPS** if it appears

### In Namecheap:
1. Log into [namecheap.com](https://namecheap.com)
2. Go to **Domain List** → click **Manage** next to `jgconcretedfw.com`
3. Click the **Advanced DNS** tab
4. Delete any existing records
5. Add these records:

| Type  | Host | Value                    | TTL       |
|-------|------|--------------------------|-----------|
| A     | @    | 185.199.108.153          | Automatic |
| A     | @    | 185.199.109.153          | Automatic |
| A     | @    | 185.199.110.153          | Automatic |
| A     | @    | 185.199.111.153          | Automatic |
| CNAME | www  | jakordon.github.io  | Automatic |

Replace `jakordon` with your actual GitHub username.

6. Click **Save All Changes**

DNS changes can take up to 24 hours, but usually work within 1-2 hours.

---

## How to Update the Site After Making Changes

Every time you make changes and want them to go live:

1. Open Command Prompt
2. Navigate to your folder:
   ```
   cd "C:\Users\ysabe\OneDrive\Documents\JG Concrete Website"
   ```
3. Run these three commands:
   ```
   git add .
   git commit -m "Update site"
   git push
   ```
4. GitHub automatically rebuilds and deploys — live in about 2 minutes

---

## How to Preview the Site Locally (on Your Computer)

To see changes before pushing them live:

1. Open Command Prompt
2. Navigate to your folder:
   ```
   cd "C:\Users\ysabe\OneDrive\Documents\JG Concrete Website"
   ```
3. Run:
   ```
   npm run dev
   ```
4. Open your browser and go to: `http://localhost:4321`

Press `Ctrl + C` in the terminal to stop the preview.

---

## Project Structure

```
JG Concrete Website/
├── .github/workflows/deploy.yml   ← GitHub auto-deploy config (don't edit)
├── public/
│   ├── images/                    ← Put all your photos here
│   └── CNAME                      ← Your domain name (don't edit)
├── src/
│   ├── components/                ← Each section of the page
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Portfolio.astro
│   │   ├── Reviews.astro
│   │   ├── QuoteForm.astro
│   │   └── Footer.astro
│   ├── layouts/Layout.astro       ← Page wrapper (HTML head, fonts, etc.)
│   ├── pages/index.astro          ← The main page
│   └── styles/global.css          ← All the styling
├── astro.config.mjs               ← Astro settings
└── package.json                   ← Project info and dependencies
```

---

## Adding New Photos

1. Copy your photo into: `public/images/`
2. Open the component you want to update (e.g., `src/components/Portfolio.astro`)
3. Add your photo to the list
4. Push the changes with `git add . && git commit -m "Add photo" && git push`

---

## Need Help?

Come back to Claude Code and describe what you want to change — Claude will update the code and walk you through pushing it live.
