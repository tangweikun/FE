[HTTP1.0、HTTP1.1 和 HTTP2 的区别](https://juejin.im/entry/5981c5df518825359a2b9476)

### HTTP2 和 HTTP1 有什么区别

#### 相对于 HTTP1.0，HTTP1.1 的优化

- 缓存处理：多了 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等缓存信息（HTTP1.0 If-Modified-Since,Expires）
- 带宽优化及网络连接的使用
- 错误通知的管理
- Host 头处理
- 长连接： HTTP1.1 中默认开启 Connection： keep-alive，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。

#### 相对于 HTTP1.1，HTTP2 的优化

- HTTP2 支持二进制传送（实现方便且健壮），HTTP1.x 是字符串传送
- HTTP2 支持多路复用
- HTTP2 采用 HPACK 压缩算法压缩头部，减小了传输的体积
- HTTP2 支持服务端推送
