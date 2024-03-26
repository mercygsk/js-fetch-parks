// main.js

import { fetchParks } from './parksFetcher.js';

document.addEventListener('DOMContentLoaded', function() {
  fetchParks()
    .then(data => {
      const parks = data.data;
      const parkList = document.getElementById('park-list');
      
      parks.forEach(park => {
        const listItem = document.createElement('li');
        listItem.classList.add('park-item');
        listItem.innerHTML = `
          <h2>${park.fullName}</h2>
          <p><strong>State:</strong> ${park.states}</p>
          <p><strong>Description:</strong> ${park.description}</p>
          <p><strong>Website:</strong> <a href="${park.url}" target="_blank">${park.url}</a></p>
        `;
        parkList.appendChild(listItem);
      });
    });
});
