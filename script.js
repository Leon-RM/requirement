// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(acc => {
            acc.classList.remove('active');
        });
        
        // Open clicked accordion if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Portfolio Checklist Progress
const checkboxes = document.querySelectorAll('.checklist-checkbox');
const progressFill = document.getElementById('portfolioProgress');
const progressPercent = document.getElementById('progressPercent');

function updateProgress() {
    const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
    const total = checkboxes.length;
    const percentage = (checked / total) * 100;
    
    progressFill.style.width = percentage + '%';
    progressPercent.textContent = Math.round(percentage) + '%';
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});

// SOP Generator
const sopExamples = [
    "ฉันสนใจเทคโนโลยีสารสนเทศเพราะเห็นว่ามันสามารถแก้ปัญหาต่างๆ ในชีวิตประจำวันได้ และอยากเป็นส่วนหนึ่งในการสร้างนวัตกรรมที่เปลี่ยนแปลงโลก",
    "แรงจูงใจที่ทำให้ฉันอยากเรียน IT คือการได้เห็นการพัฒนาของ AI และ Machine Learning ที่สามารถช่วยเหลือมนุษย์ได้มากมาย ฉันอยากเรียนรู้และสร้างสิ่งเหล่านี้ด้วยตัวเอง",
    "ฉันเลือกคณะนี้เพราะเห็นว่ามีหลักสูตรที่ทันสมัย มีอาจารย์ที่มีประสบการณ์ และมีโอกาสได้ทำโครงงานจริงที่สามารถนำไปใช้ได้จริง",
    "เป้าหมายในอนาคตของฉันคือการเป็น Software Engineer ที่พัฒนาแอปพลิเคชันที่ช่วยแก้ปัญหาสังคม และอยากสร้างสตาร์ทอัพด้านเทคโนโลยีของตัวเอง",
    "ประสบการณ์ที่ทำให้ฉันมั่นใจว่าตัวเองเหมาะกับสาขานี้คือการได้เข้าร่วมค่ายเขียนโปรแกรม และการพัฒนาเว็บไซต์ให้กับชมรมในโรงเรียน",
    "ฉันเชื่อว่าการเรียน IT จะทำให้ฉันได้เรียนรู้ทักษะที่จำเป็นในยุคดิจิทัล และสามารถสร้างผลงานที่สร้างคุณค่าให้กับสังคมได้",
    "สิ่งที่ดึงดูดฉันให้สนใจ IT คือการได้เห็นว่าเทคโนโลยีสามารถเชื่อมโยงผู้คนจากทั่วโลกเข้าด้วยกัน และสร้างโอกาสใหม่ๆ ได้ไม่รู้จบ",
    "ฉันอยากเรียนคณะนี้เพราะเห็นว่ามีโอกาสได้ทำงานร่วมกับบริษัทชั้นนำ และมีโอกาสได้ไปศึกษาต่อหรือทำงานในต่างประเทศ",
    "เป้าหมายของฉันคือการเป็น Full-Stack Developer ที่สามารถพัฒนาแอปพลิเคชันที่ใช้งานง่ายและมีประโยชน์ต่อผู้ใช้",
    "ฉันเชื่อว่าการเรียน IT จะช่วยให้ฉันได้พัฒนาทักษะการคิดวิเคราะห์ การแก้ปัญหา และความคิดสร้างสรรค์ ซึ่งเป็นทักษะที่สำคัญในทุกอาชีพ"
];

const generateSOPBtn = document.getElementById('generateSOP');
const sopOutput = document.getElementById('sopOutput');

