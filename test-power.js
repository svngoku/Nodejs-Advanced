for (let x = 0, i = 0; i <= 32; i += 1) {
    console.log('2^%d = %d', i, x);
    x += x;
}
