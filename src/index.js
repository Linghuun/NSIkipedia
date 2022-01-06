function load() {
    var navSettings = document.getElementById('nav-settings');

    navSettings.addEventListener("click",
        function() {
            this.classList.toggle("is-maximized");
        }
    );
}