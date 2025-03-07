// Define all the questions with their categories
const questions = [
    {
        category: "K1 - SDLC",
        question: "Can you tell me about the 7 stages of the software development life cycle? Give an example from your work of how the outputs of one stage of the SDLC feeds into the next stage."
    },
    {
        category: "K1 - SDLC",
        question: "How do your roles and responsibilities on the job connect to the SDLC? Give an example from work of your inputs for one stage of the SDLC and the corresponding outputs you produced."
    },
    {
        category: "K1 - SDLC",
        question: "What are some coding best practices that you have followed in your portfolio project(s) and how did this contribute to outputs for this step?"
    },
    {
        category: "K1 - SDLC",
        question: "What are some software testing techniques that you have used in your portfolio projects? What are the inputs and outputs?"
    },
    {
        category: "K1 - SDLC",
        question: "How have you applied software design principles to create an effective and efficient software, as demonstrated in your portfolio project(s)?"
    },
    {
        category: "K3 - Project Lifecycle",
        question: "Could you please explain the various roles and responsibilities typically present in the project lifecycle within your organization? Specifically, focus on the key stakeholders involved and their respective responsibilities at different stages of the project. Furthermore, describe your own role within the project lifecycle and how it contributes to the overall success of the project."
    },
    {
        category: "K3 - Project Lifecycle",
        question: "Can you please explain the roles and responsibilities of the project lifecycle within your organization and how they align with your role? Please provide specific examples of how you have contributed to each phase of the lifecycle in previous projects."
    },
    {
        category: "K3 - Project Lifecycle",
        question: "How does your organization approach the project lifecycle? Are there any specific methodologies or frameworks that you follow? Can you talk about a project where you successfully applied these methodologies, and how you contributed to its success?"
    },
    {
        category: "K3 - Project Lifecycle",
        question: "As per your understanding, what are the key deliverables or outcomes expected from each phase of the project lifecycle in your organization? Can you provide examples of how you have contributed to achieving these deliverables in previous projects? And what measures were taken to ensure successful completion of each phase?"
    },
    {
        category: "K4 & S15 - Communication",
        question: "Can you offer an example where you've adapted your communication to suit the audience and/or their level of technical knowledge?"
    },
    {
        category: "K4 & S15 - Communication",
        question: "Are you able to compare/contrast the different types of communication used for technical and non-technical audiences? What are the pros and cons?"
    },
    {
        category: "K4 & S15 - Communication",
        question: "Can you provide an example from your portfolio where you utilized various communication methods? Describe the situation, the audience you were communicating with, and the specific methods you employed to ensure effective communication. Additionally, explain how you adapted your communication style and approach to cater to the needs and preferences of different audiences."
    },
    {
        category: "K5 - Methodologies",
        question: "Can you provide an example from your portfolio where you worked with either agile or waterfall methodology? Describe the project and explain how the chosen methodology was implemented. Furthermore, highlight the key similarities and differences between agile and waterfall methodologies, particularly in terms of their approach to project planning, flexibility, collaboration, and response to change."
    },
    {
        category: "K5 - Methodologies",
        question: "In your experience, what challenges have you encountered when implementing the software development methodology you showcased in your portfolio? Can you provide an example where one methodology would have been more suitable than the other? Discuss the specific reasons behind your preference and how it would have positively affected project outcomes."
    },
    {
        category: "K5 - Methodologies",
        question: "Describe a scenario from your portfolio where you had to balance the advantages of agile and waterfall methodologies. How did you decide which approach to prioritize, and what strategies did you implement to incorporate elements from the other methodology? Share the final outcome and any lessons learned from this experience, highlighting the importance of tailoring methodologies to project requirements and team dynamics."
    },
    {
        category: "K7 - Software Design",
        question: "Other than those you've outlined, are there any software design patterns you're aware of? For example, object-oriented programming (OOP) or the Model-view-controller (MVC) pattern."
    },
    {
        category: "K7 - Software Design",
        question: "Can you describe a situation where you applied different software design approaches and patterns to identify reusable solutions to a commonly occurring problem? How did you evaluate the pros and cons of each approach and ultimately determine the most suitable solution?"
    },
    {
        category: "K7 - Software Design",
        question: "Have you ever had to choose between developing a bespoke software solution or utilizing an off-the-shelf solution for a particular problem? Can you provide an example and explain your thought process in making that decision? What were the factors that influenced your choice?"
    },
    {
        category: "K8 & S14 - Version Control",
        question: "Does your company mask/obfuscate/anonymize/tokenize any of the data in its database? Can you explain why a company might do this?"
    },
    {
        category: "K8 & S14 - Version Control",
        question: "What strategy does your team use for version control? For example, feature branching."
    },
    {
        category: "K8 & S14 - Version Control",
        question: "How do code reviews work in your team?"
    },
    {
        category: "K10 - Databases",
        question: "Can you explain the difference between relational and non-relational databases? Why might you use one type over the other? Give an example of your use of a relational database. Give an example of your use of a non-relational database."
    },
    {
        category: "K10 - Databases",
        question: "Can you provide an example from your portfolio where you successfully applied the principles of relational databases to a software development task? Explain the design decisions you made, such as normalization techniques, and how they contributed to data integrity and consistency."
    },
    {
        category: "K10 - Databases",
        question: "Where in your portfolio did you utilize a non-relational database for a software development task? Describe the specific data model used (e.g., key-value, document, graph), and explain why you chose it for that particular project. Discuss the advantages of using a non-relational database in that context and any challenges you encountered."
    },
    {
        category: "K12 - Testing",
        question: "Can you share an example from your portfolio where you utilized software testing frameworks and methodologies? Describe the project and explain which specific testing frameworks and methodologies you employed. Additionally, discuss the rationale behind your choices and how they contributed to the overall quality and reliability of the software."
    },
    {
        category: "K12 - Testing",
        question: "How do you ensure effective test coverage when testing software applications? Can you discuss any specific strategies or techniques you have used to ensure comprehensive testing of all critical components and functionalities?"
    },
    {
        category: "K12 - Testing",
        question: "Can you provide an example of a software testing framework you have used in your portfolio? How did this framework contribute to the overall testing process and ensure software quality?"
    },
];

