document.addEventListener("DOMContentLoaded", () => {
    // Create and inject a Search Bar into the DOM dynamically under the Hero Section
    const heroSection = document.getElementById("hero");
    const searchContainer = document.createElement("div");
    
    searchContainer.style.textAlign = "center";
    searchContainer.style.padding = "2rem 5% 0 5%";
    searchContainer.innerHTML = `
        <input type="text" id="citySearch" placeholder="Search initiatives or services (e.g., Grid, Electric, Portal)..." 
               style="width: 100%; max-width: 500px; padding: 0.75rem 1rem; font-size: 1rem; border: 2px solid #0d6efd; border-radius: 25px; outline: none; transition: border 0.3s;">
    `;
    
    // Insert search bar right after the Hero section
    heroSection.parentNode.insertBefore(searchContainer, heroSection.nextSibling);

    const searchInput = document.getElementById("citySearch");
    const cards = document.querySelectorAll(".card");

    // Event Listener for real-time text input matching
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            // Check if search query matches card title or description text
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = "block";
                card.style.opacity = "1";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Simple focus style handling
    searchInput.addEventListener("focus", () => searchInput.style.borderColor = "#198754");
    searchInput.addEventListener("blur", () => searchInput.style.borderColor = "#0d6efd");
});
