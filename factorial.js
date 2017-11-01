/**
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= i; j++) {
        var sum = 1;
        sum = sum * (i * j);
        console.log(sum);
    }
}
)  錯誤*/

// 10! 階乘正確解法
function factonrial(num) {
    if (num < -1) {
        console.log("error");

    } else if (num == 0) {
        console.log(num);
    } else {
        var tmp;
        tmp = num;
        while (num-- > 2) {
            tmp = tmp * num;
            console.log(tmp);
        }
        return tmp;
    }
}

resultout = factonrial(10);
console.log(resultout);