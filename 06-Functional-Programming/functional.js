function doubler(num){
    return 2*num;
}

function map(arr,fun){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(fun(arr[i]));
    }
    return newArr;
}

function filter(arr,fun){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(fun(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function contains(list,val){
   if(Array.isArray(list)){
       if(list.indexOf(val)>-1){
           return true;
       }
   }else{
       for(var key in list){
           if(list[key]===val){
               return true;
           }
       }
   }
   return false;
}

function countWords(str){
    return str.split(' ').length;
}

function reduce(arr,ini,fun){
    if(ini===true||ini===false){
        var result;
        for(var i=0;i<arr.length;i++){
            if(fun(arr[i])!==ini){
                return !ini;
            }
        }
        return ini;      
    }
    var total = ini;
    for(var i=0;i<arr.length;i++){
        total = fun(arr[i],total);
    }
    return total;
}

function countWordsInReduce(str,a){
    return a+str.split(' ').length;
}

function sum(arr){
    var add = function(a,b){
        return a+b;
    };
    return reduce(arr,0,add);
}

function every(arr,fun){
    return  true&&reduce(arr,true,fun);
}

function any(arr,fun){
    return false||reduce(arr,false,fun);
}