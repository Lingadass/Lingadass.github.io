# Firebase & GitHub Setup Guide — αηιмєѕ தமிழ்

## 🔥 Firebase Console Steps

1. Go to <https://console.firebase.google.com>
2. **Create project** → name it `anime-tamil-website` (or any name you like)
3. **Authentication** → Sign-in method → Enable:
   - ✅ Email/Password
   - ✅ Google
4. **Project Settings** → Your apps → **Add Web App** → copy the config values
5. **Authentication** → Settings → Authorized domains → **Add**:
   - `YOUR_USERNAME.github.io`
6. Go to <https://console.cloud.google.com> → APIs & Services → Credentials →
   your API Key → Application restrictions → HTTP referrers → Add:
   - `https://YOUR_USERNAME.github.io/*`

---

## 🔐 GitHub Secrets Setup

Go to your repo → **Settings** → **Secrets and variables** → **Actions** →
**New repository secret** — add each of the following 6 secrets with the real values
from step 4 above:

| Secret name | Where to find it |
|---|---|
| `FIREBASE_API_KEY` | Firebase config → `apiKey` |
| `FIREBASE_AUTH_DOMAIN` | Firebase config → `authDomain` |
| `FIREBASE_PROJECT_ID` | Firebase config → `projectId` |
| `FIREBASE_STORAGE_BUCKET` | Firebase config → `storageBucket` |
| `FIREBASE_MESSAGING_SENDER_ID` | Firebase config → `messagingSenderId` |
| `FIREBASE_APP_ID` | Firebase config → `appId` |

---

## 🌐 GitHub Pages Setup

Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → choose `gh-pages` branch.

---

## 💻 Local Testing

1. Open `env-config.js` and replace all placeholder values with the real Firebase config.
2. Open `login.html` in VS Code with the **Live Server** extension.
3. Login/Sign-up should work, and after auth you'll be redirected to `index.html`.

---

## 🚀 Deploy

```bash
git add .
git commit -m "feat: add Firebase auth with secure env config"
git push origin main
```

GitHub Actions will automatically inject secrets, build, and deploy to GitHub Pages. ✅
