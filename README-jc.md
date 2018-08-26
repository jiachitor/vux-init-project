#### 关于路由配置

> 参考 /Volumes/Transcend/development/githubDevelopment/vux-demo/src/demo_list.json文件。
具体转化相关的代码在 /Volumes/Transcend/development/githubDevelopment/vux-demo/build/vux-config.js 中。

会发现两种方式：

1、 方式-， 如： "Home#/"， "Demo#/demo"， 那么会转化为：

```
{
    path: '/',
    component: () => import('./pages/Home.vue').then(m => m.default)
    })
},
{
    path: '/demo',
    component: () => import('./pages/Demo.vue').then(m => m.default)
    })
}
```

也就是说会按照‘#’拆分为两部分， 第一部分为模块名称，默认指向 pages, 第二部分为 路由path。
体现着URL上就是：http://0.0.0.0:8080/#/demo。

2. 方式二， 如 "Demo", "Alert", "Actionsheet" 等， 那么会转化为：
```
{
    path: '/component/demo',
    component: () => import('./pages/Demo.vue').then(m => m.default)
    })
},
{
    path: '/component/alert',
    component: () => import('./pages/Alert.vue').then(m => m.default)
    })
},
{
    path: '/component/actionsheet',
    component: () => import('./pages/Actionsheet.vue').then(m => m.default)
    })
}
```
体现着URL上就是：http://0.0.0.0:8080/#/component/alert
