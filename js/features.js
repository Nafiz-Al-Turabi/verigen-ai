const cardsData = [
    {
        id: "01",
        img: "./images/Frame1.png",
        title: "Secure Product & Key Management",
        description: "VeriGenAI ensures the utmost security for your API keys and products, leveraging enterprise-grade encryption and multi-level access controls. This safeguards business-critical applications from unauthorized access, ensuring your data remains secure across all endpoints.",
        keyBenefit: "Confidence in the integrity and security of your business communications.",
    },
    {
        id: "02",
        img: "./images/Frame1.png",
        title: "Robust Content Validation",
        description: "With VeriGenAI, validate the authenticity of your content with advanced AI-powered tools, ensuring your enterprise communications meet compliance and quality standards.",
        keyBenefit: "Assurance in the reliability of validated content.",
    },
    {
        id: "03",
        img: "./images/Frame1.png",
        title: "AI-Driven Communications",
        description: "Enhance your operational efficiency with AI-driven tools designed to optimize workflows and ensure seamless communication across your enterprise.",
        keyBenefit: "Improved communication processes with AI-powered tools.",
    },
    {
        id: "04",
        img: "./images/Frame1.png",
        title: "AI-Driven Communications",
        description: "Enhance your operational efficiency with AI-driven tools designed to optimize workflows and ensure seamless communication across your enterprise.",
        keyBenefit: "Improved communication processes with AI-powered tools.",
    },
    {
        id: "05",
        img: "./images/Frame1.png",
        title: "AI-Driven Communications",
        description: "Enhance your operational efficiency with AI-driven tools designed to optimize workflows and ensure seamless communication across your enterprise.",
        keyBenefit: "Improved communication processes with AI-powered tools.",
    },
    {
        id: "06",
        img: "./images/Frame1.png",
        title: "AI-Driven Communications",
        description: "Enhance your operational efficiency with AI-driven tools designed to optimize workflows and ensure seamless communication across your enterprise.",
        keyBenefit: "Improved communication processes with AI-powered tools.",
    },
];

// References to DOM elements
const featureCardsContainer = document.querySelector('.feature-s-cards');
const featureCountElement = document.getElementById('current-feature-count');

// Render cards dynamically
function renderCards(cards) {
    featureCardsContainer.innerHTML = cards
        .map(
            (card) => `
            <div class="feature-s-card">
                <div class="feature-s-header">
                    <img src="${card.img}" alt="Feature ${card.id}">
                    <p>${card.id}</p>
                </div>
                <div class="feature-s-contents">
                    <h1>${card.title}</h1>
                    <p>${card.description}</p>
                    <p class="key-benefit"><span>Key Benefit:</span> ${card.keyBenefit}</p>
                </div>
                <a class="feature-s-learn-more" href="">Learn more</a>
            </div>
        `
        )
        .join('');
}

// Update the current feature count dynamically
function updateFeatureCount(current, total) {
    featureCountElement.textContent = `${String(current).padStart(2, '0')}/${String(total).padStart(2, '0')}`;
}

// Initialize the page
function initialize() {
    renderCards(cardsData);
    updateFeatureCount(1, cardsData.length);

    // Scroll event to track the visible card
    featureCardsContainer.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.feature-s-card');
        const containerRect = featureCardsContainer.getBoundingClientRect();
        let closestCardIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const distance = Math.abs(cardRect.top - containerRect.top);
            if (distance < minDistance) {
                minDistance = distance;
                closestCardIndex = index;
            }
        });

        updateFeatureCount(closestCardIndex + 1, cardsData.length);
    });
}

const featureSwiper = new Swiper('.feature-swiper', {
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

// Call initialize
initialize();