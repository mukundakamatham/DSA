 
    function runProgram(input) {
        let arr = input.trim().split('\n')
        let a = arr[0].trim().split(' ').map(Number)
        var line=1;
   for (let i = 0; i < a; i++) {
      
         let b = arr[line].trim().split(' ').map(Number);line++;
         let c = arr[line].trim().split(' ').map(Number);line++;

        console.log( findit(c));
     
      
   }
      
       
       }
 
 
 
 
       if (process.env.USERNAME === "mukesh") {
         runProgram(`2
         2
         1 1
         6
         1 2 1 2 3 1
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
       
       
 
       function findit(arr){
          
   
 
 
 
 
        let i=0
 let lar=0;
 while (i<arr.length) {
   let count=0;
    for (let j = i; j < arr.length; j++) {
       if(arr[j]<arr[j+1]){
           count++
       }else{
           break
       }
    }
 if(lar<count){
     lar=count;
 }
         }
         return lar
        }