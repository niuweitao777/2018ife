
function replaceData(arr) {
  let newData = []
  let newSourceData = null
  for (let i = 0; i < sourceData.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(sourceData[i].region == arr[j].region && sourceData[i].product == arr[j].product){
        newData.push(arr[j])
      }
    }
  }
  if(localStorage.getItem('newSourceData')){
    let josn = localStorage.getItem('newSourceData')
    newSourceData = JSON.parse(josn)
    for (let i = 0; i < newSourceData.length; i++) {
      for (var j = 0; j < newData.length; j++) {

        if(newSourceData[i].product == newData[j].product && newSourceData[i].region == newData[j].region){
          newData[j] = newSourceData[i]
        }
      }
    }
  }

  return newData
}
