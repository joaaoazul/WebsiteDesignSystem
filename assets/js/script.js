document.addEventListener('DOMContentLoaded', () => {
    const toggleElements = (selector) => {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    };

    toggleElements('.font-item');
    toggleElements('.code-block');
    toggleElements('.command');
});
