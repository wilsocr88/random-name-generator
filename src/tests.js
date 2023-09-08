import getName, { namePatterns, nameString, buildString } from "./getName.js";
import { rand } from "./rand.js";
import randomName from "./randomName.js";

export const tests = {
    _getName: function (pattern = "") {
        if (pattern === "") {
            buildString(namePatterns[rand(namePatterns.length)]);
            console.log(
                nameString.charAt(0).toUpperCase() + nameString.substring(1)
            );
        } else {
            buildString(pattern);
            console.log(
                nameString.charAt(0).toUpperCase() + nameString.substring(1)
            );
        }
    },
    _randomName: () => console.log(randomName()),
    isPattern: pattern => console.log(namePatterns.includes(pattern)),
};
