function runProgram(input) {
  input = input.trim().split("\n");
  let obj = {};
  let array = []
  for(let i = 1;i< input.length; i++){
   let str = input[i].trim()
  array.push(str)
  }
  let x = array;
  array.sort()

  for(let i = 0;i< array.length; i++){
    let arr = array[i].split('').sort().join('')
    if(obj[arr] == undefined)obj[arr] = i;
    else obj[arr] = i;
  }
  console.log(x);
  console.log(obj);
}
if (process.env.USERNAME === "Dharmesh") {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
