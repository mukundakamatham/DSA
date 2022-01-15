
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  
        var b=arr[line].trim().split(" ").map(Number);line++;
        //var c=arr[line].trim().split(" ").map(Number);line++;

   console.log(equilibrium(b));
    }
  
 
 const equilibrium=(arr)=>{
    
     let ans=-1;

for (let j = 1; j < arr.length-1; j++) {
//console.log("aa",arr[j]);
    let temp=false
for (let i = j+1; i < arr[i]; i++) {
    //console.log("j",arr[i]);
    if(arr[j]>arr[i]){
temp=true;
//console.log("te",arr[j],arr[i]);
break
    }
}
   for (let k = 0; k <j; k++) {
       if(temp){
           break
       }
    // console.log("k",arr[k]);
    if(arr[k]>arr[j]){
       // console.log("tel",arr[j]);
        temp=true;
        break
    }
   }


if(!temp){
    ans=arr[j]
    break
}
   
    
    
}
return ans
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5
    4 5 6 7 8
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
  