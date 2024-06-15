const map = L.map('map').setView([48.46523313037541, 35.05002961989385], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([48.46523313037541, 35.05002961989385])
  .addTo(map)
  .bindPopup('E-trans')
  .openPopup();