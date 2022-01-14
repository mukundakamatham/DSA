
 

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
 for (let j = i+1; j < arr.length; j++) {
    if(arr[i]!=arr[j]){
        if(arr[j]==(2*arr[i])){
            sum++
        }
    } 
 }
    


}
return sum
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 
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
  