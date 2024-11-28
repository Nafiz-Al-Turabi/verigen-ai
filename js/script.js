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
            title: "Revenue Impact",
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
            title: "Revenue Impact",
            description: "Fraud detection can save up to 20% of annual revenue losses.",
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
            title: "Revenue Impact",
            description: "Proactive risk management reduces liabilities by 30%.",
            image: "./images/money.png"
        }
    }
};

function updateContentBelow(button, key) {
    const content = safeguardContent[key];
    const existingContent = button.nextElementSibling;

    // If content is already displayed, animate and remove it (toggle functionality)
    if (existingContent && existingContent.classList.contains('dynamic-content')) {
        existingContent.style.opacity = 0;
        existingContent.style.transform = 'translateY(-20px)';
        setTimeout(() => existingContent.remove(), 300); // Wait for transition before removing
        button.classList.remove('active');
        return;
    }

    // Remove any other content blocks before showing the new one
    document.querySelectorAll('.dynamic-content').forEach(el => el.remove());
    document.querySelectorAll('.safeguard-button button').forEach(btn => btn.classList.remove('active'));

    // Create and insert new content block below the button
    const newContent = document.createElement('div');
    newContent.className = 'dynamic-content';
    newContent.innerHTML = `
        <div class="safeguard-element-sm">
            <div class="safeguard-cards">
                <h1 class="safeguard-title">${content.title}</h1>
                <div class="safeguard-card">
                    <h1>Why It Matters</h1>
                    <p>${content.whyItMatters}</p>
                </div>
                <div class="safeguard-card" style="margin-top: 24px;">
                    <h1>How VeriGenAI Helps</h1>
                    <p>${content.howHelps}</p>
                </div>
                 <div class="safeguard-box">
                ${content.imageContent ? ` 
                    <h1>${content.imageContent.title}</h1>
                    <div style="display: flex; justify-content: center; margin-bottom: 12px;">
                        <img src="${content.imageContent.image}" 
                             alt="${content.imageContent.title || 'Image'}" 
                             style="max-width: 100%; height: auto;">
                    </div>
                    <p>${content.imageContent.description}</p>
                ` : ''}
            </div>
            </div>
           
        </div>
    `;
    button.after(newContent);
    button.classList.add('active');

    // Add animation classes for smooth appearance
    setTimeout(() => {
        newContent.style.opacity = 1;
        newContent.style.transform = 'translateY(0)';
    }, 10); 

    // newContent.scrollIntoView({ behavior: 'smooth' });
}


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
                            <h1>${content.imageContent.title}</h1>
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
    const isMobile = window.innerWidth <= 768;
    const defaultKey = 'customer';

    if (isMobile) {
        const defaultButton = document.querySelector('.safeguard-button button[data-content="customer"]');
        updateContentBelow(defaultButton, defaultKey);
    } else {
        updateContent(defaultKey); 
    }

    document.querySelector('.safeguard-button button[data-content="customer"]').classList.add('active');
});

document.querySelectorAll('.safeguard-button button').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-content');
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            updateContentBelow(button, key);
        } else {
            updateContent(key);
        }

        if (!isMobile) {
            document.querySelectorAll('.safeguard-button button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }
    });
});

// Toggle menu for mobile
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
