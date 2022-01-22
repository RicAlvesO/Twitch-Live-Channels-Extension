
function isLive(name) {
    return true;
}

function addUser(name){
    const row = document.createElement("div");
    row.className = "row";
    const state = document.createElement("div");
    state.className = "state";
    const op = document.createElement("div");
    op.className = "page-choice";
    const node = document.createTextNode(name);
    op.style.fontFamily = "Georgia, serif";
    op.append(node);
    const element = document.getElementById("main");
    row.append(op);
    if(isLive(name)){
        const st = document.createTextNode("🟢");
        state.append(st);
        row.append(state);
        op.style.color = "#ffffffbb";
        element.insertBefore(row,element.firstChild);
    }
    else {
        const st = document.createTextNode("🔴");
        state.append(st);
        row.append(state);
        op.style.color = "#00000077";
        element.appendChild(row);
    }
}

function addInput(){
    const row = document.createElement("div");
    row.className = "row";
    const input = document.createElement("input");
    input.className = "input";
    input.style.fontFamily = "Georgia, serif";
    input.placeholder = "Streamer Name..."
    const ok = document.createElement("button");
    ok.className = "commit";
    const node = document.createTextNode("+");
    ok.style.fontFamily = "Georgia, serif";
    ok.append(node);
    row.append(input);
    row.append(ok);
    const element = document.getElementById("main");
    element.append(row);
}

addUser("xQcOW");
addInput();