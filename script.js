// DOM Elements
const textDisplay = document.getElementById('text-display');
const inputArea = document.getElementById('input-area');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const resultsBtn = document.getElementById('results-btn');
const saveBtn = document.getElementById('save-btn');
const wpmElement = document.getElementById('wpm');
const cpmElement = document.getElementById('cpm');
const accuracyElement = document.getElementById('accuracy');
const timerElement = document.getElementById('timer');
const errorsElement = document.getElementById('errors');
const themeToggle = document.getElementById('theme-toggle');
const progressBar = document.getElementById('progress');
const timeSelect = document.getElementById('time-select');
const difficultySelect = document.getElementById('difficulty-select');
const languageSelect = document.getElementById('language-select');
const historyContainer = document.getElementById('history-container');
const historyList = document.getElementById('history-list');
const resultsModal = document.getElementById('results-modal');
const closeModal = document.getElementById('close-modal');
const resultsChart = document.getElementById('results-chart');
const finalWpm = document.getElementById('final-wpm');
const finalCpm = document.getElementById('final-cpm');
const finalAccuracy = document.getElementById('final-accuracy');
const finalWords = document.getElementById('final-words');
const finalErrors = document.getElementById('final-errors');

const sampleTexts = {
    turkish: {
        easy: [
            "Mavi renkli bir kedi, bahçede çiçekleri izliyor. Güneş parlak, hava sıcak ve herkes mutlu.",
            "Kitap okumak, insanın hayal gücünü geliştirir. Her gün bir kitap, hayatınızı değiştirebilir.",
            "Bilgisayar teknolojisi, hayatımızı kolaylaştırıyor. İnternet sayesinde dünya küçülüyor.",
            "Deniz kenarında yürümek, insanı rahatlatır. Dalga sesleri huzur verir.",
            "Sabahları erken kalkmak, gününüzü daha verimli geçirmenizi sağlar.",
            "Bir fincan kahve, güne başlamak için harika bir seçimdir.",
            "Gökkuşağı, yağmurdan sonra gökyüzünde ortaya çıkar ve renkleriyle herkesi büyüler.",
            "Parkta oyun oynayan çocuklar neşeyle gülüyor. Kuşlar dallarda şarkı söylüyor.",
            "Doğa yürüyüşleri yapmak, sağlığa faydalıdır ve zihni dinlendirir.",
            "Bahar geldiğinde ağaçlar çiçek açar ve her yer rengarenk olur.",
            "Yeni yerler keşfetmek, insanın ufkunu genişletir.",
            "Mutfakta yemek pişirmek, yaratıcılığı geliştirir ve eğlencelidir.",
            "Bir gülümseme, bir gününüzü güzelleştirebilir.",
            "Evcil hayvanlar, sahiplerine sadıktır ve onları mutlu eder.",
            "Yağmur sonrası toprak kokusu insanı huzurla doldurur."
        ],
        medium: [
            "Bilgisayar klavyesi üzerinde hızlı yazabilmek, günümüzde önemli bir beceri haline gelmiştir.",
            "Klavye hızı testi, dakikada kaç kelime yazabildiğinizi ve yazım doğruluğunuzu ölçen bir araçtır.",
            "İyi bir klavye kullanıcısı olmak için parmak pozisyonlarını doğru kullanmak önemlidir.",
            "Başarılı bir sunum yapmak için konuşma pratiği yapmak gereklidir.",
            "Bilim insanları, yeni enerji kaynakları üzerinde çalışmalarını sürdürüyor.",
            "Dengeli beslenme, sağlıklı bir yaşam için büyük önem taşır.",
            "İnsanlar sosyal varlıklardır ve iletişim becerileri hayatın her alanında gereklidir.",
            "Teknolojinin hızlı gelişimi, iş dünyasında büyük değişimlere neden olmuştur.",
            "Müzik dinlemek, ruh halini olumlu yönde etkileyebilir ve stres seviyesini azaltabilir.",
            "Doğru zaman yönetimi, günlük görevleri verimli bir şekilde tamamlamaya yardımcı olur.",
            "Günümüzde uzaktan eğitim giderek yaygınlaşmaktadır.",
            "Sanat, insanların duygularını ifade etmelerine yardımcı olur.",
            "Egzersiz yapmak, hem bedensel hem de zihinsel sağlığa fayda sağlar.",
            "Tatil planı yapmak, yıl boyunca motivasyonu artıran bir aktivitedir.",
            "Dil öğrenmek, farklı kültürleri anlamak için harika bir fırsattır."
        ],
        hard: [
            "Yazılım mühendisliği, bilgisayar bilimlerinin önemli bir dalıdır.",
            "Veri yapıları ve algoritmalar, bilgisayar bilimlerinin temel taşlarındandır.",
            "Yapay zekâ, son yıllarda hızla gelişen bir teknolojidir.",
            "Kuantum bilgisayarlar, klasik bilgisayarlara kıyasla daha hızlı işlem yapabilir.",
            "Büyük veri analitiği, işletmelerin karar alma süreçlerinde kritik bir rol oynar.",
            "Ekolojik sürdürülebilirlik, gelecek nesillere yaşanabilir bir dünya bırakmayı amaçlar.",
            "Ekonomik krizler, küresel ticaret dengelerini sarsabilir.",
            "Genetik mühendisliği, biyoteknoloji alanında büyük ilerlemeler kaydetmiştir.",
            "Astronomi, evrenin doğasını anlamaya yönelik en eski bilim dallarından biridir.",
            "Nanoteknoloji, birçok sektörde çığır açan gelişmelere yol açmaktadır.",
            "Küresel ısınma, en büyük çevresel tehditlerden biridir.",
            "Yapay organlar, modern tıbbın en büyük buluşlarından biri olarak kabul edilmektedir.",
            "Otonom araç teknolojisi, gelecekte ulaşımın temelini oluşturabilir.",
            "İnsan beyni ve bilinç, bilim insanları için büyük bir gizemdir.",
            "Uzay madenciliği, dünya dışı kaynaklara ulaşma konusunda büyük fırsatlar sunabilir."
        ]
    },
    english: {
        easy: [
            "The blue cat is watching flowers in the garden. The sun is bright, the weather is warm, and everyone is happy.",
            "Reading books improves one's imagination. A book a day can change your life.",
            "Computer technology makes our lives easier. The internet makes the world smaller.",
            "Walking by the sea is relaxing. The sound of waves brings peace.",
            "Waking up early in the morning makes your day more productive.",
            "A cup of coffee is a great way to start the day.",
            "A rainbow appears in the sky after rain, mesmerizing everyone with its colors.",
            "Children are playing happily in the park. Birds are singing in the trees.",
            "Going for a nature walk is good for your health and refreshes your mind.",
            "When spring arrives, trees bloom and everything becomes colorful.",
            "Exploring new places expands one's horizons.",
            "Cooking in the kitchen enhances creativity and is enjoyable.",
            "A simple smile can brighten someone's day.",
            "Pets are loyal to their owners and bring happiness.",
            "The smell of the soil after rain fills the air with tranquility."
        ],
        medium: [
            "Being able to type quickly on a keyboard has become an essential skill.",
            "A typing speed test measures how many words per minute you can type accurately.",
            "Using the correct finger positions is important for efficient typing.",
            "Practicing public speaking is necessary for a successful presentation.",
            "Scientists continue to research new energy sources.",
            "A balanced diet is crucial for a healthy life.",
            "Humans are social beings, and communication skills are necessary in all areas of life.",
            "The rapid advancement of technology has led to major changes in the business world.",
            "Listening to music can positively affect mood and reduce stress levels.",
            "Time management helps in efficiently completing daily tasks.",
            "Online education is becoming increasingly popular.",
            "Art allows people to express their emotions and share them with others.",
            "Exercising benefits both physical and mental health.",
            "Planning vacations boosts motivation throughout the year.",
            "Learning a new language is a great opportunity to understand different cultures."
        ],
        hard: [
            "Software engineering is a key branch of computer science.",
            "Data structures and algorithms are fundamental to computer science.",
            "Artificial intelligence has rapidly evolved in recent years.",
            "Quantum computers have the potential to outperform classical computers.",
            "Big data analytics plays a crucial role in business decision-making.",
            "Ecological sustainability aims to preserve the environment for future generations.",
            "Economic crises can disrupt global trade balances.",
            "Genetic engineering has led to significant advancements in biotechnology.",
            "Astronomy is one of the oldest sciences studying the universe.",
            "Nanotechnology is revolutionizing many industries.",
            "Global warming is one of the greatest environmental threats.",
            "Artificial organs are among modern medicine's greatest innovations.",
            "Autonomous vehicles could become the future of transportation.",
            "The human brain and consciousness remain great mysteries for scientists.",
            "Space mining offers great opportunities for accessing extraterrestrial resources."
        ]
    }
};


