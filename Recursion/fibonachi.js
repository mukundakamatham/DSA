
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    let ar=new Array(a[0]).fill(-1)
 
console.log(fib(a[0],ar));
   
}
function fib(n,res){
    
if (n <= 1) return n;
(res[0] = 0), (res[1] = 1);
for (let i = 2; i <= n; i++) {
  res[i] = res[i - 1] + res[i - 2];
}
return res[n];

}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`4`);
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
  