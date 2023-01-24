function simple(n) {
    if (n === 1 || n > 1000) {
        return console.log("не простое число");
    } else if (n === 2) {
        return console.log("простое число");
    } else {
        let sum = 0;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                sum += 1;
            }
        }
        if (sum>1){
            return console.log("не простое")
        } else {
            return console.log("простое")
        }
    }
}
simple(23);