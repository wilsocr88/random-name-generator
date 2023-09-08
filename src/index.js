import randomName from "./randomName.js";

var names = [];

for (let i = 0; i < 10; i++) {
    names.push(randomName());
}

window.names = names;
