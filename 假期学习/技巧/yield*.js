/**
 * 使用yield*取出嵌套数组的所有成员
 */

function *iterTree(tree){
	if(Array.isArray(tree)){
		for(let value of tree){
			yield* iterTree(value);
		}
	}else{
		yield tree;
	}
}

const theTree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let i of iterTree(theTree)){
	console.log(i)
}

/**
 * yield*遍历完全二叉树
 */

function Tree()