if (generateSOPBtn) {
    generateSOPBtn.addEventListener('click', () => {
        const randomExample = sopExamples[Math.floor(Math.random() * sopExamples.length)];
        sopOutput.innerHTML = `<p style="font-size: 1.1rem; line-height: 1.8;">${randomExample}</p>`;
        sopOutput.style.animation = 'fadeIn 0.5s';
    });
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Minigame 1: Portfolio Quiz
const quizQuestions = [
    {
        question: "ผลงาน 'แอปพลิเคชันคำนวณเกรด' ที่ทำในวิชาเรียน สามารถใส่ในพอร์ตได้หรือไม่?",
        answer: true,
        explanation: "✅ ใช่! แอปพลิเคชันที่พัฒนาเอง แม้จะทำในวิชาเรียนก็สามารถใส่ในพอร์ตได้ ถ้ามีการพัฒนาจริงและใช้งานได้"
    },
    {
        question: "ใบรับรองจากค่าย 'ค่ายวิทยาศาสตร์ทั่วไป' (ไม่เกี่ยวกับคอมพิวเตอร์) ควรใส่ในพอร์ต IT หรือไม่?",
        answer: false,
        explanation: "❌ ไม่ควรใส่ เพราะพอร์ต IT ควรเน้นผลงานที่เกี่ยวข้องกับเทคโนโลยีสารสนเทศโดยตรง"
    },
    {
        question: "โครงงาน NECTEC YSC ที่ผ่านเข้ารอบชิงชนะเลิศ ควรใส่ในพอร์ตหรือไม่?",
        answer: true,
        explanation: "✅ ใช่! โครงงาน NECTEC YSC เป็นผลงานที่สำคัญมากและควรใส่ในพอร์ต โดยเฉพาะถ้าผ่านเข้ารอบชิงชนะเลิศ"
    },
    {
        question: "ผลงาน 'การแข่งขันวาดภาพ' ระดับจังหวัด ควรใส่ในพอร์ต IT หรือไม่?",
        answer: false,
        explanation: "❌ ไม่ควรใส่ เพราะไม่เกี่ยวข้องกับ IT โดยตรง ควรเน้นผลงานที่เกี่ยวกับคอมพิวเตอร์ เทคโนโลยี หรือวิทยาศาสตร์"
    },
    {
        question: "ผลงานพัฒนา 'Chatbot ด้วย Python' ที่ทำเองที่บ้าน ควรใส่ในพอร์ตหรือไม่?",
        answer: true,
        explanation: "✅ ใช่! ผลงานพัฒนาซอฟต์แวร์ที่ทำเอง แม้จะไม่ได้ประกวดก็สามารถใส่ได้ ถ้ามีการพัฒนาจริงและแสดงให้เห็นทักษะ"
    },
    {
        question: "ใบรับรองจากค่าย 'ค่ายเขียนโปรแกรม Python' ควรใส่ในพอร์ตหรือไม่?",
        answer: true,
        explanation: "✅ ใช่! ใบรับรองจากค่ายที่เกี่ยวข้องกับ IT โดยตรงเป็นผลงานที่ควรใส่ในพอร์ต"
    },
    {
        question: "ผลงาน 'การแข่งขันฟุตบอล' ระดับโรงเรียน ควรใส่ในพอร์ต IT หรือไม่?",
        answer: false,
        explanation: "❌ ไม่ควรใส่ เพราะไม่เกี่ยวข้องกับ IT โดยตรง พอร์ตควรเน้นผลงานที่แสดงความสนใจและทักษะด้านเทคโนโลยี"
    },
    {
        question: "ผลงาน 'เว็บไซต์สำหรับโรงเรียน' ที่พัฒนาเองและใช้งานจริง ควรใส่ในพอร์ตหรือไม่?",
        answer: true,
        explanation: "✅ ใช่! ผลงานพัฒนาเว็บไซต์ที่ใช้งานได้จริงเป็นผลงานที่ดีมากและควรใส่ในพอร์ต"
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;

function startQuiz() {
    document.getElementById('quizGame').classList.remove('hidden');
    currentQuestionIndex = 0;
    quizScore = 0;
    document.getElementById('quizScore').textContent = '0';
    document.getElementById('quizFeedback').innerHTML = '';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').textContent = question.question;
    document.getElementById('quizFeedback').innerHTML = '';
}

function checkAnswer(userAnswer) {
    const question = quizQuestions[currentQuestionIndex];
    const feedback = document.getElementById('quizFeedback');
    
    if (userAnswer === question.answer) {
        quizScore++;
        feedback.innerHTML = `<p class="correct">✅ ถูกต้อง! ${question.explanation}</p>`;
        document.getElementById('quizScore').textContent = quizScore;
    } else {
        feedback.innerHTML = `<p class="incorrect">❌ ผิด! ${question.explanation}</p>`;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showQuizResults();
        }
    }, 2000);
}

function showQuizResults() {
    const feedback = document.getElementById('quizFeedback');
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = `🎉 ยอดเยี่ยม! คุณได้ ${quizScore}/${quizQuestions.length} คะแนน (${percentage}%) คุณเข้าใจเกณฑ์การทำพอร์ตดีมาก!`;
    } else if (percentage >= 60) {
        message = `👍 ดีมาก! คุณได้ ${quizScore}/${quizQuestions.length} คะแนน (${percentage}%) ยังมีที่ต้องปรับปรุงอีกนิด`;
    } else {
        message = `📚 คุณได้ ${quizScore}/${quizQuestions.length} คะแนน (${percentage}%) ลองอ่านรายละเอียดพอร์ตอีกครั้งนะ!`;
    }
    
    feedback.innerHTML = `<p style="font-size: 1.2rem; padding: 1.5rem; background: rgba(0, 212, 255, 0.1); border-radius: 10px;">${message}</p>`;
}

