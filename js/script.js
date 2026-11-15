document.addEventListener("DOMContentLoaded", function () {
    // 1. DYNAMIC GREETING (Home Page)
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        const hour = new Date().getHours();
        let msg = "Good Day!";
        if (hour < 12) msg = "Good Morning!";
        else if (hour < 18) msg = "Good Afternoon!";
        else msg = "Good Evening!";
        greetingEl.textContent = msg;
    }

    // 2. READ MORE / LESS TOGGLE (About Page)
    const readMoreBtn = document.getElementById("readMoreBtn");
    const extraContent = document.getElementById("extraContent");
    if (readMoreBtn && extraContent) {
        extraContent.style.display = "none";
        readMoreBtn.addEventListener("click", function () {
            if (extraContent.style.display === "none") {
                extraContent.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                extraContent.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    }

    // 3. AUTOMATIC COPYRIGHT YEAR (Semua Halaman)
    const yearSpans = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(function (span) {
        span.textContent = currentYear;
    });

    // 4. SCROLL-TO-TOP BUTTON (Semua Halaman)
    const topBtn = document.createElement("button");
    topBtn.textContent = "↑ Top";
    topBtn.id = "scrollTopBtn";
    topBtn.className = "scroll-top-btn";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 5. CONTACT FORM VALIDATION (Contact Page)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Error: Please fill in all required fields.");
                return;
            }
            if (!email.includes("@") || !email.includes(".")) {
                alert("Error: Please enter a valid email address.");
                return;
            }
            alert("Success! Thank you " + name + ", your message has been sent.");
            contactForm.reset();
        });
    }
});