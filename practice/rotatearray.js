
function runProgram(input) {
    var arr = input.trim().split("\n")
var line=1
    var a=arr[0].trim().split(" ").map(Number);

for (let j = 0; j < a; j++) {

    var [n,k]=arr[line].trim().split(" ").map(Number);line++
    var b=arr[line].trim().split(" ").map(Number);line++

    console.log(lar(k,b).join(" ").trim());
}



  }
 
  const lar=(k,arr)=>{
      let n=k%arr.length
      let arr1=""
for (let i = 0; i < n; i++) {
    //[arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
   arr1=(arr.pop())+" "+arr1
}
return [arr1.trim(),arr.join(' ')]
  }
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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