// Page 64
// Task 23

function a(N) {
    let y = N;
    console.log(Math.trunc(y))

    while(y) {
        console.log(y % 10) 
        y = Math.trunc(y / 10) 
    }
}

a(1437)