## 命令（Command）菜单

按 `Cmd + Shift + P`（如果使用 Windows，则按 `Ctrl + Shift + P`）打开“命令”菜单。

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1d5c4275?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 截图

- `Capture area screenshot` 自定义截图
- `Capture full size screenshot` 全屏幕截图
- `Capture screenshot` 可见区域截图
- `Capture node screenshot` 截取特定节点

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1d8cd947?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1c3c6a34?imageslim)

## 在控制台中使用上次操作的值

使用 `$_` 可以引用在控制台执行的前一步操作的返回值
![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a25f05d88?imageslim)

## 重新发起 xhr 请求

在平时和后端联调时，我们用的最多的可能就是 `Network` 面板了。但是每次想重新查看一个请求，我们往往都是通过刷新页面、点击按钮等方式去触发 `xhr` 请求，这种方式有时显得会比较麻烦，我们可以通过 google 提供的 `Replay XHR` 的方式去发起一条新的请求，这样对于我们开发效率的提升是有所帮助的。
![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a510e2d22?imageslim)

## 编辑页面上的任何文本

在控制台输入`document.body.contentEditable=true`或者`document.designMode = 'on'`就可以实现对网页的编辑了。

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a55292857?imageslim)

## 在低端设备和弱网情况下进行测试

我们平时开发一般都是在办公室（wifi 网速加快），而且设备一般都是市面上较新的。但是产品的研发和推广，一定要考虑低设备人群和弱网的情况。
在 Chrome DevTools 中可以轻松调节 CPU 功能和网络速度。这样，我们就可以测试 Web 应用程序性能并进行相应优化。
具体打开方式是：在 Chrome DevTools 中通过 `CMD/Ctrl + Shift + p` 打开命令菜单。然后输入 `Show Performance` 打开性能面板。

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a95bc8ece?imageslim)

## 将图片复制为数据 URI

打开方式

- 选择 Network 面板
- 在资源面板中选择 Img
- 右键单击将其复制为数据 URI（已编码为 base 64）

![](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b51195416?imageslim)

## 在元素面板中展开所有的子节点

有时候，你很想去查看 DOM 的层级关系，也就是子元素的包含关系，一个一个的去点击级联的 ▶ 按钮太慢了，不如使用右击节点后的 `expand recursively` 命令

![](https://user-gold-cdn.xitu.io/2020/7/12/17341b9ddccc7295?imageslim)

## 不想请求某个接口

![](https://user-gold-cdn.xitu.io/2020/7/12/17341b9e821df45f?imageslim)

## 复制 response

![](https://user-gold-cdn.xitu.io/2018/5/11/1634e35c4f2022e8?imageslim)

## Show CSS Overview

![](https://umaar.com/assets/images/dev-tips/css-overview-improved.gif)
