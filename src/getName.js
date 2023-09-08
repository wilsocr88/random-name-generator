import { rand } from "./rand.js";

export var nameString = "";
const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";

function addVowel() {
    nameString += vowels[rand(vowels.length)];
}

function addConsonant() {
    nameString += consonants[rand(consonants.length)];
}

/**
 * Build random single name string
 * @param {String} pattern
 * @returns A string of random consonants and vowels according to the v/c pattern given
 */
export function buildString(pattern) {
    if (typeof pattern === "undefined") return;
    if (pattern.trim() === "") return;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.charAt(i) === "v") {
            addVowel();
        } else if (pattern.charAt(i) === "c") {
            addConsonant();
        }
    }
    return nameString;
}

/**
 * Possible vowel/consonant patterns for names
 */
export const namePatterns = [
    "vcvcvcvc",
    "vcccvcv",
    "vccvcv",
    "cvcvcv",
    "cvccvc",
    "ccvcvc",
    "cvcvvc",
    "cvccv",
    "ccvcv",
    "vcvcv",
    "cvvc",
    "cvcv",
    "vcvc",
    "vccv",
    "cvc",
    "vcv",
    "cv",
    "vc",
];

/**
 * Create a single randomized name
 * @returns {String} one random capitalized name
 */
export default function getName() {
    nameString = "";
    buildString(namePatterns[rand(namePatterns.length)]);
    return nameString.charAt(0).toUpperCase() + nameString.substring(1);
}
