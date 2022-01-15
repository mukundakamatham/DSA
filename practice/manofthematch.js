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
     let temp=false;
     let a=0;
     let b=0;
     for (let i = 0; i < arr.length; i++) {

       if(((i)%6)==0){
         // console.log(i,"a :",a,"b :",b);
           temp=!temp
          // console.log(temp,"over",a,b);
       }
            if((arr[i]==1)||(arr[i]==3)){
                if(temp){
                a=a+arr[i]
                temp=false
               // console.log(i,temp);
            }else{
                b=b+arr[i]
                temp=true
                //console.log(i,temp);

            }
        }else{
            if(temp){
                a=a+arr[i]
              
            }else{
                b=b+arr[i]
               
            }
        }
       

     }
    // console.log(a,b);
     if(a==b){
        return "Tie"
    }else if(a<b) {return "Virat Kohli"
}else  if(a>b){ return "AB de Villiers"}


 }
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`
    
    3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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
  