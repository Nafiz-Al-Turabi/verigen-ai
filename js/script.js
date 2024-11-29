const safeguardContent = {
    customer: {
        title: 'Protect and Enhance Revenue by Maintaining Authentic Customer Engagement',
        whyItMatters: `
            <span>Trust Drives Sales:</span> Customers value authenticity. Overreliance on AI-generated communications can erode trust, leading to decreased customer engagement and lost sales opportunities.
        `,
        howHelps: `
            <span>Ensure Authentic Interactions:</span> By detecting overly AI-generated content in outbound communications, businesses can adjust messages to be more personal and engaging, strengthening customer relationships and increasing sales.
        `,
        imageContent: {
            title: "Revenue Impact",
            description: "A 5% increase in customer retention can boost profits by 25% to 95%.",
            image: "./images/money.png",
            linkName:"Harvard Business Review",
            link:"https://hbr.org/2014/10/the-value-of-keeping-the-right-customers"

        }
    },
    fraud: {
        title: 'Prevent Financial Losses from Sophisticated Al-Generated Fraud',
        whyItMatters: `
            <span>Rising AI-Powered Scams:</span> AI-generated phishing emails and fraudulent communications are becoming more convincing, leading to costly security breaches.
        `,
        howHelps: `
            <span>Detect Fraudulent Inbound Communications:</span>  VeriGenAI identifies AI-generated emails and messages that may be phishing attempts or scams, enabling businesses to avoid financial losses and protect sensitive information.
        `,
        imageContent: {
            title: "Cost of Data Breaches",
            description: "Fraud detection can save up to 20% of annual revenue losses.",
            image: "./images/Frame safegaurd6.png",
            linkName:"IMB Security",
            link:"https://www.ibm.com/reports/data-breach"
        }
    },
    risk: {
        title: 'Reduce Business Risks with Advanced Insights',
        whyItMatters: `
            <span>Regulatory Fines Are Costly:</span> Non-compliance with regulations like GDPR or HIPAA can result in hefty fines and legal fees.
        `,
        howHelps: `
            <span>Monitor Outbound Communications:</span>  VeriGenAI flags AI-generated content that may not meet regulatory standards, allowing for human review and adjustment to ensure compliance and avoid fines.
        `,
        imageContent: {
            title: "Example",
            description: "GDPR fines can reach up to €20 million or 4% Of annual global turnover.",
            image: "./images/Frame safegaurd5.png"
        }
    },
    savings: {
        title: 'Reduce Business Risks with Advanced Insights',
        whyItMatters: `
            <span>Efficiency Equals Savings:</span>Time spent sifting through AI-generated spam or low-quality content can drain resources.
        `,
        howHelps: `
            <span>Automate Content Screening:</span>  By quickly identifying AI-generated inbound communications, VeriGenAI reduces the time employees spend on filtering, saving on labor costs and increasing productivity.
        `,
        imageContent: {
            title: "Resource Allocation",
            description: "Redirecting employee focus from filtering content to productive tasks increases operational efficiency.",
            image: "./images/Frame safegaurd4.png"
        }
    },
    reputation: {
        title: 'Protect Brand Reputation and Market Share',
        whyItMatters: `
            <span>Brand Trust Is Valuable: </span>  Negative perceptions due to impersonal or AI-saturated communications can harm a brand’s image.
        `,
        howHelps: `
            <span>Maintain Brand Voice:</span>  Ensures outbound communications align with brand values and tone by identifying and allowing adjustments to AI-generated content, preserving brand integrity and customer trust.
        `,
        imageContent: {
            title: "Market Impact",
            description: " Brands with strong reputations can command higher prices and enjoy greater customer loyalty.",
            image: "./images/Frame safegaurd3.png"
        }
    },
    authentic: {
        title: 'Gain Competitive Advantage by Delivering Authentic Experiences',
        whyItMatters: `
            <span>Differentiation Drives Growth: </span>  In markets saturated with AI-generated content, providing authentic human touchpoints can set a business apart.
        `,
        howHelps: `
            <span>Enhance Personalization:</span> Enables businesses to balance AI efficiency with human authenticity, improving customer satisfaction and driving revenue growth.
        `,
        imageContent: {
            title: "Customer Preference",
            description: " Consumers are willing to spend more with companies that offer personalized experiences.",
            image: "./images/Frame safegaurd2.png"
        }
    },
    intellectual: {
        title: 'Gain Competitive Advantage by Delivering Authentic Experiences',
        whyItMatters: `
            <span>Protecting Assets Saves Money:</span>  Unauthorized use of proprietary content can lead to revenue loss and legal expenses.
        `,
        howHelps: `
            <span>Detect Unauthorized Content:</span> Identifies when inbound communications contain AI-generated content that may infringe on intellectual property, allowing for prompt action.
        `,
        imageContent: {
            title: "Brand Protection",
            description: "Safeguarding intellectual property maintains competitive positioning.",
            image: "./images/Frame safegaurd7.png",
           
        }
    },
    decisioning: {
        title: 'Improve Decision-Making with Accurate Data',
        whyItMatters: `
            <span>Quality Information Leads to Better Outcomes:</span> Decisions based on manipulated or AI-generated data can result in financial losses.
        `,
        howHelps: `
            <span>Validate Information Sources:</span>  Flags AI-generated reports or proposals, prompting verification and ensuring decisions are based on reliable data.
        `,
        imageContent: {
            title: "Data Integrity",
            description: "Ensuring the authenticity of information supports sound strategic planning.",
            image: "./images/money.png"
        }
    },
};


function updateContentBelow(button, key) {
    const content = safeguardContent[key];
    const existingContent = button.nextElementSibling;

    if (existingContent && existingContent.classList.contains('dynamic-content')) {
        existingContent.style.opacity = 0;
        existingContent.style.transform = 'translateY(-20px)';
        setTimeout(() => existingContent.remove(), 300); 
        button.classList.remove('active');
        return;
    }

    document.querySelectorAll('.dynamic-content').forEach(el => el.remove());
    document.querySelectorAll('.safeguard-button button').forEach(btn => btn.classList.remove('active'));

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
                    <p>${content.imageContent.description} </br> <a href="${content.imageContent.link}" target="_blank" class="safeguard-link">(${content.imageContent.linkName})</a></p>
                ` : ''}
            </div>
            </div>
           
        </div>
    `;
    button.after(newContent);
    button.classList.add('active');

    setTimeout(() => {
        newContent.style.opacity = 1;
        newContent.style.transform = 'translateY(0)';
    }, 10); 

}


function updateContent(key, title) {
    const content = safeguardContent[key];
    const contentArea = document.querySelector('.safeguard-element');
    const titleElement = document.querySelector('.title'); 

    if (content) {

        if (titleElement) {
            titleElement.innerText = content.title;
        }

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
                            <p>${content.imageContent.description} </br> <a href="${content.imageContent.link}" target="_blank" class="safeguard-link">(${content.imageContent.linkName})</a></p>
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

document.querySelectorAll('.dropdown a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        document.querySelector('.dropdown').classList.remove('open');  
        document.body.style.overflow = '';  
        document.getElementById('toggleBtnTimes').style.display = 'none';  
        document.getElementById('toggleBtnBars').style.display = 'inline';  
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').slice(1); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});
