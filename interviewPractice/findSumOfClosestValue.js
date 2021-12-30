
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
 for (let i = 0; i < a[0]; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
   

    
    console.log(findit(c,b[1]));


 }
   
}
function findit(ar,n){
    ar.sort(function (a,b) {
        return a-b;
    })
    let s=0
    for (let i = 0; i < ar.length; i++) {
        
    }
}
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0`);
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
  