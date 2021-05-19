// Task 2

function f(a, b, dx) {
    let y;
    for (let i = a; i <= b; i += dx) {
        if (i < 3) {
            y = (5 * i) + 2
            console.log(i, y)
        } else if (i >= 3 && i <= 10) {
            y = i**2 + i - 1;
            console.log(i, y)
        } else {
            y = 1;
            console.log(i, y)
        }
    }
}

f(1, 12, 1)