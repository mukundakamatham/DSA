
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  
        var b=arr[line].trim().split(" ").map(Number);line++;
        //var c=arr[line].trim().split(" ").map(Number);line++;

   console.log(equilibrium(b,a[1]));
    }
  
 
 const equilibrium=(arr,k)=>{
    
     let ans=0;

for (let j = 0; j < arr.length-1; j++) {
if((arr[j]>k)&&(arr[j]>-1)){
    ans++
}
    
    
}
return ans
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`8 5
    10 9 8 7 7 7 5 5
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
  