//获取表单内容
let table_wrapper = document.getElementById('table-wrapper')
let regionArr = []
let productArr = []
inputReg[0].addEventListener('change',function () {
  getD()
})
inputPro[0].addEventListener('change',function () {
  getD()

})
for (let i = 1; i < inputReg.length; i++) {
  inputReg[i].addEventListener('change', function () {
    getD()
  })
}
for (let i = 1; i < inputPro.length; i++) {
  inputPro[i].addEventListener('change', function () {
    getD()
  })
}
function getD() {
  productArr  = []
  for (let j = 1; j < inputPro.length; j++) {
    if(inputPro[j].checked){
      productArr.push(inputPro[j].value)
    }
  }
  regionArr = []
  for (let j = 1; j < inputReg.length; j++) {
    if(inputReg[j].checked){
      regionArr.push(inputReg[j].value)
    }
  }
  getAdd()

}

// 根据表单选项获取数据
let dataArr = []
function getAdd() {
  dataArr = []
  for (var i = 0; i < sourceData.length; i++) {
    for (var j = 0; j < regionArr.length; j++) {
      if(sourceData[i].region === regionArr[j]){
        for (var k = 0; k < productArr.length; k++) {
          if(sourceData[i].product === productArr[k]){
            dataArr.push(sourceData[i])

          }
        }
      }
    }
  }
  renderTable(dataArr)
}


