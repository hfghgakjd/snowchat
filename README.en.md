# SnowChat

[English](./README.en.md) | [简体中文](./README.md)

## Project Background

In the context of rapid AI development, various AI assistants are emerging, but they have the following problems:

1. Bloated with many unnecessary features.
2. Require complex server deployment and environment configuration.
3. Rely on online services and cannot be used offline.
4. Slow startup speed and high resource consumption.

SnowChat aims to solve these problems and create a one-stop AI assistant chat platform:

- **Front-end**
  - No back-end service required
  - No environment installation required
  - Supports offline use

- **Lightweight design**
  - On-demand loading of models
  - Fast cold start
  - Local priority

- **Data security**
  - All data stored locally
  - No need to worry about privacy leaks
  - Support for importing and exporting data

- **Out-of-the-box**
  - Zero configuration startup
  - No complicated deployment

## Project Goals

- Provide users with a simple and easy-to-use AI dialogue interface
- Integrate multiple AI models and provide a unified access method
- Support the assistant market to facilitate users to choose and use different types of AI assistants
- Provide complete Chinese support and localized experience
- Ensure data security and privacy protection

## Core Features

- 🤖 Intelligent dialogue: Supports multi-round dialogue and context understanding
- 🏪 Assistant market: Provides a variety of AI assistant options
- 🎯 Scenario customization: Assistant templates optimized for different scenarios
- 🔒 Secure and reliable: Data encryption storage, privacy protection
- 🌐 Multilingual support: Seamless switching between Chinese and English
- 📱 Responsive design: Supports access from various devices

## Tech Stack

- Front-end: Vue 3 + TypeScript + Tailwind CSS
- State management: Vuex/Pinia
- Routing: Vue Router
- Internationalization: Vue I18n
- Build tool: Vite
- UI components: Self-developed

## Project Structure

```txt
src/
├── assets/           # Static resources
├── components/       # Common components
├── i18n/             # Internationalization configuration
├── modules/          # Functional modules
├── router/           # Routing configuration
├── store/            # State management
├── types/            # TypeScript types
└── views/            # Page views
```

## Development Environment Setup

- Clone the project

```bash
git clone https://github.com/hfghgakjd/snowchat.git
cd snowchat
```

- Install dependencies

```bash
npm install
```

- Start the development server

```bash
npm run dev
```

## How to Contribute

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

## Open Source License

This project uses the MIT license. See the [LICENSE](LICENSE) file for details.

## Contact Information

- Project homepage: [https://github.com/hfghgakjd/snowchat](https://github.com/hfghgakjd/snowchat)

- Issue feedback: [https://github.com/hfghgakjd/snowchat/issues](https://github.com/hfghgakjd/snowchat/issues)

- Email: [snowfog@outlook.com](mailto:snowfog@outlook.com)

## Acknowledgements

Thanks to all contributors for their support of the project!
