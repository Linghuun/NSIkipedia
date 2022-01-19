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
        var index = settingsLanguageSelect.selectedIndex;
        if (index == 0) {
            window.location.href = "../fr/index.html";
        }
        if (index == 1) {
            window.location.href = "../en/index.html";
        }
        console.log(index);
    }
);