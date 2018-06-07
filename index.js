(function () {
    var bubbleSort = function (arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    var arr = [6, 5, 4, 3, 2, 1];
    var ret = bubbleSort(arr);
})();