# Cards of Personality (frontend)
A mobile-first multiplayer web game inspired by the popular Cards Against Humanity card game.

## How to Deploy Your Own Instance of the Game

1. Clone the [backend](https://github.com/sdennett55/cards-of-personality-backend).

2. Duplicate this [Airtable template](https://airtable.com/shr9xPObtiWFRa3gU) which holds the cards and decks data by clicking "Copy Base" in the top right of the page.

3. Add your [Airtable API key](https://airtable.com/account) to the [Heroku Dashboard](https://dashboard.heroku.com/apps) (the key name is `API_KEY`), push the repo to github, and then deploy to Heroku with this link using your github repo URL: https://heroku.com/deploy?template=URL_TO_YOUR_BACKEND_GITHUB_REPO/tree/master

4. Clone the [frontend](https://github.com/sdennett55/cards-of-personality-frontend).

5. Add the URL to your new heroku backend to `netlify.toml` and `src/config.js` and then deploy to Netlify with this link using your github repo URL: https://app.netlify.com/start/deploy?repository=URL_TO_YOUR_FRONTEND_GITHUB_REPO

7. Play the game by hitting your netlify site! Share the link with friends.

8. (Optional) Specify a deck to load via the `deck` url param, e.g. [https://yourSiteName.netlify.app?deck=safe-for-work] will only load cards from the _safe-for-work_ deck.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
