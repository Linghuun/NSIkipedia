function load() {
    var navSettings = document.getElementById('nav-settings');

    navSettings.style.cursor = 'pointer';
    navSettings.onclick = function() {
        this.style.backgroundColor = 'red';
        this.style.height = "5rem";
    };
}