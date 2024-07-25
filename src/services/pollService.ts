import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID;
const RANGE = 'Poll!A1:I2'; // Adjust the range to cover all columns for options and counts

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
    const pollData = await getPolls();
    const votesRange = `Poll!F${optionIndex + 2}`;
    const currentVotes = parseInt(pollData[1][optionIndex + 5], 10);
    const updatedVotes = currentVotes + 1;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${votesRange}?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    const response = await axios.put(url, {
      range: votesRange,
      majorDimension: 'ROWS',
      values: [[updatedVotes]],
    });

    return response.data;
  } catch (error) {
    console.error('Error submitting vote to Google Sheets:', error);
    throw error;
  }
};
