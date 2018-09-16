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
  if (current.data === newNode.data) {
    return true
  } else if (newNode < current) {
    current = current.left
  } else {

  }
}

function max(tree) {

}

function min(tree) {

}
