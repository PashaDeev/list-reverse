const list = {
  '0': {
    value: 0,
    next: 3
  },
  '3': {
    value: 1,
    next: 9
  },
  '9': {
    value: 2,
    next: 15
  },
  '15': {
    value: 3
  }
};

const reverseList = (list, curr = 0, queue = []) => {
  const currentElem = list[curr];
  queue.unshift(currentElem);
  if (currentElem.next) {
    return reverseList(list, currentElem.next, queue)
  }
  return queue;
};

console.log(`-------------------------`);
console.log(`result`, reverseList(list));
console.log(`-------------------------`);
