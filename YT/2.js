 let numbers = [1, 3, 4, 6, 8, 11];
 let target = 10;

 let twosum = function(numbers,target){
    let i= 0;
    let j = numbers.length-1;

    while(i<j){
        let sum = numbers[i]+numbers[j];
        if(sum===target){
            return [i,j];
        }else if(sum < target){
            i++;
        }else{
            j--;
        }
    }
    return -1;
 }
 console.log(twosum(numbers,target));