// Initialize variables
let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill('');
const notes = new Array(questions.length).fill('');
let startTime;
let timerInterval;
let interviewStarted = false;

// Get DOM elements
const startScreen = document.getElementById('start-screen');
const startInterviewBtn = document.getElementById('start-interview-btn');
const interviewSection = document.getElementById('interview-section');
const questionEl = document.getElementById('question');
const categoryEl = document.getElementById('category');
const answerEl = document.getElementById('answer');
const notesEl = document.getElementById('notes');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const progressBar = document.getElementById('progress');
const interviewContainer = document.getElementById('interview-container');
const reviewContainer = document.getElementById('review-container');
const answersReviewEl = document.getElementById('answers-review');
const startOverBtn = document.getElementById('start-over-btn');
const timerEl = document.getElementById('timer');
const ksbListEl = document.getElementById('ksb-list');

// Initialize the app
function init() {
    // Check if interview was in progress
    const savedAnswers = localStorage.getItem('portfolioAnswers');
    if (savedAnswers) {
        const savedData = JSON.parse(savedAnswers);
        // Only restore if the interview was already started
        if (savedData.interviewStarted) {
            answers.splice(0, answers.length, ...savedData.answers);
            
            if (savedData.notes) {
                notes.splice(0, notes.length, ...savedData.notes);
            }
            
            currentQuestionIndex = savedData.currentIndex || 0;
            interviewStarted = true;
            
            // If interview was completed and in review mode, go to review
            if (savedData.completed) {
                startScreen.classList.add('hidden');
                interviewSection.classList.add('hidden');
                finishInterview();
            } else {
                // Continue interview
                startScreen.classList.add('hidden');
                interviewSection.classList.remove('hidden');
                loadQuestion(currentQuestionIndex);
                startTimer();
                updateProgressBar();
            }
        }
    }
    
    // Add event listeners
    startInterviewBtn.addEventListener('click', startInterview);
    nextBtn.addEventListener('click', goToNextQuestion);
    finishBtn.addEventListener('click', finishInterview);
    startOverBtn.addEventListener('click', startOver);
    
    // Generate KSB list for the side navigation
    generateKsbList();
}

// Start the interview
function startInterview() {
    startScreen.classList.add('hidden');
    interviewSection.classList.remove('hidden');
    interviewStarted = true;
    
    // Clear any prior data to start fresh
    localStorage.removeItem('portfolioAnswers');
    
    // Reset answers and notes
    for (let i = 0; i < answers.length; i++) {
        answers[i] = '';
        notes[i] = '';
    }
    
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
    startTimer();
    updateProgressBar();
    
    // Save initial state
    saveToLocalStorage();
}

