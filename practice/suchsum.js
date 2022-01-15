
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
for (let i = 0; i < a; i++) {
 
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
var temp=false;
for (let j = 0; j < c.length; j++) {
for (let k = 0; k < c.length; k++) {
    if((j!=k)&&((c[j]-c[k])==b[1])){
        temp=true;
        break
    }
}
  
}

if (temp) {
    console.log("Yes");
} else{
    console.log("No");
} 
}
  }
 
  
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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