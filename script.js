
const languageBtn = document.getElementById("languageBtn");

// English is the default language
let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";

    document.documentElement.lang = currentLanguage;

    // Translate all bilingual text
    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach(function(element) {
        element.textContent = element.dataset[currentLanguage];
    });

    // Translate placeholders in form fields
    const placeholderElements = document.querySelectorAll(
        "[data-placeholder-fr][data-placeholder-en]"
    );

    placeholderElements.forEach(function(element) {
        element.placeholder =
            element.getAttribute("data-placeholder-" + currentLanguage);
    });

    // Update the language button
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === "en" ? "FR" : "EN";

        languageBtn.setAttribute(
            "aria-label",
            currentLanguage === "en"
                ? "Passer en français"
                : "Switch to English"
        );
    }
}

if (languageBtn) {
    languageBtn.textContent = "FR";
    languageBtn.addEventListener("click", changeLanguage);
}

// Display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
