document.addEventListener('DOMContentLoaded', function() {
    // Эффект мерцания для заголовка
    const title = document.querySelector('h1');
    setInterval(() => {
        title.classList.toggle('glitch');
    }, 3000);
    
    // Эффект появления элементов
    const elements = document.querySelectorAll('section, .divider, .level, .contact-btn');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Анимация угловых декораций
    const corners = document.querySelectorAll('.corner-decoration');
    corners.forEach(corner => {
        corner.addEventListener('mouseenter', () => {
            corner.style.transform = 'scale(1.2)';
            corner.style.transition = 'transform 0.3s ease';
        });
        
        corner.addEventListener('mouseleave', () => {
            corner.style.transform = 'scale(1)';
        });
    });
});