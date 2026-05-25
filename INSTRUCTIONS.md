# Instructions

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Requirements](#system-requirements)
3. [Initial Setup](#initial-setup)
4. [Available Commands](#available-commands)
5. [Development Commands](#development-commands)
6. [Running Scripts](#running-scripts)
7. [Best Practices](#best-practices)
8. [Documentation](#documentation)
9. [Extending the Application](#extending-the-application)
10. [External Resources](#external-resources)

## Setup and Usage Instructions

This document provides detailed information on how to set up, run, and extend the learning projects in this repository.

## Prerequisites

- **Knowledge**: Basic understanding of JavaScript (ES6+), HTML, and CSS.
- **Tools**: Node.js, npm (or yarn), and a code editor (VSCode recommended).
- **Git**: For cloning the repository.

## System Requirements

- **Node.js**: Version 10 or 12 (recommended for 2018 compatibility).
- **Package Manager**: npm 6.x or higher.
- **Operating System**: macOS, Linux, or Windows.
- **Memory**: 4GB RAM minimum for smooth development experience.

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Navigate to the specific example folder you want to run (e.g., `03/react-complete-guide`)
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Initial Setup

1. **Clone** the repository: `git clone https://github.com/orassayag/react-learning-v1.git`
2. **Explore** the directory structure to identify the learning stage you wish to start with.
3. **Ensure** your Node.js version is compatible (v10 or v12 is recommended).

## Install Dependencies

To install dependencies for a specific project:

```bash
cd <folder-path>
npm install
```

Note: Each sub-folder is an independent npm project.

## Project Structure

This repository contains numbered folders (03-27) representing progressive learning stages from the "React - The Complete Guide" course.

### Folder Organization

- **03-06**: Early React fundamentals
  - `react-complete-guide`: Basic component structure, props, state
  - `recipe-book`: Simple recipe display application
- **07-10**: Intermediate concepts
  - Styling components
  - Component lifecycle
  - HTTP requests
  - `burger-builder`: Building a burger customization app

- **11-13**: Routing and navigation
  - `routing`: React Router implementation
  - Multi-page applications
- **14-16**: State management
  - `redux`: Redux fundamentals
  - Redux middleware
  - `redux-adv`: Advanced Redux patterns

- **17-21**: Integration patterns
  - `burger-builder`: Enhanced versions with Redux and routing
  - Form handling and validation
- **22-26**: Advanced features
  - Authentication
  - Testing
  - Animations
  - CSS Modules

- **27**: Modern React
  - `hooks`: React Hooks implementation (16.8.0-alpha)

## Running Examples

### Basic Examples (03-06)

```bash
cd 03/react-complete-guide
npm install
npm start
```

The application will open at `http://localhost:3000`

## Running Scripts

To run any project script:

1. **Navigate** to the project folder.
2. **Execute** the command: `npm run <script-name>`

Commonly available scripts include `start`, `build`, and `test`.

### Burger Builder Examples (08-21)

```bash
cd 12/burger-builder
npm install
npm start
```

Features demonstrated:

- Component composition
- State management
- HTTP requests
- Routing
- Redux integration

### Redux Examples (14-16)

```bash
cd 14/redux
npm install
npm start
```

Concepts covered:

- Store configuration
- Actions and reducers
- Connecting components
- Middleware

### Hooks Example (27)

```bash
cd 27/hooks
npm install
npm start
```

Demonstrates:

- useState Hook
- useEffect Hook
- Custom Hooks
- React 16.8.0-alpha features

## Common Commands

### Development

```bash
npm start
```

Runs the app in development mode with hot reloading.

## Available Commands

- `npm start`: Launches the development server.
- `npm run build`: Bundles the app into static files for production.
- `npm test`: Starts the interactive test runner.
- `npm run eject`: Removes the single build dependency from your project.

## Development Commands

- `npm install`: Installs project-specific dependencies.
- `npm run lint`: (If available) checks for code quality issues.
- `npm run format`: (If available) formats code using Prettier.

### Build

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

### Test

```bash
npm test
```

Launches the test runner (where configured).

### Eject (Not Recommended)

```bash
npm run eject
```

Ejects from Create React App (irreversible).

## Dependencies

Each example has its own `package.json` with specific dependencies. Common dependencies include:

- **React**: 16.4.1 - 16.8.0-alpha
- **React DOM**: Matching React version
- **React Scripts**: 1.1.4 - 2.1.3
- **Redux**: (in relevant examples)
- **React Router**: (in routing examples)
- **Axios**: (for HTTP requests)
- **Radium**: (for styling in some examples)

## Notes

- This is a learning repository from October 2018
- Some examples may use older React versions
- Examples are intentionally incremental and may contain similar code with progressive enhancements
- Each folder is self-contained and can be run independently
- Some examples have multiple versions showing different approaches or bug fixes

## Troubleshooting

### Port Already in Use

If port 3000 is busy, React will prompt to use another port. Type `y` to accept.

### Node Version Issues

This project was built with Node.js from 2018. If you encounter compatibility issues:

- Try Node.js v10 or v12
- Consider using `nvm` to manage Node versions

### Missing Dependencies

If you see dependency errors:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Some examples use older tooling. If build fails:

- Check the specific example's README
- Ensure you're in the correct directory
- Verify Node version compatibility

## Learning Path

Recommended order for learning:

1. Start with `03/react-complete-guide` for basics
2. Progress through numbered folders sequentially
3. Focus on `burger-builder` variants (08, 10, 12, 13, 15, 17-21) to see evolution
4. Study `14/redux` for state management
5. Explore `11/routing` for navigation
6. End with `27/hooks` for modern React patterns

## Best Practices

- **Folder Navigation**: Always ensure you are in the correct sub-folder before running npm commands.
- **Dependency Management**: Use `npm install` within each folder as they are independent.
- **Node Version**: Use `nvm` to switch to an older Node version (v10/v12) if you encounter build errors.
- **Incremental Learning**: Don't skip folders; each builds on concepts introduced in previous ones.

## Documentation

- **Root README**: Overview of the entire repository and learning path.
- **Sub-project READMEs**: Specific details for individual learning modules.
- **Code Comments**: Implementation details and explanations within the source files.

## Extending the Application

- **Experimentation**: Use any folder as a starting point for your own experiments.
- **Cloning**: Copy a folder to a new location before making significant changes to preserve the original.
- **Integration**: Try combining features from different folders (e.g., adding Hooks to a Redux project).

## External Resources

- [Official React Documentation](https://reactjs.org/)
- [Redux Official Guide](https://redux.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Academind YouTube Channel](https://www.youtube.com/c/Academind)

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

## Last Updated

May 2026
