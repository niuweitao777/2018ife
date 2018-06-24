/*
把用户的一些交互状态通过某种方式记录在URL中
分享或再次打开某个URL，需要从URL中读取到数据状态，并且进行页面呈现的还原
需要记录的状态包括：产品的选择以及地域的选择
*/
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