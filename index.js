$(document).ready(function () {

    Vue.component('bar-item', {
        props: ['item'],
        template: "<div :id='item.id' class='bar' :style='{height:item.height}'><span>{{item.text}}</span></div>"
    });

    var app = new Vue({
        el: '.graph',
        data: {
            bars: [
                { id: 90, text: 90, height: 90 },
                { id: 80, text: 80, height: 80 },
                { id: 70, text: 70, height: 70 },
                { id: 60, text: 60, height: 60 },
                { id: 50, text: 50, height: 50 },
                { id: 40, text: 40, height: 40 },
                { id: 30, text: 30, height: 30 },
                { id: 20, text: 20, height: 20 },
                { id: 10, text: 10, height: 10 }
            ]
        }
    });

    //this can be used to watch every change of sort item
    //app.$watch('bars', function (change) {
    // 
    //});

    window.app = app;

    $('.bar').bind('click', function () {
        var bubbleSort = function (arr) {
            var len = arr.length;
            let count = 0;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - 1 - i; j++) {
                    if (arr[j].id > arr[j + 1].id) {
                        count++;
                        (function (innerCount) {
                            setTimeout(function () {
                                var temp = arr[j + 1];
                                Vue.set(app.bars, j + 1, app.bars[j]);
                                Vue.set(app.bars, j, temp);
                                console.log('switch item position at ' + innerCount + ' round!');
                            }, 1000 * innerCount);
                        })(count);
                    }
                }
            }
            return arr;
        };
        var list = window.app.$data.bars;
        var res = bubbleSort(list);
    });
});