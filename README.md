# afterpay

Following steps are required to run the program from command line

1. Install node
   https://nodejs.org/en/download/
2. Install yarn
   https://classic.yarnpkg.com/en/docs/install/#mac-stable
3. Run `yarn install`

Now all the required packages is installed and program is ready to run.

Assumption: Csv file does not have any headers, default headers are being used

To run the test
`yarn test`

To run the program
`node -r esm index.js 1500 data.csv`
