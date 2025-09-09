document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Pricing Toggle functionality
    const pricingToggle = document.getElementById('toggle');
    const toggleDot = document.querySelector('.toggle-dot');
    const freePrice = document.querySelector('#pricing .pricing-grid > div:nth-child(1) .price');
    const proPrice = document.querySelector('#pricing .pricing-grid > div:nth-child(2) .price');
    const teamPrice = document.querySelector('#pricing .pricing-grid > div:nth-child(3) .price');

    const monthlyPrices = {
        free: '0',
        pro: '9',
        team: '29'
    };

    const yearlyPrices = {
        free: '0',
        pro: '7',
        team: '23'
    }; // Approximately 20% off for yearly plans

    pricingToggle.addEventListener('change', () => {
        if (pricingToggle.checked) {
            toggleDot.classList.add('checked');
            // Yearly prices
            freePrice.innerHTML = `$${yearlyPrices.free}<span>/year</span>`;
            proPrice.innerHTML = `$${yearlyPrices.pro}<span>/year</span>`;
            teamPrice.innerHTML = `$${yearlyPrices.team}<span>/year</span>`;
        } else {
            toggleDot.classList.remove('checked');
            // Monthly prices
            freePrice.innerHTML = `$${monthlyPrices.free}<span>/month</span>`;
            proPrice.innerHTML = `$${monthlyPrices.pro}<span>/month</span>`;
            teamPrice.innerHTML = `$${monthlyPrices.team}<span>/month</span>`;
        }
    });
});