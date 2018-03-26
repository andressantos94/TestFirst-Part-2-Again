function factorialIterative(num){
    var result=num;
    for(var i=1;i<=num;i++){
        if(num-i===1){
            return result*(num-i);    
        }else{
            result = result*(num-i);
        }
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
    if(Object.prototype.toString.call(val)==='[object Undefined]'){
        return 'Undefined';
    }else if(Object.prototype.toString.call(val)==='[object Null]'){
        return 'Null';
    }else if(Object.prototype.toString.call(val)==='[object Boolean]'){
        return 'Boolean'
    }else if(Object.prototype.toString.call(val)==='[object Array]'){
        return 'Array';
    }else if(Object.prototype.toString.call(val)==='[object String]'){
        return 'String';
    }else if(Object.prototype.toString.call(val)==='[object Number]'){
        return 'Number';
    }else if(Object.prototype.toString.call(val)==='[object Function]'){
        return 'Function';
    }else if(Object.prototype.toString.call(val)==='[object Object]'){
        return 'Object';
    }
}

function stringify(val){
    var aux = type(val).toLowerCase();
    console.log(aux,'aux');
    if(aux==='string'){
        return '"'+val+'"';
    }else if(aux==='array'){
        var result = '[';
        for(var i=0;i<val.length;i++){
            var current = val[i];
            if(type(current)==='Array'){
                i!==val.length-1?result+=(stringify(current))+',':result+=(stringify(current));
            }else{
                i===val.length-1?result+=(stringify(current)):result+=(stringify(current))+',';
            }
        }
        result+=']';
        return result;
    }else if(aux==='object'){
        var resObj = '{';
        var arrKeys = Object.keys(val);
        for(var i=0;i<arrKeys.length;i++){
            i===arrKeys.length-1?resObj+='"'+arrKeys[i]+'": '+stringify(val[arrKeys[i]]):resObj+='"'+arrKeys[i]+'": '+stringify(val[arrKeys[i]])+',';
        }
        resObj+='}';
        return resObj;
    }else{
        return val+'';
    }
}
