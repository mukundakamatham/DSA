
function runProgram(input) {
    var arr = input.trim().split("\n")
    var [n,k]=arr[0].trim().split(" ").map(Number)

    var b=arr[1].trim().split(" ").map(Number)
var sum=0
for (let j = 0; j < k; j++) {
       sum=sum+b[j]
        
}
var lar=sum;
for (let i = 0; i < n; i++) {
    if(k>=n){
        break
    }
sum=sum-b[i];
sum=sum+b[k]
   if(sum>lar){
       lar=sum
   }
  // console.log(sum,i);
   k++
    
}
  console.log(lar);

  }
 
  
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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