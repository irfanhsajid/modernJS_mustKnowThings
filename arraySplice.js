var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.splice(1, 2, 10, 11, 12, 13);
/*
    1. 1 no element er por kop marbe
    2. 2 ta element soriye dibe
    3. element soranor por 10,11,12,13 bosiye dibe & main array change kore felbe
    4. result hisebe je array element duita soriye dise ogla dibe. 
*/
console.log(numbers);
//output : [1, 10, 11, 12, 13, 4,  5,  6,  7,  8]
console.log(result);
//output: [2,3]
