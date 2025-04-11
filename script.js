let isFirstLoad = true;

function showPage(pageId) {
    // Handle initial page load
    // Hide all regular pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Hide the initial page0 (homepage)
    const page0 = document.querySelector('.page0');
    if (page0) {
        page0.classList.remove('active');
    }

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// Show page0 (home) by default on first load
window.onload = function () {
    const page0 = document.querySelector('.page0');
    if (page0) {
        page0.classList.add('active');
    }
};
