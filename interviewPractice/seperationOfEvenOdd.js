
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
 for (let i = 0; i < a[0]; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
   
    var d=arr[line].trim().split(" ").map(Number);line++

    
    console.log(findit(c,d[0]));


 }
   
}
function findit(ar,n){
  let even=[];
  let odd=[];
  ar.sort(function (a,b) {
    return a-b;
})
  let ans;
  for (let i = 0; i < ar.length; i++) {
      if(ar[i]%2==0)even.push(ar[i])
      else odd.push(ar[i])
  }
  if(n==1){
ans=even.concat(odd)
  }else{
      ans=odd.concat(even)
  }
return ans.join(" ")
}
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
  