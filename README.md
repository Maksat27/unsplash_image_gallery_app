# Unsplash Image Gallery App

This is a React application that fetches images from the Unsplash API based on user search queries. It includes a light/dark theme toggle feature, global state management using the Context API, and server state management using React Query.

## Live Demo

You can access the live app here: [Unsplash Image Gallery App](https://unsplash-image-gallery-app.netlify.app/)

## Features

- **Search Images**: Enter a search term to retrieve related images from the Unsplash API.
- **Theme Toggle**: Switch between light and dark themes.
- **Global State Management**: Manage search queries and theme preference using Context API.
- **React Query Integration**: Efficient server state management for API calls.
- **Responsive Design**: Optimized for different screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone <project url>
   ```

2. Navigate to the project directory:

   ```bash
   cd unsplash-gallery-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Unsplash API key:

   ```env
   VITE_API_KEY=your_unsplash_api_key
   ```

5. Start the app:

   ```bash
   npm start
   ```

## Usage

1. Open the app in your browser.
2. Use the search bar to enter a query (e.g., "cats") and click "search" to fetch images.
3. Toggle between light and dark themes using the theme button.
4. View the gallery of images related to your search query.

## Components

### `App`

- The main component that renders the theme toggle, search form, and gallery.

### `ThemeToggle`

- Provides a button to switch between light and dark themes.

### `SearchForm`

- Allows users to input search terms and submit the form to fetch images.

### `Gallery`

- Fetches and displays images based on the search query using the Unsplash API.
- Handles loading and error states gracefully.

### `Context`

- Manages global state for theme and search query using the Context API.
- Stores theme preference in `localStorage` for persistence.

## API

The app interacts with the [Unsplash API](https://unsplash.com/documentation).

### Endpoints:

1. **GET `/search/photos`**: Searches for photos based on a query.
   - Example Request: `https://api.unsplash.com/search/photos?client_id=your_api_key&query=cat`

## State Management

- **Context API**:

  - Manages theme preference and search query globally.
  - `toggleDarkTheme`: Toggles light/dark themes.
  - `setSearch`: Updates the current search query.

- **React Query**:
  - Handles fetching, caching, and updating image data.
  - Query Key: `["images", search]`.

## Setup Details

- **Local Storage**: Used to store the user's theme preference.
- **Environment Variables**: The Unsplash API key is securely stored in a `.env` file.

## Figma Design

You can view the Figma design of this project here:
[Figma Design Link](https://www.figma.com/design/O2MaAAlr4nznh7m53azatL/Unsplash-images?node-id=2-2&node-type=frame&t=i1iXprNSOUdR0du1-0)

## License

This project is open-source and available under the MIT License.
