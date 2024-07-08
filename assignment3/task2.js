var armstrongNum = function(start,end){
    for(let i=start;i<=end;i++){
        let isArmstrong = checkArmstrong(i);
        if(isArmstrong) console.log(i);
    }
}
function checkArmstrong(num){
    num=num.toString();
    let len = num.length;
    let sum = 0;
    for(let digit of num){
        sum += Math.pow(parseInt(digit),len);
    }
    if(sum == num) return true;
    else return false;
}
armstrongNum(10,200);
// this has time complexity of O(1);