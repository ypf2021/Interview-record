var unique = function (arr) {
    let newArr = [];
    let sortArr = arr.sort()
    console.log(sortArr)
    var pre;
    for (let i = 0; i < sortArr.length; i++) {
        //如果是第一个元素或者响铃的元素不同
        if (!i || pre !== sortArr[i]) {
            newArr.push(sortArr[i])
        }
        pre = sortArr[i]
    }
    return newArr;
}

var res = unique([1, '1', '1', 1, 2, true, false, true, 3, 2, 2, 1])

console.log(res)