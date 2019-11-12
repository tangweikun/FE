function traversal(node) {
  //对node的处理
  if (node && node.nodeType === 1) {
    console.log(node.tagName);
  }

  const childNodes = node.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    const item = childNodes[i];
    if (item.nodeType === 1) {
      //递归先序遍历子节点
      traversal(item);
    }
  }
}

function traversal2(node) {
  const stack = [];
  stack.push(node);
  while (stack.length > 0) {
    const elem = stack.pop();
    if (elem && elem.nodeType === 1) {
      console.log(elem.tagName);

      const children = elem.children;
      const len = children.length;
      for (let i = 0; i < len; i++) {
        stack.push(children[i]);
      }
    }
  }
}
