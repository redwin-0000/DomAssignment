function setTheme(themeName){
    localStorage.setItem(`theme`,themeName);
    document.documentElement.className = themeName;
}

function changeTheme(){
    if(localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();