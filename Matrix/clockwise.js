
 

function runProgram(input) {
    var arr = input.trim().split("\n")
    var a=arr[0].trim().split(" ").map(Number)
    var line=1;
  var mat=[]
  for (let i = 0; i <a; i++) {
    var b=arr[line].trim().split(" ").map(Number);line++;
    //var c=arr[line].trim().split(" ").map(Number);line++;
mat.push(b)
      
  }
       let x=rotate(mat);  
     for(let j=0;j<x.length;j++){
         console.log(x[j].join(" "))
     }

    }
  
//  7411000777
 const rotate=(mat)=>{
//      let left=0;
//     let right=mat.length-1;
   
//    while(left<right){
//     for (let i = left; i < mat.length; i++) {
//        let x=mat[i].pop()
//        let str=mat[i+1][0]
//     }
//    }

let R = mat.length;
let C =  mat.length;

return rotatematrix(R, C, mat)
// A function to rotate a matrix 
// mat[][] of size R x C.
// Initially, m = R and n = C
 }
function rotatematrix(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
    
    /*
    row - Starting row index
    m - ending row index
    col - starting column index
    n - ending column index
    i - iterator
    */
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break;
  
        // Store the first element of next
        // row, this element will replace 
        // first element of current row
        prev = mat[row + 1][col];
  
        // Move elements of first row 
        // from the remaining rows 
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
  
        // Move elements of last column
        // from the remaining columns 
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
  
        // Move elements of last row 
        // from the remaining rows 
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
  
        // Move elements of first column
        // from the remaining rows 
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
    return mat
}

 
  
  if (process.env.USERNAME === 'mukesh') {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
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
  