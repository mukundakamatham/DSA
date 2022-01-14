
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    for (let i = 0; i < a; i++) {
        var b=arr[line].trim().split(" ").map(Number);line++;
        var c=arr[line].trim().split(" ").map(Number);line++;

   console.log(weight(c));
    }
  }
 
 const weight=(arr)=>{
let sum=0;
for (let i = 0; i < arr.length; i++) {
sum=sum+((i+1)*arr[i])
    


}
return sum
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1
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
  