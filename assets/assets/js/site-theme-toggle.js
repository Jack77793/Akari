const themeToggleBtn = document.getElementById('theme-toggle-btn');
const lightIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20z"/></svg>';
const darkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#1a1a1a" d="M10 2c-1.82 0-3.53.5-5 1.35C8 5.08 10 8.3 10 12s-2 6.92-5 8.65C6.47 21.5 8.18 22 10 22a10 10 0 0 0 10-10A10 10 0 0 0 10 2"/></svg>';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = theme === 'dark' ? lightIcon : darkIcon;
    }
}

const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
applyTheme(currentTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === null) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});
