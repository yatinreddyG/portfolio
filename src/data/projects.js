// Central place for all project data. Replace placeholder text/links/images
// as real content comes in — every page pulls from here so you only edit once.

const projects = [
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline: "ATS-style resume scoring with AI-powered feedback and mock interview prep.",
    emoji: "📄",
    color: "#7c3aed", // purple
    stack: ["React", "Vite", "Spring Boot", "Java", "H2 Database", "Google Gemini API", "PDFBox"],
    summary:
      "A full-stack web app that scores a resume against a job description the way an Applicant " +
      "Tracking System would, then uses Google's Gemini AI to generate personalized recommendations " +
      "and an interactive AI career assistant.",
    problem:
      "Job seekers rarely know why their resume gets filtered out before a human ever reads it. " +
      "Most ATS tools are either black boxes or paid enterprise software with no feedback loop.",
    approach:
      "Built a keyword-matching engine that extracts required skills from a job description and " +
      "checks for their presence in the resume text, producing a transparent percentage score and a " +
      "matched/missing skill breakdown. Layered an AI assistant (Google Gemini) on top that reads the " +
      "same resume + job description context to generate targeted recommendations and answer follow-up " +
      "questions conversationally — including acting as a live mock interviewer.",
    challenges: [
      "Keeping the skill-matching keyword database accurate — a skill with no matching keywords " +
        "silently reports as 'missing' even when clearly present in the resume, which required a full " +
        "audit and rewrite of the matching logic.",
      "Getting the AI to reliably return structured JSON instead of conversational prose, solved with " +
        "explicit JSON-mode prompting and a defensive multi-stage JSON parser.",
      "Working within free-tier API rate limits while iterating quickly during development.",
    ],
    results:
      "Delivers a working ATS score, skill gap analysis, AI-generated resume recommendations, and a " +
      "conversational AI career assistant — all running on a self-hosted Spring Boot backend with zero " +
      "paid infrastructure.",
    liveUrl: "https://resume-analyzer-frontend-1eb3.onrender.com",
    githubUrl: "https://github.com/yatinreddyG/Resume_analyzer",
    screenshots: [
      {
        src: "/screenshots/ai-resume-analyzer/upload.webp",
        caption: "Upload a resume and job description to kick off the analysis.",
      },
      {
        src: "/screenshots/ai-resume-analyzer/ats-score.webp",
        caption: "ATS score with a matched vs. missing skills breakdown.",
      },
      {
        src: "/screenshots/ai-resume-analyzer/ai-recommendations.webp",
        caption: "Gemini-generated feedback on how to close the gap for the role.",
      },
      {
        src: "/screenshots/ai-resume-analyzer/ai-bot-chat.webp",
        caption: "Conversational follow-up with the AI career assistant.",
      },
    ],
  },
  {
    slug: "alzheimers-disease-detection",
    title: "Alzheimer's Disease Detection",
    tagline: "Deep learning classification of Alzheimer's stages from brain MRI scans.",
    emoji: "🧠",
    color: "#0ea5e9", // sky blue
    stack: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "Flask", "Grad-CAM"],
    summary:
      "A medical imaging classifier that analyzes brain MRI scans and predicts the stage of " +
      "Alzheimer's disease (Non-Demented, Very Mild, Mild, Moderate) using two independently trained " +
      "deep learning models, with visual explainability via Grad-CAM heatmaps.",
    problem:
      "Early and accurate staging of Alzheimer's from MRI imaging is time-consuming and requires " +
      "specialist review. A supporting tool that flags likely stage and highlights the regions driving " +
      "that prediction can help triage and second-opinion workflows.",
    approach:
      "Trained two models on a real, labeled Kaggle MRI dataset: a custom CNN built from scratch and " +
      "an EfficientNetB0 transfer-learning model, using class-weighting to correct for a heavily " +
      "imbalanced dataset (some classes have 50x fewer images than others). Integrated Grad-CAM so the " +
      "app visually highlights which regions of the scan most influenced the prediction, rather than " +
      "just returning a black-box label.",
    challenges: [
      "Severe class imbalance (as few as 44 images for the rarest class) caused the model to ignore " +
        "rare classes entirely — fixed with capped inverse-frequency class weighting.",
      "Grad-CAM broke on the EfficientNet model due to how Keras 3 handles nested sub-model graphs — " +
        "required tracing the exact tensor-connectivity issue and rebuilding the gradient model manually.",
      "Balancing honest reporting of real-world accuracy against the temptation to oversell results — " +
        "the README documents true per-class precision/recall for both models, including their weak spots.",
    ],
    results:
      "EfficientNetB0 reaches ~59.5% test accuracy with meaningfully better minority-class recall than " +
      "the custom CNN, and ships as the active model. Both models and full classification reports are " +
      "documented transparently in the project README.",
    liveUrl: "https://alzheimer-s-disease-detection-x6po.onrender.com",
    githubUrl: "https://github.com/yatinreddyG/Alzheimer-s_Disease_Detection",
    screenshots: [
      {
        src: "/screenshots/alzheimers-disease-detection/home.webp",
        caption: "Landing page — upload an MRI scan for an instant classification.",
      },
      {
        src: "/screenshots/alzheimers-disease-detection/upload.webp",
        caption: "Upload & Predict — drag in a brain MRI scan to analyze.",
      },
      {
        src: "/screenshots/alzheimers-disease-detection/result.webp",
        caption: "Prediction result with the Grad-CAM heatmap and probability breakdown.",
      },
      {
        src: "/screenshots/alzheimers-disease-detection/about.webp",
        caption: "Technical approach and stack behind the CNN + EfficientNetB0 models.",
      },
    ],
  },
  {
    slug: "medpredict",
    title: "MedPredict",
    tagline: "Multi-disease risk prediction with automatic best-model selection.",
    emoji: "⚕️",
    color: "#ec4899", // pink
    stack: ["Python", "Flask", "React", "Scikit-learn", "Pandas", "Chart.js"],
    summary:
      "A full-stack disease-risk prediction system covering four conditions — heart disease, brain " +
      "stroke, kidney disease, and diabetes. The user fills in basic health details for a chosen " +
      "condition, and the app returns a plain-English High Risk / Low Risk verdict with a confidence " +
      "score and a chart, without ever exposing the underlying ML complexity.",
    problem:
      "Risk-screening tools for common conditions are often either overly clinical black boxes or not " +
      "available outside a hospital setting. The goal was a simple, form-based interface where a user " +
      "enters a handful of known health numbers and gets an understandable risk read-out instantly.",
    approach:
      "Trained three different models — Decision Tree, Random Forest, and Logistic Regression — " +
      "independently for each of the four diseases using real Kaggle medical datasets (Cleveland heart " +
      "disease, stroke prediction, chronic kidney disease, and Pima Indians diabetes). All three models " +
      "run on every prediction request; the backend automatically selects whichever performed best on " +
      "accuracy (with F1 score as a tiebreaker) for that specific disease, so the app always serves its " +
      "strongest available model without the user needing to know which one that is. The Flask backend " +
      "exposes a clean REST API per disease, and the React frontend renders the verdict with a " +
      "Chart.js visualization and a short plain-English explanation of the contributing factors.",
    challenges: [
      "Some datasets are small (the heart disease dataset has only 303 rows), which caps achievable " +
        "accuracy — handled by running multiple model types per disease and always picking the best " +
        "performer rather than committing to one algorithm across the board.",
      "Loading React via CDN without a build step caused a race condition where components loaded out " +
        "of order and the page rendered blank — solved by bundling all components into a single ordered " +
        "file (a manual stand-in for what a bundler like Vite would normally handle).",
      "Keeping the interface honest about being an educational tool rather than a medical diagnosis, " +
        "while still making the result feel useful and clear.",
    ],
    results:
      "All four diseases have a working end-to-end prediction pipeline. Best per-disease model " +
      "accuracy: Heart Disease 65.0% (Random Forest), Brain Stroke 93.84% (Random Forest), Kidney " +
      "Disease 93.75% (Logistic Regression), and Diabetes 75.32% (Random Forest) — each automatically " +
      "selected at request time by comparing accuracy and F1 score across all three trained models.",
    liveUrl: "",
    githubUrl: "",
    screenshots: [],
  },
];

export default projects;
