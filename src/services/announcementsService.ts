import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID;
const RANGE = 'Announcements!A:A'; // Get all rows in column A

export const getAnnouncements = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.values.flat();
  } catch (error) {
    console.error('Error fetching announcements from Google Sheets:', error);
    throw error;
  }
};
