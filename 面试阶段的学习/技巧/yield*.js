/**
 * 使用yield*取出嵌套数组的所有成员
 */

function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let value of tree) {
            yield * iterTree(value);
        }
    } else {
        yield tree;
    }
}

const theTree = ['a', ['b', 'c'],
    ['d', 'e']
];

for (let i of iterTree(theTree)) {
    console.log(i)
}

/**
 * yield*遍历完全二叉树
 */

function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

function* inorder(t) {
    if (t) {
        yield * inorder(t.left);
        yield t.label;
        yield * inorder(t.right);
    }
}

function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    else return new Tree(make(array[0]), array[1], make(array[2]));
}

var tree = make([
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
]);
var array = []
for (var node of inorder(tree)) {
    array.push(node);
}
console.log(array)
