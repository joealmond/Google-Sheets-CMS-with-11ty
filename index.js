require("dotenv").config();

const { GoogleSpreadsheet } = require("google-spreadsheet");

//const creds = require("./google_sheets_client_secret.json"); -- korábban a jason fájlból olvastam ki a tokent...

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(`${process.env.GOOGLE_SPREADSHEET_ID}`);

// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
async function accessSpreadsheet() {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(`GoogleSheet document title: ${doc.title}`);
  //await doc.updateProperties({ title: 'renamed doc' });

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(`Sheet title: ${sheet.title}, Total rows: ${sheet.rowCount}`);

  // read rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  console.log(
    `Cell content @column named "component" and @row "0": ${rows[0].component}`
  );
}

accessSpreadsheet();
