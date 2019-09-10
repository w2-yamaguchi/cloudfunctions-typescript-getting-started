## Cloud Functions Typescript Getting Start

This is an example Firebase project for using
[TypeScript](https://www.typescriptlang.org/) with
[Cloud Functions for Firebase](https://firebase.google.com/products/functions).

### Project Setup
1. If you don't have firebase-tools, install it: `npm install -g firebase-tools`
2. Create a Firebase Project using the Firebase Developer Console
3. Download the source code of this sample: `git clone https://github.com/firebase/functions-samples`
4. Enter the right sample directory: `cd cloudfunctions-typescript-getting-started`
5. Configure this project to use the Firebase project you have created: `firebase use --add` and select your project in the list.
6. Install the dependencies and deploy
   ```
   cd functions
   npm install
   npm run build
   npm run deploy
   ```
