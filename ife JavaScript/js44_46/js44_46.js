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



function Staff(name, wage, id) { //职员构造函数
  this.name = name
  this.wage = wage
  this.id = id
}
Staff.prototype.work = function() {
//完成工作

}
let waiter = (function () {//服务员
  let instance = null
  function Waiter(name, wage, id) {
    Staff.call(this, name, wage, id)
  }
  Waiter.prototype = new Staff()
  Waiter.prototype.work = function (work) {
    if(this.isArray(work)){
      //点菜
        work.forEach(function (val) {
          console.log(`告诉厨师,点菜:${val.name}`)
        })
      return work
    }else{
      console.log(`上菜:${work.name}`)
      //上菜
    }
  }
  Waiter.prototype.isArray = function (o) {
      return Object.prototype.toString.call(o) == '[object Array]'
  }
  return {
    create(name, wage, id){
      if(instance === null){
        instance = new Waiter(name, wage, id)
      }
      return instance
    }
  }
})()
let cook = (function () {
  let instance = null
  function Cook(name, wage, id) {
  Staff.call(this, name, wage, id)
  }
  Cook.prototype = new Staff()
  Cook.prototype.constructor = Cook
  Cook.prototype.work = function (greens) {
      console.log(`做菜:${greens.name}`)
      console.log(`${greens.name}菜做完`)
    return greens
  }
  return {
    create(name, wage, id) {
      if(instance === null){
        instance = new Cook(name, wage, id)
      }
      return instance
    }
  }
})()
function client(name) {//客户
  this.name = name
}
client.prototype = {
  vegetables: function (menu) {
    //点菜
    let arr = []
    function randomNum(Max, Mix) { //随机数
      let Range = Max - Mix
      let Rand = Math.random()
      let num = Mix + Math.round(Range * Rand)
      return num
    }
    let greens = menu[randomNum(2, 0)]
    console.log(`顾客点菜:${greens.name}`)
     arr.push(greens)
    return arr
  },
  eat: function (val) {
    console.log(`顾客吃${val.name}`)
    //吃
  },
  come(seats){
    if(seats.seats > 0){
      console.log('坐下吃饭')
      seats.seats--
    }else{
      console.log('排队')
    }
  },
  leave(seats){
    console.log('离开')
    seats.seats++
  }

}

function greens(data) { //菜品
  this.name = data.name//名字
  this.cost = data.cost//烹饪成本
  this.price = data.price//价格
}



//cook厨师
//heie雇用
//fire解除
//staff职员
function Restaurant(data) { //餐厅构造函数
  this.cash = data.cash //现金
  this.seats = data.seats //座位
  this.staff = data.staff //职员
}
/*Restaurant.prototype.init = function () {
  this.desk.addEventListener('click', ()=> {
    let client1 = new client()
    this.inSit.style.display = 'block'
    let greens = client1.vegetables(greensAll)
    let greenName = neWariter.work(greens)
    for (var i = 0; i < greenName.length; i++) {
      let doGreens = newCook.work(greenName[i])
      neWariter.work(doGreens)
      client1.eat(doGreens)
    }
  })
}*/
Restaurant.prototype.hire = function (hire) {//heie雇用
  this.staff.push(hire)
}
Restaurant.prototype.fire = function(fire) {//fire解除
  Array.prototype.remove = function (val) {
    let index = this.indexOf(val)
    if(index > -1){
      this.splice(index, 1)
    }
  }
  let staffArr = ifeRestaurant.staff
  staffArr.remove(fire)
}
let ifeRestaurant = new Restaurant({
  cash: 1000000,//现金
  seats: 1,//座位
  staff: []//职员
});

let neWariter = waiter.create('tom', 1000, 1)//服务员
let newCook = cook.create('jon', 1000, 2)//厨师
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(neWariter)
/*菜单*/

let tudousi = new greens({name: '土豆丝', cost: 30, price: 50})
let hongshaorou = new greens({name: '红烧肉', cost: 100, price: 200})
let niupai = new greens({name: '牛排', cost: 100, price: 200})

let greensAll = [tudousi, hongshaorou, niupai]


let client1 = new client()
client1.come(ifeRestaurant)
let client1_greens = client1.vegetables(greensAll)
let greenName = neWariter.work(client1_greens)
for (var i = 0; i < greenName.length; i++) {
  let doGreens = newCook.work(greenName[i])
  neWariter.work(doGreens)
  client1.eat(doGreens)
}
client1.leave(ifeRestaurant)













