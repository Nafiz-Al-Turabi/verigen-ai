// Data for tabs and their corresponding content
const useCaseData = [
    {
        title: "Legal Document Review & Compliance",
        description: "Verify AI-generated content in legal documents to ensure compliance and avoid misinterpretation. Maintain legal precision in contracts, agreements, and briefs.",
        workflow: "Legal firms increasingly utilize generative AI for drafting contracts, agreements, and legal briefs. However, certain documents, particularly those involving sensitive agreements or compliance requirements, must be closely reviewed to ensure they are not overly reliant on AI.",
        businessValue: "Avoid costly legal disputes and fines by ensuring your documents are accurate and compliant. Save money by reducing errors that could lead to litigation."
    },
    {
        title: "Financial Reporting & Auditing",
        description: "Ensure accurate financial records and streamline the auditing process using advanced AI tools.",
        workflow: "AI tools can assist in analyzing large volumes of financial data, detecting irregularities, and ensuring compliance with financial regulations.",
        businessValue: "Reduce manual effort in auditing processes and minimize errors in financial reporting, saving time and costs."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
    {
        title: "Medical Transcriptions & Clinical Summaries",
        description: "Simplify the medical transcription process by converting clinical notes and summaries into structured text.",
        workflow: "AI aids in fast, reliable transcription of audio medical data into readable summaries, saving time for healthcare providers.",
        businessValue: "Improve efficiency in healthcare documentation and ensure accurate patient records while minimizing human error."
    },
];

// Select necessary DOM elements
const tabs = document.querySelectorAll(".use-case-tab, .tab-not-open, .workflows");
const workflow = document.querySelector(".use-case-workflow p");
const businessValue = document.querySelector(".use-case-business-value p");
const tabDescriptions = document.querySelectorAll(".tab-content"); 
const useCaseVisual = document.querySelector(".use-case-visual"); 

function handleTabUpdate(index) {
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.add("active-use-case");
            tab.classList.remove("tab-not-open");
        } else {
            tab.classList.remove("active-use-case");
            tab.classList.add("tab-not-open");
        }
    });

    tabDescriptions.forEach((desc, idx) => {
        if (idx === index) {
            desc.textContent = useCaseData[idx].description;
        } else {
            desc.textContent = ""; 
        }
    });

    workflow.textContent = useCaseData[index].workflow;
    businessValue.textContent = useCaseData[index].businessValue;
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => handleTabUpdate(index));
});

// Set the first tab as active by default
handleTabUpdate(0);

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        useCaseVisual.style.display = 'flex';  // Reset to default layout
    } else {
        useCaseVisual.style.display = 'none';  // Hide content on small screens
    }
});

