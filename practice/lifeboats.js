
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    for (let i = 0; i < a; i++) {
        var b=arr[line].trim().split(" ").map(Number);line++;
        var c=arr[line].trim().split(" ").map(Number);line++;
console.log(lifeboat(b[1],c));

   
  }
 
 
}

const lifeboat=(a,b)=>{
let count=0;
b.sort();
for (let i = 0; i < b.length; i++) {
    if((b[i]+b[i+1])<=a){
        count++;
        i++
    }else{
        count++
    }
}
return count;
}
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3
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
  