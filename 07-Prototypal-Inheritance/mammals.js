function Mammal(str){
    this.name = str;
    this.offspring = [];
}

Mammal.prototype.sayHello = function(){
    return 'My name is '+this.name+'!';
}

Mammal.prototype.haveBaby = function(){
    var obj = {};
    obj.name = 'Baby '+this.name;
    this.offspring.push(obj);
    return obj;
}

function Cat(name,col){
    Mammal.call(this,name);
    this.color = col;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(col){
    var obj = {};
    obj.name = 'Baby '+this.name;
    obj.color = col;
    this.offspring.push(obj);
    return obj;
}