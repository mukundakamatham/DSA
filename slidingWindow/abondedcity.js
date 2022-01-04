 
    function runProgram(input) {
        let arr = input.trim().split('\n')
        let a = arr[0].trim().split(' ').map(Number)
        var line=1;
      for (let i = 0; i < a; i++) {
         let b = arr[line].trim().split(' ').map(Number);line++;
         let c = arr[line].trim().split(' ').map(Number);line++;
        console.log( findit(b[0],b[1],c));
      }
      
      
      
       
       }
 
 
 
 
       if (process.env.USERNAME === "mukesh") {
         runProgram(`2
         5 13
         5 1 2 3 4 
         1 10
         1
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
       
       
 
       function findit(n,k,arr){
     
 
 
 arr.sort()
 
 
         var start = 0;
         var end = 1;
 
          sum = arr[0];
         len = arr.length;
 
          while(end <= len) {
 


              while(sum > k && start < end-1) {
                    sum = sum - arr[start];
                    start++;
               }
 
               if(sum == k) {
                  console.log(sum,k,start,end,"a");
                  return  end;
                }
 
                if(end < len)
                   sum = sum + arr[end];
                   console.log(sum,k,start,end,arr,"b");
 
                 end++;
 
             }
             return "-1"
 
         }
         