// This file contains the JavaScript code for the web project.
// Add your JavaScript functionality here.

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-container button, .button-group button');
    const imageDisplay = document.createElement('div');
    const fullscreenView = document.createElement('div');
    const returnButton = document.createElement('button');
    
    // Setup elements
    imageDisplay.className = 'image-display';
    fullscreenView.className = 'fullscreen-view';
    returnButton.className = 'return-button';
    returnButton.textContent = '← Return to Menu';
    
    document.querySelector('main').appendChild(imageDisplay);
    document.body.appendChild(fullscreenView);
    document.body.appendChild(returnButton);

    let lastScrollPosition = 0;

    buttons.forEach(button => {
        // Preview on hover
        button.addEventListener('mouseover', () => {
            const imageUrl = button.dataset.image;
            if (imageUrl) {
                imageDisplay.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
                imageDisplay.classList.add('visible');
                
                const buttonRect = button.getBoundingClientRect();
                imageDisplay.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;
            }
        });

        button.addEventListener('mouseout', () => {
            imageDisplay.classList.remove('visible');
        });

        // Full view on click
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const imageUrl = button.dataset.image;
            if (imageUrl) {
                lastScrollPosition = window.scrollY;
                fullscreenView.innerHTML = `<img src="${imageUrl}" alt="Full view">`;
                fullscreenView.classList.add('visible');
                returnButton.classList.add('visible');
            }
        });
    });

    // Return button functionality
    returnButton.addEventListener('click', () => {
        fullscreenView.classList.remove('visible');
        returnButton.classList.remove('visible');
        window.scrollTo(0, lastScrollPosition);
    });
});