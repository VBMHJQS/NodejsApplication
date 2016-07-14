var str = '1jsaldjfls\r\r\n2hadfhsdl\r\r\n3adfsdf\r\r\n4fasdfsdaf\r\n5asjdfkajsdlk\r\n6jsldfjklsa\r\r\n7asdfasdf\r\r\n';
var tempArray = str.split('\r\r\n');
//console.log(tempArray);
var array = new Array();
for (var i in tempArray) {
    array = array.concat(tempArray[i].split('\r\n'));
}
console.log(array);
