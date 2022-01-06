function load() {
    var navSettings = document.getElementById('nav-settings');
    var navSettingsTitle = document.getElementById('nav-settings-title');

    navSettingsTitle.addEventListener("click",
        function() {
            navSettings.classList.toggle("is-maximized");
        }
    );
}