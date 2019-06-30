// var pattern = /[a-zA-Z]+/;
// str = 'TF1606';
// console.log(str.match(pattern)[0]);

function logObj(str) {


    var temp;
    if (str == 'wangxc') {
        temp = 'wang';
    } else {
        temp = 'error';
    }

    var test = {
        name: temp
    };
    console.log(test);
}

logObj('wangxc')
