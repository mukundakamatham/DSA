function findit(array, i, j, k) {
    let res = -1;
    while (i <= j) {
      let mid = Math.floor(i + (j - i) / 2);
      if (array[mid] == k) {
        res = mid;
        j = mid - 1;
      }
      if (array[mid] > k) j = mid - 1;
      else i = mid + 1;
    }
    return res;
  }
  function runProgram(input) {
    input = input.trim().split("\n");
    let [n, kk] = input[0].trim().split(" ").map(Number);
    let array = input[1].trim().split(" ").map(Number);
   let count=0;
   let j=1;
   let k=2;
   for (let i = 0; i < array.length-2; i++) {
       if(array[i]<array[j]<array[k]){
           if(((array[i]-array[j])<=kk)&&((array[j]-array[k])<=kk)){
               count++
           }
       }
       j++;
       k++;
   }
   console.log(count);
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`4 3
    1 2 3 4
    `);
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
  