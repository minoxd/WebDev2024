// Select relevant HTML elements
const filterButtons = document.querySelectorAll(".filter-buttons button"); 
const filterableCards = document.querySelectorAll(".filterable-cards .card"); 

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));




document.getElementById('showMoreBtn').addEventListener('click', function() {
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
