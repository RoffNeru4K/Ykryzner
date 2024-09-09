// URL JSON data
const jsonUrl = 'https://raw.githubusercontent.com/RoffNeru4K/PianZ/main/output.json';

// Fetch and display gallery items
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');
        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                <a href="detail.html?id=${item.id}">
                    <img src="${item.imageUrl}" alt="Image">
                </a>
                <p>${item.id}</p>
            `;
            gallery.appendChild(div);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));