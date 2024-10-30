![ezgif com-optimize(21)](https://github.com/user-attachments/assets/d9f21d8c-a122-4787-9ba4-15f7e12e5f93)

# Forkify 🍲

Forkify is a recipe web application built with **pure HTML, CSS, and JavaScript**, bundled with **Parcel** for a streamlined development experience. This project is designed to provide in-depth practice with JavaScript fundamentals, setting a solid foundation for understanding its applications in frameworks like React, Vue, and Angular. Forkify connects to an API by [Jonas Schmedtmann](https://x.com/jonasschmedtman), allowing users to search, view, and add recipes with real-time updates and feedback.

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

Forkify offers a dynamic recipe browsing experience with the following features:

- **Search Recipes**: Find recipes with ease from a vast API database.
- **View and Scale Recipes**: Display recipe details, adjust servings, and update ingredient quantities.
- **Custom Recipes**: Add new recipes to personalize the library.
- **Error and Success Feedback**: Real-time messaging to improve user interactions.
- **Responsive Design**: Optimized for all devices.

## Project Motivation

Forkify is a hands-on project to dive deep into JavaScript, applying core programming concepts and preparing for advanced frameworks. This project is a comprehensive practice ground for foundational JS principles, API integration, and the use of modern bundlers like Parcel.

## Features

### Version 2.4 Updates

1.  **Search Functionality**

    - Users can search recipes by keyword, with results fetched from the API.
    - A loading spinner provides feedback during load times, and clear error messages notify users when searches don't return results.

2.  **Enhanced User Feedback**

    - Error and success messages provide real-time responses, improving user experience.

3.  **File Structure Improvements**

    - A `View.js` parent file organizes common view functionalities, enhancing code modularity and maintainability.

### Previous Versions Highlights

- **MVC Architecture**: Modular architecture based on the Model-View-Controller pattern.
- **Publisher-Subscriber Pattern**: Supports loose coupling and clear data flow within the MVC framework.
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

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.**

**Usage Restrictions**: Forkify is available solely for viewing and learning purposes. No commercial use, resale, or teaching distribution is allowed.
