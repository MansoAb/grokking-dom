const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

div.className = "red";
div1.className = "green";
div2.className = "blue";

div2.textContent = "я вложен";

div1.append(div2);
div.append(div1);

console.log(div, div1, div2);
