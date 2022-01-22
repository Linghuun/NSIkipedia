var navSettings = document.getElementById("settings");
var navSettingsTitle = document.getElementById("settings-title");

navSettingsTitle.addEventListener("click",
    function() {
        navSettings.classList.toggle("is-maximized");
    }
);

var darkModeButton = document.getElementById("dark_mode");
darkModeButton.addEventListener("click", 
    function() {
        if (darkModeButton.checked) { // dark mode enable
            document.documentElement.style.setProperty("--body-color", "#373e48ff");

            document.documentElement.style.setProperty("--nav-color", "#1c1f24ff");
            document.documentElement.style.setProperty("--nav-hover-link", "#373e48ff");
        
            document.documentElement.style.setProperty("--settings-color", "#535d6cff");
            document.documentElement.style.setProperty("--settings-color-hover", "#373e48ff");
            
            document.documentElement.style.setProperty("--main-color", "#1c1f24ff");
            document.documentElement.style.setProperty("--main-text-color", "white");

            document.documentElement.style.setProperty("color", "white");
        } else { // light mode enable
            document.documentElement.style.setProperty("--body-color", "#6f7c91ff");

            document.documentElement.style.setProperty("--nav-color", "#373e48ff");
            document.documentElement.style.setProperty("--nav-hover-link", "#6f7c91ff");
        
            document.documentElement.style.setProperty("--settings-color", "#535d6cff");
            document.documentElement.style.setProperty("--settings-color-hover", "#6f7c91ff");
            
            document.documentElement.style.setProperty("--main-color", "#b7bec8ff");
            document.documentElement.style.setProperty("--main-text-color", "black");
        
            document.documentElement.style.setProperty("color", "white");
        }
        alert(document.documentElement.style.getPropertyValue("--body-color"));
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