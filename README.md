# SnowChat

SnowChat is a Vue 3 application that provides a modular architecture with internationalization support. This project is designed to be scalable and maintainable, making it easy to add new features and support multiple languages.

## Project Structure

- **src/assets**: Contains static assets such as images, fonts, and stylesheets.
- **src/components/common**: Reusable components for various parts of the application.
- **src/i18n/locales**: Contains translation files for different languages.
  - **en.ts**: English translations.
  - **zh.ts**: Chinese translations.
- **src/i18n/index.ts**: Initializes the internationalization setup.
- **src/modules/auth**: Contains all authentication-related components, views, and state management.
  - **components**: Authentication components (e.g., login, registration).
  - **router**: Routing configurations for authentication.
  - **store**: State management for authentication.
  - **views**: View components for authentication.
- **src/router/index.ts**: Main application routing setup.
- **src/store/index.ts**: Initializes the Vuex store and combines modules.
- **src/types/index.ts**: TypeScript types and interfaces used throughout the application.
- **src/views**: Main view components of the application.
- **src/App.vue**: Root component of the application.
- **src/main.ts**: Entry point of the application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd snowchat
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm run dev
   ```

## Usage Guidelines

- To add a new language, create a new translation file in the `src/i18n/locales` directory and update the `src/i18n/index.ts` file accordingly.
- For new features, consider creating a new module under `src/modules` to maintain modularity.
- Ensure to follow the coding standards and best practices for Vue 3 and TypeScript.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.