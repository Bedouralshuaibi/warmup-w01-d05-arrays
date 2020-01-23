const num = function(nums){
    let pos = [];
    let neg = [];
    let count = 0;
    let sum = 0;
    
    for (let i=0; i < nums.length ; i++){
        if  (nums[i] < 0){
            neg.push(nums[i])   
        } else {
            pos.push(nums[i])
           
        }
    }
    count = pos.length;
    for (let i=0; i < neg.length; i++){
        sum =  neg[i] + sum
    }
return console.log( count + "  " + sum)
}