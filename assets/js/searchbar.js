document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.most-popular .item');

    items.forEach((item) => {
        const title = item.querySelector('h4').textContent.toLowerCase();
        const isVisible = title.includes(searchTerm);
        item.style.display = isVisible ? 'block' : 'none';
    });
});
const itemsPerPage = 10;
let currentPage = 1;

function showItems(page) {
    const items = document.querySelectorAll('.most-popular .item');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
        item.style.display = index >= startIndex && index < endIndex ? 'block' : 'none';
    });
}

function changePage(delta) {
    currentPage += delta;

    // Ensure the page is within valid bounds
    if (currentPage < 1) {
        currentPage = 1;
    } else {
        const totalItems = document.querySelectorAll('.most-popular .item').length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
    }

    showItems(currentPage);
}

// Initial page load
showItems(currentPage);
