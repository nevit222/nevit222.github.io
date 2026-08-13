function setLegalLanguage(language) {
    document.querySelectorAll('[data-lang]').forEach(function (element) {
        element.classList.toggle('visible', element.dataset.lang === language);
    });
    document.querySelectorAll('[data-language-button]').forEach(function (button) {
        button.setAttribute(
            'aria-pressed',
            button.dataset.languageButton === language ? 'true' : 'false'
        );
    });
    document.documentElement.lang = language;
    try { localStorage.setItem('nectar-legal-language', language); } catch (_) {}
}

(function () {
    var stored = null;
    try { stored = localStorage.getItem('nectar-legal-language'); } catch (_) {}
    var browserLanguage = (navigator.language || '').toLowerCase();
    setLegalLanguage(stored || (browserLanguage.startsWith('id') ? 'id' : 'en'));
})();
