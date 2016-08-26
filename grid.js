$(document).ready(function(){
// recive the colors given 
// turn the colors into blocks of color
// alternate them
alert("hi")



function gridMaker(length, colorA, colorB){
  // Make the array we want to return
  var arrToRtn = [],
      color = colorA;
  // Build our rows
  for (var rowNum = 0; rowNum < length; rowNum += 1 ){
    // Flip the color everytime we start a new row IF the length is even
    if (length % 2 === 0) {
      if (color === colorA) {
        color = colorB;
      } else {
        color = colorA;
      }
    }
    // Throw values into that row
    var row = [];
    for (var colNum = 0; colNum < length; colNum += 1){
      row.push(color)
      if (color === colorA) {
        color = colorB;
      } else {
        color = colorA;
      }
    }
    arrToRtn.push(row);
  }

  // Return the array
  return arrToRtn;
}

console.log(gridMaker(3, 'aquamarine', 'pink'));

});