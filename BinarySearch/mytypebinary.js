
function lower_bound(arr,  N, X)
{
var mid;
 
    
var low = 0;
var high = N-1;
 
    while (low < high) {
        mid = Math.floor(low + (high - low) / 2);
        //console.log(mid);

        if (X <= arr[mid]) {
            high = mid;
        }
 
        else {
            low = mid + 1;
        }
    }
   
    if(low < N && arr[low] < X) {
       low++;
    }
       
    return low;
}
 
function upper_bound(arr,  N, X)
{
    var mid;
 
 
    var low = 0;
    var high = N-1;
 
    while (low < high) {
      mid = Math.floor(low + (high - low) / 2);
       
        if (X >= arr[mid]) {
            low = mid + 1;
        }
 
        else {
            high = mid;
        }
    }
   
    if(low < N && arr[low] <= X) {
       low++;
    }
 
    return low;
}

function iterativeFunction(arr, x) {

let start=0, end=arr.length-1;
    //  if(x>arr[end]){
    //    return end
    //  }else if(x<=arr[0]){
    //   return start
    // }
while (start<=end){

    let mid=Math.floor((start + end)/2);

    if ((arr[mid]<=x)&&(arr[mid+1]>x)) return mid;

    else if (arr[mid] < x)
         start = mid + 1;
    else
         end = mid - 1;
}

return -1;
}

