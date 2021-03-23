let symbol = '*';
for(let i = 1; i <= 20; i++) {
    console.log(symbol);
    symbol = '';
    for(let j = 0; j <= i; j++) {
        symbol += '*';
    }
}