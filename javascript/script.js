/* TO DO:
- plan function to take text from textarea and add to array
- plan function to toggle dark theme on and off with a click
- plan function to hide textarea, save and cancel button, and for newnote button to bring them back
- google how to do any of this
- ask Neda for help if I don't know how to do something or if I am stuck
- try not to cry (just kidding Neda, I won't cry)*/

/*Save text function plan:
- have an empty array ready to recieve text
- add an onclick to save button to call function
- write a function like:
- let myNotesArray = []
let saveButton = document.querySelector(".save");
function saveTextFunction() {
    let textSelect = document.querySelector("textarea").innerHTML;
    let selectList = document.querySelector("aside ul")
    myNotesArray.push(textSelect);
    myNotesArray.forEach(function(item) {
        let listItem = document.createElement("li");
        let addTxt = document.createTextNode(item);
        listItem.appendChild(addTxt)
    });
    document.querySelector("textarea").reset();
};
- this code doesn't really work, but that is kind of the idea of what I would wright
- will hopefully figure it out after class tomorrow
- not sure how to add title... maybe some sort of interating loop or if/else? Ask Neda
*/
  

/* Light/Dark theme function plan:
- add lighttheme class to body, aside, textarea, and buttons in html
- move light colours to those .lighttheme classes
- add dark colours to base css
- add another class to dark/light theme button like, changebutton
- apply something like: 
-let themeButton = document.querySelector(.changebutton);
function themeFunction() {
    let changeTheme = document.querySelectorAll(".lighttheme");
    changeTheme.classList.toggle(".lighttheme");
    document.querySelector(".changebutton").innerHTML = "Light Theme";
};
- add an onlick that will activate function
- probably have some sort of if/else statement if is already says one or the other?
- ask neda about changing text if I can't find it through google, or if it is not covered in class
*/
const themeChangeButton = document.querySelector(".theme");
const bodyTheme = document.querySelector(".lighttheme");
const asideTheme = document.querySelector("aside");
const txtArea = document.getElementById("story")
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector(".save");
const newnoteButton = document.querySelector(".newnote");
const ul = document.querySelector(".notes-list");
let count = 1

let notesArray = []

function themeFunction(){
    
    if (themeChangeButton.textContent === "Dark Theme"){
        bodyTheme.classList.toggle("lighttheme");
        asideTheme.classList.toggle("lightaside");
        txtArea.classList.toggle("lighttxtarea");
        themeChangeButton.classList.toggle("lightbtn");
        saveButton.classList.toggle("save");
        themeChangeButton.textContent = "Light Theme"
    }
    else {
        themeChangeButton.textContent = "Dark Theme"
        bodyTheme.classList.toggle("lighttheme");
        asideTheme.classList.toggle("lightaside");
        txtArea.classList.toggle("lighttxtarea");
        saveButton.classList.toggle("save");
        themeChangeButton.classList.toggle("lightbtn");
    }
};
themeChangeButton.addEventListener('click', themeFunction);
/*Cancel button/newnote button plan:
- add onclick to cancel button and newnote button to activate functions
- I don't really know what to do, need to google/ask Neda
- make a function that when the cancel button is clicked, the textarea, save button and cancel 
button will be hidden/disappear
- maybe that is some sort of toggle? Or remove?
- make another function that when clicked by the newnote button will make the textarea, save 
button, and cancel button reappear/be visible, should reset textarea too
- probably also a toggle, or perhaps an add?
*/

function hideTxtArea(){
    cancelButton.classList.add("hide-me");
    saveButton.classList.add("hide-me");
    txtArea.classList.add("hide-me");
}

function resetTxt(){
    cancelButton.classList.remove("hide-me");
    saveButton.classList.remove("hide-me");
    txtArea.classList.remove("hide-me");
    if (!txtArea.value || txtArea.value != txtArea.defaultValue) {
        txtArea.value = txtArea.defaultValue;
    }
}

function saveNotes(){
    let userInput = prompt("Please enter a title for your notes: ");
    let currentNotes = txtArea.value;
    notesArray.push({title: userInput, body: currentNotes});
    let newLi = document.createElement("li");
    let text = document.createTextNode(userInput);
    newLi.appendChild(text);
    newLi.classList.add(`getText${count}`);
    ul.appendChild(newLi);
    count++
}

function retrieveText(clicked){
    
    let clickedNote = clicked.target.innerHTML
    console.log(clickedNote)
    for (let item of notesArray){
        if (item.title === clickedNote){
            alert(`Loading contents of ${item.title}`)
            txtArea.value = item.body
        }
        
    }
  

}


cancelButton.addEventListener('click', hideTxtArea);
newnoteButton.addEventListener('click', resetTxt);
saveButton.addEventListener('click', saveNotes);
ul.addEventListener('click', retrieveText)
