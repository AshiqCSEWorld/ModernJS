// Sun Dec 17 1995 03:24:00 GMT
// var date1 = new Date('December 17, 1995 03:24:00');
// // Sun Dec 17 1995 03:24:00 GMT
// var date2 = new Date('1995-12-17T03:24:00');

// console.log(date1 === date2);
// to test a function and get back its return type
function printElapsedTime(fTest) {
  var nStartTime = Date.now(),
    vReturn = fTest(10, 20),
    vEndTime = Date.now();

  console.log('Elapsed time: ' + String(vEndTime - nStartTime) + ' miliseconds');
  return vReturn;


}


var result = printElapsedTime(function (a, b) {
  return a + b;

});

console.log(result);