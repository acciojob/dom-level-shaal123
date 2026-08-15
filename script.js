const element = document.getElementById("level");

let level = 1;

let parent = element.parentElement;

while (parent) {
    level++;
    parent = parent.parentElement;
}

alert("The level of the element is: " + level);