// 渲染表格
//表头
function renderTable(arr) {
  table_wrapper.innerHTML = ''
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let tbody = document.createElement('tbody')
  let regLen = regionArr.length
  let proLen = productArr.length
  let flag = false
  let headArr = []
  if(regLen === 1 && proLen > 1){
    headArr.push('地区')
    headArr.push('产品')
    flag = true
  }else{
    headArr.push('产品')
    headArr.push('地区')

  }
  for (let i = 1; i < 13; i++) {
    headArr.push(i + '月')

  }


  let theadTr = document.createElement('tr')
  for (let i = 0; i < headArr.length; i++) {
    let th = document.createElement('th')
    th.innerHTML = headArr[i]
    theadTr.appendChild(th)
  }

  thead.appendChild(theadTr)
  table.appendChild(thead)

  /*tbody事件委托*/
  tbody.addEventListener('click', function (e) {  //点击显示input
    e = event ||window.event
    let target = e.target
    if(target.tagName == 'TD'){//点击显示input
      let input = target.getElementsByTagName('input')
      clearInput()
      showIput(target, arr, thead)
      e.stopPropagation()
    }
    if(target.tagName == 'SPAN'){
      let parent = target.parentNode
      let input = parent.getElementsByTagName('input')
      clearInput()
      showIput(target, arr, thead)
      e.stopPropagation()
    }

    e.stopPropagation()
  })

   arr = replaceData(arr)//替换数据

  //表单
  for (let i = 0, len = arr.length; i < len; i++) {
    let tr = document.createElement('tr')
    let data = arr[i]
    let product = data.product
    let region = data.region
    let sale = data.sale
    let regTd = document.createElement('td')
    regTd.innerHTML = region
    let proTd = document.createElement('td')
    proTd.innerHTML = product
    
    if(flag){
      regTd.rowSpan = len
      if(i === 0){
        tr.appendChild(regTd)
      }
        tr.appendChild(proTd)
    }else{
      if(regLen > 1){
        proTd.rowSpan = regLen
        if(i % regLen === 0){
          tr.appendChild(proTd)
        }
        tr.appendChild(regTd)
      }else{
        tr.appendChild(proTd)
        tr.appendChild(regTd)
      }
    }
    let saleLen =  sale.length
    for (let j = 0; j < saleLen; j++) {
      let td = document.createElement('td')
      td.value = 'month'
      td.innerHTML = sale[j]
      /*添加input*/
      let inputText = document.createElement('input')
      inputText.type = 'text'
      inputText.value = sale[j]
      inputText.className = 'redact'
      let inputOn = document.createElement('input')
      inputOn.type = 'button'
      inputOn.value = '确定'
      inputOn.className = 'confrim'
      let inputOff = document.createElement('input')
      inputOff.type = 'button'
      inputOff.value = '取消'
      inputOff.className = 'cancel'
      /*添加span*/
      let span = document.createElement('span')
      span.innerHTML = '编辑'
      td.appendChild(span)
      td.appendChild(inputText)
      td.appendChild(inputOn)
      td.appendChild(inputOff)
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }

  table.appendChild(tbody)
  table_wrapper.appendChild(table)

}

 function showIput(target, arr, thead) {
  console.log(target)
  let input = null
   let sale = []
   let tbody = document.getElementsByTagName('input')
   document.onkeydown = function (event) {/*键盘事件*/
     event = event || window.event
     if(event.keyCode == 13){ /*回车事件*/
       target.tagName == "TD" ? target = target : target = target.parentNode
       let inputValue = target.children
       let reg = /^[0-9]+.?[0-9]*$/
       if(!reg.test(inputValue[1].value)){
         alert('请输入数字')
         inputValue[1].blur()
         inputValue[1].style.display = 'none'
         inputValue[2].style.display = 'none'
         inputValue[3].style.display = 'none'
         inputValue[1].value = target.firstChild.nodeValue

         return
       }
       let t1 = thead.firstChild.children[0].innerHTML
       let tr = target.parentNode
       let sale = []
       let InputVlaue = tr.querySelectorAll('input[type="text"]')
       for (var i = 0; i < InputVlaue.length; i++) {
         sale.push(parseFloat(InputVlaue[i].value))
       }

       /*获取第一个内容*/
       tr1(tr)
      function tr1(tr) {
         if(tr.cells[1].value == 'month'){
           let prevTr = tr.previousElementSibling
           tr1(prevTr)
         }else{
           td =  tr.cells[0].innerHTML
         }
         return td
       }

      if(t1 == '产品'){
         for (let i = 0; i < arr.length; i++) {
           if(tr.cells[1].value == 'month'){
             if(arr[i].product == tr1(tr) && arr[i].region == tr.cells[0].innerHTML){
               arr[i].sale = sale
             }
           }else{
             if(arr[i].product == tr.cells[0].innerHTML && arr[i].region == tr.cells[1].innerHTML){
               arr[i].sale = sale
             }
           }
         }
        }else{
        for (var i = 0; i < arr.length; i++) {
          for (let i = 0; i < arr.length; i++) {
            if(tr.cells[1].value == 'month'){
              if(arr[i].product == tr.cells[1].innerHTML && arr[i].region == tr1(tr)){
                arr[i].sale = sale
                console.log('region')
              }
            }else{
              if(arr[i].product == tr.cells[1].innerHTML && arr[i].region == tr.cells[0].innerHTML){
                arr[i].sale = sale
              }
            }
          }
          
        }
      }
       localStorageData(arr)
       renderTable(replaceData(arr))

     }
     if(event.keyCode == 27){ /*ESC事件*/
       clearInput()
     }
   }
    target.tagName == "TD" ? input = target.getElementsByTagName('input') : input = target.parentNode.getElementsByTagName('input')
   for (let i = 0, len = input.length; i < len; i++) {
     input[i].style.display = 'block'
     input[i].addEventListener('click', function () {
       if(this.className == 'confrim'){/*点击确定*/
         input[0].blur()
         input[1].style.display = 'none'
         input[2].style.display = 'none'
            let tr = this.parentNode.parentNode
            function trPrev(tr) {
              if(tr.cells[1].value == 'month'){
                let prevTr = tr.previousElementSibling
                trPrev(prevTr)
              }else{
                td =  tr.cells[0].innerHTML
              }
              return td
            }
        /*验证输入数字*/
            let inputValue = this.parentNode.children
            let num = inputValue[1].value
            let reg = /^[0-9]+.?[0-9]*$/
            if(!reg.test(num)){
              alert('请输入数字')
              let td = this.parentNode
              let tdNum = td.firstChild
              inputValue[1].value = tdNum.nodeValue
              inputValue[1].blur()
              inputValue[1].style.display = 'none'
              inputValue[2].style.display = 'none'
              inputValue[3].style.display = 'none'
              return
            }

            let td1 = trPrev(tr)
            let trInput = tr.querySelectorAll('input[type="text"]')
            for (let j = 0; j < trInput.length; j++) {
              sale.push(parseInt(trInput[j].value))
            }

            let headTable = thead.firstChild
            if(headTable.cells[0].innerHTML == '产品'){
              for (let k = 0; k < arr.length; k++) {
                if (tr.cells[1].value === 'month') {
                  if (arr[k].product == td1 && arr[k].region == tr.cells[0].innerHTML) {
                    arr[k].sale = sale
                    
                  }
                } else {
                  if (arr[k].product == tr.cells[0].innerHTML && arr[k].region == tr.cells[1].innerHTML) {
                    arr[k].sale = sale
                  }

                }
              }
            }else{
              for (let k = 0; k < arr.length; k++) {
                if (tr.cells[1].value === 'month') {
                  if (arr[k].product == tr.cells[0].innerHTML && arr[k].region == td1) {
                    arr[k].sale = sale
                  }
                } else {
                  if (arr[k].product == tr.cells[1].innerHTML && arr[k].region == tr.cells[0].innerHTML) {
                    arr[k].sale = sale
                  }

                }
              }
            }
            localStorageData(arr)
            renderTable(replaceData(arr))
          }
       
       if(this.className == 'cancel'){ /*点击取消*/
         clearInput()
       }
     })
   }

   input[0].focus() //获取焦点
}


let body = document.body
body.onclick = function () {
  clearInput()
}

/*消除input*/

function clearInput() {
  let input = document.querySelectorAll('tbody input')
  for (let i = 0, len = input.length; i < len; i++) {
    if(input[i].type == 'text'){
      input[i].blur()
      input[i].style.display = 'none'
    }else{
      input[i].style.display = 'none'
    }
  }

}
/*let tbody = document.getElementsByTagName('input')
document.onkeydown = function pressEnter(event) {
  event = event || window.event
  console.log(event.keyCode)
  if(event.keyCode == 13){
    for (let i = 0; i < tbody.length; i++) {


    }
  }
}*/








/*

let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
let falg = false
function renderTable(num) {

  thead.innerHTML = ''
  let regLen = regionArr.length
  let proLen = productArr.length

  let headArr = []
  if(regLen === 1 && proLen > 1){
    headArr.push('地区')
    headArr.push('产品')
    falg = true
  }else{
    headArr.push('产品')
    headArr.push('地区')

  }
  for (let i = 1; i < 13; i++) {
    headArr.push(i + '月')

  }
  let theadTr = document.createElement('tr')
  for (var i = 0; i < headArr.length; i++) {
    let th = document.createElement('th')
    th.innerHTML = headArr[i]
    theadTr.appendChild(th)
  }
  thead.appendChild(theadTr)
  table.appendChild(thead)
  addTr(num)

}
function addTr(num) {
  let tr = document.createElement('tr')
  console.log(num)
  let data = num
  let product = data.product
  let region = data.region
  let sale = data.sale
  let productTd = document.createElement('td')
  productTd.innerHTML = product
  let regionTd = document.createElement('td')
  regionTd.innerHTML = region
  if(falg){
    regionTd.rowSpan = productArr.length
    tr.appendChild(regionTd)
    tr.appendChild(productTd)
    for (var i = 0; i < sale.length; i++) {

      let td = document.createElement('td')
      td.innerHTML = sale[i]
      tr.appendChild(td)
    }
  }

  table.appendChild(tr)
  table_wrapper.appendChild(table)
}*/
