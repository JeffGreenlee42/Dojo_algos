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

function zipIt(arr1, arr2) {
    var newArr = [];
    var longestArrLen = 0;
    //get the longest arraylength
    if (arr1.length > arr2.length) {
        longestArrLen = arr1.length;
    } else {
        longestArrLen = arr2.length;
    }
    //zip from each array and if there are more in one array it will fill the rest.
    for (i=0; i < longestArrLen; i++ ) {
        if (arr1[i] != undefined) {
            newArr.push(arr1[i]);
        }
        if (arr2[i] != undefined) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

function isCreditCardValid(digitArr) {
    //grab the last digit
    var lastDigit = digitArr[digitArr.length - 1];
    tempArr = [];
    for (i = digitArr.length - 2; i > -1; i--){
        digit = digitArr[i];
        if (!(digitArr[i] % 2 == 0)) {
            //multiply digits in odd positions by 2
            digit = digitArr[i] * 2;
            //if digit is  greater than 9, subtract 9 from it
            if (digit > 9) {
                digit = digit - 9;
            }
        }
        tempArr.push(digit);
    }
    tempArr.push(lastDigit);
    sum = 0;
    for(i = 0; i < tempArr.length; i++) {
        sum += tempArr[i];
    }
    return (sum % 10 == 0);
}

var myArr = [];
myArr = view([-1,7,2,-1,3,6,9]);
console.log("Buildings I can see are: " + myArr)

console.log("Zip [4,15,100] with [10,20,30,40]: " + zipIt([4,15,100],[10,20,30,40]));


console.log("result of isCreditCardValid([5,2,2,8,2]): " + isCreditCardValid([5,2,2,8,2]));


