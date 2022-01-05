function findit(array,n,k){
let sum = 0;
for(let i = 0;i < k;i++){
  sum += array[i]
}
let x = sum ;
for(let i = k;i< n;i++){
  x += array[i] - array[i-k]
  sum = Math.min(sum,x)
}
console.log(sum);
}



function runProgram(input) {
   let arr = input.trim().split('\n')
   let [n,k] = arr[0].trim().split(' ').map(Number)
   let array = arr[1].trim().split(' ').map(Number)
   findit(array,n,k)
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`5 3
    3 0 2 9 7`);
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
  
  