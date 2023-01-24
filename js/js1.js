function sum(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; arr.length > i; i++) {
            if (arr[i] == 'null' || arr[i] == "string" || arr[i] == "undefind" || arr[i] == "") {
                    continue;
            } else if (arr[i] % 2 == 0) {
                    sum1 += arr[i];
            } else if (arr[i] % 2 > 0) {
                    sum2 += arr[i];
            }
    }
    console.log(sum1);
    console.log(sum2);
}

let arr = [1, 2, null, 4, undefined, 8, "str", {
    a: 1,
    b: 2
}];
sum(arr);