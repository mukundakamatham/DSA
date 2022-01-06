
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let a = input[0].trim().split(" ").map(Number);
    var line=1;
    let stack=[];
    let res=[]
    for (let i = 0; i < a; i++) {
      let n = input[line].trim().split(" ");
  line++
  //console.log(n,n[0],n[1]);
  if(n[0]=="E"){
      stack.push(n[1])
     
  }
  
  if(n[0]=="D"){
   
while(stack.length>0){
    res.push(stack.pop())
}
if(res.length>0){
    console.log(res.pop());
}else{
    console.log("Empty");
}
while (res.length>0) {
    stack.push(res.pop())
}



  }
      
    }
    
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`4
    E 2
    E 3
    D
    D`);
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
  