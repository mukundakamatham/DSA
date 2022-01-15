
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
  var line=1;
  for (let i = 0; i < a; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++;

    var c=arr[line].trim().split(" ").map(Number);line++

      for (let j = 0; j < c.length; j++) {
if(c[j]>c[j+1])   {
    console.log(j);
    break
}       
      }
  }
  

  }
 
  
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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