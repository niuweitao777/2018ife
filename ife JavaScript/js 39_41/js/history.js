/*
把用户的一些交互状态通过某种方式记录在URL中
分享或再次打开某个URL，需要从URL中读取到数据状态，并且进行页面呈现的还原
需要记录的状态包括：产品的选择以及地域的选择
*/
let wrap = document.getElementById('wrap')
let inputs = wrap.querySelectorAll('input[type="checkbox"]')
console.log(inputs)
for (let i = 1; i < inputReg.length; i++) {
  inputReg[i].addEventListener('change', function () {
    let url1 = regionArr.join('-')
    let url2 = productArr.join('-')
    let url = url1 + '-' + url2
    
    history.pushState && history.pushState(url, null, 'js39-41.html?region=' + url)
  })
}
for (let i = 1; i < inputPro.length; i++) {
  inputPro[i].addEventListener('change', function () {
    let url = regionArr.join('-') + '-' + productArr.join('-')
    history.pushState && history.pushState(url, null, 'js39-41.html?region=' + url)
  })
}
history.pushState && window.addEventListener('popstate', function (e) {
 for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false

  }
  let state = e.state
  if (state) {
    let arr = state.split('-')
    for (var i = 0; i < inputs.length; i++) {
     if (inputs[i].getAttribute('checkbox-type') != 'all') {
      for (var j = 0; j < arr.length; j++) {
       if (inputs[i].value == arr[j]) {
         inputs[i].checked = true
       }
      }
     }
    }
  } else {
    for (var i = 0; i < inputReg.length; i++) {
      inputReg[i].checked = false
      inputPro[i].checked = false
    }
    inputReg[1].checked = true
    inputPro[1].checked = true
  }
  getD()
  let lineRender = new LineChatr()
  lineRender.allLine()
  checkboxA(inputReg)
  checkboxA(inputPro)
})
let url = window.location.href
let search = url.split('=')[1]
let name = decodeURI(search)
let arrName = name.split('-')
function read() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false
  }
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].getAttribute('checkbox-type') != 'all') {
      for (var j = 0; j < arrName.length; j++) {
        if (inputs[i].value == arrName[j]) {
          inputs[i].checked = true
        }
      }
    }
  }
  getD()
}
read()
