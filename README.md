![ezgif com-optimize(22)](https://github.com/user-attachments/assets/47060a67-0e0f-4147-82e5-f5af2577d63c)

# Forkify 🍲

Forkify is a recipe web application built with **pure HTML, CSS, and JavaScript**, bundled with **Parcel** for a streamlined development experience. This project is designed to provide in-depth practice with JavaScript fundamentals, setting a solid foundation for understanding its applications in frameworks like React, Vue, and Angular. Forkify connects to an API by [Jonas Schmedtmann](https://x.com/jonasschmedtman), allowing users to search, view, and add recipes with real-time updates, feedback, and pagination.

## Table of Contents

1.  [Overview](#overview)
2.  [Project Motivation](#project-motivation)
3.  [Features](#features)
4.  [Technologies Used](#technologies-used)
5.  [Setup and Installation](#setup-and-installation)
6.  [Usage](#usage)
7.  [Acknowledgements](#acknowledgements)
8.  [Author](#author)
9.  [Contributing](#contributing)
10. [License](#license)

## Overview

Forkify offers a dynamic recipe browsing experience with features like:

- **Search Recipes**: Search for recipes from a vast API database.
- **Pagination**: Browse recipes with a clean and organized display of results.
- **Recipe Details and Scaling**: View ingredients and instructions, adjust servings, and update ingredient quantities.
- **Add Custom Recipes**: Add new recipes to personalize your library.
- **Real-time Feedback**: Success and error messages for improved user experience.
- **Responsive Design**: Optimized for mobile and desktop devices.

## Project Motivation

Forkify is a hands-on project to dive deep into JavaScript, applying core programming concepts and preparing for advanced frameworks. This project is a comprehensive practice ground for foundational JS principles, API integration, and the use of modern bundlers like Parcel.

## Features

### Version 2.5 Updates

1.  **Pagination**:

    - Pagination limits results to **10 recipes per page** by default, providing a better user experience by making it easier to navigate and view recipes.
    - Pagination settings are configurable in `config.js`, making adjustments easy for specific needs.

2.  **Enhanced Modularity with MVC**:

    - Forkify maintains a modular architecture through the Model-View-Controller (MVC) pattern.
    - The codebase is structured to support scalability, allowing for easy updates and additions.

### Previous Versions Highlights

- **MVC Architecture Implementation**: Improved code structure with a clear separation of concerns, supporting flexible expansion.
- **Publisher-Subscriber Pattern**: Enhances modularity and data flow within the MVC framework.
- **Helper and Config Files**: Centralized utility functions and configuration settings for easy maintenance.

## Technologies Used

- **HTML5**: Structure and semantics.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6+)**: Core functionality and logic.
- **Parcel**: Bundler for optimized builds and development.
- **API**: Forkify API by Jonas Schmedtmann.

## Setup and Installation

1.  **Clone the repository**:

    ```
    git clone https://github.com/JS-GodMode/forkify-walkthrough.git

    cd forkify-walkthrough
    ```

2.  **Install Node.js and Parcel** (if not already installed):

    - Download and install [Node.js](https://nodejs.org/).
    - Install Parcel globally using npm:

      `npm install -g parcel-bundler`

3.  **Install dependencies**:

    - In the project directory, install required dependencies:

      `npm install`

4.  **Run the application**:

    - Start a development server with Parcel:

      `parcel index.html`

    - Open your browser and go to `http://localhost:1234` to view the app.

5.  **Build for production**:

    - To create an optimized production build:

      `parcel build index.html`

_Note_: Forkify relies on the Forkify API, so please ensure a stable internet connection to retrieve recipe data.

## Usage

1.  **Search Recipes**: Use the search bar to find a recipe.
2.  **Recipe Details**: Select a recipe to view ingredients and instructions.
3.  **Modify Servings**: Adjust servings to update ingredient quantities.
4.  **Add Recipes**: Enter your own recipes for a personalized collection.

_Note_: This project is intended solely for learning and personal use. Commercial or teaching use is not authorized.

## Acknowledgements

Thanks to **Jonas Schmedtmann** for providing the API and inspiration for this project.

## Author

**Swarnavo Khanra**\
A passionate web developer focused on mastering JavaScript and its applications across various frameworks. Connect with me on [LinkedIn](https://in.linkedin.com/in/swarnavo-khanra) or follow me on [GitHub](https://github.com/Anonav0).

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add your feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a pull request.

## License

> This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**. For more details, see the LICENSE file.

**Usage Restrictions**: Forkify is available solely for viewing and learning purposes. No commercial use, resale, or teaching distribution is allowed.
