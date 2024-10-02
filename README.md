# Rest Countries - React Router Project

This project is a web application built using **React** and **React Router**, displaying detailed information about countries by fetching data from the [Rest Countries API](https://restcountries.com/v3.1/all). The app is fully responsive and allows users to browse all countries and view specific details about each one.

## Features

- **Home Page**: Simple homepage with navigation options.
- **Countries Page**: Displays a list of countries along with their flag, name, and a button to view more details.
- **Country Details Page**: Provides detailed information about a country including its flag, area, capital, and continent.
- **Responsive Design**: Fully responsive layout, optimized for mobile and desktop views.

## Live Demo

Check out the live demo [here](https://restcountries-react-router.netlify.app/).

## Technologies Used

- **React**: Front-end framework.
- **React Router**: For routing between different pages.
- **Rest Countries API**: External API providing country data.
- **Vanilla CSS**: Custom styling for the components and layout.

## Folder Structure

```
src/
├── assets/                 # Assets such as images, icons, etc.
├── components/             # Reusable components
│   ├── About.jsx           # About page component
│   ├── Countries.jsx       # Main page to display all countries
│   ├── Country.jsx         # Individual country card component
│   ├── CountryDetails.jsx  # Detailed country information component
│   ├── Footer.jsx          # Footer of the site
│   ├── Home.jsx            # Home page component
│   └── Navbar.jsx          # Navigation bar component
├── App.css                 # General styling of the app
├── App.jsx                 # Main app structure
├── index.css               # Global styles
├── index.js                # Entry point of the application
└── main.jsx                # Main router and layout
```

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Suprio-Das/rest-countries-react-router.git
   ```
2. Navigate to the project folder:
   ```bash
   cd rest-countries-react-router
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser to see the app.

## API Usage

The project fetches data from the [Rest Countries API](https://restcountries.com/v3.1/all), which provides detailed information about countries such as names, flags, capital, area, and continents.
