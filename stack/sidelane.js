//https://oj.masaischool.com/contest/2659/problem/2
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
   var line=1;
   var c=arr[2].trim().split(" ").map(Number);
   while(c[0]!==0){
    var b=arr[line].trim().split(" ").map(Number);line++;
    var c=arr[line].trim().split(" ").map(Number);line++;

 
    b.sort(function(a,b){return a-b;})
  var temp=true
    for (let i = 0; i < b.length-1; i++) {
        if((b[i+1]-b[i])!=1){
           
           temp=false
            break
        }
    }
    if(temp){
        console.log("yes");
    }else{
        console.log("no");
    }
} 

var b=arr[line].trim().split(" ").map(Number);line++;
var c=arr[line].trim().split(" ").map(Number);line++;
 
    b.sort(function(a,b){return a-b;})
  var temp=true
    for (let i = 0; i < b.length-1; i++) {
        if((b[i+1]-b[i])!=1){
           
           temp=false
            break
        }
    }
    if(temp){
        console.log("yes");
    }else{
        console.log("no");
    }
}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5
    5 1 2 4 3 
    0`);
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
  