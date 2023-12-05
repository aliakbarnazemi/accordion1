const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    });
});
