
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
        `
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
        `
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
        `
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
                        <h1>Revenue Impact</h1>
                        <div class="" style="display: flex; justify-content: center;">
                            <img src="./images/money.png" alt="">
                        </div>
                        <p>A 5% increase in customer retention can boost profits by 25% to 95% (<a href="">Harvard Business Review</a>)</p>
                    </div>
                </div>
            `;

            contentArea.style.opacity = 1;
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent('customer');

    // Add active class to default button
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
