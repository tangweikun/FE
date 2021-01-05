{
  /* <ul id="target">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul> */
}

// 2020-01-05

function foo() {
  const target = document.getElementById('target');
  const frag = document.createDocumentFragment();

  for (let i = target.children.length - 1; i >= 0; i--) {
    frag.appendChild(target.children[i]);
  }

  target.appendChild(frag);
}
