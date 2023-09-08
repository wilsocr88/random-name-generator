import getName from "./getName.js";
import { p25, p20, p16, coinflip, rand } from "./rand.js";

/**
 * Get a randomized full name
 * @returns Random full name
 * First name: 20% chance of being hyphenated double name.
 * Last name: 50% chance. If included, 20% chance it's a hyphenated double name.
 * Title: 1 in 6 chance of a title ("of _____") appearing after name. If it does, it has a 25% chance of being "of the _____"
 * The "blank" in that title has a 1 in 3 chance of being either one name, two names, or a hyphenated double name.
 */
export default function randomName() {
    let name = "";

    // first
    if (p20()) {
        name += getName() + "-" + getName();
    } else {
        name += getName();
    }

    // last
    if (coinflip()) {
        if (p20()) {
            name += " " + getName() + "-" + getName();
        } else {
            name += " " + getName();
        }
    }

    // title
    if (p16()) {
        name += " of ";
        if (p25()) {
            name += "the ";
        }
        const roll = rand(3);
        if (roll === 0) {
            name += getName() + " " + getName();
        } else if (roll === 1) {
            name += getName() + "-" + getName();
        } else if (roll === 2) {
            name += getName();
        }
    }

    return name;
}
