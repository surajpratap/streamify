# Running the app

- `npm install`
- `npm dev`

# Build and run

- `npm run build`
- `npm start`

# Deployment

- `https://streamify-ten-drab.vercel.app/reports`
- Deploys at vercel after each push

# Run tests

- `npm test`

# Thought process

- Start with basic typescript nextjs app
- In `app` each page has its own folder as per nextjs convention
- The root page and its components are in `app` directly
- Data is fetch on server side only
- While data is loading next js would should loading.tsx from each page's folder
- To minimize the loading time, the data is fetched in parallel and memoized based on route and query params
- Using latest nextjs and conventions to do most of the work on server so that components can be streamed by nextjs

# Improvements

- Add more tests
- Use network based data mocks
- Use lazy load for all conditional components where ever possible
