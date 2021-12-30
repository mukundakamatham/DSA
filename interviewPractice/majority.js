
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
 for (let i = 0; i < a[0]; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
   

    
    console.log(findit(c));


 }
   
}
function findit(n){
    let count=0;
    n.sort(function (a,b) {
        return a-b;
    })
    var ar=[0]
    var temp=n[0]
    for (let i = 0; i < n.length; i++) {
     if(temp==n[i]){
     count++
        if(count>(n.length/2)){
            return n[i]
        }
    }else{
        ar[n[i-1]]=count;
        count=1;
        temp=n[i]
    }
}
ar[n[n.length-1]]=count;
//console.log(ar);
let max=Math.max(...ar);
if(max>n.length/2)return ar.indexOf(max)
else return -1
}
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3`);
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
  