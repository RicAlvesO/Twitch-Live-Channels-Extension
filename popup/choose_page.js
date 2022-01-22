document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("page-choice")) {
        return;
    }

    var chosenPage = "https://www.twitch.tv/" + e.target.textContent;
    browser.tabs.create({
        url: chosenPage
    });

});