//constant variables that contain specific elements
const themeChangeButton = document.querySelector(".theme");
const bodyTheme = document.querySelector(".lighttheme");
const asideTheme = document.querySelector("aside");
const txtArea = document.getElementById("story")
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector(".save");
const newnoteButton = document.querySelector(".newnote");
const ul = document.querySelector(".notes-list");

//array of notes that can be retrieved from the aside
let notesArray = [{title: "note one", body: "I am getting better at Javascript! (Maybe just a little...)"}, 
{title: "note two", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]

function themeFunction(){
    //toggles between themes
    if (themeChangeButton.textContent === "Dark Theme"){
        bodyTheme.classList.toggle("lighttheme");
        asideTheme.classList.toggle("lightaside");
        txtArea.classList.toggle("lighttxtarea");
        themeChangeButton.classList.toggle("lightbtn");
        saveButton.classList.toggle("save");
        cancelButton.classList.toggle("cancel");
        newnoteButton.classList.toggle("newnote");
        themeChangeButton.textContent = "Light Theme"
    }
    else {
        themeChangeButton.textContent = "Dark Theme"
        bodyTheme.classList.toggle("lighttheme");
        asideTheme.classList.toggle("lightaside");
        txtArea.classList.toggle("lighttxtarea");
        saveButton.classList.toggle("save");
        cancelButton.classList.toggle("cancel");
        newnoteButton.classList.toggle("newnote");
        themeChangeButton.classList.toggle("lightbtn");
    }
}

function hideTxtArea(){
    //when cancel button is clicked, the textarea, save and cancel button are hidden
    cancelButton.classList.add("hide-me");
    saveButton.classList.add("hide-me");
    txtArea.classList.add("hide-me");
}

function resetTxt(){
    //when newnote button is clicked, the textarea, save and cancel button are visible
    cancelButton.classList.remove("hide-me");
    saveButton.classList.remove("hide-me");
    txtArea.classList.remove("hide-me");
    //resets the text in the textarea to the placeholder
    if (!txtArea.value || txtArea.value != txtArea.defaultValue) {
        txtArea.value = txtArea.defaultValue;
    }
}

function saveNotes(){
    //promts user for a title for their note
    let userInput = prompt("Please enter a title for your notes: ");
    console.log(userInput)
    if (userInput === ""){
        //if title is empty string, it will be named "Untitled"
        //adds title and body to array
        notesArray.push({title: "Untitled", body: txtArea.value});
        //adds title to ul as an li
        let newLi = document.createElement("li");
        let text = document.createTextNode("Untitled");
        newLi.appendChild(text);
        ul.appendChild(newLi);
    }
    else {
        //adds title and body to array
        notesArray.push({title: userInput, body: txtArea.value});
        //adds title to ul as an li
        let newLi = document.createElement("li");
        let text = document.createTextNode(userInput);
        newLi.appendChild(text);
        ul.appendChild(newLi);
    }
}

function retrieveText(clicked){
    //gets target's identity
    let clickedNote = clicked.target.innerHTML
    console.log(clickedNote)
    //uses identity to find it's match to send body to textarea for viewing
    for (let item of notesArray){
        if (item.title === clickedNote){
            console.log(`Loading contents of ${item.title}`)
            txtArea.value = item.body
        }
    }
}

themeChangeButton.addEventListener('click', themeFunction);
cancelButton.addEventListener('click', hideTxtArea);
newnoteButton.addEventListener('click', resetTxt);
saveButton.addEventListener('click', saveNotes);
ul.addEventListener('click', retrieveText)
