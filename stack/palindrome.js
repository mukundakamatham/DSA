//https://oj.masaischool.com/contest/2659/problem/extra-1
//not all test cases passed
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
for (let i = 0; i < a; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++;

    var c=arr[line].trim().split("");line++;
  var ans=  palindrome(c)
  if(ans){
      console.log("Possible!");
  }else{
      console.log("Not Possible!");
  }
}
   
}
function palindrome(a){
  console.log();
    // if(a.length%2!==0){
    //     return false
    // }

    var s=[];
    a.sort()

    var temp=a[0]
    for (let i = 1; i < a.length; i++) {
if(a[i]==temp){
    s.pop()
} else{
    temp=a[i]
    s.push(a[i])
}       
    }
  if(s.length<=0){
      return true;
  }else{
      return false
  }
}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`1
    38
qylmbfmjtrjdyfltmhoyyutsehyrabujorgxqh`);
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
  