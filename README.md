## Cloud Functions Typescript Getting Start

This is an example Firebase project for using
[TypeScript](https://www.typescriptlang.org/) with
[Cloud Functions for Firebase](https://firebase.google.com/products/functions).

### Prerequisites

1. If you don't have firebase-tools, install it: `npm install -g firebase-tools`
2. Create a Firebase Project using the Firebase Developer Console

### Install

1. Download the source code of this sample: `git clone https://github.com/w2-yamaguchi/cloudfunctions-typescript-getting-started`
2. Enter the right sample directory: `cd cloudfunctions-typescript-getting-started`
3. Configure this project to use the Firebase project you have created: `firebase use --add` and select your project in the list.
4. Install the dependencies

   ```
   cd functions
   npm install
   ```

### Run functions locally

You can run functions locally to test them before deploying to production: 

   ```
   npm run serve
   ```

### Deploying to production

   ```
   npm run build
   npm run deploy
   ```

