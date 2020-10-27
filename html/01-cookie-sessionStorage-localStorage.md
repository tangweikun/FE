<!-- 2020-10-27 -->

### 描述一下`cookie`,`sessionStorage`,`localStorage`的区别?

> cookie 数据始终在同源的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递；sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存

> cookie 是网站为了标示用户身份而储存在用户本地终端上的数据

> cookie 数据大小不能超过 4k；sessionStorage 和 localStorage 数据大小可以达到 5M 或更大

> localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage 数据在当前浏览器窗口关闭后自动删除；cookie 设置的 cookie 过期之前一直有效，即使关闭窗口或者浏览器关闭

> sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；localStorage、cookie 在所有同源窗口中都是共享的
