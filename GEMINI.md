# Project Overview

This is a **Code Project**.

This project, named **Pix UI**, is an Ember addon that implements the Pix design system. It provides a set of UI components for use in other Ember applications. The project also includes a Storybook that serves as a component library for visualization and development.

## Building and Running

### Prerequisites

*   Node.js (version 20, 22, or 24)
*   Ember CLI

### Installation

```bash
git clone https://github.com/1024pix/pix-ui.git
cd pix-ui
npm install
```

### Development

To run the Storybook for component development:

```bash
npm run storybook
```

This will start a local development server and open the Storybook in your browser.

### Building

To build the addon for production:

```bash
npm run build
```

### Testing

To run the test suite:

```bash
npm test
```

## Development Conventions

*   **Component Scaffolding**: New components can be created using the command: `ember g pix-component <component-name>`.
*   **Linting**: The project uses ESLint for JavaScript, Stylelint for SCSS, and Ember Template Lint for Handlebars templates. Linting can be run with `npm run lint`.
*   **Dependencies**: The project uses a variety of dependencies, including Ember, Storybook, and various testing and linting tools. Dependencies are managed in `package.json`.
*   **CI/CD**: The project uses CircleCI for continuous integration, as indicated by the `.circleci/config.yml` file.
*   **Storybook**: The project uses Storybook for component documentation and visualization. Stories are located in the `stories` directory.
*   **SVG Icons**: The project has a system for generating SVG sprites. The commands for this are in the `package.json` file under the `svg:` prefix.
