var arr=[1,[2],[3,4],[5,6]];
var ans=[];
for (let i = 0; i < arr.length; i++) {
    if(arr[i][0]){
for (let j = 0; j < arr[i].length; j++) {
   // const element = array[j];
    ans.push(arr[i][j])
}
    }else{
        ans.push(arr[i])
    }

    
}
console.log(ans);
var arr=[1,[2],[3,4],[5,6]];
var ans=[];
for (let i = 0; i < arr.length; i++) {
    console.log(typeof(arr[i]));
   if(typeof(arr[i])!="number"){
for (let j = 0; j < arr[i].length; j++) {
   // const element = array[j];
    ans.push(arr[i][j])
}
    }else{
        ans.push(arr[i])
    }

    
}
console.log(ans);

/*
      
   
1       
1       1 
1       2       1 
1       3       3        1
1       4       6       4        1

Input : 4
Output : [1,3,3,1]

Input : 2 
Output: [1,1]

*/

const getRow = (rowIndex) => {
let mat=[]
mat[0]=1;
mat[1]=[1,1];

for(let i=2;i<rowIndex;i++){
let arr=[1];
for(let j=1;j<i;j++){
let sum=mat[i-1][j-1]+mat[i-1][j]
arr.push(sum)
}
arr.push(1)
mat.push(arr);
}


console.log(mat[rowIndex-1])

}

getRow(4);
getRow(3)

