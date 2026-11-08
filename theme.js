// Light/dark mode toggle. The saved choice is applied early by a script in <head>.
document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    var button = document.querySelector('.theme-toggle');
    if (!button) return;

    function currentTheme() {
        var set = root.getAttribute('data-theme');
        if (set) return set;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    button.addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch (e) {}
    });
});
