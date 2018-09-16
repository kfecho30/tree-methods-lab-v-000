function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(root, newNode){
  let current = root;
  if (current === newNode) {
    return true
  }
}

function max(tree) {

}

function min(tree) {

}
