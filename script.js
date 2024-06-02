function threeSum(arr, target) {
  //your code here

	let ans=0,mn=10000000000;

	for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                let sm = arr[i]+arr[j]+arr[k];
                if(Math.abs(sm-target)<mn){
                    mn=Math.abs(sm-target);
                    ans=sm;
                }
            }
        }
    }
    return ans;
	
}

module.exports = threeSum;
