document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                button.textContent = 'Read Less';
            } else {
                content.classList.add('hidden');
                button.textContent = 'Read More';
            }
        });
    });
});