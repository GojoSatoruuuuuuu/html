// JavaScript for handling the favorite button functionality

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent the click from bubbling up to the card
            e.stopPropagation();
            
            // Toggle the active class to change the heart color
            this.classList.toggle('active');
            
            // Optional: Get the product ID or name to save the favorite state
            // const productId = this.closest('.card').dataset.productId;
            
            // Optional: Save favorite state to localStorage or send to server
            // saveFavoriteStatus(productId, this.classList.contains('active'));
        });
    });
});

// Example function to save favorite status (implement as needed)
function saveFavoriteStatus(productId, isFavorite) {
    // For localStorage example:
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    
    if (isFavorite) {
        favorites[productId] = true;
    } else {
        delete favorites[productId];
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // For server API example:
    // fetch('/api/favorites', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ productId, isFavorite }),
    // });
}