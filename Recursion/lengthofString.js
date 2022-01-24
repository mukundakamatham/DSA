// const findit = (n,array)=>{
//  if(n == 0) return n;
//  return array[n-1] + findit(n-1,array)
// }
const findit = (array,sum)=>{
  if(array.length== 0) return sum;
  sum=sum+array.pop()
  return  findit(array,sum)
 }
// const findit = (array,sum)=>{
//   if(array[0]== undefined) return sum;
//   sum=sum+array.pop()
//   return  findit(array,sum)
//  }
function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0;i< cases;i++){
       let n = +input[line++]
       let array = input[line++].trim().split(' ').map(Number)
      //  console.log(findit(n,array));
      console.log(findit(array,0));
   }
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
  
  