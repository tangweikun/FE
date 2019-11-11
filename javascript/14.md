>     [1, NaN, NaN]

> callback 函数自动传入三个参数：currentValue；index；array。map 方法的 callback 函数——parseInt 方法，在没有指定传入的参数的情况下，将自动接收三个参数。在遍历过程中，parseInt 的调用情况如下：

        parseInt("1", 0, ["1", "2", "3"])
        parseInt("2", 1, ["1", "2", "3"])
        parseInt("3", 2, ["1", "2", "3"])

> parseInt 方法接收两个参数。第三个参数["1", "2", "3"]将被忽略。parseInt 方法将会通过以下方式被调用：

        parseInt("1", 0)
        parseInt("2", 1)
        parseInt("3", 2)

> parseInt 的第二个参数 radix 为 0 时，ECMAScript5 将 string 作为十进制数字的字符串解析；
> parseInt 的第二个参数 radix 为 1 时，解析结果为 NaN；
> parseInt 的第二个参数 radix 在 2—36 之间时，如果 string 参数的第一个字符（除空白以外），不属于 radix 指定进制下的字符，解析结果为 NaN
