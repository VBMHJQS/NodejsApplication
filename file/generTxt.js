/**
解析文本内容，以TB log 为例 成功
*/
var str = '2016/06/02 14:59:37.005自动交易信息:帐户[kctest]商品[TF1606]类型[卖平]数量[1]价格[101.00000000]注释[TB_G_YANG_TF000_8MIN_V1_1]';
//console.log(str);

function generateTxt(str){
  var regExp = /(\[.+?\])/g;//(\\[.+?\\])
  var res = str.match(regExp);
  console.log(res);
  for(i=0;i<res.length;i++){
    res[i] = res[i].replace('[','').replace(']','');
  }
  console.log(res);
  //console.log(typeof res);
  // while (res = regExp.search(str)) {
  //   console.log(res);
  // }
}
function getDate(str){
  console.log(str.substring(0,23));
}
getDate(str);
//generateTxt(str);
