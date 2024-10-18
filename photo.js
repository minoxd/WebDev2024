// Filter Function
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");
const cardColumn = document.querySelector('.column');

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            if (e.target.dataset.filter === "all") {
                cardColumn.style.flexDirection = "column";
            } else {
                cardColumn.style.flexDirection = "row";
            }
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Refresh Page 
const logo = document.getElementById('icon');

logo.addEventListener('click', () => {
    window.location.reload();
});

// Display dropdown when click
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

notiIcon.addEventListener('click', () => toggleDropdown(notiContent));
chatIcon.addEventListener('click', () => toggleDropdown(chatContent));
moreIcon.addEventListener('click', () => toggleDropdown(moreContent));
moreIcon.addEventListener('click', () => toggleDropdown(menuContent));

menuButton.addEventListener('click', function () {
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

// Search Function
document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    let matchesFound = false;

    cards.forEach(card => {
        const altText = card.querySelector('img').getAttribute('alt').toLowerCase();
        const dataName = card.getAttribute('data-name').toLowerCase();

        // Check search value match text 
        if (altText.startsWith(searchValue) || dataName.startsWith(searchValue)) {
            card.style.display = '';
            matchesFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (matchesFound && searchValue !== '') {
        cardColumn.style.flexDirection = 'row';
    } else {
        cardColumn.style.flexDirection = 'column';
    }
});

// Go to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}