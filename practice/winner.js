
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  
        var b=arr[line].trim().split(" ").map(Number);line++;
        //var c=arr[line].trim().split(" ").map(Number);line++;

   console.log(high(b).join(" "));
    }
  
 
 const high=(arr)=>{
    
     let lar=0;
     let small=0
let len=arr.length-1;
let j=0;
while(j<len){
    if(arr[j]>arr[len]){
        lar=lar+arr[j];
        small=small+arr[len]
    }else{
        lar=lar+arr[len];
        small=small+arr[j]
    }
    len--
    j++
}
return [lar,small]
 }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`4
    8 15 3 7
    
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
  