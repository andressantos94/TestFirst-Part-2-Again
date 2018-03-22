function Mammal(str){
    this.name = str;
    this.offspring = [];
}

Mammal.prototype.sayHello = function(){
    return 'My name is '+this.name+'!';
}

Mammal.prototype.haveBaby = function(){
    var child = Object.create(Mammal.prototype);
    child.name = 'Baby '+this.name;
    this.offspring.push(child);
    return child;
}

function Cat(name,col){
    Mammal.call(this,name);
    this.color = col;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(col){
    var cat = new Cat('Baby '+this.name,col);
    this.offspring.push(cat);
    return cat;
}