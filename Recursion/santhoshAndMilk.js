
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    // let ar=new Array(a[0]).fill(-1)
 for (let i = 0; i < a[0]; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++

    
    console.log(findit(b[0]));


 }
   
}
function findit(n){
    
    if(n < 0) return 0;
    if(n == 0) return 1;
    return findit(n-4) +  findit(n-8)

}
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`1
    12`);
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
  