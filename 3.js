// Task 3

function f(N) {
    let s = 0;
    for(let i = 1; i <= N; i++) {
        let a = Math.sin(i) / Math.cos(i);
        s += a;
    }
    console.log(s)
}

f(10)