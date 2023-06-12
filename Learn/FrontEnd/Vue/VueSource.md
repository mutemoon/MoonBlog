# Vue3源码解析

## Proxy

Proxy 是在 ES6 中才被标准化的。

**官方解释**

> Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

**target**

需要被代理的对象，它可以是任何类型的对象，比如数组、函数等等，注意不能是基础数据类型。

示例代码：


```js
<script>
  let obj = {
    name: '小猪课堂',
    age: 23
  }
  let p = new Proxy(obj, handler);
</script>
```

handler:

它是一个对象，该对象的属性通常都是一些函数，handler 对象中的这些函数也就是我们的处理器函数，主要定义我们在代理对象后的拦截或者自定义的行为。handler 对象的的属性大概有下面这些，具体使用方法我们在后面章节详解：

handler.apply()
handler.construct()
handler.defineProperty()
handler.deleteProperty()
handler.get()
handler.getOwnPropertyDescriptor()
handler.getPrototypeOf()
handler.has()
handler.isExtensible()
handler.ownKeys()
handler.preventExtensions()
handler.set()
handler.setPrototypeOf()