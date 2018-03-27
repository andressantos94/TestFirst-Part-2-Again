function factorialIterative(num){
    var result = 1;
    for(var i=num;i>1;i--){
        result*=i;
    }
    return result;
}

function factorial(num){
    if(num<1){
        return 1;
    }
    return num*factorial(num-1);
}

function fib(num){
    if(num<2){
        return 1;
    }
    return fib(num-1)+fib(num-2);
}

function type(val){
    var type = Object.prototype.toString.call(val);
    switch(type){
        case '[object Undefined]':
            return 'Undefined';
        case '[object Null]':
            return 'Null';
        case '[object Boolean]':
            return 'Boolean';
        case '[object Number]':
            return 'Number';
        case '[object String]':
            return 'String';
        case '[object Function]':
            return 'Function';
        case '[object Array]':
            return 'Array';
        case '[object Object]':
            return 'Object';
    }
}

function stringify(val){
    if(type(val)==='Array'){
        var result = '[';
        for(var i=0;i<val.length;i++){
            var current=val[i];
            if(type(current)==='Array'){
                i===val.length-1?result+=stringify(current):result+=stringify(current)+',';
            }else{
                i===val.length-1?result+=stringify(current):result+=stringify(current)+',';
            }
        }
        result+=']';
        return result;
    }else if(type(val)==='Object'){
        var result = '{';
        var objKeys = Object.keys(val);
        for(var i=0;i<objKeys.length;i++){
            var current = objKeys[i];
            i===objKeys.length-1?result+='"'+current+'": '+stringify(val[current]):result+='"'+current+'": '+stringify(val[current])+',';
        }
        result+='}';
        return result;

    }else if(type(val)==='String'){
        return '"'+val+'"';
    }else{
        return val+'';
    }
}