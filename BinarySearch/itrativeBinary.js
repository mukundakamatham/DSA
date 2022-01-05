function find(array,k,n){
  //console.log(array,k,n);
    let low = 0,high = n-1;
    while(low <= high){
      let mid = Math.floor(low + (high-low)/2)
      if(array[mid] == k)return mid;
      if(array[mid] > k)high = mid-1;
      else low = mid+1;
    }
return "-1"
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let k = input[2].trim().split(" ").map(Number);

  array.sort((a,b)=>a-b)
  console.log(find(array, k, n));
}
if (process.env.USERNAME === "mukesh") {
  runProgram(`5
  1 2 3 5 6
  5`);
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
