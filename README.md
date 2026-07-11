# Personal Site

Static personal website for Jingshan \"William\" Shi.

## Deployment workflow

The source of truth is the `main` branch on GitHub. Vercel is connected to this repository, so every push to `main` creates a production deployment without changing the existing domain configuration.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/index.html`.

## Editing online

For browser-based editing, make changes in the GitHub repository, commit them to `main`, and wait for the Vercel deployment to complete. The site is plain HTML, CSS, JavaScript, and local assets, with no build step required.
