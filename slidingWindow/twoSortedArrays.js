 
    function runProgram(input) {
        let arr = input.trim().split('\n')
        let a = arr[0].trim().split(' ').map(Number)
        var line=1;
      for (let i = 0; i < a; i++) {
         let d = arr[line].trim().split(' ').map(Number);line++;
         let c = arr[line].trim().split(' ').map(Number);line++;
         let b = arr[line].trim().split(' ').map(Number);line++;

        
        
         console.log( findit(c,b));
      
      
        }
      
      
       
       }
 
 
 
 
       if (process.env.USERNAME === "mukesh") {
         runProgram(`1
         6
         1 1 1 1 1 1
         6 5 4 3 2 1`);
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
       
       
 
       function findit(a,b){
          
 
         var start = 0;
         var end = b.length-1;
 let count=0;
 while ((start<a.length)&&(end>=0)) {
     //console.log(arr[start],arr[end]);
//console.log("start",start,"end:",end,"count:",count,a[start],b[end]);

    if((a[start])==(b[end])){
        count++
      // console.log("test",a[start],b[end],"start:",start,"end:",end);
        start++;
        end--;
    }else if(a[start]>b[end]){
      // console.log("test great",a[start],b[end],"start:",start,"end:",end);

end--
    }else if(a[start]<b[end]){

//console.log("test less",a[start],b[end],"start:",start,"end:",end);

start++
}


    }
        return count 
 
         }
         