var themeUsed = "light";
var darkModeButton = document.getElementById("dark_mode");

var navSettings = document.getElementById("settings");
var navSettingsTitle = document.getElementById("settings-title");
var settingsLanguageSelect = document.getElementById("settings-language-select");

if (window.location.href.split("?").length > 1) {
    themeUsed = window.location.href.split("?")[1];
    setTheme(themeUsed);
}

function switchTo(pageName) {
    var url = window.location.href.split("?")[0];
    url = url.replace(url.split("#")[1], "");
    let n = window.location.href.split("/").length;
    url = url.replace(url.split("/")[n-1], "") + pageName;
    window.location.href = url + "?" + themeUsed;
}

navSettingsTitle.addEventListener("click",
    function() {
        navSettings.classList.toggle("is-maximized");
    }
);

settingsLanguageSelect.addEventListener("change",
    function() {
        var url = window.location.href;
        var index = settingsLanguageSelect.selectedIndex;
        if (index == 0) {
            var pos = url.lastIndexOf("en")
            window.location.href = url.slice(0, pos) + url.slice(pos).replace("en", "fr");
        }
        if (index == 1) {
            var pos = url.lastIndexOf("fr")
            window.location.href = url.slice(0, pos) + url.slice(pos).replace("fr", "en");
        }
    }
);

function setTheme(theme) {
    if (theme == "light") {
        document.documentElement.style.setProperty("--body-color", "#6f7c91ff");

        document.documentElement.style.setProperty("--nav-color", "#373e48ff");
        document.documentElement.style.setProperty("--nav-hover-link", "#6f7c91ff");
    
        document.documentElement.style.setProperty("--settings-color", "#535d6cff");
        document.documentElement.style.setProperty("--settings-color-hover", "#6f7c91ff");
        
        document.documentElement.style.setProperty("--main-color", "#b7bec8ff");
        document.documentElement.style.setProperty("--main-text-color", "black");
    
        document.documentElement.style.setProperty("--scrollbar-track-color", "#6f7c91ff");
        document.documentElement.style.setProperty("--scrollbar-thumb-color", "#373e48ff");

        document.documentElement.style.setProperty("color", "white");

        themeUsed = "light";
        darkModeButton.checked = false;
    } else if (theme == "dark") {
        document.documentElement.style.setProperty("--body-color", "#373e48ff");

        document.documentElement.style.setProperty("--nav-color", "#1c1f24ff");
        document.documentElement.style.setProperty("--nav-hover-link", "#373e48ff");
    
        document.documentElement.style.setProperty("--settings-color", "#535d6cff");
        document.documentElement.style.setProperty("--settings-color-hover", "#373e48ff");
        
        document.documentElement.style.setProperty("--main-color", "#1c1f24ff");
        document.documentElement.style.setProperty("--main-text-color", "white");

        document.documentElement.style.setProperty("--scrollbar-track-color", "#373e48ff");
        document.documentElement.style.setProperty("--scrollbar-thumb-color", "#1c1f24ff");

        document.documentElement.style.setProperty("color", "white");
        
        themeUsed = "dark";
        darkModeButton.checked = true;
    }
}

darkModeButton.addEventListener("click", 
    function() {
        if (darkModeButton.checked) {       // dark mode enable
            setTheme("dark")
        } else {                            // light mode enable
            setTheme("light")
        }
    }
);