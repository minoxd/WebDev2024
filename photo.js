// Filter Function
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");
const cardColumn = document.querySelector('.column');

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            if (e.target.dataset.filter === "all") {
                cardColumn.style.flexDirection = "column"; // Change back to column for "all"
            } else {
                cardColumn.style.flexDirection = "row"; // Change to row for other filters
            }
            return card.classList.replace("hide", "show");

        }
        card.classList.add("hide");
    });

}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


// More Filter Button
document.getElementById('showMoreBtn').addEventListener('click', function () {
    const hiddenButtons = document.querySelector('.hidden-buttons');
    const moreButton = document.getElementById('showMoreBtn');

    // Toggle the visibility of hidden buttons
    if (hiddenButtons.style.display === "none" || hiddenButtons.style.display === "") {
        hiddenButtons.style.display = "flex";  // Use flex to display hidden buttons inline
        moreButton.textContent = "Less";
    } else {
        hiddenButtons.style.display = "none";
        moreButton.textContent = "More";
    }
});


// Refresh of page's logo
const logo = document.getElementById('icon');

logo.addEventListener('click', () => {
    window.location.reload();
});


// Display when click
const notiIcon = document.querySelector('.noti i');
const chatIcon = document.querySelector('.chat i');
const moreIcon = document.querySelector('.more i');
const menuButton = document.querySelector('.menu i');

const notiContent = document.querySelector('.noti-content');
const chatContent = document.querySelector('.chat-content');
const moreContent = document.querySelector('.more-content');
const menuContent = document.querySelector('.menu ul');

// Function to toggle dropdown visibility
function toggleDropdown(content) {
    // Hide all dropdowns first
    notiContent.style.display = 'none';
    chatContent.style.display = 'none';
    moreContent.style.display = 'none';

    // Toggle the visibility of the clicked content
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// Event listeners for click
notiIcon.addEventListener('click', () => toggleDropdown(notiContent));
chatIcon.addEventListener('click', () => toggleDropdown(chatContent));
moreIcon.addEventListener('click', () => toggleDropdown(moreContent));
moreIcon.addEventListener('click', () => toggleDropdown(menuContent));

menuButton.addEventListener('click', function() {
   
    menuContent.classList.toggle('show');
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.noti') && !event.target.closest('.chat') && !event.target.closest('.more')) {
        notiContent.style.display = 'none';
        chatContent.style.display = 'none';
        moreContent.style.display = 'none';
    }
    if (!event.target.closest('.menu')) {
        menuContent.classList.remove('show');
    }
});

// Search Functionality
document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card'); // Get all image cards
    let matchesFound = false; // To check if there's any match

    cards.forEach(card => {
        const altText = card.querySelector('img').getAttribute('alt').toLowerCase(); // Get alt text of the image
        const dataName = card.getAttribute('data-name').toLowerCase(); // Get data-name attribute of the card

        // Check if search value matches alt text or data-name
        if (altText.includes(searchValue) || dataName.includes(searchValue)) {
            card.style.display = ''; // Show the image card
            matchesFound = true; // A match is found
        } else {
            card.style.display = 'none'; // Hide the image card
        }
    });

    // Change layout to row if search has matches, otherwise revert to column
    if (matchesFound && searchValue !== '') {
        cardColumn.style.flexDirection = 'row';
    } else {
        cardColumn.style.flexDirection = 'column';
    }
});