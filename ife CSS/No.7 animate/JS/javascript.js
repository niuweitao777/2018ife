$(function () {
  $('#email').focus(function () { // 获取焦点
    $('label[for="email"] span').addClass('active') //文字上移
    $('#email~div').addClass('bar')
  }).blur(function () { //失去焦点
     $('#email~div').addClass('bar_animate') //蓝条消失

    setTimeout(function(){
      $('#email~div').removeClass('bar bar_animate') //删除蓝条样式 动画
    }, 1000);
  })
  $('#password').focus(function () { // 获取焦点
    $('label[for="password"] span').addClass('active') //文字上移

    $('#password~div').addClass('bar')
  }).blur(function () { //失去焦点
    $('#password~div').addClass('bar_animate') //蓝条消失
    setTimeout(function(){
      $('#password~div').removeClass('bar bar_animate') //删除蓝条样式 动画
    }, 1000);
    if($('#email').val() && $('#password').val()){ //验证表单是否为空
      $('.btn').addClass('animated pulse') //按钮动画
    }
  })
})