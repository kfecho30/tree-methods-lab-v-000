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
  if (current.data === root.data) {
    return true
  } else if (newNode.data < root.data) {
    current = current.left
    if(current) {
      findOrAdd(current, newNode)
    } else {
      root.left = newNode
    }
  } else {
    current = current.right
    if(current) {
      findOrAdd(current, newNode)
    }
    else {
      root.right = newNode
    }
  }
}

function max(tree) {

}

function min(tree) {

}
