// menu --------------------------------------------------------------------
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}


// menu footer --------------------------------------------------------



// Sélectionner le bouton du menu et le menu lui-même
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('mainNav');

// Ajouter un événement au clic sur le bouton
menuButton.addEventListener('click', function () {
    // Vérifier si le menu est ouvert ou fermé
    const isOpen = menu.getAttribute('aria-hidden') === 'false';

    // Basculer l'attribut aria-hidden pour ouvrir/fermer le menu
    menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
});
