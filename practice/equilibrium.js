
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  
        var b=arr[line].trim().split(" ").map(Number);line++;
        //var c=arr[line].trim().split(" ").map(Number);line++;

   console.log(equilibrium(b));
    }
  
 
 const equilibrium=(arr)=>{
     var sum=0;
     let ans=-1;
for (let i = 0; i < arr.length; i++) {
   
    sum=sum+arr[i];
}
var left=0;
for (let j = 0; j < arr.length; j++) {
    sum=sum-arr[j];
    if(left==sum){
        ans=j;
        break
    }
    //console.log("sum",sum,"left",left);
    left=left+arr[j];
   
    
    
}
return ans
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5
    3 3 5 5 1
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
  