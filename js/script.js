
const safeguardContent = {
    customer: {
        title: 'Protect and Enhance Revenue by Maintaining Authentic Customer Engagement',
        whyItMatters: `
            <span>Trust Drives Sales:</span> Customers value authenticity. Overreliance on AI-generated communications
            can erode trust, leading to decreased customer engagement and lost sales opportunities.
        `,
        howHelps: `
            <span>Ensure Authentic Interactions:</span> By detecting overly AI-generated content in outbound communications,
            businesses can adjust messages to be more personal and engaging, strengthening customer relationships and
            increasing sales.
        `,
        imageContent: {
            title: "Revenue Imapct",
            description: "A 5% increase in customer retention can boost profits by 25% to 95% (Harvard Business Review).",
            image: "./images/money.png"
        }
    },
    fraud: {
        title: 'Safeguard Your Business from Fraudulent Activities',
        whyItMatters: `
            <span>Fraud Prevention:</span> Fraudulent activities can result in severe financial and reputational damage. 
            Proactively addressing these threats is essential for maintaining customer trust.
        `,
        howHelps: `
            <span>AI-Powered Fraud Detection:</span> VeriGenAI identifies unusual patterns and suspicious activities
            to help businesses prevent fraud before it occurs.
        `,
        imageContent: {
            title: "Revenue Imapct",
            description: "A 5% increase in customer retention can boost profits by 25% to 95% (Harvard Business Review).",
            image: "./images/money.png"
        }
    },
    risk: {
        title: 'Reduce Business Risks with Advanced Insights',
        whyItMatters: `
            <span>Risk Mitigation:</span> Risks related to data breaches or regulatory violations can jeopardize your
            business. Staying proactive ensures sustainability.
        `,
        howHelps: `
            <span>Insightful Alerts:</span> VeriGenAI provides actionable insights, helping businesses navigate potential
            risks effectively.
        `,
        imageContent: {
            title: "Revenue Imapct",
            description: "A 5% increase in customer retention can boost profits by 25% to 95% (Harvard Business Review).",
            image: "./images/money.png"
        }
    }
};

function updateContent(key) {
    const content = safeguardContent[key];
    const contentArea = document.querySelector('.safeguard-element');

    if (content) {
        contentArea.style.opacity = 0;

        setTimeout(() => {
            contentArea.innerHTML = `
                <div class="safeguard-element">
                    <div class="safeguard-cards">
                        <div class="safeguard-card">
                            <h1>Why It Matters</h1>
                            <p>${content.whyItMatters}</p>
                        </div>
                        <div class="safeguard-card" style="margin-top: 24px;">
                            <h1>How VeriGenAI Helps</h1>
                            <p>${content.howHelps}</p>
                        </div>
                    </div>
                     <div class="safeguard-box">
                        ${content.imageContent ? `
                            <h1>${content.imageContent.title }</h1>
                            <div style="display: flex; justify-content: center; margin-bottom: 12px;">
                                <img src="${content.imageContent.image}" 
                                     alt="${content.imageContent.title || 'Image'}" 
                                     style="max-width: 100%; height: auto;">
                            </div>
                            <p>${content.imageContent.description}</p>
                        ` : ''}
                    </div>
                </div>
            `;

            contentArea.style.opacity = 1;
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent('customer');

    document.querySelector('.safeguard-button button').classList.add('active');
});


document.querySelectorAll('.safeguard-button button').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.textContent.toLowerCase();

        updateContent(key);

        document.querySelectorAll('.safeguard-button button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});






document.getElementById('toggleBtnBars').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('toggleBtnBars').style.display = 'none'; 
    document.getElementById('toggleBtnTimes').style.display = 'inline'; 
});
document.getElementById('toggleBtnTimes').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.remove('open');
    document.body.style.overflow = ''; 
    document.getElementById('toggleBtnTimes').style.display = 'none';
    document.getElementById('toggleBtnBars').style.display = 'inline';
});

// smooth scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').slice(1); // Get target id
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align to the top of the section
            });
        }
    });
});
