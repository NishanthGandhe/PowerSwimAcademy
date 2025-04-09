function toggleDropdown() {
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.classList.toggle('hidden');
    }

    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('swimLessonsDropdown');
        const dropdownMenu = document.getElementById('dropdownMenu');
    
        if (!dropdown.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
            
    });
    document.addEventListener('DOMContentLoaded', function() {
    // Program carousel functionality
        const programSlider = document.getElementById('programSlider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.querySelectorAll('#carouselDots button');
        let currentIndex = 0;
        const totalSlides = 4; // We'll show 6 programs in 4 slides (showing 3 at once on desktop)
        
        function updateCarousel() {
        // For mobile: full width slides
        // For desktop: 33.333% width slides (3 visible at once)
            const slideWidth = window.innerWidth < 768 ? 100 : 33.333;
            const offset = currentIndex * slideWidth;
            programSlider.style.transform = `translateX(-${offset}%)`;
            // Update dots
            dots.forEach((dot, index) => {
            dot.classList.toggle('bg-primary', index === currentIndex);
            dot.classList.toggle('bg-gray-300', index !== currentIndex);
            });
        }
        
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(totalSlides - 1, currentIndex + 1);
            updateCarousel();
        });
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            updateCarousel();
            });
        });
        // Handle window resize
        window.addEventListener('resize', updateCarousel);
        // Initialize carousel
        updateCarousel();
        // Form submission
        // const form = document.querySelector('form');
        
        // form.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     const formData = new FormData(form);
        //     const data = Object.fromEntries(formData);
        //     console.log('Form submitted:', data);
        //     const successMessage = document.createElement('div');
        //     successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
        //     successMessage.textContent = 'Message sent successfully!';
        //     document.body.appendChild(successMessage);
        //     setTimeout(() => {
        //         successMessage.remove();
        //     }, 3000);
            
        //     form.reset();
        // });
    });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const careerForm = document.getElementById('careerForm');
    //     console.log(careerForm)

    //     // careersForm.addEventListener('submit', function(e) {
    //     //     e.preventDefault();
    //     //     const formData = new FormData(careersForm);
    //     //     const data = Object.fromEntries(formData);
    //     //     console.log('Careers form submitted:', data);
    //     //     const successMessage = document.createElement('div');
    //     //     successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    //     //     successMessage.textContent = 'Application submitted successfully!';
    //     //     document.body.appendChild(successMessage);
    //     //     setTimeout(() => {
    //     //         successMessage.remove();
    //     //     }, 3000);
            
    //     //     careersForm.reset();
    //     // });

    //     careerForm.addEventListener('submit', function(e) {
    //         alert('Application submitted successfully!');
    //     });
    // });
