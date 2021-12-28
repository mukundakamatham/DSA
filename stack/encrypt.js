//https://oj.masaischool.com/contest/2659/problem/5
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
for (let i = 0; i < a; i++) {
    var b=arr[line].trim().split("");line++;
    decrypt(b)
}
   
}
function decrypt(a){
    var s=[];
    for (let i = 0; i < a.length; i++) {
if(a[i]=="#"){
    s.pop()
} else{
    s.push(a[i])
}       
    }
    console.log(s.join(""))
}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    ab#d
    a#bc`);
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
  