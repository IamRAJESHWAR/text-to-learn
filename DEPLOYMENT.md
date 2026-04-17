# Deployment Instructions: Text-to-Learn

## Backend (Render)

1. Push the backend code in the `server/` directory to a GitHub repository (e.g., `text-to-learn-backend`).
2. Go to Render.com and create a new Web Service.
3. Connect your GitHub and select the backend repo.
4. Set root directory to `/server` if needed.
5. Set build command: `npm install`
6. Set start command: `node server.js` or `npm run start`
7. Add environment variables:
   - PORT=5000
   - MONGO_URI=your_mongodb_connection_string
   - AUTH0_ISSUER=https://your-auth0-domain.auth0.com/
   - AUTH0_AUDIENCE=your-api-identifier
   - GEMINI_API_KEY=your-google-genai-key
   - YOUTUBE_API_KEY=your-youtube-data-api-key
8. Deploy and note the backend URL (e.g., https://text-to-learn-backend.onrender.com)

## Frontend (Vercel)

1. Push the frontend code in the `client/` directory to a GitHub repository (e.g., `text-to-learn-frontend`).
2. Go to Vercel.com and import the frontend repo.
3. Set root directory to `/client` if needed.
4. Add environment variables:
   - VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
   - VITE_AUTH0_CLIENT_ID=your-auth0-client-id
   - VITE_AUTH0_AUDIENCE=your-api-identifier
   - VITE_API_URL=https://text-to-learn-backend.onrender.com
   - VITE_YOUTUBE_API_KEY=your-youtube-data-api-key
5. Deploy and note the frontend URL (e.g., https://text-to-learn-frontend.vercel.app)

## CI/CD

- Use GitHub Actions or Vercel/Render built-in CI/CD for automated deployment on push.
- Use feature branches and Pull Requests for code review.

## Final Structure

project-root/
├── server/ # Backend (Render)
└── client/ # Frontend (Vercel)

---

Refer to the hackathon roadmap for more details and environment variable values.
