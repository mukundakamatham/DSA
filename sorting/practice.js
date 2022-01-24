const { compileFunction } = require("vm");


function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    var b=arr[1].trim().split(" ").map(Number)
  
  console.log(quick(b));
   
  }

  const quick=(a)=>{

  }
//   function merge(array){
      
//    if(array.length <= 1)return array;
//     let mid = Math.floor(array.length/2)
//     let left = merge(array.slice(0,mid))
//     let right = merge(array.slice(mid))
//     //console.log(left,right,mid,array);
//   return combine(left,right)
//   }
  
//   const combine=(a,b)=>{
// let arr=[];
// let aa = a.length, bb = b.length;
// let i = 0,j = 0;
// while(i<aa&&j<bb){
//     if(a[i]<b[j]){
//         arr.push(a[i])
//         i++
//     }else{
//         arr.push(b[j])
//         j++
//     }
// }

// while(i<aa){
//     arr.push(a[i])
//     i++
// }

// while(j<bb){
//     arr.push(b[j])
//     j++
// }
// //console.log(arr,"arr");
// return arr
//   }
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5
    3 -5 0 -19 8`);
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
  