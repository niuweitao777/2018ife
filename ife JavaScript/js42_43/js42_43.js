/*
餐厅类
属性：金钱，座位数量、职员列表
方法：招聘职员，解雇职员
职员类
属性：ID，姓名，工资
方法：完成一次工作
服务员类，继承自职员
完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
厨师类，继承自职员
完成一次工作：烹饪出菜品
顾客类
方法：点菜，吃
菜品类
属性：名字、烹饪成本、价格
*/
//ES5
/*

function Staff(name, wage, id) { //职员构造函数
  this.name = name
  this.wage = wage
  this.id = id
}
Staff.prototype.work = function() {
//完成工作

}
function Waiter(name, wage, id) {//服务员
  Staff.call(this, name, wage, id)

}
Waiter.prototype.work = function (work) {
  if(isArray(work)){
    //点菜
  }else{
    //上菜
  }
}

function Cook(name, wage, id) {//厨师
  Staff.call(this, name, wage, id)


}
Cook.prototype = new Staff()
Cook.prototype.constructor = Cook
Cook.prototype.work = function () {
  //烹饪出菜品
}

function client() {//客户

}
client.prototype = {
  vegetables: function () {
    //点菜
  },
  eat: function () {
    //吃
  }
}

function greens(data) { //菜品
  this.greenName = data.name//名字
  this.fryCost = data.Cost//烹饪成本
  this.price = data.price//价格
}


var ifeRestaurant = new Restaurant({
  cash: 1000000,//现金
  seats: 20,//座位
  staff: []//职员
});


console.log(ifeRestaurant.cash)

//cook厨师
//heie雇用
//fire解除
//staff职员
function Restaurant(data) { //餐厅构造函数
  this.cash = data.cash
  this.seats = data.seats
  this.staff = data.staff
}
Restaurant.prototype.hire = function (hire) {//heie雇用
  this.staff.push(hire)
}

var newCook = new Cook("Tony", 10000, 1);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);

Restaurant.prototype.fire = function(fire) {//fire解除
 Array.prototype.remove = function (val) {
    var index = this.indexOf(val)
    if(index > -1){
      this.splice(index, 1)
    }
  }
  var staffArr = ifeRestaurant.staff
  staffArr.remove(fire)
}
ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);


function isArray(o) {
  return Object.prototype.toString.call(o) == '[object Array]'
}

*/

//---------------------------------------------------------------------------------------------------
//ES6

//餐厅类
class Restaurant {
  constructor (data){ //父构造器
    this.cash = data.cash  //金钱
    this.seats = data.seats  //座位数量
    this.staff = data.staff //职员列表
  }
  hire(staff) { //雇用职员
    this.staff.push(staff)
  }
  fire(staff) {//解雇职员
    //查找并删除职员
    Array.prototype.remove = function (val) {
      let index = this.indexOf(val)
      this.splice(index, 1)
    }
    this.staff.remove(staff)
  }
}

let ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});

//职员类
class Staff { // 定义一个父类型的类
  constructor (name, wage, id){ //职员构造器
    this.name = name   //姓名
    this.wage = wage   //工资
    this.id = id //id
  }
  work() {
    //工作
  }
}

//职员子服务员类型
class Waiter extends Staff{
  constructor (name, wage, id){
    super(name, wage, id) //继承父类

  }
  work(work) {// 重写父类型中的方法
    if(isArray(work)){
      //点菜
    }else{
      //上菜
    }
  }
}
  //职员厨师子类型
  class Cook extends Staff{
    constructor (name, wage, id){
      super(name, wage, id) //继承父类

    }
    work() { // 重写父类型中的方法
      //烹饪出菜品
    }
  }
  class Client {
    constructor() {

    }
    vegetables() {
      //点菜
    }
   eat() {
      //吃

    }
  }
  class Greens {//菜品类
    constructor(name, cost, price) {
      this.name = name  //名字
      this.cost = cost  //烹饪成本
      this.price = price //价格
    }
  }
let newCook = new Cook("Tony", 10000,1);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);
ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
function isArray(o) { //是否是数组
  return Object.prototype.toString.call(o) == '[object Array]'
}
