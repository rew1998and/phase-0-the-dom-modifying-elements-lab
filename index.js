// Write your code here!
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Andrew is the champion";

const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
const li = document.createElement("li");
li.textContent = (i + 1).toString();
ul.append(li);
}
element.append(ul);

document.body.append(newHeader);

