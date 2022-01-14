// function findit(array, n) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < n - i - 1; j++) {
//       if (array[i] > array[j]) {
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//     }
//   }
//   console.log(array.join(' '));
// }

// function runProgram(input) {
//   input = input.trim().split("\n");
//   let n = +input[0];
//   let array = input[1].trim().split(" ").map(Number);
//   findit(array, n);
// }
// if (process.env.USERNAME === "adam") {
//   runProgram(`5
//     3 5 0 9 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }



function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
    for (let i = 0; i < a; i++) {
        var b=arr[line].trim().split(" ").map(Number);line++;
        var c=arr[line].trim().split(" ").map(Number);line++;
console.log((sort(c)));
    }
  
   
  }
 
  const sort=(arr)=>{
      if(arr.length==1){
          return arr.join(" ");
      }else{
        //   let i=0;let j=arr.length-1;
        //   let k=0;
        //   while(i<j){
        //       while(arr[j]==2)j--
        //       while(arr[i]==0)i++
        //   }
        //   if(arr[i]>arr[j]){
        //       [arr[i],arr[j]]=[arr[j],arr[i]]
        //   }

        let a=[];
        let b=[];
        let c=[]
        for (let i = 0; i < arr.length; i++) {
           if(arr[i]==0){
              a.push(arr[i])
           }else if(arr[i]==1){
               b.push(arr[i])
           }else{
            c.push(arr[i])
           }
            
        }
        let aa=[a.join(" "),b.join(" "),c.join(" ")]
        return aa.join(" ")
      }
  }
  
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
  