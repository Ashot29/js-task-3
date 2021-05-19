// Page 71
// Task 1

function f(a, b, dx) {
    let y;
    for (let i = a; i <= b; i += dx) {
        if (i < 5) {
            y = (2 * i) + 1
            console.log(i, y)
        } else {
            y = i**2 - 1;
            console.log(i, y)
        }
    }
}

f(1, 8, 0.2)