// Variables
let currentText = "";
let timeLeft = 60;
let maxTime = 60;
let timer;
let isTestActive = false;
let startTime;
let correctCharacters = 0;
let totalCharacters = 0;
let errorCount = 0;
let currentLanguage = "turkish";
let currentDifficulty = "medium";
let testHistory = JSON.parse(localStorage.getItem('typingTestHistory')) || [];
let wpmHistory = [];
let accuracyHistory = [];
let errorHistory = [];

// Set up event listeners
themeToggle.addEventListener('change', toggleTheme);
startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', initTest);
resultsBtn.addEventListener('click', showResults);
saveBtn.addEventListener('click', saveResults);
closeModal.addEventListener('click', () => resultsModal.style.display = "none");
timeSelect.addEventListener('change', updateTimer);
difficultySelect.addEventListener('change', updateDifficulty);
languageSelect.addEventListener('change', updateLanguage);
window.addEventListener('click', (event) => {
    if (event.target === resultsModal) {
        resultsModal.style.display = "none";
    }
});

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Update timer based on selection
function updateTimer() {
    maxTime = parseInt(timeSelect.value);
    timeLeft = maxTime;
    timerElement.textContent = timeLeft;
}

// Update difficulty
function updateDifficulty() {
    currentDifficulty = difficultySelect.value;
    initTest();
}

