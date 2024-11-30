const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const button = section.querySelector('.button');
    const content = section.querySelector('.content');

    if (button && content) {
        button.addEventListener('click', () => {
            // Remove active classes from all existing open contents and buttons
            document.querySelectorAll('.content.active-safe').forEach(openContent => {
                openContent.classList.remove('active-safe');
                // Check if previousElementSibling exists before removing class
                if (openContent.previousElementSibling) {
                    openContent.previousElementSibling.classList.remove('active-safe');
                }
            });

            const isActive = content.classList.contains('active-safe');

            if (!isActive) {
                button.classList.add('active-safe');
                content.classList.add('active-safe');

                const buttonTop = button.getBoundingClientRect().top + window.scrollY - 60; 
                window.scrollTo({ top: buttonTop, behavior: 'smooth' });
            }
        });
    }
});