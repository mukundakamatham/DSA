
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
 for (let i = 0; i < a[0]; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
    let ar=new Array(b[0]).fill(-1)

    
    console.log(findit(c,ar));


 }
   
}
function findit(n,dp){
    
   var sum=0;

for (let j = 0; j < n.length; j++) {
   // console.log(n[j]);
    if (dp[j] != -1) return dp[n];
    else{
       
sum=sum+n[j];
if(sum<0){
    sum=0;
}
dp[j]=sum
}
    }
return Math.max(...dp)
}
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`3
    3
    1 2 3
    4
    -1 -1 0 1
    3
    2 -1 2`);
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
  