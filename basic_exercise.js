// 基本練習
// http://www.evernote.com/l/APZ2MBCQ8PlEtoK-B7lEzx9609EhA6KlVk0/
//3. 
//有錯誤
degree = function(num) {
    var showout = "NO";

    switch (k = num) {

        case k < 60:
            showout = "F";
            break;
        case (k >= 60 && k <= 70):
            showout = "D";
            break;
        case (k > 70 && k <= 80):
            showout = "C";
            break;
        case (k > 80 && k <= 90):
            showout = "B";
            break;
        case (k > 90 && k <= 100):
            showout = "A";
            break;

    }
    return showout;

}

resuletout = degree(Number(50));
console.log(resuletout);