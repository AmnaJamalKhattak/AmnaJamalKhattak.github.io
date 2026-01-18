# GitHub Pages Deployment Guide

Your portfolio is ready to deploy! Follow these steps to get it live on GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: Use your GitHub username (e.g., `AmnaJamalKhattak`) - this will make your site available at `https://amnejamalkhattak.github.io`
   - OR use a custom name (e.g., `portfolio`), but your URL will be `https://amnejamalkhattak.github.io/portfolio`
5. Description: "My research portfolio website"
6. Choose **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you instructions. Use these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main if needed (GitHub uses 'main' by default)
git branch -M main

# Push your code
git push -u origin main
```

**Important:** Replace:
- `YOUR_USERNAME` with your GitHub username (e.g., `AmnaJamalKhattak`)
- `YOUR_REPO_NAME` with your repository name

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top right of the repository)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **"Save"**

## Step 4: Access Your Website

Your portfolio will be live at:
- `https://YOUR_USERNAME.github.io` (if repository name matches username)
- OR `https://YOUR_USERNAME.github.io/REPO_NAME` (if using custom repo name)

**Note:** It may take a few minutes (up to 10 minutes) for the site to go live after enabling Pages.

## Quick Command Summary

If you need to make changes later:

```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically update when you push changes to the `main` branch.

## Troubleshooting

- **404 Error**: Wait 5-10 minutes after enabling Pages
- **Wrong URL**: Make sure the repository name matches what you set up
- **Images not loading**: Check that image paths in `index.html` are relative (e.g., `images/filename.jpg`)
- **Changes not showing**: Clear browser cache or wait a few minutes

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Getting Started](https://pages.github.com/)
