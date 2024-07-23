
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const majorSidebar = document.querySelector('.left-side-bar-major');
    const minorSidebar = document.querySelector('.left-side-bar-minor');

    leftArrow.addEventListener('click', () => {
        majorSidebar.style.display = 'none';
        minorSidebar.style.display = 'flex';
    });

    rightArrow.addEventListener('click', () => {
        minorSidebar.style.display = 'none';
        majorSidebar.style.display = 'flex';
    });
});

// card-component
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('card-container');
            data.forEach(item => {
                item.tasks.forEach(task => {
                    task.assets.forEach(asset => {
                        
                        const card = document.createElement('div');
                        card.classList.add('main-card-container');
        
                        // Card title
                        const cardTitle = document.createElement('div');
                        cardTitle.classList.add('card-title');
                        const cardTitleText = document.createElement('p');
                        cardTitleText.textContent = asset.asset_title;
                        cardTitle.appendChild(cardTitleText);
        
                        // Card description
                        const cardDescription = document.createElement('div');
                        cardDescription.classList.add('card-description');
                        const cardDescriptionText = document.createElement('p');
                        cardDescriptionText.textContent = asset.asset_description;
                        cardDescription.appendChild(cardDescriptionText);
        
                        // Append title and description to card
                        card.appendChild(cardTitle);
                        card.appendChild(cardDescription);
        
                        // Append card to main container
                        cardContainer.appendChild(card);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
``