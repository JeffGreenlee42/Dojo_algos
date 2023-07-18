function view(viewArr) {
    var retArr = [];
    viewLevel = viewArr[0];
    for (i = 1; i < viewArr.length; i++) {
        if (viewArr[i] >= viewLevel) {
            viewLevel = viewArr[i];
            retArr.push(viewArr[i]);
        }
    }
    return retArr;
}

var myArr = [];
myArr = view([-1,7,2,-1,3,6,9]);
console.log(myArr)



