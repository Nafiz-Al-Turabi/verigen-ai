const stepContent = {
    1: {
        title: "Integrate VeriGenAI",
        description: "Start leveraging our platform to monitor and adjust your communications.",
        image: "./images/AI.png",
    },
    2: {
        title: "Calculate Your ROI",
        description: "Use our tools to estimate the potential financial benefits specific to your organization.",
        image: "./images/Frame 2147225043 (7).png",
    },
    3: {
        title: "Stay Ahead",
        description: "Position your business for success by combining AI efficiency with human authenticity.",
        image: "./images/Frame 2147225043 (8).png",
    },
};

document.querySelectorAll(".main-step").forEach((step) => {
    step.addEventListener("click", () => {
        const stepNumber = step.getAttribute("data-step");

        if (stepContent[stepNumber]) {
            document.querySelectorAll(".main-step").forEach((btn) => {
                btn.classList.remove("active");
                btn.querySelector(".step-number").classList.remove("active-step");
            });

            step.classList.add("active");
            step.querySelector(".step-number").classList.add("active-step");

            const card = document.querySelector(".next-step-card");

            card.classList.add("slide-out");
            setTimeout(() => {
                card.innerHTML = `
                    <img src="${stepContent[stepNumber].image}" alt="${stepContent[stepNumber].title}">
                    <div class="card-content">
                        <h1>${stepContent[stepNumber].title}</h1>
                        <p>${stepContent[stepNumber].description}</p>
                    </div>
                `;

                card.classList.remove("slide-out");
                card.classList.add("slide-in");

                setTimeout(() => {
                    card.classList.remove("slide-in");
                }, 300);
            }, 300);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const firstStep = document.querySelector(".main-step");
    firstStep.classList.add("active");
    firstStep.querySelector(".step-number").classList.add("active-step");

    // Initialize the first step's content in the card
    const card = document.querySelector(".next-step-card");
    card.innerHTML = `
        <img src="${stepContent[1].image}" alt="${stepContent[1].title}">
        <div class="card-content">
            <h1>${stepContent[1].title}</h1>
            <p>${stepContent[1].description}</p>
        </div>
    `;
});

let swiperInstance = null;

function initializeSwiperForMobile() {

    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }

    if (window.innerWidth <= 768) {
        swiperInstance = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: false,
            spaceBetween: 30,
            slidesPerView: 1,
        });
    }
}

initializeSwiperForMobile();

window.addEventListener('resize', initializeSwiperForMobile);
