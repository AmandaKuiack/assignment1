/* TO DO:
- plan function to take text from textarea and add to array
- great function to toggle dark theme on and off with a click
- function to hide textarea, save and cancel button, and for newnote button to bring them back
- google how to do any of this as I suck at JS
- ask Neda for help if I don't know how to do something or if I am stuck
- try not to cry */



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
- ask neda about changing text if I can't find it in google, or if it is not covered in class

*/

