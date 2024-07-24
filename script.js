
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const majorSidebar = document.querySelector('.left-side-bar-major');
    const minorSidebar = document.querySelector('.left-side-bar-minor');

    minorSidebar.style.display = 'block';
    majorSidebar.style.display = 'none';
    rightArrow.addEventListener('click', () => {
        minorSidebar.style.display = 'none';
        majorSidebar.style.display = 'block';
    });
    leftArrow.addEventListener('click', () => {
        majorSidebar.style.display = 'none';
        minorSidebar.style.display = 'block';
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
                        // Create the main card container
                        const mainCardContainer = document.createElement('div');
                        mainCardContainer.classList.add('main-card-container');

                        const cardTitle = document.createElement('div');
                        cardTitle.classList.add('card-title');
                        const cardTitleParagraph = document.createElement('p');
                        cardTitleParagraph.textContent = asset.asset_title;
                        cardTitle.appendChild(cardTitleParagraph);

                     
                        const cardDescription = document.createElement('div');
                        cardDescription.classList.add('card-description');
                        const cardDescriptionParagraph = document.createElement('p');
                        cardDescriptionParagraph.textContent = asset.asset_description;
                        cardDescription.appendChild(cardDescriptionParagraph);

                       
                        mainCardContainer.appendChild(cardTitle);
                        mainCardContainer.appendChild(cardDescription);

                        cardContainer.appendChild(mainCardContainer);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});