 
    function runProgram(input) {
        let arr = input.trim().split('\n')
        let a = arr[0].trim().split(' ').map(Number)
        var line=1;
   
         let b = arr[line].trim().split(' ').map(Number);line++;
        console.log( findit(a[1],b));
     
      
      
      
       
       }
 
 
 
 
       if (process.env.USERNAME === "mukesh") {
         runProgram(`4 3
         abcc`);
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
       
       
 
       function findit(k,arr){
          
     console.log(k,arr);
 
 
 
 
 
         var start = 0;
         var end = k-1;
 let count=0;
 while (end<arr.length) {
     //console.log(arr[start],arr[end]);
    let obj={}
    var temp=true;
    for (let i = start; i <=end; i++) {
       // console.log("i",i,"st",start,"en",end,"count",count);
       if(arr[i] in obj){
          // console.log(arr[i],"found");
           temp=false;
           break
       } else{
           obj[arr[i]]=1;
          // console.log(arr[i],"inside");
       }
    }
    if(temp){
        count++
    }
     start++;
     end++;
 }
        return count 
 
         }
         