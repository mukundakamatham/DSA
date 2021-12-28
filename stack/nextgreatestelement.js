//https://oj.masaischool.com/contest/2659/problem/4
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
for (let i = 0; i < a; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++;
    var c=arr[line].trim().split(" ").map(Number);line++;   
    greater(c)
}
   
}
function greater(array) {
    var stack=[]
    var res=[];
    for (let i = array.length-1; i >=0; i--) {
        if(stack.length == 0){
            res.push(-1)
        }else if(stack.length > 0 && stack[stack.length-1] > array[i]){
            res.push(stack[stack.length-1])
        } else if((stack.length > 0) && (stack[stack.length-1] <= array[i])){
            while((stack.length > 0) && (stack[stack.length-1] <= array[i])){
                stack.pop()
            }
            if(stack.length > 0 ){
                res.push(stack[stack.length-1])
            } else{
                res.push(-1)
            }
          }
          stack.push(array[i])
    }
    console.log(res.reverse().join(" "));
}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`1
    4
    1 3 2 4`);
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
  