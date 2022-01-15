// const getAllSubsets = 
//       theArray => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         [[]]
//       );
      

// function runProgram(input) {
//     var arr = input.trim().split("\n")
//     var a=arr[0].trim().split(" ").map(Number)
//     var b=arr[1].trim().split(" ").map(Number)
// let sub=getAllSubsets(b)
// var count=0
// for (let i = 0; i < sub.length; i++) {
//     let sum=0
//     for (let j = 0; j < sub[i].length; j++) {
//         sum=sum+sub[i][j]
//     }
//     if(sum%2!=0){
//         count++
//     }
    
// }
// console.log(count);
//   }
 
  
 
  
//   if (process.env.USERNAME === 'mukesh') {
//     runProgram(`3
//     1 2 3`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
let ans=[]
const findit = (str, current, res,) => {
    if (res.length > 0) ans.push(res);
    for (let i = current; i < str.length; i++) {
      res += str[i];
      findit(str, i + 1, res,);
      res = res.substring(0, res.length - 1);
    }
    
  };
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[1].trim();
    let current = 0;
    let res = "";
    findit(str, current, res);
    console.log(ans);
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`4
      abcd`);
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
  