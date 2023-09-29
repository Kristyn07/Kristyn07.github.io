// Get the current page URL
const currentPage = window.location.pathname;

// Function to set header styles based on the current page
function setHeaderStyles() {
    const header = document.querySelector('.common-header');

    // Check if the current page URL contains a specific keyword
    if (currentPage.includes('about')) {
        // Apply styles for the About page
        header.style.backgroundColor = '#F5A623';
        header.style.color = '#FFF';
    } else if (currentPage.includes('home')) {
        // Apply styles for the Home page
        header.style.backgroundColor = '#EFEFEF';
        header.style.color = '#333';
    }
}

// Call the function to set header styles when the page loads
window.onload = setHeaderStyles;
