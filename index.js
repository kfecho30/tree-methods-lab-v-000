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
    if(root.left) {
      return findOrAdd(root.left, newNode)
    } else {
      return root.left = newNode
    }
  }
  else {
    if(root.right) {
      return findOrAdd(root.right, newNode)
    }
    else {
      return root.right = newNode
    }
  }
}

function max(node) {
  if(node.right){
    return max(node.right)
  } else {
    return node;
  }
}

function min(node) {
 node.left ? return min(node.left) : return node
}
