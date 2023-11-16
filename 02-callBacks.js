let multiplyNumber = (sum) => console.log(sum * 2);

function operationSum(num1, num2, operation) {
    let sum = num1 + num2;
    return operation(sum);
};


operationSum(4,5,multiplyNumber);