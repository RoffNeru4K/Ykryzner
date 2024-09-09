// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// URL JSON data
const jsonUrl = 'https://raw.githubusercontent.com/RoffNeru4K/PianZ/main/output.json';

// Fetch and display detail
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        const item = data.find(d => d.id === id);
        if (item) {
            document.getElementById('image').src = item.imageUrl;
            document.getElementById('title').textContent = 'Image Details'; // Customize as needed
            document.getElementById('uploader').textContent = item.uploader;
            document.getElementById('date').textContent = item.date;
            document.getElementById('size').textContent = item.size;
            document.getElementById('source').href = item.source;
            document.getElementById('source').textContent = item.source;
            document.getElementById('rating').textContent = item.rating;
            document.getElementById('score').textContent = item.score;
            document.getElementById('favorites').textContent = item.favorites;
            document.getElementById('status').textContent = item.status;
            document.getElementById('artist').textContent = item.artist;
            document.getElementById('copyright').textContent = item.copyright;
            document.getElementById('characters').textContent = item.characters;
            document.getElementById('general').textContent = item.general;
            document.getElementById('meta').textContent = item.meta;
        } else {
            document.getElementById('info').innerHTML = '<p>Image not found.</p>';
        }
    })
    .catch(error => console.error('Error loading JSON data:', error));