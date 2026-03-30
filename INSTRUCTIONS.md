# Instructions

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

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
