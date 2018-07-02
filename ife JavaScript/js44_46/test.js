function SuperType(name){
  this.name = name;
  this.colors = ['red', 'blue','green'];
}
SuperType.prototype.sayName = function(){   //定义了一个方法，该方法在继承的子类中也可以用
  alert(this.name);
}
function SubType(name, age){
  SuperType.call(this, name);    //继承SuperType的一部分，this指SubType，
  this.age = age;    //自己新定义的属性age也可以进行赋值
}
SubType.prototype = new SuperType();     //利用原型继承，可以使用父类的方法（见原型链继承）
SubType.prototype.sayAge = function(){   //定义SubType特有的新方法
  alert(this.age);
}
var instance1 = new SubType('Martin', 10);
instance1.colors.push('black');
alert(instance1.colors);  //red,blue,green,black
instance1.sayName();   //Martin
instance1.sayAge();  //10
var instance2 = new SubType('gragp', 27);
alert(instance2.colors);   //red,blue,green
instance2.sayName();  //Greg
instance2.sayAge();  //27