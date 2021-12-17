let rowNum = 0;
let colLetter = "B";

const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(`${process.env.GOOGLE_SPREADSHEET_ID}`);

//const creds = require("./google_sheets_client_secret.json"); -- korábban a jason fájlból olvastam ki a tokent...

// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
module.exports = async function () {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  });

  await doc.loadInfo(); // loads document properties and worksheets

  //await doc.updateProperties({ title: 'renamed doc' });

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  // read rows
  const rows = await sheet.getRows(); // can pass in { limit, offset }

  return {
    docTitle: doc.title,
    sheetTitle: sheet.title,
    sheetRowCount: sheet.rowCount,
    cell: rows[rowNum][colLetter],
  };
};
