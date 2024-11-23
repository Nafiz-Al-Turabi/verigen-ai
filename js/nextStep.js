// Step content data
const stepContent = {
    1: {
        title: "Integrate VeriGenAI",
        description: "Start leveraging our platform to monitor and adjust your communications.",
        image: "./images/AI.png"
    },
    2: {
        title: "Calculate Your ROI",
        description: "Analyze your return on investment and measure the impact of VeriGenAI.",
        image: "./images/AI.png"
    },
    3: {
        title: "Stay Ahead",
        description: "Continue optimizing your communications for sustainable growth.",
        image: "./images/AI.png"
    }
};

// Add event listeners to steps
document.querySelectorAll('.main-step').forEach(step => {
    step.addEventListener('click', () => {
        const stepNumber = step.getAttribute('data-step');

        if (stepContent[stepNumber]) {
            document.querySelectorAll('.main-step').forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('.step-number').classList.remove('active-step'); 
            });
            step.classList.add('active');

            const card = document.querySelector('.next-step-card');

            card.classList.add('slide-out');
            setTimeout(() => {
                card.innerHTML = `
                    <img src="${stepContent[stepNumber].image}" alt="${stepContent[stepNumber].title}">
                    <div class="card-content">
                        <h1>${stepContent[stepNumber].title}</h1>
                        <p>${stepContent[stepNumber].description}</p>
                    </div>
                `;

                card.classList.remove('slide-out');
                card.classList.add('slide-in');

                setTimeout(() => {
                    card.classList.remove('slide-in');
                }, 300); 
            }, 300); 
        }
    });
});

let swiperInstance = null; // Store the Swiper instance

function initializeSwiperForMobile() {
    // Check if already initialized and destroy if needed
    if (swiperInstance) {
        swiperInstance.destroy(true, true); // Destroy existing instance
        swiperInstance = null; // Reset the instance
    }

    if (window.innerWidth <= 768) { // Initialize only for mobile
        swiperInstance = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            slidesPerView: 1,
        });
    }
}

// Initial Swiper setup
initializeSwiperForMobile();

// Reinitialize on resize
window.addEventListener('resize', initializeSwiperForMobile);
