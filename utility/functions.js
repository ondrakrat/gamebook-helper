export function rollDie(times = 1, sides = 6) {
    if (times < 1 || sides < 1) {
        throw new Error(`Invalid die roll params: sides=${sides}, times=${times}`);
    }
    var result = 0;
    for (var i = 0; i < times; ++i) {
        result += (Math.floor(Math.random() * sides) + 1);
    }
    return result;
}