// Update language
function updateLanguage() {
    currentLanguage = languageSelect.value;
    initTest();
}

// Initialize test
function initTest() {
    // Get random text based on language and difficulty
    const texts = sampleTexts[currentLanguage][currentDifficulty];
    currentText = texts[Math.floor(Math.random() * texts.length)];
    
    // Prepare text display
    textDisplay.innerHTML = currentText.split('').map(char => 
        `<span class="character">${char}</span>`
    ).join('');
    
    // Reset variables
    inputArea.value = '';
    timeLeft = maxTime;
    timerElement.textContent = timeLeft;
    wpmElement.textContent = '0';
    cpmElement.textContent = '0';
    accuracyElement.textContent = '0%';
    errorsElement.textContent = '0';
    progressBar.style.width = '0%';
    
    correctCharacters = 0;
    totalCharacters = 0;
    errorCount = 0;
    isTestActive = false;
    
    // Reset WPM and accuracy history
    wpmHistory = [];
    accuracyHistory = [];
    errorHistory = [];
    
    // Disable/enable buttons
    inputArea.disabled = true;
    resultsBtn.disabled = true;
    saveBtn.disabled = true;
    
    // Clear any existing timers
    if (timer) {
        clearInterval(timer);
    }
    
    // Update highlight
    updateHighlight(0);
    
    // Load history
    loadHistory();
}

// Start the test
function startTest() {
    if (!isTestActive) {
        isTestActive = true;
        startTime = new Date();
        inputArea.disabled = false;
        inputArea.focus();
        
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            
            // Update progress bar
            const progress = ((maxTime - timeLeft) / maxTime) * 100;
            progressBar.style.width = `${progress}%`;
            
            // Log WPM and accuracy at intervals
            if (timeLeft % 5 === 0 || timeLeft === 0) {
                const stats = calculateStats();
                wpmHistory.push(stats.wpm);
                accuracyHistory.push(stats.accuracy);
                errorHistory.push(errorCount);
            }
            
            if (timeLeft <= 0) {
                endTest();
            }
        }, 1000);
    }
}

