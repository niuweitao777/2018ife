
window.onload = function () {
  let lineChart = new LineChatr()
  lineChart.init()


}

/*折线图*/
/*构造函数*/
  let LineChatr = function (ctx) {
  this.allIpunt = document.getElementsByTagName('input')
    this.confirmInput = document.querySelectorAll('tbody input')
  /*获取绘图工具*/
  this.ctx = ctx || document.querySelector('canvas').getContext('2d');
  /*画布的大小*/
  this.canvasWidth = this.ctx.canvas.width;
  this.canvasHeight = this.ctx.canvas.height;
  /*竖线间距*/
  this.erectLine = 30
  /*横线间距*/
  this.across = 10
  /*坐标系间距*/
/*最大*/
    this.arrMax = 0
  /*原点坐标*/
  this.X0 = this.erectLine
  this.Y0 = this.canvasHeight - this.across
  /*箭头大小*/
  this.arrowSize = 6
  /*点大小*/
  this.point = 5

}
/*方法*/
LineChatr.prototype = {

  /*初使化*/
  init (){
    this.drawGrid()/*画网格*/
    this.drawAxis()/*画坐标轴*/
    this.intoData()/*数据传入 */
    this.allLine()/*表单全部折线*/

  },
  /*画网格*/
  drawGrid() {
    /*竖线*/
    let GridErect =  this.canvasWidth / this.erectLine
    this.ctx.strokeStyle = '#eee'
    for (let i = 0; i < GridErect; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(i * this.erectLine - 0.5, 0)
      this.ctx.lineTo( i * this.erectLine - 0.5, this.canvasHeight)
      this.ctx.stroke()
    }
    /*横线*/
    let GridAcross =  this.canvasHeight / this.across
    for (let i = 0; i < GridAcross; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, i * this.across - 0.5)
      this.ctx.lineTo(this.canvasWidth, i * this.across - 0.5)
      this.ctx.stroke()
    }

  },
  /*画坐标轴*/
  drawAxis() {
    /*x轴*/
    this.ctx.beginPath()
    this.ctx.strokeStyle = '#000'
    this.ctx.moveTo(this.X0, this.Y0)
    this.ctx.lineTo(this.canvasWidth, this.Y0)
    this.ctx.lineTo(this.canvasWidth - this.arrowSize, this.Y0 + this.arrowSize / 2)
    this.ctx.lineTo(this.canvasWidth - this.arrowSize, this.Y0 - this.arrowSize/ 2)
    this.ctx.lineTo(this.canvasWidth, this.Y0)
    this.ctx.stroke()
    this.ctx.fill()
    for (let i = 0; i < 13; i++) {
      this.ctx.beginPath()

      i === 0 ?  this.ctx.fillText('0', i + 1 * this.erectLine, this.canvasHeight) : this.ctx.fillText(`${i}月`, (i + 1) * this.erectLine -5, this.canvasHeight)
      this.ctx.font = '10px Microsoft YaHei'

    }

    /*y轴*/
    this.ctx.beginPath()
    this.ctx.moveTo(this.X0,  this.Y0)
    this.ctx.lineTo(this.erectLine, this.across)
    this.ctx.lineTo(this.erectLine - this.arrowSize / 2, this.across + this.arrowSize)
    this.ctx.lineTo(this.erectLine + this.arrowSize / 2, this.across + this.arrowSize)
    this.ctx.lineTo(this.erectLine, this.across)
    this.ctx.stroke()
    this.ctx.fill()
    //从新渲染
    let input = document.querySelectorAll('tbody input')
    for (let i = 0 , len = input.length; i < len; i++) {
      if (input[i].value == '确定') {
        input[i].addEventListener('click', () => {
          this.confirmRander()
        })

      }
      
    }

    document.addEventListener('keydown', (event)=> {
      event = event || window.event
      if(event.keyCode == 13){
        this.confirmRander()
      }
    })
  },

  /*数据传入 */
  intoData() {
    let trEvent = document.getElementById('table-wrapper')
    trEvent.addEventListener('mousemove',  (e) => {
      this.monthArr = []
      e = event ||window.event
      let target = e.target.parentNode
      if(e.target.tagName === 'TD' ){
        let trs = target.children
        for (let i = 0, len = trs.length; i < len; i++) {
          if(trs[i].value === 'month'){
            this.monthArr.push(parseInt(trs[i].innerText))
          }

        }
      }
      e.stopPropagation()
      this.drawDotted(this.monthArr)
    })
    trEvent.addEventListener('mouseout',()=> {
      this.allLine()
    })

  },
  /*画点*/
  drawDotted(arr) {
    if(arr.length){
      let prevCanvasX = 0
      let prevCanvasY = 0
      this.ctx.clearRect(0, 0, 500, 300)
      this.drawGrid()
      this.drawAxis()
      this.arrMax = Math.max.apply(null, arr)

      let scale = (this.canvasHeight - this.across * 2) / this.arrMax
      this.getNumMax()
      for (let i = 0; i < arr.length; i++) {

        this.ctx.beginPath()
        /*点坐标*/
        let canvasX = this.X0 + this.erectLine + i * this.erectLine
        let canvasY = this.Y0 - arr[i] * scale
        this.ctx.arc(canvasX, canvasY, this.point / 2, 0, 2 * Math.PI)
        this.ctx.fill()
        /*连线*/
        if(i == 0){
          this.ctx.beginPath()
          this.ctx.moveTo(this.X0, this.Y0)
          this.ctx.lineTo(canvasX, canvasY)
        }else{
          this.ctx.beginPath()
          this.ctx.moveTo(prevCanvasX, prevCanvasY)
          this.ctx.lineTo(canvasX, canvasY)
        }
        this.ctx.stroke()
        prevCanvasX = canvasX
        prevCanvasY = canvasY
      }
    }
  },
  /*表单全部折线*/
  allLine() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.drawGrid()
    this.drawAxis()
    this.tr = document.querySelectorAll('tr')
    this.allPoint()
    
    for (let i = 0, len = this.allIpunt.length; i < len; i++) {

      if(this.allIpunt[i].type == 'checkbox'){
        this.allIpunt[i].addEventListener('change', () =>{
          this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
          this.allLine()
        })
      }
      
    }

  },
  /*显示全部点线*/
  allPoint() {
    let maxArr = []
    let td = document.querySelectorAll('td')
    for (var i = 0, len = td.length; i < len; i++) {
      if(td[i].value === 'month'){
        maxArr.push(parseInt(td[i].innerText))
      }
    }
    this.arrMax = Math.max.apply(null, maxArr)
    this.getNumMax()
    let scale = (this.canvasHeight - 2 * this.across) / this.arrMax //最大值
    let tr = document.getElementsByTagName('tr') //所有tr
    for (var i = 1 ; i < tr.length; i++) {
      let prevCanX = 0
      let prevCanY = 0
      let randomC = this.randomColor()
      let trs = tr[i].children
      let n = 0
      if(trs[1].value){
        for (let j = 1; j < trs.length ; j++) {
         if(trs[j].value == 'month'){
         this.ctx.beginPath()
         let canX = (j + 1) * this.erectLine
         let canY = this.Y0 - parseInt(trs[j].innerText) * scale
         this.ctx.arc(canX, canY, this.point / 2, 0, 2 * Math.PI)
         this.ctx.fill()
         if(j == 1){
         this.ctx.beginPath()
         this.ctx.moveTo(this.X0, this.Y0)
         this.ctx.lineTo(canX, canY)
         this.ctx.strokeStyle = randomC
         this.ctx.stroke()
         } else if(j > 1){
         this.ctx.beginPath()
         this.ctx.moveTo(canX, canY)
         this.ctx.lineTo(prevCanX, prevCanY)
         this.ctx.strokeStyle = randomC
         this.ctx.stroke()
         }
         prevCanX = canX
         prevCanY = canY
         }
         }
      }else{
        for (let j = n; j < trs.length; j++) {
          if(trs[j].value == 'month'){
            this.ctx.beginPath()
            let canX = j * this.erectLine
            let canY = this.Y0 - parseInt(trs[j].innerText) * scale
            // let canY = this.Y0 - parseInt(trs[j].innerText) * scale

            this.ctx.arc(canX, canY, this.point / 2, 0, 2 * Math.PI)
            this.ctx.fill()
            if(j == 2){
              this.ctx.beginPath()
              this.ctx.moveTo(this.X0, this.Y0)
              this.ctx.lineTo(canX, canY)
              this.ctx.strokeStyle = randomC
              this.ctx.stroke()
            } else if(j > 2){
              this.ctx.beginPath()
              this.ctx.moveTo(canX, canY)
              this.ctx.lineTo(prevCanX, prevCanY)
              this.ctx.strokeStyle = randomC
              this.ctx.stroke()
            }
            prevCanX = canX
            prevCanY = canY
          }
        }
      }
    }
  },
  randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
  },
  getNumMax() {
    /*Y轴数值*/
    let yLen = this.arrMax / this.across
    let num = (this.canvasHeight-20) / this.across
    for (var i = 0; i < 11; i++) {
      this.ctx.beginPath()
      if(i > 0){
        this.ctx.fillText(`${i * yLen}`, this.X0, this.Y0 - i * num)
      }
      this.ctx.font = '10px Microsoft YaHei'
    }
  },
  /*确定从新渲染*/
  confirmRander() {
    /*点确定*/

    this.ctx.clearRect(0, 0, 500, 300)
    this.drawGrid()
    /*画网格*/
    this.drawAxis()
    /*画坐标轴*/
    /*this.allLine()*/
    this.allPoint()


    /*console.log('xx')
    let input = document.querySelectorAll('tbody input')
    for (let i = 0 , len = input.length; i < len; i++) {
      if(input[i].value == '确定'){

        console.log(input[i])
        input[i].addEventListener('click', () => {
          this.ctx.clearRect(0, 0, 500, 300)
          this.drawGrid()/!*画网格*!/
          this.drawAxis()/!*画坐标轴*!/
          this.allPoint()

        })*/





  }

}

