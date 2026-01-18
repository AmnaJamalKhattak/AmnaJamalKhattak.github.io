// Update copyright year and handle profile image
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Handle profile image loading
    const profileImage = document.getElementById('profile-image');
    const avatarPlaceholder = document.getElementById('avatar-placeholder');
    
    if (profileImage) {
        profileImage.onload = function() {
            this.classList.add('loaded');
            if (avatarPlaceholder) {
                avatarPlaceholder.classList.add('hidden');
            }
        };
        
        profileImage.onerror = function() {
            // If image fails to load, keep placeholder visible
            this.style.display = 'none';
            if (avatarPlaceholder) {
                avatarPlaceholder.classList.remove('hidden');
            }
        };
        
        // Trigger load check
        if (profileImage.complete) {
            profileImage.onload();
        }
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active navigation item on scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Call on page load
});
