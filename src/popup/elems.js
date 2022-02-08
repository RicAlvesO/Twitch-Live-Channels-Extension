//Adds extension main elements
function createElems(){
    
    //Title
    const title = document.createElement("div");
    title.className = "title";
    title.style.fontFamily = "Georgia, serif";
    title.style.color = "#ffffffbb";
    const tit = document.createTextNode("Live Channels TTV Beta");
    title.append(tit);
    const elem = document.getElementById("top");
    elem.append(title);

    //Create row to receive the input
    const row = document.createElement("div");
    row.className = "inp_row";
    
    //Create the input box
    const input = document.createElement("input");
    input.className = "input";
    input.id = "new_channel";
    input.style.fontFamily = "Georgia, serif";
    input.style.color = "#ffffff";
    input.placeholder = "Streamer Name..."

    //Create add button
    const ok = document.createElement("button");
    ok.className = "commit";
    ok.style.fontFamily = "Georgia, serif";
    ok.style.color = "#ffffff";
    const node = document.createTextNode("+");
    ok.append(node);

    //Add input and button to last row 
    row.append(input);
    row.append(ok);

    //Add row to bottom of page
    const element = document.getElementById("entry");
    element.append(row);
}
createElems();