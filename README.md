# RIA Weather App Assessment

This repository contains the Vue 3-based weather app built as part of the RIA assessment. It provides hourly and daily forecasts, manual data refresh, and a “last updated” indicator, all styled with Tailwind CSS and powered by the OpenWeather API.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Local Development](#local-development)
- [Next Hours Section](#next-hours-section)
- [Next Days Section](#next-days-section)
- [Manual Refresh Feature](#manual-refresh-feature)
- [Last Updated Footer](#last-updated-footer)
- [Future Enhancements](#future-enhancements)
- [Branching Strategy](#branching-strategy)
- [Testing](#testing)

---

## Project Overview

This repository contains a Vue 3 application that displays weather data for a selected city. Users can view hourly and daily forecasts, manually refresh the data, and see a timestamp of the last successful update. State is managed in the root component and passed down to presentational views.

## Tech Stack

- Vue 3 (Composition API + `<script setup>`)
- Vite for fast development and bundling
- Tailwind CSS for utility-first styling
- axios for HTTP requests
- lodash.debounce for click debouncing
- OpenWeather API (via the getWeather service)

## Installation

1. Clone the repository from the project URL
2. Install dependencies using your package manager (npm install or yarn install)
3. Create a file named `.env` in the project root with your OpenWeather API key
4. Start the development server (npm run dev)

## Local Development

- The app runs on `http://localhost:5173` by default.
- Use `npm run build` to create a production build.
- Run `npm run lint` to check for linting errors.

## Next Hours Section

This section shows the upcoming 12 hours of weather in a horizontally scrollable list.

- **Component:**
  - `HourlyForecast.vue` renders each hour as a card with temperature, humidity, icon, and time.
- **Data Source:**
  - Consumes the `hourlyData` prop (an array of `HourlyViewProps`) provided by the root via `useWeatherData`.
  - In `useWeatherData`, the first 12 entries of the OpenWeather `list` are mapped to `{ temp, humidity, icon, time }`.
- **Layout & Styling:**
  - Tailwind utility classes constrain card width, padding, and text hierarchy.
  - A wrapper `<div class="overflow-x-auto flex gap-4">` enables smooth horizontal scrolling.
- **Reactivity:**
  - Whenever `hourlyData` changes (on initial load or a manual refresh), the list re-renders automatically.

## Next Days Section

This section summarizes the next five calendar days in a clean, column-based layout.

- **Component:**
  - `DailyForecast.vue` renders each day’s icon, date + description, and hi/lo temperatures.
- **Data Source:**
  - Consumes the `dailySummaries` prop (an array of `DailySummary`) provided by the root via `useWeatherData`.
  - In `useWeatherData`, the raw list is grouped by local date, then reduced to daily summaries via `getDailySummaries(grouped)`.
- **Layout & Styling:**
  - A three-column grid:
    1. Weather icon
    2. Formatted date (e.g. “Tue, Apr 21”) + description
    3. Hi/Lo temps
  - Tailwind classes ensure consistent spacing, dividers, and responsive text sizes.
- **Reactivity:**
  - Updates automatically after each successful fetch, showing the newest mock or live data.

## Manual Refresh Feature

- Click the refresh icon in the header to manually re-fetch weather data for the current city.
- Rapid clicks are debounced (500 ms) to prevent duplicate requests.
- The refresh button is disabled while loading.

## Last Updated Footer

- After each successful data fetch, the footer displays a “Last updated” timestamp.
- The timestamp is shown in the user’s local time format.

## Future Enhancements

- **Add dynamic city search functionality**
- Show placeholders or spinners in the forecast sections while loading.
- Implement full accessibility features (ARIA labels, keyboard navigation).
- Introduce a global store (Pinia or provide/inject) for cross-cutting concerns.
- Add unit and E2E tests to cover critical user flows.

## Branching Strategy

- `main`: production-ready code
- `dev`: integration branch for feature branches
- `feature/*`: individual ticket/issue branches

## Testing

- No test