// Generate the KSB categories list for navigation
function generateKsbList() {
    // Extract unique categories
    const categories = [...new Set(questions.map(q => q.category))];
    
    // Create list items
    let ksbListHTML = '';
    categories.forEach(category => {
        const catId = category.replace(/\s+/g, '-').toLowerCase();
        ksbListHTML += `<li><a href="#${catId}" data-category="${category}">${category}</a></li>`;
    });
    
    ksbListEl.innerHTML = ksbListHTML;
    
    // Add event listeners for category navigation
    document.querySelectorAll('#ksb-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('#ksb-list a').forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            scrollToCategory(category);
        });
    });
}

// Scroll to specific category in review
function scrollToCategory(category) {
    const categoryElements = document.querySelectorAll('.review-card .category');
    
    for (const element of categoryElements) {
        if (element.textContent === category) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        }
    }
}

// Load question based on index
function loadQuestion(index) {
    const question = questions[index];
    questionEl.textContent = question.question;
    categoryEl.textContent = question.category;
    answerEl.value = answers[index] || '';
    notesEl.value = notes[index] || '';
    
    if (index === questions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
    
    updateProgressBar();
    saveToLocalStorage();
}

// Go to next question
function goToNextQuestion() {
    saveCurrentAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        interviewContainer.classList.remove('fade-in');
        void interviewContainer.offsetWidth; // Trigger reflow
        interviewContainer.classList.add('fade-in');
    }
}

// Save current answer
function saveCurrentAnswer() {
    answers[currentQuestionIndex] = answerEl.value.trim();
    notes[currentQuestionIndex] = notesEl.value.trim();
    saveToLocalStorage();
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Finish interview and show review
function finishInterview() {
    saveCurrentAnswer();
    clearInterval(timerInterval);
    
    interviewSection.classList.add('hidden');
    reviewContainer.classList.remove('hidden');
    
    // Mark as completed in local storage
    localStorage.setItem('portfolioAnswers', JSON.stringify({
        answers: answers,
        notes: notes,
        currentIndex: currentQuestionIndex,
        interviewStarted: true,
        completed: true
    }));
    
    // Generate review content
    let reviewHTML = '';
    
    // Group by categories for anchors
    const categories = [...new Set(questions.map(q => q.category))];
    
    categories.forEach(category => {
        const catId = category.replace(/\s+/g, '-').toLowerCase();
        
        // Add category header
        reviewHTML += `<div id="${catId}" class="category-section">
            <h3 style="color: var(--primary-color); margin-top: 2rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #eee;">${category}</h3>
        </div>`;
        
        // Add questions for this category
        questions.forEach((q, index) => {
            if (q.category === category) {
                const answer = answers[index] || '';
                const note = notes[index] || '';
                
                reviewHTML += `
                    <div class="review-card fade-in">
                        <div class="category">${q.category}</div>
                        <div class="question"><strong>Q${index + 1}:</strong> ${q.question}</div>
                        <div class="review-answer ${answer ? '' : 'empty-answer'}">
                            ${answer || 'No answer provided'}
                        </div>
                        ${note ? `
                        <div style="margin-top: 10px; border-top: 1px dashed #ddd; padding-top: 10px;">
                            <strong>Your Notes:</strong>
                            <div style="background-color: #f8f9fa; padding: 8px; border-radius: 5px; margin-top: 5px; font-style: italic;">
                                ${note}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                `;
            }
        });
    });
    
    answersReviewEl.innerHTML = reviewHTML;
    
    // Activate the first KSB in the navigation
    const firstKsbLink = document.querySelector('#ksb-list a');
    if (firstKsbLink) {
        firstKsbLink.classList.add('active');
    }
}

// Start over
function startOver() {
    // Clear answers and notes
    for (let i = 0; i < answers.length; i++) {
        answers[i] = '';
        notes[i] = '';
    }
    
    currentQuestionIndex = 0;
    
    // Show start screen again
    reviewContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    // Clear localStorage
    localStorage.removeItem('portfolioAnswers');
}

// Start timer
function startTimer() {
    clearInterval(timerInterval);
    startTime = new Date();
    
    timerInterval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - startTime) / 1000);
        
        const minutes = Math.floor(diff / 60).toString().padStart(2, '0');
        const seconds = (diff % 60).toString().padStart(2, '0');
        
        timerEl.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// Save to localStorage
function saveToLocalStorage() {
    const dataToSave = {
        answers: answers,
        notes: notes,
        currentIndex: currentQuestionIndex,
        interviewStarted: interviewStarted
    };
    
    localStorage.setItem('portfolioAnswers', JSON.stringify(dataToSave));
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);
