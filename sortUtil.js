var fn = function(){
    var n =0;
    return function(){
        return n++;
    };
}

var f = fn();
