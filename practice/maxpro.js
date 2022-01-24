
function runProgram(input) {
    var arr = input.trim().split("\n")
    var n=arr[0].trim().split(" ").map(Number)
    var line=1
for (let i = 0; i < n; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
// c.sort(function (a,b) {
//     return b-a;
// })
// let h1=c[0]
// for (let j = 1; j < c.length; j++) {
//    if(h1!=c[j]){
//        console.log(h1*c[j]);
//        break
//    }
// }
let max=0
for (let j = 0; j < c.length; j++) {
   for (let k = 0; k < c.length; k++) {
      if(k!=j){
         let x= c[j]*c[k];
         if(x>max){
             max=x
         }
      }
   }
}
console.log(max);
}

  }
 
  
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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
