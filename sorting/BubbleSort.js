// function findit(array, n) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < n - i - 1; j++) {
//       if (array[i] > array[j]) {
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//     }
//   }
//   console.log(array.join(' '));
// }

// function runProgram(input) {
//   input = input.trim().split("\n");
//   let n = +input[0];
//   let array = input[1].trim().split(" ").map(Number);
//   findit(array, n);
// }
// if (process.env.USERNAME === "adam") {
//   runProgram(`5
//     3 5 0 9 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }



function runProgram(input) {
  var arr = input.trim().split("\n")
  var a=arr[0].trim().split(" ").map(Number)
  var line=1;
  var b=arr[1].trim().split(" ").map(Number)

console.log(bubblesort(b).join(" "));
 
}
function bubblesort(a){
  for (let i = 0; i < a.length; i++) {
   var temp=true;
    for (let j = 0; j < a.length; j++) {
      if(a[i]<a[j]){
        [a[i],a[j]]=[a[j],a[i]]
        temp=false
      }
    }
    if(temp){
      break;
    }

  }
  return a

}


if (process.env.USERNAME === 'mukesh') {
  runProgram(`5
  3 -5 0 -19 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