// End the test
function endTest() {
    clearInterval(timer);
    isTestActive = false;
    inputArea.disabled = true;
    
    // Enable results and save buttons
    resultsBtn.disabled = false;
    saveBtn.disabled = false;
    
    // Calculate final stats
    calculateStats();
}

// Calculate WPM and accuracy
function calculateStats() {
    const elapsedTime = Math.max((new Date() - startTime) / 60000, 0.001); // in minutes
    const inputText = inputArea.value.trim();
    const words = inputText.split(/\s+/).length;
    const characters = inputText.length;
    
    const wpm = Math.round(words / elapsedTime);
    const cpm = Math.round(characters / elapsedTime);
    
    let accuracy = 0;
    if (totalCharacters > 0) {
        accuracy = Math.round((correctCharacters / totalCharacters) * 100);
    }
    
    wpmElement.textContent = wpm;
    cpmElement.textContent = cpm;
    accuracyElement.textContent = accuracy + '%';
    errorsElement.textContent = errorCount;
    
    return { wpm, cpm, accuracy, words, characters, errors: errorCount };
}

// Update text highlighting based on current position
function updateHighlight(cursorPosition) {
    const characters = textDisplay.querySelectorAll('.character');
    const inputText = inputArea.value;
    
    // Remove all classes
    characters.forEach(char => {
        char.classList.remove('current', 'correct', 'incorrect');
    });
    
    // Reset counters for accuracy
    correctCharacters = 0;
    errorCount = 0;
    
    // Add appropriate classes
    for (let i = 0; i < characters.length; i++) {
        if (i === cursorPosition) {
            characters[i].classList.add('current');
        } else if (i < inputText.length) {
            if (inputText[i] === characters[i].textContent) {
                characters[i].classList.add('correct');
                correctCharacters++;
            } else {
                characters[i].classList.add('incorrect');
                errorCount++;
            }
        }
    }
    
    // Update visible error count
    errorsElement.textContent = errorCount;
    
    // Auto-scroll to keep current character visible
    if (cursorPosition < characters.length) {
        const currentChar = characters[cursorPosition];
        const container = textDisplay;
        const containerRect = container.getBoundingClientRect();
        const charRect = currentChar.getBoundingClientRect();
        
        if (charRect.bottom > containerRect.bottom) {
            container.scrollTop += charRect.bottom - containerRect.bottom;
        } else if (charRect.top < containerRect.top) {
            container.scrollTop -= containerRect.top - charRect.top;
        }
    }
}

// Handle input
inputArea.addEventListener('input', () => {
    if (!isTestActive) return;
    
    const cursorPosition = inputArea.value.length;
    totalCharacters = cursorPosition;
    
    updateHighlight(cursorPosition);
    
    // Calculate and update current stats
    calculateStats();
    
    // Check if test is complete
    if (cursorPosition >= currentText.length) {
        endTest();
    }
});

// Show test results
function showResults() {
    const stats = calculateStats();
    
    finalWpm.textContent = stats.wpm;
    finalCpm.textContent = stats.cpm;
    finalAccuracy.textContent = stats.accuracy + '%';
    finalWords.textContent = stats.words;
    finalErrors.textContent = stats.errors;
    
    // Generate chart
    createResultsChart();
    
    // Show modal
    resultsModal.style.display = "flex";
}

