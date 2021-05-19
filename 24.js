// Task 24

function a(N) {
    let N1 = N;
    let N2 = 2 * N;
    let x;
    let answer = N2;

    while (N1) {
        x = N1 % 10;
        N1 = Math.trunc(N1 / 10);
        if (x >= 5) {
            answer = N
        }
    }
    console.log(answer)
}


a(1532);
a(1223)