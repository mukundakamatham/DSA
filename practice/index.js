
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  
        var b=arr[line].trim().split(" ").map(Number);line++;

   console.log(high(b,a[1]));
    }
  
 
 const high=(arr,k)=>{
   let ans=-1;
   for (let i = 0; i < arr.length; i++) {
      if(arr[i]==k){
          ans=i;
          break;
      }
   }
   return ans
   
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5 1
    3 4 5 1 2
    
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
  