
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
                        const card_title_icon=document.createElement('div');
                        card_title_icon.classList.add('card-title-right-corner-icon');
                        const cardTitleParagraph = document.createElement('p');
                        cardTitleParagraph.textContent = asset.asset_title;
                        cardTitle.appendChild(cardTitleParagraph);
                        cardTitle.appendChild(card_title_icon);

                     
                        const cardDescription = document.createElement('div');
                        cardDescription.classList.add('card-description');
                        const cardDescriptionParagraph = document.createElement('p');
                        cardDescriptionParagraph.textContent = asset.asset_description;
                        cardDescription.appendChild(cardDescriptionParagraph);
                        if (asset.asset_id === 18883) {
                          
                            const cardContent = document.createElement('div');
                            cardContent.classList.add('card-content');
                            const iframe = document.createElement('iframe');
                            iframe.setAttribute('width', '480');
                            iframe.setAttribute('height', '291');
                            iframe.setAttribute('src', asset.asset_content);
                            iframe.setAttribute('frameborder', '0');
                            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                            iframe.setAttribute('allowfullscreen', true);
                            cardContent.appendChild(iframe);
                            mainCardContainer.appendChild(cardContent);
                        }
                        mainCardContainer.appendChild(cardTitle);
                        mainCardContainer.appendChild(cardDescription);
                        // mainCardContainer.appendChild(card_content)

                        cardContainer.appendChild(mainCardContainer);
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});