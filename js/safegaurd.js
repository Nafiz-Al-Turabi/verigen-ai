const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    const button = section.querySelector('.button');
    const content = section.querySelector('.content');

    button.addEventListener('click', () => {
        document.querySelectorAll('.content.active-safe').forEach(openContent => {
            openContent.classList.remove('active-safe');
            openContent.previousElementSibling.classList.remove('active-safe');
        });

        button.classList.toggle('active-safe');
        content.classList.toggle('active-safe');
    });
});
