// =====================================
// NAVEGACIÓN SUAVE Y SCROLL TRACKING
// =====================================

// Scroll suave para enlaces internos
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Resaltar link activo en navbar según scroll
const sections = document.querySelectorAll('main section, main > h1');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current || 
            link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// =====================================
// ANIMACIONES DE BOTONES
// =====================================

const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.96)';
    });
    
    btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// =====================================
// ANIMACIÓN DE ENTRADA AL SCROLL
// =====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos que entran en viewport
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-block');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// =====================================
// FORMULARIO DE CONTACTO
// =====================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Simular envío (aquí conectarías con tu backend)
        button.textContent = 'Enviando...';
        button.disabled = true;
        button.style.opacity = '0.7';
        
        setTimeout(() => {
            button.textContent = '✓ Enviado';
            button.style.background = 'linear-gradient(135deg, #48BB78, #38A169)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.opacity = '1';
                button.style.background = '';
                this.reset();
            }, 2000);
        }, 1500);
    });
    
    // Validación en tiempo real
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#FC8181';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(252, 129, 129)') {
                this.style.borderColor = '';
            }
        });
    });
}

// =====================================
// EFECTO PARALLAX SUTIL EN HERO
// =====================================

const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
            hero.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
        }
    });
}

// =====================================
// NAVBAR: CAMBIO DE ESTILO AL SCROLL
// =====================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '12px 20px';
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    } else {
        navbar.style.padding = '20px';
        navbar.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
    }
});

// =====================================
// CURSOR PERSONALIZADO (OPCIONAL)
// =====================================

// Descomentar para agregar efecto de cursor custom en elementos interactivos
/*
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-block');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });
    
    el.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});
*/

// =====================================
// EASTER EGG: KONAMI CODE
// =====================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s ease infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Animación rainbow para easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// =====================================
// PERFORMANCE: LAZY LOADING DE IMÁGENES
// =====================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

console.log('🎨 Portafolio cargado con éxito | Diseñado con atención al detalle');