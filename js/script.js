// ==========================================
// 1. LIVE MALAYSIA TIME & GREETING CLOCK
// ==========================================
function updateClockAndGreeting() {
    const now = new Date();
    
    // Dapatkan masa mengikut zon masa Malaysia (MYT)
    const optionsTime = { timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const optionsDate = { timeZone: 'Asia/Kuala_Lumpur', weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    
    const timeString = now.toLocaleTimeString('en-US', optionsTime);
    const dateString = now.toLocaleDateString('en-US', optionsDate);
    
    const datetimeElem = document.getElementById('malaysia-datetime');
    if (datetimeElem) {
        datetimeElem.textContent = `${dateString}, ${timeString} (MYT)`;
    }

    // Tetapkan ucapan berdasarkan jam semasa
    const hourMYT = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kuala_Lumpur', hour: 'numeric', hour12: false }).format(now);
    const greetingElem = document.getElementById('greeting');
    
    if (greetingElem) {
        let greetingText = "Good Evening!";
        if (hourMYT >= 5 && hourMYT < 12) {
            greetingText = "Good Morning!";
        } else if (hourMYT >= 12 && hourMYT < 17) {
            greetingText = "Good Afternoon!";
        } else if (hourMYT >= 17 && hourMYT < 21) {
            greetingText = "Good Evening!";
        } else {
            greetingText = "Good Night!";
        }
        greetingElem.textContent = greetingText;
    }
}

// Jalankan fungsi jam setiap saat
setInterval(updateClockAndGreeting, 1000);
window.onload = updateClockAndGreeting;


// ==========================================
// 2. SCROLL TO TOP BUTTON & FOOTER YEAR
// ==========================================
window.addEventListener('scroll', function() {
    const topBtn = document.getElementById('scrollTopBtn');
    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    }
});

const topBtnElem = document.getElementById('scrollTopBtn');
if (topBtnElem) {
    topBtnElem.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Kemas kini tahun automatik di footer
document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
});


// ==========================================
// 3. DARK MODE TOGGLE SCRIPT
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const currentTheme = localStorage.getItem('theme');

// Semak status tema tersimpan
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️';
        } else {
            themeToggleBtn.textContent = '🌙';
        }
        
        localStorage.setItem('theme', theme);
    });
}