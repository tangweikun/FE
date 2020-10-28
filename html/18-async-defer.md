<!-- 2020-10-27 -->

### 简述`<script> <script async> <script defer>`的区别?

> 没有 defer 或 async，把 JS 文件加载完成并执行后，再加载页面其它文档内容。

> 有 async，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）但 JS 文件一旦加载完成就立即执行，不管其他内容有没有加载或解析，执行的时候其它页面内容暂停加载

> 有 defer，加载 JS 文件的时候可以同时加载页面其它内容，（加载时是异步同时进行）JS 文件加载完成后会延迟等待其他内容加载或解析完成后才会执行

![async vs defer](https://twk-public.oss-cn-beijing.aliyuncs.com/async-vs-defer-attributes.png)
