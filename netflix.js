document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carouselCardContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        carouselContainer.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        carouselContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const faqCards = document.querySelectorAll(".faqCard");

    faqCards.forEach((card) => {
        const question = card.querySelector(".faqQuestion");
        question.addEventListener("click", function () {
            card.classList.toggle("active");
        });
    });
});

function toggleDropdown() {
    var menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}


window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        document.getElementById("dropdown-menu").style.display = "none";
    }
};
