function load() {
    var navSettings = document.getElementById('nav-settings');

    navSettings.addEventListener("click",
        function() {
            this.classList.toggle("is-maximized");
            navSettingsItems = document.getElementsByClassName("nav-settings-items");
            for (var i = 0; i < navSettingsItems.length; i++) {
                navSettingsItems[i].classList.toggle("is-maximized");
            }
        }
    );
}