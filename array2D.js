// 二維陣列
var a = [
    [1, 6, 2],
    [5, 3, 6]
];

//2D陣列格式化為字串後印出來
for (var i = 0; i < a.length; i++) {
    var line = "";
    for (var j = 0; j < a[i].length; j++) {
        line = line + a[i][j] + " ";
    }

    console.log(line);
}