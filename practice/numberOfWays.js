

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
  let dp=new Array(a[0]+1).fill(-1)
 
  console.log(findit(a,dp));
   
  }
 
  
  function findit(n, dp) {
    if (n == 0) return 1;
    if (n < 0) return 0;
    if (dp[n] != -1) return dp[n];
    dp[n] = findit(n - 1, dp) + findit(n - 2, dp) + findit(n - 3, dp);
  
    return dp[n];
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
  