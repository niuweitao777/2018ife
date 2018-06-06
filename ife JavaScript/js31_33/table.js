//获取表单内容
let table_wrapper = document.getElementById('table-wrapper')
let data = null
let regionArr = []
let productArr = []
inputReg[0].addEventListener('change',function () {
  getD()
  console.log(regionArr)
  console.log(productArr)
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
function renderTable(num) {
console.log(num)
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
  for (var i = 0; i < headArr.length; i++) {
    let th = document.createElement('th')
    th.innerHTML = headArr[i]
    theadTr.appendChild(th)
  }

  thead.appendChild(theadTr)
  table.appendChild(thead)

  //表单
  for (let i = 0, len = num.length; i < len; i++) {
    let tr = document.createElement('tr')
    let data = num[i]
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
      td.innerHTML = sale[j]
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }

  table.appendChild(tbody)
  table_wrapper.appendChild(table)

}




















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
