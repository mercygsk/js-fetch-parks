// parksFetcher.js

export async function fetchParks() {
  const API_KEY = 'YOUR_API_KEY';
  const url = `https://developer.nps.gov/api/v1/parks?limit=10&api_key=${API_KEY}`
    try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.error('Error fetching parks:', error);
  }
  }
  