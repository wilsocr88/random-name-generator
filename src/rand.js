/**
 * Returns a random number between 0 and (argument - 1)
 * @param {Number} max
 * @returns {Number} random value between 0 and (max - 1)
 */
export function rand(max) {
    return Math.floor(Math.random() * max);
}

/**
 * 50% chance of returning true (1 in 2)
 * @returns {Boolean}
 */
export function coinflip() {
    return !!rand(2);
}

/**
 * 25% chance of returning true (1 in 4)
 * @returns {Boolean}
 */
export function p25() {
    return rand(4) === 3;
}

/**
 * 20% chance of returning true (1 in 5)
 * @returns {Boolean}
 */
export function p20() {
    return rand(5) === 4;
}

/**
 * 16.667% chance of returning true (1 in 6)
 * @returns {Boolean}
 */
export function p16() {
    return rand(6) === 5;
}
