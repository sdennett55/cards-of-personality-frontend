# Cards of Personality (frontend)
A mobile-first multiplayer web game inspired by the popular Cards Against Humanity card game.

## How to Deploy Your Own Instance of the Game

1. Create Airtable account and copy this [https://airtable.com/shr9xPObtiWFRa3gU/tbl0ejyvUH79Pnpw8/viw5Kx09PFQ2RDtev](Airtable template), which holds the cards and decks data:

2. Clone the [https://github.com/sdennett55/cards-of-personality-frontend](frontend) (this repo) and [https://github.com/sdennett55/cards-of-personality-backend](backend) repos, which we will deploy to Netlify and Heroku respectively.

3. Deploy frontend to Netlify via the "Deploy to Netlify" button in the README.

4. Add your [https://airtable.com/account](Airtable API key) to the `backend/app.json` file and then click the "Deploy to Heroku" button from the README.

5. Play the game by hitting your netlify URL! Share the link with friends.

6. (Optional) Specify a deck to load via the `deck` url param, e.g. [https://yourSiteName.netlify.app?deck=safe-for-work] will only load cards from the safe-for-work deck.

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
