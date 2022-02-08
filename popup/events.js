function isLive(name) {

    //////////
    // TODO //
    //////////

    return null;
}

//Create new stream user
function addUser(name) {

    if(!name){return;}
    
    //Live state
    const state = document.createElement("div");
    state.className = "state";
    state.onmouseover = function () { state.textContent = "🗑️"; };
    
    //User name
    const op = document.createElement("div");
    op.className = "page-choice";
    op.style.fontFamily = "Georgia, serif";
    const node = document.createTextNode(name);
    op.append(node);

    //Row for new user
    const row = document.createElement("div");
    row.className = "row";
    row.append(op);
    row.append(state);
    
    //Check if live and add to list
    const element = document.getElementById("channels");
    const sta = isLive(name);
    if (sta) {
        const st = document.createTextNode("🟢");
        state.onmouseleave = function () { state.textContent ="🟢"; };
        state.append(st);
        op.style.color = "#ffffffbb";
        element.insertBefore(row, element.firstChild);
    }
    else if (sta === false) {
        const st = document.createTextNode("🔴");
        state.onmouseleave = function () { state.textContent ="🔴"; };
        state.append(st);
        op.style.color = "#00000077";
        element.appendChild(row);
    }
    else {
        const st = document.createTextNode("👀");
        state.onmouseleave = function () { state.textContent ="👀"; };
        state.append(st);
        op.style.color = "#ffffffbb";
        element.appendChild(row);
    }
}

//Delete channels
document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("state")) {
        return;
    }
    browser.storage.local.remove(e.target.parentNode.firstChild.firstChild.textContent);
    e.target.parentNode.remove();
});

//Click on channels
document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("page-choice")) {
        return;
    }

    var chosenPage = "https://www.twitch.tv/" + e.target.textContent.replace(/(\r\n|\n|\r|\s)/gm, "");
    browser.tabs.create({
        url: chosenPage
    });

});

//Click on add new channel
document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("commit")) {
        return;
    }

    var f = document.getElementById("new_channel");
    addUser(f.value);
    browser.storage.local.set({ [f.value]: 0 });
    f.value = null;
});

function onError(error) {
    console.log(error);
}

function initialize() {
  var gettingAllStorageItems = browser.storage.local.get(null);
  gettingAllStorageItems.then((results) => {
    var sKeys = Object.keys(results);
    for (let sKey of sKeys) {
      addUser(sKey);
    }
  }, onError);
}

document.addEventListener('DOMContentLoaded', initialize);