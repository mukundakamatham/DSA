function findit(arr,n) {
    let res = [];
     let j=n;
    for (let i = 0; i < arr.length-n; i++) {
        var large=arr[i]
    for (let jj = i; jj < j; jj++) {
       if(arr[jj]>large){
           large=arr[jj]
       } 
    }
    res.push(large);
    j++
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
  
      findit(array,n[1]); 
    }
    
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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
  