function closeGame(gameId) {
    document.getElementById(gameId).classList.add('hidden');
}

// Minigame 2: Drag & Drop
const requiredItems = ['sop', 'competition', 'project', 'software'];
let droppedItems = [];

function startDragDrop() {
    document.getElementById('dragDropGame').classList.remove('hidden');
    droppedItems = [];
    const dropZone = document.getElementById('dropZone');
    dropZone.innerHTML = '<p>ลากองค์ประกอบมาวางที่นี่</p>';
    document.getElementById('dragDropFeedback').innerHTML = '';
    
    // Reset drag items
    document.querySelectorAll('.drag-item').forEach(item => {
        item.style.display = 'block';
    });
}

// Drag and Drop functionality
document.querySelectorAll('.drag-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.item);
        item.classList.add('dragging');
    });
    
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

const dropZone = document.getElementById('dropZone');

if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        
        const itemType = e.dataTransfer.getData('text/plain');
        
        if (!droppedItems.includes(itemType)) {
            droppedItems.push(itemType);
            
            const itemNames = {
                'sop': '📝 SOP',
                'competition': '🏆 ผลงานแข่งขัน',
                'project': '🧪 โครงงาน',
                'software': '💻 ซอฟต์แวร์'
            };
            
            const droppedDiv = document.createElement('div');
            droppedDiv.className = 'dropped-item';
            droppedDiv.textContent = itemNames[itemType];
            dropZone.appendChild(droppedDiv);
            
            // Hide dragged item
            document.querySelector(`[data-item="${itemType}"]`).style.display = 'none';
            
            checkPortfolioComplete();
        }
    });
}

function checkPortfolioComplete() {
    const feedback = document.getElementById('dragDropFeedback');
    
    if (droppedItems.length === requiredItems.length) {
        feedback.innerHTML = '<p class="correct" style="font-size: 1.2rem; padding: 1.5rem;">🎉 พอร์ตคุณพร้อมแล้ว! คุณมีองค์ประกอบครบถ้วนแล้ว!</p>';
    } else {
        const remaining = requiredItems.length - droppedItems.length;
        feedback.innerHTML = `<p style="color: var(--text-gray);">ยังขาดอีก ${remaining} องค์ประกอบ</p>`;
    }
}

