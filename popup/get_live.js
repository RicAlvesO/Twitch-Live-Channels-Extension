function isLive(name){
    //verifyAPI(name);
    return false;
}

function addLiveUser(name){
    const op1 = document.createElement("div");
    op1.className = "page-choice";
    const node1 = document.createTextNode(name);
    op1.append(node1);
    const element = document.getElementById("main");
    if(isLive(name)){
        op1.style.color = "#ffffffbb";
        op1.style.fontFamily = "Georgia, serif";
        element.insertBefore(op1,element.firstChild);
    }
    else{
        op1.style.color = "#787878bb";
        op1.style.fontFamily = "Charcoal,sans-serif";
        element.appendChild(op1);
    }
}

addLiveUser("xQcOW");
addLiveUser("LEC");
addLiveUser("VALORANT");