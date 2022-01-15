
function runProgram(input) {
    var arr = input.trim().split("\n")
var line=1
    var a=arr[0].trim().split(" ").map(Number);

for (let j = 0; j < a; j++) {

    var n=arr[line].trim().split(" ").map(Number);line++
    var b=arr[line].trim().split("");line++

    console.log(lar(b));
}



  }
 
  const lar=(arr)=>{
     let arr1="";
let n=arr.length-1;

while(arr1.length<=n){
  
  let mid=Math.floor((arr.length-1)/2);
  if(arr.length==2){
    mid=0
  }
  arr1=arr1+arr[mid]
//console.log(arr.length/2,mid,arr.length,"mid",arr[mid],);
let xx=mid !== -1 && arr.splice(mid, 1)
 //console.log( arr.splice(arr[mid],1));
}



return arr1
  }
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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