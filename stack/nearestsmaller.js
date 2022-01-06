function findit(array) {
    let res = [],
      stack = [];
    for (let i = 0; i < array.length; i++) {
        var temp=true;
        var temp1=true;
var left;
var jj;
var kk
var right;
     for (let j = i; j < array.length; j++) {
       if( array[i]>array[j]){
          // res.push(array[j])
          left=(j-i)
         // console.log("left",left);
          jj=j
         // console.log("found match left:",array[j],j);
           temp=false;
           break
       }
     }
     
     if(temp){
        left=array.length
    }
    
  for (let k = i; k > 0; k--) {
      if(array[i]>array[k]){
       // console.log("found match right:",array[k],k);

          right=(i-k)
          //console.log("right",right);
          kk=k
          temp1=false;
          break
      }
    }
    if(temp1){
        right=array.length
        //console.log(array.length,"rihjttttt");
    }

   // console.log("left:",left,"right:",right);
if(left<right){
    res.push(array[jj])
    //console.log(jj,"j",left,right)
}else if(left>right){
    res.push(array[kk])
    //console.log(kk,"k",left,right)

}
 if(temp&&temp1){
         res.push(-1)
     }

//console.log(res[i],"a",i,array[i])


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
  