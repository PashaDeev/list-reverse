const list = {
  v: 0,
  next: {
    v: 1,
    next: {
      v: 2,
      next: {
        v: 3
      }
    }
  }
};

const reverseList = (node, next = null, newNode = {}) => {
  newNode.v = node.v;
  newNode.next = next;

  if (node.next) {
    return reverseList(node.next, newNode)
  }
  return newNode;
};

console.log(`-------------------------`);
console.log(`result`, reverseList(list));
console.log(`-------------------------`);
