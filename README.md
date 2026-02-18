# IRANKUNDA BADAGA Steven - Portfolio

React + Vite + Tailwind portfolio configured for Netlify deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Netlify + GitHub auto deploy

1. Push this project to a GitHub repository.
2. In Netlify, select **Add new site** -> **Import an existing project**.
3. Connect GitHub and choose the repository.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`
5. Click **Deploy site**.

After that, every push to your connected GitHub branch triggers a Netlify redeploy automatically.
