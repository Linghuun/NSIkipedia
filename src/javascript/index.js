var navSettings = document.getElementById("settings");
var navSettingsTitle = document.getElementById("settings-title");

navSettingsTitle.addEventListener("click",
    function() {
        navSettings.classList.toggle("is-maximized");
    }
);

var settingsLanguageSelect = document.getElementById("settings-language-select");
settingsLanguageSelect.addEventListener("change",
    function() {
        var url = window.location.href;
        // alert([window.location.href.lastIndexOf("fr")]);
        var index = settingsLanguageSelect.selectedIndex;
        if (index == 0) {
            var pos = url.lastIndexOf("en")
            window.location.href = url.slice(0, pos) + url.slice(pos).replace("en", "fr");
        }
        if (index == 1) {
            var pos = url.lastIndexOf("fr")
            window.location.href = url.slice(0, pos) + url.slice(pos).replace("fr", "en");
        }
        console.log(index);
    }
);