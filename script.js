// Funcionalidade de alternância entre dark e light mode
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';

        this.init();
    }

    init() {
        // Define o estado inicial do checkbox baseado no tema salvo
        this.themeToggle.checked = this.currentTheme === 'light';

        // Aplica o tema salvo no localStorage
        this.applyTheme(this.currentTheme);

        // Adiciona evento de mudança ao checkbox
        this.themeToggle.addEventListener('change', () => this.toggleTheme());
    }

    toggleTheme() {
        // Alterna entre dark e light baseado no estado do checkbox
        this.currentTheme = this.themeToggle.checked ? 'light' : 'dark';

        // Aplica o novo tema
        this.applyTheme(this.currentTheme);

        // Salva a preferência no localStorage
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        // Adiciona/remove classe no body
        document.body.classList.toggle('light-mode', theme === 'light');
    }
}

// Inicializa o gerenciador de temas quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});