// Minigame 3: Interview Simulator
const interviewQuestions = [
    "ทำไมถึงอยากเรียน IT / เทคโนโลยีสารสนเทศ?",
    "โครงการหรือผลงานที่คุณภูมิใจที่สุดคืออะไร? ทำไม?",
    "คุณมีประสบการณ์ในการเขียนโปรแกรมหรือพัฒนาซอฟต์แวร์อย่างไรบ้าง?",
    "คุณคิดว่าตัวเองมีทักษะอะไรที่เหมาะกับการเรียน IT?",
    "เป้าหมายในอนาคตหลังจากจบการศึกษาคืออะไร?"
];

let currentInterviewQuestion = 0;

function startInterview() {
    document.getElementById('interviewGame').classList.remove('hidden');
    currentInterviewQuestion = 0;
    document.getElementById('userResponse').value = '';
    loadInterviewQuestion();
}

function loadInterviewQuestion() {
    if (currentInterviewQuestion < interviewQuestions.length) {
        document.getElementById('interviewQuestion').textContent = interviewQuestions[currentInterviewQuestion];
        document.getElementById('questionNumber').textContent = currentInterviewQuestion + 1;
        document.getElementById('userResponse').value = '';
    } else {
        showInterviewComplete();
    }
}

function nextQuestion() {
    const response = document.getElementById('userResponse').value.trim();
    
    if (response === '') {
        alert('กรุณาพิมพ์คำตอบก่อนส่ง');
        return;
    }
    
    currentInterviewQuestion++;
    
    if (currentInterviewQuestion < interviewQuestions.length) {
        loadInterviewQuestion();
    } else {
        showInterviewComplete();
    }
}

function showInterviewComplete() {
    const questionContainer = document.querySelector('.question-container') || document.querySelector('.interview-container');
    if (questionContainer) {
        questionContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem;">สัมภาษณ์เสร็จสิ้น!</h3>
                <p style="color: var(--text-gray); line-height: 1.8;">
                    คุณได้ตอบคำถามครบทั้ง 5 ข้อแล้ว<br>
                    การเตรียมตัวตอบคำถามเหล่านี้จะช่วยให้คุณพร้อมสำหรับการสัมภาษณ์จริง<br>
                    ขอให้โชคดี! 🍀
                </p>
            </div>
        `;
    }
}

// Download Functionality
function downloadFile(type) {
    const files = {
        'checklist': {
            name: 'TCAS69_Portfolio_Checklist.pdf',
            content: 'Portfolio Checklist - เอกสารนี้จะสร้างเป็น PDF จริงในเวอร์ชันเต็ม'
        },
        'template': {
            name: 'TCAS69_Portfolio_Template.pdf',
            content: 'Portfolio Template - ตัวอย่างโครงสร้างพอร์ต 10 หน้า'
        },
        'sop': {
            name: 'TCAS69_SOP_Example.pdf',
            content: 'SOP Example - ตัวอย่าง Statement of Purpose'
        },
        'infographic': {
            name: 'TCAS69_Infographic.png',
            content: 'Infographic Guide - อินโฟกราฟิกสรุปขั้นตอน'
        }
    };
    
    const file = files[type];
    if (file) {
        // In a real implementation, this would download actual files
        // For now, we'll show an alert
        alert(`กำลังดาวน์โหลด: ${file.name}\n\nในเวอร์ชันจริง ไฟล์นี้จะถูกดาวน์โหลดทันที\n\n💡 Tip: คุณสามารถสร้างไฟล์เหล่านี้เองโดยใช้ Template ที่มีในเว็บไซต์`);
        
        // Simulate download (in real app, this would trigger actual download)
        console.log(`Downloading: ${file.name}`);
    }
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add parallax effect to particles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.5;
        particle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to main title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('TCAS69 IT Portfolio Website Loaded!');
    
    // Add smooth reveal animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS for active nav link
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--primary-blue);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(navStyle);

