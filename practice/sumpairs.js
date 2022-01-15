
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
for (let i = 0; i < a; i++) {
 
    var b=arr[line].trim().split(" ").map(Number);line++
    var c=arr[line].trim().split(" ").map(Number);line++
var temp=false;
let k=0;
let j=c.length-1
c.sort((a,b)=>{return a-b})
console.log(c);
  while (k<j) {
  console.log(k,j,c[k],c[j],"sum",(c[k]+c[j]));

      if((c[k]+c[j])==b[1]){
         console.log("yippi");
        temp=true  
        break
      }else if((c[k]+c[j])>b[1]){
          j--
      }else if((c[k]+c[j])<b[1]){
          k++
      }
  }
   if(temp){
    console.log(1);

   }else{
    console.log(-1);

   }


}
  }
 
  
 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`1
    10 -13
    -7 -6 4 10 -5 0 -3 1 -6 5`);
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