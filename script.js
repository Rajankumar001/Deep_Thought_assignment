
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
            const maincardcontainer=document.getElementsByClassName('main-card-container')
            data.forEach(item => {
                item.tasks.forEach(task => {
                    task.assets.forEach(asset => {
                        
                        const cardTitleParagraph = document.getElementsByClassName('card-heading-tile');
                        cardTitleParagraph.innerText = asset.asset_title;

                        const cardDescriptionParagraph = document.createElement('card-heading-description');
                        cardDescriptionParagraph.innerText = asset.asset_description;
                        cardContainer.appendChild(maincardcontainer);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
``