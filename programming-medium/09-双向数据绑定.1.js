// 极简双向绑定
let obj = {};
let input = document.getElementById("input");
let span = document.getElementById("span");
Object.defineProperty(obj, "text", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("获取数据了");
  },
  set(newVal) {
    console.log("数据更新了");
    input.value = newVal;
    span.innerHTML = newVal;
  }
});

input.addEventListener("keyup", function(e) {
  obj.text = e.target.value;
});
