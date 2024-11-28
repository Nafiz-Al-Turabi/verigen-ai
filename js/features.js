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
        img: "./images/Frame-1.svg",
        title: "Al Content Detection API",
        description: "Automatically detect Al-generated content within your business operations. Whether it's outbound marketing materials or inbound reports, our proprietary algorithms provide real-time assessments, offering clear insights into the percentage of Al-generated text.",
        keyBenefit: "Save money by automating the detection of Al-generated content, reducin manual review costs.",
    },
    {
        id: "03",
        img: "./images/Frame-2.svg",
        title: "Developer-Friendly Integration",
        description: "VeriGenAl integrates seamlessly into your existing systems through a developer portal designed for quick onboarding, With comprehensive documentation and support, your team can implement Al content validation without the usual technical hurdles.",
        keyBenefit: "Rapid deployment into existing workflows, minimizing disruptions.",
    },
    {
        id: "04",
        img: "./images/Frame-3.svg",
        title: "Scalability & Enterprise Performance",
        description: "VeriGenAI is engineered to scale with your business. Capable of handling large-scale operations with minimal latency, the platform ensures high availability, reliability, and speed, even at enterprise levels.",
        keyBenefit: "A scalable solution that grows with your business without compromising performance.",
    },
    {
        id: "05",
        img: "./images/Frame-4.svg",
        title: "Actionable Reporting & Insights",
        description: "Gain full visibility into your content validation processes with real-time reporting. Our interactive dashboards offer insights into the prevalence of AI-generated content and overall system performance, empowering data-driven decision-making at every level.",
        keyBenefit: " Make better decisions with accurate data, avoiding costly mistakes.",
    },
    {
        id: "06",
        img: "./images/Frame-5.svg",
        title: "Security & Compliance",
        description: "VeriGenAI adheres to the most stringent security protocols and compliance standards, ensuring that your communications and content validations meet industry requirements. With built-in monitoring and automated compliance checks, you can focus on growth without worrying about security breaches or regulatory lapses.",
        keyBenefit: " Avoid expensive penalties by ensuring all communications comply with industry regulations.",
    },
];

const featureCardsContainer = document.querySelector('.feature-s-cards');
const featureCountElement = document.getElementById('current-feature-count');

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
        
        let mostVisibleCardIndex = 0;
        let maxVisibility = 0;
    
        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const intersectionTop = Math.max(containerRect.top, cardRect.top);
            const intersectionBottom = Math.min(containerRect.bottom, cardRect.bottom);
            const visibleHeight = Math.max(0, intersectionBottom - intersectionTop);
            
            if (visibleHeight > maxVisibility) {
                maxVisibility = visibleHeight;
                mostVisibleCardIndex = index;
            }
        });
    
        updateFeatureCount(mostVisibleCardIndex + 1, cardsData.length);
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