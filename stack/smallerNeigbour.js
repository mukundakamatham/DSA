function findit(array) {
  let res = [],
    stack = [];
  for (let i = 0; i < array.length; i++) {
    if (stack.length == 0) res.push(-1);
    else if (stack.length > 0 && stack[stack.length - 1] < array[i]) {
      res.push(stack[stack.length-1]);
    } else if (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= array[i]) {
        stack.pop();
      }
      if (stack.length == 0) res.push(-1);
      else res.push(stack[stack.length - 1]);
    }
    stack.push(array[i]);
  }
  console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let a = input[0].trim().split(" ").map(Number);
  var line=1;
  for (let i = 0; i < a; i++) {
    let n = input[line].trim().split(" ").map(Number);
line++
    let array = input[line].trim().split(" ").map(Number);line++

    findit(array); 
  }
  
}
if (process.env.USERNAME === "mukesh") {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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
