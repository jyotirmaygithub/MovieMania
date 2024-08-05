# Movie Mania

Movie Mania is a web application built with React.js and Tailwind CSS, providing users with the latest movies and advanced filtering options. The app features infinite scrolling, a dynamic search feature, and a responsive, mobile-first UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive UI:** Mobile-first design ensuring compatibility across devices.
- **Latest Movies:** Browse the most popular movies.
- **Search:** Dynamic search for movies by title.
- **Infinite Scrolling:** Seamlessly load more movies as you scroll.
- **Advanced Filtering:** Filter movies by genre, release year range, and rating range
- **Favorite Movies:** Save and manage your favorite movies locally.
- **Accessibility:** SEO-friendly and accessible design following best practices.
- **Clean Code:** Well-structured, clean code following best practices.

## Technologies Used

- React.js
- Tailwind CSS
- Heroicons (for UI icons)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/movie-mania.git
    cd movie-mania
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following:

    ```plaintext
    REACT_APP_API_URL=https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY&page=1
    REACT_APP_IMG_PATH=https://image.tmdb.org/t/p/w1280
    REACT_APP_SEARCH_API=https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=
    ```

    Replace `YOUR_API_KEY` with your actual API key from [The Movie Database (TMDB)](https://www.themoviedb.org/).

4. **Start the development server:**

    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

- **Browse Movies:** Scroll down to load more movies using infinite scrolling.
- **Search Movies:** Use the search bar at the top to find movies by title.
- **Filter Movies:** Use the filtering options to narrow down movies by genre, release year, and rating.
- **Save Favorites:** Click on the heart icon to save movies to your favorites list.

## Environment Variables

This project requires the following environment variables to function correctly:

- `REACT_APP_API_URL`: The API URL for fetching movies.
- `REACT_APP_IMG_PATH`: The base URL for movie images.
- `REACT_APP_SEARCH_API`: The API URL for searching movies.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please make sure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
