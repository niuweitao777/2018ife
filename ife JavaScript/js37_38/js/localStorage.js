function localStorageData(newDate){//形参是对像
  console.log(newDate)
  if(!window.localStorage){
    alert('浏览器不支持localStorage')
  }else{
    let storage = window.localStorage//获取本地存储
    if(storage.getItem('newSourceData')){//判断本地存储是否有数据
      let json = storage.getItem('newSourceData') //将数据转存
      let newSourceData = JSON.parse(json)//将数据转为JSON数组
      for (let i = 0; i < newSourceData.length; i++) {
        for (var j = 0; j < newDate.length; j++) {
          if(newSourceData[i].product == newDate[j].product && newSourceData[i].region == newDate[j].region){//对比本地与传数据
            newSourceData[i].sale = newDate[j].sale //相同用传替换本地
            let arr = JSON.stringify(newSourceData)
            storage.setItem('newSourceData', arr)
            /*return*/
          }

        }
      }
      newSourceData = newDate//不相同，添加新数据
      let arr = JSON.stringify(newSourceData)
      storage.setItem('newSourceData', arr)
    }else{
      let newSourceData = newDate//添加新数据
      //添加新数据
      let arr = JSON.stringify(newSourceData) //转为字符串
      storage.setItem('newSourceData', arr) //存入本地
    }

  }
}