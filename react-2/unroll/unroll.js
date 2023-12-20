function unroll(squareArray) {
const result = [];
while(squareArray.length > 0){
    // Add first row from squareArray to result
    result.push(...squareArray.shift());
    //Add last element of each remaining row
    squareArray.forEach(row => result.push(row.pop()));
    //Add last row in reverse order, if it exists
    if(squareArray.length > 0){
        result.push(...squareArray.pop().reverse());
    }

    //Add the first element of each remaining row in reverse order
    for(let i = squareArray.length - 1; i >= 0; i--){
        result.push(squareArray[i].shift());
    }
}
return result;
}

module.exports = unroll;