// Create results chart
function createResultsChart() {
        resultsChart.innerHTML = '';
        
        // Get data points
        const dataPoints = wpmHistory.length;
        
        // Normalize data for chart
        const maxWpm = Math.max(...wpmHistory, 1);
        const normalizedWpm = wpmHistory.map(wpm => (wpm / maxWpm) * 100);
        const normalizedAccuracy = accuracyHistory;
        const maxErrors = Math.max(...errorHistory, 1);
        const normalizedErrors = errorHistory.map(errors => (errors / maxErrors) * 100);
        
        // Create bars for each data point
        for (let i = 0; i < dataPoints; i++) {
            // Create container for group of bars
            const barGroup = document.createElement('div');
            barGroup.style.display = 'flex';
            barGroup.style.gap = '5px';
            
            // WPM bar
            const wpmBar = document.createElement('div');
            wpmBar.className = 'chart-bar';
            wpmBar.style.height = `${normalizedWpm[i]}%`;
            wpmBar.style.backgroundColor = 'var(--success-color)';
            
            const wpmLabel = document.createElement('div');
            wpmLabel.className = 'chart-bar-label';
            wpmLabel.textContent = wpmHistory[i];
            wpmBar.appendChild(wpmLabel);
            
            // Accuracy bar
            const accuracyBar = document.createElement('div');
            accuracyBar.className = 'chart-bar';
            accuracyBar.style.height = `${normalizedAccuracy[i]}%`;
            accuracyBar.style.backgroundColor = 'var(--accent-color)';
            
            const accuracyLabel = document.createElement('div');
            accuracyLabel.className = 'chart-bar-label';
            accuracyLabel.textContent = accuracyHistory[i] + '%';
            accuracyBar.appendChild(accuracyLabel);
            
            // Errors bar
            const errorsBar = document.createElement('div');
            errorsBar.className = 'chart-bar';
            errorsBar.style.height = `${normalizedErrors[i]}%`;
            errorsBar.style.backgroundColor = 'var(--error-color)';
            
            const errorsLabel = document.createElement('div');
            errorsLabel.className = 'chart-bar-label';
            errorsLabel.textContent = errorHistory[i];
            errorsBar.appendChild(errorsLabel);
            
            // Add bars to group
            barGroup.appendChild(wpmBar);
            barGroup.appendChild(accuracyBar);
            barGroup.appendChild(errorsBar);
            
            // Add group to chart
            resultsChart.appendChild(barGroup);
        }
    }
    
    // Save results to history
    function saveResults() {
        const stats = calculateStats();
        const date = new Date();
        
        const result = {
            id: Date.now(),
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
            wpm: stats.wpm,
            cpm: stats.cpm,
            accuracy: stats.accuracy,
            errors: stats.errors,
            language: currentLanguage,
            difficulty: currentDifficulty,
            duration: maxTime
        };
        
        testHistory.unshift(result);
        
        // Limit history to last 10 entries
        if (testHistory.length > 10) {
            testHistory = testHistory.slice(0, 10);
        }
        
        // Save to localStorage
        localStorage.setItem('typingTestHistory', JSON.stringify(testHistory));
        
        // Refresh history display
        loadHistory();
        
        // Show success message or feedback
        alert('Sonuçlar kaydedildi!');
    }
    
    // Load history from localStorage
    function loadHistory() {
        if (testHistory.length > 0) {
            historyContainer.style.display = 'block';
            historyList.innerHTML = '';
            
            testHistory.forEach(entry => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                
                historyItem.innerHTML = `
                    <div>${entry.date} ${entry.time}</div>
                    <div>${entry.wpm} WPM</div>
                    <div>${entry.accuracy}% Doğruluk</div>
                    <div>${entry.difficulty} ${entry.language === 'turkish' ? 'Türkçe' : 'İngilizce'}</div>
                    <div>${entry.duration}s</div>
                `;
                
                historyList.appendChild(historyItem);
            });
        } else {
            historyContainer.style.display = 'none';
        }
    }
    
    // Check for keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+Enter to start/reset
        if (e.ctrlKey && e.key === 'Enter') {
            if (!isTestActive) {
                startTest();
            } else {
                initTest();
            }
            e.preventDefault();
        }
        
        // Esc to reset
        if (e.key === 'Escape') {
            initTest();
            e.preventDefault();
        }
    });
    
    // Create keyboard heatmap (extra feature - not implemented fully)
    function createKeyboardHeatmap() {
        // This would track which keys are common error sources
        // and display a heatmap of the keyboard
        
        // Example implementation would be:
        // 1. Track errors by key
        // 2. Create a visual keyboard
        // 3. Color keys based on error frequency
    }
    
    // Initialize the test on page load
    initTest();
    
    // Load saved history
    loadHistory();
    
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'true') {
        themeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }
    
    // Save dark mode preference
    themeToggle.addEventListener('change', () => {
        localStorage.setItem('darkMode', themeToggle.checked);
    });
;
