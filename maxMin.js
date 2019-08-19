var maxMin = function(arr, input) {
    var above = 0;
    var below = 0;
  
    for (var i = 0; i < arr.length; i++) {
      var currentNum = arr[i];
      if (currentNum > input) {
        above++;
      } else {
        below++;
      }
    }
    console.log("Above:" + above);
    console.log("Below:" + below);
  };
  maxMin([1, 5, 2, 1, 10], 6);