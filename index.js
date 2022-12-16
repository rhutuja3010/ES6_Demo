let params=[2,3,4]
function calculateTotal(num1,num2,num3){
    return num1+num2+num3
}
console.log("Total="+calculateTotal(...params));