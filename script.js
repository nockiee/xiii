document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление элементов при загрузке
    const elements = document.querySelectorAll('.official-section, .level-card, .explore-card');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Анимация для печати
    const seal = document.querySelector('.official-seal');
    if (seal) {
        seal.style.transition = 'all 0.5s ease';
        
        seal.addEventListener('mouseenter', () => {
            seal.style.transform = 'scale(1.1)';
            seal.style.boxShadow = '0 0 15px rgba(198, 1, 3, 0.5)';
        });
        
        seal.addEventListener('mouseleave', () => {
            seal.style.transform = 'scale(1)';
            seal.style.boxShadow = 'none';
        });
    }
    
    // Создание 13 звезд вокруг кнопки
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        const starCount = 13;
        const radius = 200;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Равномерное распределение звезд по кругу
            const angle = (i / starCount) * 2 * Math.PI;
            
            // Устанавливаем начальную позицию для каждой звезды
            star.style.transform = `rotate(${angle}rad) translateX(${radius}px) rotate(-${angle}rad)`;
            
            // Устанавливаем задержку анимации для каждой звезды
            star.style.animationDelay = `-${i * 4.6}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Функция для аккордеона в документах
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // Закрываем все открытые аккордеоны
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content && item.classList.contains('open')) {
                    item.classList.remove('open');
                    item.previousElementSibling.querySelector('.accordion-icon').classList.remove('open');
                }
            });
            
            // Переключаем текущий аккордеон
            content.classList.toggle('open');
            icon.classList.toggle('open');
        });
    });
});