class Routers {
  constructor() {
    this.routes = {}; // 储存hash与callback键值对
    this.currentUrl = ''; // 当前hash
    this.history = []; // 记录出现过的hash
    this.currentIndex = this.history.length - 1; // 作为指针,默认指向this.history的末尾,根据后退前进指向history中不同的hash
    this.refresh = this.refresh.bind(this);
    this.backOff = this.backOff.bind(this);

    this.isBack = false; // 默认不是后退操作
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback || function () {};
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    if (!this.isBack) {
      // 如果不是后退操作,且当前指针小于数组总长度,直接截取指针之前的部分储存下来
      // 此操作来避免当点击后退按钮之后,再进行正常跳转,指针会停留在原地,而数组添加新hash路由
      // 避免再次造成指针的不匹配,我们直接截取指针之前的数组
      // 此操作同时与浏览器自带后退功能的行为保持一致
      if (this.currentIndex < this.history.length - 1) {
        this.history = this.history.slice(0, this.currentIndex + 1);
      }

      this.history.push(this.currentUrl);
      this.currentIndex++;
    }

    this.routes[this.currentUrl]();
    console.log('指针:', this.currentIndex, 'history:', this.history);
    this.isBack = false;
  }

  // 后退功能
  backOff() {
    this.isBack = true; // 后退操作设置为true
    this.currentIndex <= 0
      ? (this.currentIndex = 0)
      : (this.currentIndex = this.currentIndex - 1);
    location.hash = `#${this.history[this.currentIndex]}`;
    this.routes[this.history[this.currentIndex]]();
  }
}
