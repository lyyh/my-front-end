var arr = [
	[1,2,3],
	[2,3,4],
	[4,5,6]
]
function changeArr(arr){
	var c;
	for(var i = 1;i<arr.length;i++){
		for(var j=0;j<i;j++){
			c = arr[i][j];
			arr[j][i] = arr[j][i];
			arr[j][i] = c;
		}
	}
}