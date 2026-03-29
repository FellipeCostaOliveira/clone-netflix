document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles a');

    profileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const profileLi = link.closest('li');
            const img = profileLi.querySelector('img');
            const name = profileLi.querySelector('figcaption').textContent;

            localStorage.setItem('perfilAtivoNome', name);
            localStorage.setItem('perfilAtivoImagem', img.src);
        });
    });
});