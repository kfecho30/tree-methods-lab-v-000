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
  if (newNode.data === root.data) {
    return true
  }
  else if (newNode.data < root.data) {
    root = root.left
    if(root) {
      findOrAdd(root, newNode)
    } else {
      root.left = newNode
    }
  }
  else {
    root = root.right
    if(root) {
      findOrAdd(root, newNode)
    }
    else {
      root.right = newNode
    }
  }
}

function max(node) {

}

function min(tree) {

}
