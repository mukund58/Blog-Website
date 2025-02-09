const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeSound = document.getElementById('theme-sound');

// Function to update the theme icon based on the current theme
const updateThemeIcon = (isDarkMode) => {
    const themeMode = isDarkMode ? 'darkMode' : 'lightMode';
    const iconPath = themeIcon.querySelector('use').getAttribute('href').replace(/#.*$/, `#${themeMode}`);
    themeIcon.querySelector('use').setAttribute('href', iconPath);
};

// Function to update the theme based on the current mode
const updateTheme = (isDarkMode) => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(isDarkMode);
};

// Function to toggle the theme
const toggleTheme = () => {
    const isDarkMode = toggleButton.checked;
    updateTheme(isDarkMode);
    themeSound.play();
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Add transition class to body for smooth transition
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
};

// Event listener for theme toggle
toggleButton.addEventListener('change', toggleTheme);

// Function to initialize the theme based on the stored preference
const initializeTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
    toggleButton.checked = isDarkMode;
    updateTheme(isDarkMode);
};

// Initialize the theme
initializeTheme();

// Listen for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initializeTheme);


// static/js/quotes.js
const quotes = [
  "The only thing  that pepole are equal in death - Johan Liebert",
  "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
  "Pepole who push themselve  onward see a diffrent sort of hell - Eren",
  "It might be hope or it might  be yet another hell only the pepole who keeping moving forward can know for sure - Eren",
  "Not a single good thing has happened to me in my entire life - Thorfinn",
  "You are not my enemies I don't have enemies - Thorfinn",
  "If the truth is cruel, then lies must be kind That's why kindness is a lie -  hachiman hikigaya",
  "I'll always hate nice girls -  hachiman hikigaya",
  "People who are nice to me are also nice to everyone else. I almost end up forgetting that. -  hachiman hikigaya",
  "Youth is a lie -  hachiman hikigaya",
   "you'll be fine - Wish Man",
   "do not fear death , death is always at your side When you show fear , it will spring at you faster than light - Cowboy Bebop"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('quoteDisplay').innerText = getRandomQuote();
});
