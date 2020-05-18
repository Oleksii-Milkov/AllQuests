let themes = ['css/themes/red.css', 'css/themes/black.css', 'css/themes/green.css', 'css/themes/gray.css'];

let current;

for (let i = 0; i < themes.length; i++){
    if (localStorage.getItem('theme') == themes[i]){
        current = i;
    }
}

btnNext.addEventListener('click', function () {
    current++;
    if (current >= themes.length) {
        current = 0;
    }
    document.getElementById('theme').setAttribute('href', themes[current]);
    localStorage.setItem('theme', themes[current]);
});
btnPrevious.addEventListener('click', function () {
    current--;
    if (current <= -1) {
        current = themes.length - 1;
    }
    document.getElementById('theme').setAttribute('href', themes[current]);
    localStorage.setItem('theme', themes[current]);
});