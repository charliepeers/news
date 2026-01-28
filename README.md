# :newspaper: The Charlie Times #

Is a minimal news app that renders US tech headlines alongside local Hanover weather. Built as a companion project to Dalibird to fill gaps in my learning.

Live site: [Visit The Charlie Times](https://charlietimes.xyz)

### Why I built The Charlie Times ###

After two weeks building Dalibird, I noticed gaps in my skills. Dalibird taught me backend routing, authentication, and component architecture, but I hadn't practiced:

Working with external APIs. Dalibird used my own backend. I wanted experience reading third-party documentation and handling real API responses.

Fetching data on the frontend. Dalibird's data came from my Express server. I wanted to practice fetch() and useEffect() directly in React.

Mobile responsiveness. Dalibird's layout worked on desktop. I hadn't tested or built for smaller screens.

### Technical Decisions ###
Here are a couple questions you may be asking yourself:

Why two APIs? 
I wanted practice parsing different JSON structures. WeatherAPI returns nested objects (json.current.temp_f). NewsData returns an array (json.articles). Handling both forced me to understand how APIs structure their responses differently.

Why no backend? 
Intentional. Dalibird already taught me Express routing. Here, I wanted to isolate frontend skills: useEffect for data fetching, useState for storing responses, and .map() for rendering lists.

Why environment variables? 
API keys shouldn't be hardcoded. I used Vite's import.meta.env to keep keys out of the codebase. This is standard practice, and I wanted to learn it now rather than fix bad habits later. This was also important if I wanted to later deploy it to Vercel.

Why this CSS approach? 
I kept styling simple to practice responsive design fundamentals: @media queries, flex-direction changes, and fluid image sizing.

### What I Learned ###
Reading documentation matters. WeatherAPI and NewsData have different authentication methods, rate limits, and response formats. I spent time in both docs before writing code. This was slower than Googling examples, but I understood the APIs better.

useEffect dependencies are tricky. I initially forgot the empty dependency array [], which caused infinite re fetching. Small mistake but it taught me how React's render cycle works.

Mobile-first would have been easier. I built the desktop layout first, then added media queries for mobile. Next time I'd start with mobile and scale up as this ensures there is less CSS to override.

### How to Run ###
## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
VITE_KEYONE=weatherapi_key
VITE_KEYTWO=newsapi_key
```

3. Start the development server:
```bash
npm run dev
```

### How I would Improve This Project ###
As of now errors just log to the console. I'd add user facing error states so users actually know when something breaks.

NewsData has rate limits. I'd cache responses so the app doesn't hit the API on every refresh.

The page is blank while data fetches. A spinner would make the wait feel shorter.

Note: The quality of these articles isn't great because it's a free API. I believed that the learning experience was more important than paying for an expensive API.

## Happy reading! ##