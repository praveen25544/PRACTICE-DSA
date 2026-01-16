let arr =[28,6,100,66,99];
let max = arr[0];

for (let i =0;i <arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log(max);

let Arr =[100,35,59,4,1000];
let min = Arr[0];

for(let i =0; i<Arr.length;i++){
    if(min> Arr[i]){
        min = Arr[i];
    }
}
console.log(min);
