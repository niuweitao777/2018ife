let region_radio = document.getElementById('region-radio-wrapper')
let product_radio = document.getElementById('product-radio-wrapper')
let checkBox = {
  product: [
    {
      value: 1,
      text: '手机'
    },
    {
      value: 1,
      text: '笔记本'
    },
    {
      value: 1,
      text: '智能音箱'
    }],
  region: [
    {
      value: 2,
      text: '华北'
    },
    {
      value: 2,
      text: '华东'
    },
    {
      value: 2,
      text: '华南'
    }
  ]
}
function checkboxAll(elm, a) {
  let allCheckbox = document.createElement('label')
  allCheckbox.innerText = '全选'
  allCheckbox.value = '全选'
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.value = a
  checkbox.setAttribute('checkbox-type', 'all')
  allCheckbox.appendChild(checkbox)
  elm.appendChild(allCheckbox)
}
let inputReg = region_radio.getElementsByTagName('input')
let inputPro = product_radio.getElementsByTagName('input')
let product = checkBox.product
let region = checkBox.region
function checkBoxInput(elm, radio) {
  for (let i = 0; i < elm.length; i++) {
    let label = document.createElement('label')
    label.innerText = elm[i].text
    let checkboxProduct = document.createElement('input')
    checkboxProduct.type = 'checkbox'
    checkboxProduct.name = 'product'
    checkboxProduct.value = elm[i].text
    label.appendChild(checkboxProduct)
    radio.appendChild(label)
  }
}

function oneinput(elm) {
  elm[0].addEventListener('change', function () {
    if (this.checked) {
      for (let i = 1; i < elm.length; i++) {
        elm[i].checked = true
        elm[i].addEventListener('change', function () {
          checkboxA(elm)
        })
      }
    } else {
          checkboxA(elm)
    }
  })
  for (var i = 0; i < elm.length; i++) {
    elm[i].addEventListener('change', function () {
      checkboxA(elm)
    })
  }
}
function checkboxA(input) {
  let n = 0
  for (let i = 1 ; i < input.length; i++) {
    input[i].checked && n++
  }
 if(n == input.length - 1){
   input[0].checked = true
  }else{
   input[0].checked = false
  }
}

//添加全选
checkboxAll(region_radio, 'reg')
checkboxAll(product_radio, 'pro')
//子复选
checkBoxInput(product, product_radio)
checkBoxInput(region, region_radio)
//点击全选
oneinput(inputReg)
oneinput(inputPro)
