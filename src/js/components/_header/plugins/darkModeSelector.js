const Toggle = () => {
    if (document.documentElement.classList.contains('dark')) {
        localStorage.removeItem('theme');
    } else {
        localStorage.theme = 'dark';
    }
    document.documentElement.classList.toggle('dark');
}
function DarkModeInit(container) {
    if (document.querySelector(container)) {
        document.querySelector(container).addEventListener('click', () => {
            Toggle(container);
        });
    }
};

function DarkModeToggle() {
    Toggle();
};

export { DarkModeInit, DarkModeToggle };