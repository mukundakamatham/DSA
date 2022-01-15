const isValidTriangle = (a = 1, b = 1, c = 1) => {
    if(!a || !b || !c){
       return false;
    };
    const con1 = a + b > c;
    const con2 = b + c > a;
    const con3 = c + a > b;
    return con1 && con2 && con3;
 };
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    for (let i = 0; i < a; i++) {
        var b=arr[line].trim().split(" ").map(Number);line++;
let ans=isValidTriangle(b[0],b[1],b[2]);
if(ans){
    console.log("Yes");
}    else{
    console.log("No");
}
}
  
   
  }
 
 
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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
  