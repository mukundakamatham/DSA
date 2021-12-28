//https://oj.masaischool.com/contest/2659/problem/2
function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split("")
//console.log(a);
 var s=[]
 var temp=true;
 for (let i = 0; i < a.length; i++) {
     if(a[i]=="("||a[i]=="["||a[i]=="{"){
        // console.log(a[i],"a");
         s.push(a[i]);
        } else if(a[i]==")"||a[i]=="}"||a[i]=="]"){
         var close=s.pop();
         if(  (close == "{" && a[i] != "}") ||
         (close == "(" && a[i] != ")") ||
         (close== "[" && a[i] != "]")){
             //console.log(close,a[i],"b");
            temp=false
            break;
         }
     }
 }
 if(s.length>0){
    // console.log(s,"s");
     temp=false
 }
 if(temp){console.log("balanced");} else{ console.log("unbalanced");}
}

  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]])]]`);
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
  