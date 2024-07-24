import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID;
const RANGE = 'Sheet1!A1:E2'; // Adjust the range as needed

export const getPolls = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
};

export const submitVote = async (optionIndex: number) => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values:batchUpdate?key=${API_KEY}`;
    const pollData = await getPolls();
    const votesRange = optionIndex === 1 ? 'Sheet1!D2' : 'Sheet1!E2'; // Adjust as per your sheet structure
    const currentVotes = parseInt(pollData[1][optionIndex + 2], 10);
    const updatedVotes = currentVotes + 1;

    const response = await axios.post(url, {
      data: {
        "requests": [
          {
            "updateCells": {
              "range": {
                "sheetId": 0,
                "startRowIndex": 1,
                "endRowIndex": 2,
                "startColumnIndex": optionIndex + 3,
                "endColumnIndex": optionIndex + 4,
              },
              "rows": [
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "numberValue": updatedVotes
                      }
                    }
                  ]
                }
              ],
              "fields": "userEnteredValue"
            }
          }
        ]
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error submitting vote to Google Sheets:', error);
    throw error;
  }
};
