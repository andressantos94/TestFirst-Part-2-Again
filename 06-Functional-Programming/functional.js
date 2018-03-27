function doubler(num){
    return num*2;
}

function map(arr,func){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(func(arr[i]));
    }
    return newArr;
}

function filter(arr,func){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(func(arr[i])===true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function contains(arr,val){
    if(Object.prototype.toString.call(arr)==='[object Array]'){
        for(var i=0;i<arr.length;i++){
            if(arr[i]===val){
                return true;
            }
        }
    }else if(Object.prototype.toString.call(arr)==='[object Object]'){
        for(var key in arr){
            if(arr[key]===val){
                return true;
            }
        }
    }
    return false;
}

function countWords(str){
    return str.split(' ').length;
}

function reduce(arr,ini,func){
    if(Object.prototype.toString.call(ini)==='[object Boolean]'){
        for(var i=0;i<arr.length;i++){
            if(func(arr[i])!==ini){
                return !ini;
            }
        }
        return ini;
    }else{
        var auxIni = ini;
        var result=0;
        for(var i=0;i<arr.length;i++){
            result=func(arr[i],auxIni);
            auxIni=result;
        }
        return result;
    }
}

function countWordsInReduce(str,acum){
    return str.split(' ').length+acum;
}

function sum(arr){
    return reduce(arr,0,function(a,b){
        return a+b;
    });
}

function every(arr,func){
    if(arr.length<1){
        return true;
    }else{
        return reduce(arr,true,func)&&true;
    }
}

function any(arr,func){
    if(arr.length<1){
        return false;
    }else{
        return reduce(arr,false,func)||false;
    }
}

