

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var b=arr[1].trim().split(" ")
    var c=arr[2].trim().split(" ").map(Number)
var line=3;
   for (let i = 0; i < c; i++) {
    var d=arr[line].trim().split(" ").map(Number);line++
 
       console.log(findit(b,d));
   }
  }
 
  const findit=(b,d)=>{
let l=d[0];
let high=d[1];
count=0;
// b.lowercase()
for (let i = l-1; i < high; i++) {
    let x=b[i].split("");
    if((x[0]=="a"||x[0]=="e"||x[0]=="i"||x[0]=="o"||x[0]=="u")&&(x[x.length-1]=="a"||x[x.length-1]=="e"||x[x.length-1]=="i"||x[x.length-1]=="o"||x[x.length-1]=="u")){
        count++
    }
}
return count
  }
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`5
    aba suna oua tes aba
    5
    1 5
    2 4
    1 3
    3 5
    5 5`);
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
  