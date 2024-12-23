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


// menu déroulant --------------------------------------------------------


document.querySelectorAll('.menu__item--dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;

        // Ferme les autres menus ouverts
        document.querySelectorAll('.dropdown').forEach(menu => {
            if (menu !== dropdown) {
                menu.style.visibility = 'hidden';
                menu.style.opacity = '0';
            }
        });

        // Alterne l'affichage du menu courant
        if (dropdown.style.visibility === 'visible') {
            dropdown.style.visibility = 'hidden';
            dropdown.style.opacity = '0';
        } else {
            dropdown.style.visibility = 'visible';
            dropdown.style.opacity = '1';
        }
    });
});