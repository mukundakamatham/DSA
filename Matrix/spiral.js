// function findit(mat) {
//     let left = 0,
//       top = 0,
//       right = mat[0].length - 1,
//       bottom =mat.length - 1;
//     let str = "";
//     let count = 0,
//       total = mat[0].length * mat.length;
//     while (count < total) {
//         //console.log(top,bottom,left,right);
//       for (let i = right; i >= left; i--) {

//         str += mat[bottom][i] + " ";
//         count++;
//       }
//       bottom--;
     
//       for (let i =bottom; i >= top; i--) {
//          // console.log(mat);
//           //console.log(mat[i][left],mat[i],left,"l");
//         str += mat[i][left] + " ";
//         count++;
//       }
//       left++;
  
//     //   for (let i = right; i >= left; i--) {
//     //     str += mat[bottom][i] + " ";
//     //   }
//     //   bottom--, count++;
//     //   for (let i = bottom; i >= top; i--) {
//     //     str += mat[i][left] + " ";
//     //   }
//     //   left++, count++;
//     }
//     console.log(str);
//   }
  
//   function runProgram(input) {
//     let arr = input.trim().split("\n");
//     let n = arr[0];

//     let line=1;
//     for (let i = 1; i <= n; i++) {
//         let mat = [];
//         let b=arr[line].trim().split(" ").map(Number);line++
       
// for (let j = 0; j < b[0]; j++) {
//     let c=arr[line].trim().split(" ").map(Number);line++
// mat.push(c)

// }
// findit(mat);
// }

//    // findit(mat, n);
//   }
//   if (process.env.USERNAME === "mukesh") {
//     runProgram(`2
//     3 3
//     1 2 3
//     4 5 6
//     7 8 9
//     4 3
//     1 2 3
//     4 5 6
//     7 8 9
//     10 11 12`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
  
function findit(mat) {
    let left = 0,
      top = 0,
      right = mat[0].length - 1,
      bottom =mat.length - 1;
    let str = "";
    let count = 0,
      total = mat[0].length * mat.length;
    while (count < total) {
      for (let i = top; i <=bottom; i++) {

        str += mat[i][left] + " ";
        count++;
      }
     left++;
     
      for (let i =left; i <=right; i++) {
      
        str += mat[bottom][i] + " ";
        count++;
      }
     bottom--;
  
   
    }
    console.log(str);
  }
  
  function runProgram(input) {
    let arr = input.trim().split("\n");
    let n = arr[0];

    let line=1;
    for (let i = 1; i <= n; i++) {
        let mat = [];
        let b=arr[line].trim().split(" ").map(Number);line++
       
for (let j = 0; j < b[0]; j++) {
    let c=arr[line].trim().split(" ").map(Number);line++
mat.push(c)

}
findit(mat);
}

   // findit(mat, n);
  }
  if (process.env.USERNAME === "mukesh") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
  