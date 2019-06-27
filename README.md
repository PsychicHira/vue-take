前言

通过自学前端，发现坑与坑之间环环相扣，填了一个个的坑到现在，决定做一个外卖项目。技术不经过实践，无法检验是否扎实，通过一个比较完整的项目，也是应聘拿到一个前端工作的底气支柱。

后台是从网上down下来的，接口里面有一部分，另一部分是用mock模拟。

这一份非常详细的从头到尾的笔记是自己一个一个字敲出来的，碰到的各种坑，以及如何解决的，自学的过程，没有依赖任何人（身边也没有前端相关的人），都是通过搜索引擎去解决每一个坑。



项目预览：

一个仿外卖的vue单页应用程序Web App（spa），包含常见的功能

![img](https://github.com/PsychicHira/vue-take/blob/master/img/1.png)

![img](https://github.com/PsychicHira/vue-take/blob/master/img/2.png)

![img](https://github.com/PsychicHira/vue-take/blob/master/img/3.png)



# 技术选型与项目结构

## 技术选型

![img](https://github.com/PsychicHira/vue-take/blob/master/img/4.png)



## 路由

![img](https://github.com/PsychicHira/vue-take/blob/master/img/5.png)



## 项目结构

vue-take

![img](https://github.com/PsychicHira/vue-take/blob/master/img/6.png)



# 项目一些准备与说明

## 项目测试与打包发布

1. 复制gshop-client_blank文件到项目文件（vue-take）下
2. 修改gshop-client_blank文件名称为gshop-client
3. 将gshop-client中的package.json里的"name": "gshop"改为自己的项目名称vue-take
4. 在此文件夹中的config文件夹中修改index.js里的autoOpenBrowser属性改为true，这样在运行时就会自动打开网页

开发环境打包运行

在gshop-client路径的cmd命令行中运行npm run dev打包

生产环境打包运行

1. 在gshop-client路径的cmd命令行中运行npm run build打包，然后文件目录会生成一个dist文件夹，就是打包压缩可以上线的文件
2. 下载serve（应该是个包），npm install -g serve
3. 在gshop-client文件夹中运行serve dist，就可以访问5000端口（这里报错了，页面显示找不到path，因为端口被占用，把其它东西都关了即可）



## 关于字体图标

1. 阿里巴巴去加入购物车（svg格式）
2. 在index.html中添加link标签
3. 把购物车中的整体链接粘贴到link标签中
4. 通过类名来使用
5. 要使用2个类名，第一个是icon-font好像，第二个就是字体的类名



## 创建git相关

1. 在项目目录中使用git bash 初始化git

git init 

1. 设置全局签名

git config --global user.name hira_glb git config --global user.email 306444399@qq.com  //查看签名使用命令    cat ~/.gitconfig 

1. 将目前的项目初始放进git暂存区、本地库

```
git add . //存入暂存区 

git commit -m "初始化项目结构" //存入本底库 
```

1. 创建git分支，名为dev，并移动到分支处进行开发

git branch dev //查看分支 git branch -v 绿色代表当前分支 git checkout dev 

1. 创建SHH

$ ssh-keygen -t rsa -C warden_spirit@163.com //QQ邮箱不能用 文件名和密码都是Aa5604551 7v+iujB+XcNymkI86GkEuZ/MK1oh0qMwWxEdt37y+Oo   （不知道做什么用，先复制）  //     这里碰见坑，原因是要把c盘用户里面的.ssh文件夹全部删除，重新生成，不然连接不上 //     在生成ssh的时候，文件名密码之类的，全部enter，尤其不能设置文件名，坑死人个b了 



1. 目录中会生成Aa5604551.pub，把内容粘贴到github中，关联SSH

2. 创建git远程库，在github中new project，名为vue-take

3. 创建远程地址别名

   ```
   git remote add vue-take git@github.com:PsychicHira/vue-take.git
   ```

4. 把项目推送到git中

   ```
   git push vue-take master 
   ```



# 项目开始

## 安装stylus

```
cnpm install stylus -D
cnpm install stylus-loader -D
```



- 测试

把App.vue文件的style里面加上 lang="stylus" ，启动npm run dev ，完美运行，我tm是天才



根据目录结构创建底部和路由的vue文件



## 公共样式文件(共用样式)

1. 删除src文件中的东西，按项目目录重新创建
2. 在common中创建stylus文件夹，创建mixins.styl，把预设的基本样式复制进去
3. 在vue模版中，给style增加  lang="stylus" rel="stylesheet/stylus"
4. 在static文件夹中创建style文件夹，创建reset.css



## 创建基本文件让项目可以运行

1. 创建App.vue和main.js

> *遇到问题*：
>
> > ​	此时遇到坑，npm run dev 启动不了，提示没有没有stylus模块，这个时候cnpm i，提示包都装全了
> >
> > 再次启动，页面提示Cannot GET /
> >
> > 搜索:
> >
> > *解决问题：*
> >
> > 最后发现了是
> >
> > ```
> > <style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus"> 
> >      
> >  </style>
> > ```
> >
> > 的问题，缺少loader，先删除之

1. 成功启动了项目（要先安装stylus）



## index.html的移动端配置

- viewport

  ```html
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
  ```

- 解决0.3s延时

在head标签上面添加

```javascript
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>

<script>
	if ('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
		}, false);
	}
	if(!window.Promise) {
		document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-		promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
	}
</script>
```



## 路由搭建

### 思路重点（自己需要感受的逻辑）

1. main.js 是主入口文件
2. App.vue 文件作为大的外层架子，所有的内容都在app.vue 上面呈现。
3. main.js 的 el 控制 index.html
4. main.js 引入 App.vue 文件，实例化一个Vue
5. 通过 render ，让 App.vue 的内容 ，全替换掉 index.html 里 ID 为 app 的 div 区域
6. App.vue 里面，自然要把路由的 view 放进去了



### 安装

```
npm install vue-router
```

### 引入（在main.js）

```javascript
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/router.js'

tips:
//挂载到实例上
//一旦配置了router
//就多了2个标签和2个属性
//router-view router-link
//$route   $router      
//怎么用法要复习
```

### 配置路由

（在 router.js 中引入路由模版，很简单就不说了）

### App.vue

分析：

1. 页面由2个部分组成，上面是路由，下面的底部导航
2. 引入底部vue文件，挂载到conponents属性中

> tips
>
> 如果初始化的时候已经选了严格模式那应该怎么办，这样难不倒我啦！
>
> 直接把config/index.js里面的dev属性，useEslint设置为false



## 组件FooterGuide.vue

这是App底部的导航，使用mui框架

1. 安装mint-ui

   ```javascript
   cnpm install mint-ui -S
   ```

2. 在main.js中引入全部组件

   ```javascript
   // 引入全部组件
   import Vue from 'vue';
   import Mint from 'mint-ui';
   Vue.use(Mint);
   ```

3. 发现了引用的东西，没有样式，就很奇怪，查了以前的项目和百度，要在引入mint-ui之前引入样式

4. 引入的时候发现，node_modules 文件夹中有的文件夹带下划线 _ 有的不带，百度一下，说带下划线的是cnpm装的，建议能npm的还是用npm

5. 引入样式后，成功显示

6. 然后把mint-ui的html复制到 FooterGuide.vue 里，同时把a标签换成 router-link ，因为要点击控制router ，恰好a标签的更改也不会产生样式的变化

7. 给router.js点击产生的类取个别名，控制点击样式（router-link被点击自动添加进标签的类）

   ```javascript
   linkActiveClass:'mui-active'
   ```

8. 完成，回头修改图标和样式

## 切图——4个路由页面的

视频给了写好的，直接复制结构和样式，可能目的是逻辑，而不是这些基本功

Msite.vue

Order.vue

Search.vue

Profile.vue



## 准备icon

1. 在阿里巴巴icon平台选好需要的icon

2. 生成链接，在index.html引入

3. 以类名的方式添加，如

   ```html
   <i class="iconfont icon-canyin"></i>
   ```

## 组件HeadTop.vue

由于顶部导航的内容有变化，可以看作和路由是一体的，所以可以提取成一个模块，提高复用性

1. 新建一个 HeadTop.vue
2. 把 head 标签结构复制进去
3. 把关于 head 的样式复制进去
4. 让其它路由页面引入 HeadTop.vue 



## 使用slot插槽（vue内置语法）

HeadTop.vue 这个头部导航，根据每个路由不同，内容也变化，所以单独提取出来以后，要通过组件之间传值的方式，把父组件的title传给 HeadTop.vue。

如：

 Order.vue

```javascript
<template>
      <HeaderTop :title="title">
          <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
          </span>

          <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
          </span>

</HeaderTop> 
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    data(){
      return {
        title:'订单列表'
      }
    },
    components:{
      HeaderTop
    }
  }
</script>
```

HeadTop.vue

```javascript
<template>
  <header class="header">
    <slot name="left"></slot>
    
    <span class="header_title">
    <span class="header_title_text ellipsis"> {{title}} </span>
    </span>
    
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props:['title']
  }
</script>
```



## 使用swiper插件（首页轮播滑动插件）

被官方文档使用方法坑死了，傻逼玩意

官方文档的东西不一定百分百正确，要自行斟酌

1. 安装

   ```
   npm install swiper
   ```

2. 在需要使用的页面（Msite.vue）引入

   ```javascript
   import Swiper from 'swiper'
   import 'swiper/dist/css/swiper.min.css'
   ```

3. html结构如下

   - 在写页面结构的时候，类名已经按这样写完毕，所以Msite不要动了

   ```html
   <div class="swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide">Slide 1</div>
           <div class="swiper-slide">Slide 2</div>
           <div class="swiper-slide">Slide 3</div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       
       <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
       
       <!-- 如果需要滚动条 -->
       <div class="swiper-scrollbar"></div>
   </div>
   ```

4. 在页面（Msite.vue）添加一个钩子函数，初始化Swiper

   ```javascript
   mounted(){
     new Swiper ('.swiper-container', {
       loop: true,
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination',
       }
     })
   }
   ```

## 组件ShopList.vue（把首页的 ShopList 商家列表单独提取出来）

1. 新建文件，在components新建ShopList，（和HeaderTop一样，单独弄出来组件）
2. 把html标签和样式复制过去
3. 在Msite.vue中引入 ShopList.vue ，并注册成组件，在模版中使用

> tips
>
> - 首页滑动到了一个位置，点击其它路由，锚点还在那个高度
> - 解决：给路由页面的模版内的外层容器添加，overflow：hidden

## 后台

### 启动后台

后台是基于node.js开发的，现成的

1. vue-take-serve文件夹（服务器代码文件夹），进入里面，运行命令行

   ```
   npm start 
   ```

2. 如何查看端口号：里面的bin文件夹有个www文件，里面有端口号，是4000

### postman

1. 下载安装不多说
2. 注册登陆
3. 创建调试集合名字vue-take

但是本次不需要，直接导入

> tips
>
> - Vue.use() 是注册到全局组件中
>
> - js里面， 只有function的东西会调用的时候才执行，其它都是创建的时候立即执行，立即执行的比如：
>
>   ```
>   const fs = require('fs')
>   new Promise()
>   ```



## axios

1. 安装

   ```
   npm install axios
   ```

2. 引入（在 main.js 中）

   ```js
   import axios from 'axios'
   ```

3. 在项目中测试接口，创建一个按钮，点击触发事件，提示不能跨域

   ```js
   methods:{
     g:function(){
       this.$axios.get('./api/position/40.10038,116.36120')
         .then(function (response) {
           console.log(response.data);
         })
         .catch(function (error) {
           console.log(error);
         })
     }
   }
   ```

4. 解决跨域

   - 在config的index.js配置文件的dev中，添加proxyTable，使用api替代服务器地址	

   - 修改 index.js配置

5. 然后在调用接口的时候直接使用/api，后面接上接口的其他路径信息，就可以，如：

   ```
   '/api/position/40.10038,116.36120'
   ```

## Vuex

安装

```
npm install --save vuex
```

> tips：
>
> 安装完东西，控制台总是报异常
>
>
>
> 搜索解决办法：
>
> ​	团队作战，ios提交后，Android更新代码，便出现了这个异常；
>
> ​	全局搜索，果然有这个依赖在package.json中；
>
> ​	资料显示，fsevents是mac端使用，window可忽略。
>
> ​	所以注释掉代码，后重新npm install，依然报错；
>
> ​	最后检查，node_modules文件中依然存在fsevents文件，删掉之后，重跑一遍恢复正常！
>
> ​	总结
>
> ​	删除插件最好的方法也是最正确的方法 就是直接执行命令 npm uninstall xxx;
>
> ​	如果手动注释代码中相关插件的配置，还需要删除node_modules已存在的文件，才能彻底从项目中移除。
>
> 使用  npm uninstall fsevents 了一下 

### 在目录结构下的store，创建vuex仓库



### 如何将 vuex 在项目中使用

1. 1. 在 store 中的 index.js 引入相关模块

      ```js
      //index.js
      import Vue from 'vue'
      import Vuex from 'vuex'
      Vue.use(Vuex)
      ```

   2. 再导出一个vuex实例

      ```js
      //index.js
      export default new Vuex.Store({})
      ```

   3. 然后在 main.js 主入口中引入vuex主文件

      ```js
      //main.js
      import store from './store/index.js'
      ```

   4. 挂载store

      ```js
      //main.js
      new Vue({
        el: '#app',
        render: c => c(App),
        router: router,
        store
      })
      ```

### 在vuex核心文件里，写相应的内容

1. index.js（把vuex模块分开写，然后引入主文件里）

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   Vue.use(Vuex)
   
   import state from './state'
   import mutations from './mutations'
   import getters from './getters'
   import actions from './actions'
   
   export default new Vuex.Store({
     state,
     mutations,
     getters,
     actions,
   })
   ```

2. state.js

   ```js
   export default {
     name:'laoliu',
     latitude: 40.10038, // 纬度
     longitude: 116.36867, // 经度
     address: {}, // 地址信息对象
     categorys: [], // 分类数组
     shops: [], // 商家数组
   }
   ```

3. mutations-types.js

   ```js
   export const RECEIVE_ADDRESS = 'receive_address' // 接收地址信息
   export const RECEIVE_CATEGORYS = 'receive_categorys' // 接收分类数组
   export const RECEIVE_SHOPS = 'receive_shops' // 接收商家数组
   ```

4. mutations.js  （mutation 的主要用来处理state里面的数据，交互异步的东西给actions做）

   ```js
   import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-types'
   
   export default {
     [RECEIVE_ADDRESS](state,address){
       state.address = address
     },
     [RECEIVE_CATEGORYS](state,categorys){
       state.categorys = categorys
     },
     [RECEIVE_SHOPS](state,shops){
       state.shops = shops
     }
   }
   ```

5. actions.js

> tips:
>
> 浏览器跨域的一种方式：配置代理。
>
> 浏览器有一个自带的代理服务器，监听8080本地端口，想跨域，就修改这个代理服务器的配置，用一种“欺骗”的行为达到跨域的目的

```js
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-types'
//要用到axios，这里我没有封装ajax的API，直接写了，所以要引入axios
import axios from 'axios'

export default {
  receive_address({commit}){
    //发送异步请求
      axios.get('/api/position/40.10038,116.36120')
        .then(function (response) {
          // commit(RECEIVE_ADDRESS,{})     // 狗比官网， RECEIVE_ADDRESS 这样是不要加单引号的
          commit(RECEIVE_ADDRESS,response.data)
        })
      .catch(function (error) {
        console.log(error)
      })
  },
  receive_categorys({commit}){
    axios.get('/api/index_category')
      .then(function (response) {
        commit(RECEIVE_CATEGORYS,response.data.data)
      })
      .catch(function (error) {
      console.log(error)
    })
  },
  receive_shops({commit,state}){
    axios.get('/api/shops?'+state.latitude+'&'+state.longitude)
      .then(function (response) {
        commit(RECEIVE_SHOPS,response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
```

> tips:
>
> code的意思是： code为0的时候，返回数据
>
>

## 动态渲染 ShopList.vue （商家列表）

1. 因为需要用到 Actions 里的东西，所以要引入 mapActions 来触发 Actions 里的东西

   ```js
   import {mapActions} from 'vuex'
   
     export default {
     mounted:function () {
       this.$store.dispatch('receive_shops')
     },
     computed:{
       ...mapState(['shops']),
       ...mapActions(['receive_shops'])
     }
   }
   ```

2. Actions 里的异步请求得到的值会赋给 state 里面的 shops 变量（商家数组），要用state.shops来v-for渲染到dom，所以要引入 mapState

   ```js
   import {mapState} from 'vuex'
   ```

3. 使用v-for渲染DOM



## 动态渲染 Msite.vue （轮播的导航图）

思路：

1. receive_categorys 是个数组，长度是16，轮播有2个，每个8个小导航
2. 那么需要把16个元素分成8个一组，放进一个数组中，也就是一个二维数组[ [8个],[8个] ]
3. 为什么要弄成二维数组呢？为了v-for遍历渲染dom：
4. 外层的数组来决定几个轮播，内层的数组来遍历出来每一个小导航



1. 导航大海报可以滑动并轮播，所以要用到 sweiper 插件（上面已经安装引入过了）

2. 两个轮播，每个轮播有8个小导航，也就是“分组”，vuex里state.categorys

3. 在 Msite.vue 里要用到异步的 action 来获取 categorys，所以要引入过来

   ```js
   import {mapState} from 'vuex'
   ```

4. 映射这个map

   ```js
   computed:{
   //...mapActions(['receive_categorys']),      //这里应该是多余的，不注释掉，receive_categorys会触发2次（如果Actions里给这个方法打印一个123，这行也映射，就会执行2次）
     ...mapState(['categorys']),
   }	
   ```

5. 然后在生命周期 mounted 中分发 actions 里面的 receive_categorys 获取分组信息

   ```js
   mounted:function () {
     this.$store.dispatch('receive_categorys')
   }
   ```

6. 设定几个变量

   ```js
   data(){
     return {
       title:'好吃外卖',
       categorysArr:[],    //来接收vuex里面的 categorys 分组数组，好拿来计算，
       categorysOut:[],     //外层数组，来决定几个轮播
       categorysIn:[],      //内层数组，来决定每个轮播几个导航
       baseImg:'http://localhost:4000'    
     }
   }
   ```

7. 在 methods 中写一个方法，实现上面的思路，当 actions 分发 receive_categorys 异步获取到数据，赋值给state里面的 categorys ，categorys 上面被映射到本组件中了，所以categorys 存在变化，那么就可以用watch监听 categorys 。等在 watch 中监听到categorys有变化，就触发methods里面的 categorysArr() ，

> 注意：为什么不写在computed里，因为 computed 里面有data中的一些变量，会自动触发方法，当触发的时候，categorysArr还没有拿到值，异步获取的，拿到的时候，页面早已加载完了，所以会报错

```js
methods:{
  changeArr:function () {
    this.categorysArr.forEach((item)=> {
      if(this.categorysIn.length<8){
        this.categorysIn.push(item)
      }else{
        this.categorysOut.push(this.categorysIn)
        this.categorysIn=[]
        this.categorysIn.push(item)
      }
    })
    this.categorysOut.push(this.categorysIn)
  }
}
```



1. watch监听categorys：

   ```js
   watch:{
     categorys(){
       this.categorysArr = this.categorys
       this.changeArr()   //这里是把一维数组变成二维数组的方法
       this.$nextTick(()=>{
         new Swiper ('.swiper-container', {
           loop: true,
           // 如果需要分页器
           pagination: {
             el: '.swiper-pagination',
           }
         })
       })
     }
   }
   ```

2. v-for渲染dom，略，但是有个细节：关于img的src属性的语法

   ```html
   <div class="food_container">
     <!--<img src="./img/nav/1.jpg">-->
     <!--//这里是个坑，img的src前面要加bind，里面才能写表达式，而且，v-for遍历的属性不能加 {{}} 这个大括号-->
     <img :src="baseImg+category.image_url">
   </div>
   ```



## 补充加载中的提示图svg，提高用户体验

##  

## 解决 ShopList.vue 商家列表中的星星消失问题

图片路径样式有问题，从源码复制过来改路径修复成功



## 组件Star.vue——抽离star模块

不多说，很简单

> tips：关于stylus的&
>
> &，这是个新鲜东西。它是父级的引用
>
> form表单内，点击了任何按钮，都默认提交了表单



## 根据给star模块传的值，来动态生成星星

思路：

1. 父组件给Star组件传值，传2个，一个是评价分数，Star组件拿到后，渲染出全星、半星、空星，第二个是尺寸，Star组件里的星星，有2X和3X图区别，所以要给定尺寸
2. Star组件接收父组件的值
3. 动态生成全星、半星、空星
4. - 把rating计算成一个数组
   - 整数是全星，大于0.5才显示半星，5减去整数是空星
   - 把结果存入一个数组
   - 通过数组v-for遍历出来对应的on half off
5. 计算的思路：
6. - 判断rating.floor（）是否小大于1
   - 如果大于1，循环创建“on”，push进数组
   - 否则，判断是否有half
   - 最后的余数，生成“off”进数组



Star.vue

```js
props: ['rating','size']
```

ShopList.vue 给star组件要传2个值，一个是分数，一个是size，因为star模块里面的星星img有很多种尺寸，ShopList用的是24

```js
//注册Star组件
components:{
  Star
}
//使用组件并绑定2个值（父组件向子组件传值）
<Star :rating="item.rating" :size="24"></Star>
```

> tips：
>
> 这么写是错误的，绑定的属性，如果有变量，不能加引号，日了狗：
>
> ```html
> <Star :rating="｛｛item.rating｝｝" :size="24"></Star>
> ```
>
>

> 始终报错：
>
> ```js
>     //模版
>     <span :class="'star-item '+xx" v-for="xx in starsArr"></span>
>     
>     //代码
>     computed:{
>       creatStarsArr(){
> //        this.score=this.rating
> //        let num= this.score.floor()
> //        if(num>=1){
> //          for(let i=0;i<=num;i++){
> //            this.starsArr.push('on')
> //          }
> //        }
> //        if(this.score*10-num*10>=5){
> //          this.starsArr.push('half')
> //        }
> //        if(5-this.starsArr.length>0){
> //          for(let i=0;i<=5-this.starsArr.length;i++){
> //            this.starsArr.push('off')
> //          }
> //        }
>         this.starsArr.push('on')    //push不进去
>       }
> ```
>
> 报错有一个原因，就是floor()找不到，自己sb写错了用法，正确的是：
>
> ```js
> Math.floor(this.score)
> ```
>
> 仍然错误，于是发现，自己对computed的理解不够
>
> 视频中的思路是，v-for遍历是主参数是computed创建的函数名，在此函数中return一个数组，作为主参数的内容来遍历
>
> 而我用自己的思路，用mounted来实现数据计算，把结果给data中声明的一个数组，用此数组来v-for遍历
>
> ```js
> data(){
>   return{
>     score:0,
>     starsArr:[]
>   }
> }
> 
> mounted:function () {
>   let starsArr=[]
>     this.score=this.rating
>     let num= Math.floor(this.score)
>     console.log(num)
>     if(num>=1){
>       for(let i=0;i<num;i++){
>         this.starsArr.push('on')
>       }
>     }
>     if(this.score*10-num*10>=5){
>       this.starsArr.push('half')
>     }
>     if(5-this.starsArr.length>0){
>       for(let i=0;i<=5-this.starsArr.length;i++){
>         this.starsArr.push('off')
>       }
>     }
> }
> ```



## Login.vue

> tips
>
> - 要了解 $router 相关的常用方法，如$router.back() 

1. 新建文件，Login.vue页面

2. 把html结构和样式复制进去

3. 制作一个左上角回退的功能

   ```html
   给左上角的<增加一个点击 $router.back() 回退方法
   
   <a href="javascript:" class="go_back" @click="$router.back()">
     <i class="iconfont icon-jiantou2"><</i>
   </a>
   ```

4. 制作一个在Login页面底部导航不显示的功能

   - 配置路由的时候，加上mata属性

     ```js
     routes: [
       {path: '/', redirect: '/Msite', mata: {show: true}},
       {path: '/Msite', component: Msite, mata: {show: true}},
       {path: '/Search', component: Search, mata: {show: true}},
       {path: '/Order', component: Order, mata: {show: true}},
       {path: '/Profile', component: Profile, mata: {show: true}},
       {path: '/Login', component: Login, mata: {show: false}}
     ]
     ```

   - 在App.vue 中，给底部导航组件，添加v-show，属性为$router.meta设置的布尔值

   - 这样一来，在 FooterGuide 组件中，有v-show来控制底部导航组件是否显示

     ```html
     <FooterGuide v-show="$route.meta.show"></FooterGuide>
     ```

##  

### 切换登陆方式

显示哪种登录方式是用class中的“ON”来控制的

思路：

1. 使用true/flase来控制ON的显示和隐藏

   ```js
   //data中省名msg:true
   :class="{on:msg}"   
   :class="{on:!msg}"
   ```

2. 短信登陆界面ON，密码界面登陆的就取反

   ```js
   <a href="javascript:;" :class="{on:msg}" @click="msg=!msg">短信登录</a>
   <a href="javascript:;" :class="{on:!msg}" @click="msg=!msg">密码登录</a>
   ```

3. 同样，下面的关联div也是如此，使用同一个flag就可以了



手机号验证

1. 给手机号input添加一个v-model，变量为phone（为什么呢？因为接口文档的里面是phone，这样后面提交请求的服务器验证手机号是否存在时方便）

   ```js
   <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
   ```

2. 如果手机号输入格式正确，那么获取验证码的颜色由灰变为黑，

   - 此button的文字颜色是否变化，是根据变量phone来决定，所以此button要有一个计算属性
   - 颜色变化用一个类来表示
   - 那么就要绑定一个class，内容以对象的形式来添加

> tips：一个模版中能写的变量只有3种：promie、data、computed。什么叫模版中能写的变量呢？就是template里面的 {{ }} 大括号里的内容

```js
//绑定一个class，内容以对象的形势来添加
<button disabled="disabled" class="get_verification" :class="{color:phoneNum}">获取验证码</button>
//此button的文字颜色是否变化，是根据变量phone来决定，所以此button要有一个计算属性
computed:{
  phoneNum(){
    return /^1\d{10}$/.test(this.phone)
  }
}
//颜色变化用一个类来表示
.get_verification
  position absolute
  top 50%
  right 10px
  transform translateY(-50%)
  border 0
  color #ccc
  font-size 14px
  background transparent
  &.color                             //在get_verification下面增加&，表示是它的引用，也就是级别在它下面
    color black
```

1. 消除 disabled 的禁用input属性

- disabled 只能接受要么是true要么是NULL，false是无效的
- 错误写法:

```js
:disabled="{phoneNum?null:'disabled'}"
:disabled="{phoneNum?null:disabled}"
```

- 正确写法: 判断 phoneNum 验证正则的计算方法是否为true

```js
:disabled="phoneNum?null:'disabled'"
```



### 触发“获取验证码”显示，并且增加倒计时

> 如下错误的time()方法，多次点击，仍然触发多次定时器
>
> ```js
> //模版
> <button :disabled="phoneNum?null:'disabled'" class="get_verification" :class="{color:phoneNum}" @click="time()">获取验证码{{timeNum}}</button>
> //代码
> data(){
>     return{
>         timeNum:''
>     }
> },
> methods:{
>   time(){
>     if(tid){
>       clearTimeout(tid)
>     }
>     this.timeNum=this.timeMax
>     let tid = setInterval(()=> {
>       this.timeNum--
>       if(this.timeNum<=0){
>         clearInterval(tid)
>       }
>     },1000)
>   }
> }
> ```
>
> 正确的代码：
>
> tips:   0也是属于false
>
> ```js
> time(){
>     if(!this.timeNum){
>       this.timeNum = 30
>       let tid = setInterval(()=> {
>         this.timeNum--
>         if(this.timeNum<=0){
>           clearInterval(tid)
>         }
>       },1000)
>     }
> }
> ```



### 密码的显示/隐藏切换 

1. 圆球的移动
2. 开关背景的变色
3. input的type属性由tel和password切换



### 图片验证码的点击重刷新

1. 设置一个data属性，叫imgUrl，赋值为API中的验证码请求地址

   ```js
   imgUrl:'http://localhost:4000/captcha'
   ```

2. 在标签中绑定src，关联变量imgUrl

   ```js
   :src="imgUrl"
   ```

3. 给img增加点击事件，每次点击重新给imgUrl赋值

   ```js
   @click="refreshImg"
   
   refreshImg(){
     return this.imgUrl='http://localhost:4000/captcha?'
   }j
   ```

4. 每次都给imgUrl赋值，是一样的话，就不会生效，可以在后面加上？Data.now()，这样每次链接都不同，但是？后面对请求没什么影响

   ```js
   refreshImg(){
     return this.imgUrl='http://localhost:4000/captcha?'+Date.now()
   }
   ```



### 点击登陆后的弹窗验证提示

1. 在组件文件夹内创建 AlertTip 文件夹，创建 AlertTip.vue 文件

2. 把模版和样式复制进去，模版和代码部分如下

   ```js
   <template>
     <div class="alert_container">
       <section class="tip_text_container">
         <div class="tip_icon">
           <span></span>
           <span></span>
         </div>
         <p class="tip_text">{{alertText}}</p>
         <div class="confrim" @click="closeTip">确认</div>
       </section>
     </div>
   </template>
   
   <script>
     export default {
       props: {
         alertText: String
       },
       methods: {
         closeTip() {
           this.$emit('closeTip')
         }
       }
     }
   </script>
   ```

> tips：
>
> 父元素向子元素传值，如果只传字符串
>
> ```
> <div title="xxxxx">
> 
> ```
>
> 如果传变量
>
> ```
> <div :title="变量名">
> 
> ```
>
>

思路：

1. 不管短信验证码登陆还是账号密码登陆，点击登陆以后，要给 AlertTip 传一个提示信息，如：手机号错误、密码错误等
2. 在登录时要判断是哪个方式登陆，根据不同方式，内部再根据不同方式里面不同的数据，来判断是否登陆成功

实施：

1. 挂载 AlertTip 组件，使用v-show显示隐藏

   > tips:
   >
   > 不知道为什么，login.vue里面的模版，在section作为模版唯一外层盒子的情况下，在外层还有个div，还有一个class为on的属性。使用AlertTip组件在里面报错，把此div删掉，把AlertTip放置进section里面最下面就可以了
   >
   > ```js
   > <AlertTip v-show="showTip"></AlertTip>
   > 
   > data(){
   >     showTip:false
   > }
   > ```
   >
   >

2. 绑定一个属性，给  AlertTip 传值用，一会再用v-bind关联data变量，目的是父元素做判断，子元素显示判断结果登陆错误失败之类的信息

   ```html
   <AlertTip alertText="xxxx" v-show="showTip"></AlertTip>
   ```

3. 点击 button 登陆按钮，会提交form表单，因为登陆按钮是在form表单内的，需要阻止表单的提交，并且让表单提交后进入一个方法

   ```html 
   <form @submit.parent="Login">
   ```

4. 写 login 登陆验证方法

   - 需要判断的手机号、密码、用户名等用v-model双向绑定，变量名要和接口的键一样，同时在data中声明

     ```
     手机号 phone
     短信验证码 code
     账号 name
     密码 pwd
     图片验证码 captcha
     
     ```

   - 进入login方法中，判断哪种登陆方式，进行验证，用之前data中的msg属性来控制，msg为true的时候，为手机短信登陆，false的时候为账号密码登陆，所以用msg来作为if判断的条件

     ```
     login(){
       if(this.msg){
         console.log('手机短信验证码登陆')
       }else{
         console.log('账号密码登陆')
       }
     }
     
     ```

   - 手机短信登陆验证

     > 用之前验证手机号位数是否正确的函数，来当作if的条件，因为正好之前 phoneNum() 返回的是真假值
     >
     > 然而如下写报错
     >
     > ```
     > if(phoneNum()){
     >   console.log('号码')
     >   return
     > }
     > 
     > ```
     >
     > 正确写法：（调用方法也要加this，后面不用加括号）
     >
     > ```
     > if(this.phoneNum){
     >   console.log('号码')
     >   return
     > }
     > 
     > ```
     >
     >

   - 声明一个 tipText  变量，为的是将不同验证的结果传递给它，绑定到 AlertTip 组件当中去使用

     ```js
     //判断哪种登陆方式
     if(this.msg){
         
     }else{
       
     }
     -------
     //手机短信登陆方式（if(this.msg)的内层流程）
         //如果 手机号位数 不正确（使用上面判断手机号位数是否正确的函数），进入流程
     if(this.msg){
       if(!this.phoneNum){
         this.alertTipText('号码不正确')
       }else if(!/^\d{6}$/.test(this.code)){
         this.alertTipText('验证码不正确')
       }
     }else{    //如果 验证码位数 不是6位数（没有判断验证码位数的函数，所以在此写一个正则，一样的），进入流程
       if(!this.name){
         this.alertTipText('账号不正确')
       }else if(!this.pwd){
         this.alertTipText('密码不正确')
       }else if(!this.captcha){
         this.alertTipText('验证码不正确')
       }
     }
     ```

5. 把 tipText  传递给子组件

   ```js
   <AlertTip :alertText="tipText" v-show="showTip"></AlertTip>
   ```

6. Login.vue给子组件传递一个 closeTip 方法，用来让子组件关闭弹窗

   ```js
   //Login.vue
   <AlertTip :alertText="tipText" v-show="showTip" @closeTip="closeTip"></AlertTip>
   
   closeTip(){
     this.tipText = ''
     this.showTip = false
   }
   
   //AlertTip.vue
   <div class="confrim" @click="closeTip">确认</div>
   
   methods: {
     closeTip() {
       this.$emit('closeTip')
     }
   }
   ```

7. 账号密码的登陆判断和上面一样，略

### 荣联云短信平台

> tips：
>
> 当形参中有多个参数的时候，可以不用写成单独的，因为不方便记顺序，可以写成对象形式，如
>
> ```js
> function abc (a,b,c,d){
> }
> ---------------------------
> function abc ({a,b,c,d}){
> }
> ```
>
>

- 网址：www.yuntongxun.com
- 账号 306444399@qq.com
- 密码 a5604551
- 注册手机 18652176960

1. 左部导航有个测试号码，进入填写测试号码

2. 进入服务器文件夹中的短信接口文件

3. 修改其中的几个值

4. 在后台找到控制台首页，里面有开发者主账号，就可以改了

5. 后台的请求接口是

   http://localhost:4000/sendcode?phone=手机号

6. 使用postman测试成功



### 点击获取验证码，发送短信验证码请求

1. 在获取验证码的time方法中，增加axios请求

   ```js 
   import axios from 'axios'
   
   //time方法其它内容略
   axios.get('http://localhost:4000/sendcode?phone='+this.phone)
   ```

2. 给获取验证码按钮点击事件增加一个 .prevent 阻止默认事件，不然会执行整个form表单的login登陆弹窗事件

   ```
    @click.prevent="time"
   
   ```

3. API文档

4. 请求如果失败，停止计时器，并提示错误信息

> tips：
>
> - 不在data声明的变量，在方法里this.变量也可以创建变量？（是可以的）
>
> - 点击一个图片，改变其src属性：使用event事件
>
>   ```js
>   function changeSrc(event){
>       event.target.src='xxxxxxxxxxxxx'
>   }
>   ```

### 短信登陆（发送登陆请求）

> 发送请求以后，总是报错
>
>
>
> 查阅原因说是跨域问题，源代码
>
> ```js
> axios.post('http://localhost:4000/login_sms',{phone:this.phone,code:this.code}).then(function (rep) {
>   console.log(rep)
> }).catch(function (err) {
>   console.log(err)
> })
> ```
>
> 改成（之前上面有跨域配置，url都要改的，忘记了）
>
> ```js
> axios.post('http://localhost:4000/login_sms',{phone:this.phone,code:this.code}).then(function (rep) {
>   console.log(rep)
> }).catch(function (err) {
>   console.log(err)
> })
> ```
>
>

请求成功





### 账号密码登陆（后台账号是abc，密码是123，不然怎么判定是否登陆成功）

```js
axios.post('/api/login_pwd',{name:this.name,pwd:this.pwd,captcha:this.captcha})
```

增加功能：验证码登陆错误时，自动刷新验证码图片



### 登陆成功跳转路由到profile

> 代码报错
>
> ```js
> axios.post('/api/login_pwd',{name:this.name,pwd:this.pwd,captcha:this.captcha}).then(function (rep) {
>   console.log(rep.data)
>   if(rep.data.code===0){
>     this.$router.replace('/Profile')
>   }else {
> 
>   }
> }).catch(function (err) {
>   console.log(err)
> })
> ```
>
> 原因应该是this问题，改成es6写法，修正this指向问题
>
> ```js
> axios.post('/api/login_pwd',{name:this.name,pwd:this.pwd,captcha:this.captcha}).then((rep) => {
>   console.log(rep.data)
>   if(rep.data.code===0){
>     this.$router.replace('/Profile')
>   }else {
> 
>   }
> }).catch((err) => {
>   console.log(err)
> })
> ```



将登录状态存入vuex，来修改登录后，几个地方的显示“未登录”的地方

1. 将登陆后的返回值保存在vuex

   - 声明变量userInfo

     ```js
     //state.js
     userInfo:{}
     ```

   - 在mutations-type中声明常量

     ```js
     export const SAVE_USERINFO = 'save_userInfo' //存入用户信息
     ```

   - mutations.js中创建改变state常量中的方法

     ```js
     //引入SAVE_USERINFO
     import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,SAVE_USERINFO} from './mutations-types'
     //方法
     [SAVE_USERINFO](state,userInfo){
       state.shops = userInfo
     }
     ```

   - actions.js中发送请求

     ```js
     //引入SAVE_USERINFO
     import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,SAVE_USERINFO} from './mutations-types'
     //方法
     save_userInfo({commit},userInfo){
       commit(SAVE_USERINFO,userInfo)
     }
     ```

   - 在Login.vue中验证后分发SAVE_USERINFO（其实也可以直接全局操作vuex，直接this.$store.state.userInof = xxxxxx）

     ```js
     axios.post('/api/login_pwd',{name:this.name,pwd:this.pwd,captcha:this.captcha}).then((rep) => {
       if(rep.data.code===0){
         //路由页面跳转
         this.$router.replace('/Profile')
         //使用actions分发，让数据存入state
         this.$store.dispatch('save_userInfo',rep.data.data)
       }else {
         this.alertTipText('登陆失败')
       }
     }
     ```

   - 短信登陆分发action同↑

2. Profil（登录/注册）

   - 引入mapSatate

     ```js
     import {mapState} from 'vuex'
     ```

   - 映射userInfo

     ```js
     ...mapState(['userInfo'])
     ```

   - 在模版位置中（如果手机登陆就显示手机号，否则就不显示）

     ```html
     <p class="user-info-top">{{userInfo.phone ? userInfo.phone : ''}}</p>
     ```

3. Msite（右上角）

   - 引入mapSatate

   - 映射userInfo

   - 如果userInfo里面的_id存在就显示icon，不存在就显示登录注册

     ```html
     <span class="header_login" slot="right">
         <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
         <i class="iconfont icon-geren"></i>
     </span>
     ```



### 持久保存vuex登录（刷新不退出）

1. 接口文档

2. node后台实际上设定了session存储为1天，会自动把登陆后的data数据（里面有id和name/phone）存储到session

3. 现在只要发送一个登陆接口请求，就可以获取到上次的登陆session，把值传给vuex里的state.userInfo

4. 既然是持久化登陆，在刷新时就要判定，那么就要在App.vue中的钩子mounted里发送一个 异步 请求

   ```
   mounted: async function getInfo(){
       await axios.get('/api/userinfo').then((res)=>{
         if(res.data.code===0){
           this.$store.state.userInfo = res.data.data
           console.log('自动登陆成功了')
         }else{
           console.log('自动登陆失败了')
           this.$router.replace('/login')
         }
       })
     }
   
   ```



### 退出登陆功能

1. 使用mint-ui增加退出按钮

   ```js
   <button class="mint-button mint-button--danger mint-button--large" @click="logout">
     <label class="mint-button-text">退出登陆</label>
   </button>
   ```

2. 增加点击登出方法，logout

3. 发送登出请求

   ```js
   logout(){
     this.$axios.get('/api/logout').then((res)=>{
       console.log('登出成功')
       //跳转到登陆界面
       this.$router.replace('/Login')
     })
   }
   ```

## MOCK

### 用mock.js模拟接口数据

1. 安装

   ```
   npm i mockjs -S
   
   ```

2. 现在想要使用mock模拟一个服务器

3. 创建一个mockServer.js文件

4. 在 mockServer.js 引入mock、data.json

   ```
   import Mock from 'mockjs'
   import data from './data.json'
   
   ```

5. 在 mockServer.js 指定一个url和模版，只要访问了这个url，就会返回这个模版（详见官方文档）

   ```
   Mock.mock('/data',data)
   
   ```

6. 在main.js主文件中引入mock.js文件

   ```
   import './mock/mockServer'
   
   ```

7. 此时发送给一个ajax请求，res.data的内容，就是data.json里面的内容

   ```
   this.$axios.get('/data').then((res)=>{
     console.log(res.data)
   }
   
   ```

   > tips: mock会拦截ajax请求，所以请求的时候url不需要代理
   >
   > - 为什么上面不报错，下面报错
   >
   >   因为初始值是没有数据的，上面是对象的2层，2层是undefined，3层是undefined的里面的值，肯定就报错了。
   >
   >   如何解决，上面div加个v-if，当初始值有的时候，再渲染
   >
   > - computed在两个时候会执行：第一是初始的时候执行一次，第二是内部相关数据发生变化的时候



### 优化mock接口

1. 让请求的不同地址，返回对应的接口，什么意思呢：目前的接口如下

2. 接口内有商家信息、食物、评价（就是对应了3个子路由组件）

3. 根据不同的请求url，返回不同的接口（其实就是方便调用），为什么要加是code这个键呢，为了模仿真实接口的格式

   ```js
   把 Mock.mock('/data',data) 改成
   Mock.mock('/info',{code:0,data:data.info})
   Mock.mock('/goods',{code:0,data:data.goods})
   Mock.mock('/ratings',{code:0,data:data.ratings})
   ```

4. 新声明State变量，结合action分发存入

   - 在mutatuibs-type中新声明常量

     ```js
     export const RECEIVE_SHOP_INFO = 'receive_shop_info' //接收商家信息
     export const RECEIVE_SHOP_GOODS = 'receive_shop_goods' //接收商家产品
     export const RECEIVE_SHOP_RATING = 'receive_shop_rating' //接收商家评价
     ```

   - State中新声明变量（根据data.json来声明类型）

     ```
     shopInfo:{},   //商家信息
     shopGoods:[],  //商家产品
     shopRating:[]   //商家中的用户评价
     
     ```

   - mutations和actions里面引入常量

   - 设置mutations

     ```js
     //获取商家信息
     [RECEIVE_SHOP_INFO](state,shopInfo){
       state.shopInfo = shopInfo
     },
     //获取商家产品
     [RECEIVE_SHOP_GOODS](state,shopGoods){
       state.shopGoods = shopGoods
     },
     //获取商家评价
     [RECEIVE_SHOP_RATING](state,shopRating){
       state.shopRating = shopRating
     }
     ```

   - 设置actions

     ```js
     //接收商家信息
     receive_shop_info({commit}){
       axios.get('/info').then((res)=>{
         commit(RECEIVE_SHOP_INFO,res.data.data)
       })
     },
     //接收商家产品
     receive_shop_goods({commit}){
       axios.get('/goods').then((res)=>{
         commit(RECEIVE_SHOP_GOODS,res.data.data)
       })
     },
     //接收商家评价
     receive_shop_rating({commit}){
       axios.get('/rating').then((res)=>{
         commit(RECEIVE_SHOP_RATING,res.data.data)
       })
     }
     ```



## Shop.vue页面

此页面有3个子路由：

- ShopGoods
- ShopRating
- ShopInfo

### 路由配置

1. 配置router

   ```js
   {path: '/Shop', component: Shop, meta: {show: true}}
   ```

2. 创建page目录下Shop文件夹和Shop.vue

3. 配置shop的子路由，ShopHead、shopInfo、shopGoods、shopRating

4. 在components文件夹下创建ShopHead、shopInfo、shopGoods、shopRating文件夹，同时创建同名vue文件

5. 在router.js中配置Shop子路由，并设置Shop页面的子路由重定向

   ```js
   {path: '/Shop', component: Shop, meta: {show: true},children:[
     {path:'/Shop/Head',component:ShopHead},
     {path:'/Shop/Goods',component:ShopGoods},
     {path:'/Shop/Info',component:ShopInfo},
     {path:'/Shop/Rating',component:ShopRating},
     {path:'',redirect:'/Shop/Goods'}
   ]}
   ```

6. 在Shop.vue下引入4个子路由，并注册

7. 这个时候复制静态的样式

   > 发现错误
   >
   > url("https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png")
   >
   > 样式里不能用外链
   >
   > 解决错误，
   >
   > （未证实，但是这么做的）把背景图存储在本地common/img文件夹内
   >
   > 1. 在webpack.prod.conf.js文件里output里面添加：publicPath：'./'
   >
   > 2.在utils.js文件里添加 publicPath:'../../'
   >
   > 3.在config/index.js文件里，添加assetsPublicPath:'./'
   >
   >

8. 发现没有样式，排查半天，发现要在标签是加 router-link-active

   ```html
   <router-link to="/shop/goods" replace class="router-link-active">点餐</router-link>
   ```



### Shop页面跳转子路由

> 目前出现了问题，就是无法实现Shop页面内的子路由切换
>
> 查出了错误，是components在模版设置的时候少加了s，以及傻逼加了name
>
> 还有我这个傻逼，router打错了



### 两个子组件的思路

- ShopHead

  1. mapState shopInfo(商家信息)

  2. 把信息渲染到标签

  3. 在ShopHead的钩子mounted中分发

     ```js
     mounted:function () {
       this.$store.dispatch('receive_shop_info')
     }
     ```

  4. 在把数据渲染到标签中（先略）

- ShopGoods

  1. ShopGoods 组件是一个较复杂的路由组件

  2. 内部使用了另外 3 个组件

     a. ShopCart: 购物车组件

     b. CartControl: 购物车操作组件

     c. Food: 食品详情组件

  3. 使用第三方库 better-scroll: UI 滑动

### 丰满ShopGoods

1. 复制静态模版

2. mapState shopInfo(商家信息)

3. v-for把数据渲染到左侧列表

   ```html
   <img class="icon" :src="item.icon?item.icon:false" >
   ```

4. 去掉没有icon的错img



### better-scroll——滑动插件

1. 安装

   ```
   npm install better-scroll -D
   
   ```

2. 在使用文件中（ShopGoods）引入

   ```
   import BScroll from 'better-scroll'
   
   ```

3. 在分发数据之后才能调用 better-scroll ，因为要state.shopGoods里面有数据并且v-for渲染到页面再实例化  better-scroll，才有效果

4. 那么什么时候state.shopGoods里有数据呢？就是分发完毕的时候，所以actions里面此处的分发要改成同步等待

   ```js
   //设定一个回调函数，commit存入数据之后来执行
   async receive_shop_goods({commit},cb){
     let result
     await axios.get('/goods').then((res)=>{
       result = res.data.data
     })
     commit(RECEIVE_SHOP_GOODS,result)
     //commit存入数据之后来执行
     cb && cb()
     }
   ```

5. 在钩子函数mounted中来执行action分发

   ```js
   mounted:function () {
     this.$store.dispatch('receive_shop_goods',()=>{
       this.$nextTick(()=>{
         new BScroll('.menu-wrapper')
         new BScroll('.foods-wrapper')
       })
     })
   }
   ```

   > 之前左侧滚动不了，是因为没有增加一个class为content的div，看文档知道 better-scroll 是里面的div来移动
   >
   > 右侧也出现问题，可以滑动，但是渲染出来的结果只有第一个类目和其下面的7个食物，解决办法同上，加了个class为content的div



### 左侧导航和右侧列表移动互相关联

1. 左侧有个current类，来控制颜色变白的选中效果

2. 目标功能：

3. - 点击左侧分类，右边列表可以移动到分类位置、
   - 滑动右侧列表，左侧分类响应变化

4. 分析

5. - current类作为左侧导航选中的标识类名  currentIndex
   - 让滑动的数值与右侧列表渲染好了之后的标题距离顶部的数值计算，于是：
   - 滑动的数值：scrollY、列表渲染好了之后的标题距离顶部的数值：top
   - 如何进行计算，傻逼没说清楚

6. 在滑动过程中获取到 scrollY 

7. - 基础的参数配置示例

   - better-scroll 中有很多事件，用法都是通过 实例.on 来使用

   - better-scroll 中拥有的事件，通过上面的 实例.on 来使用

   - 为了拿到滑动过程中的Y轴的值，需要用到scroll事件

   - 上面说的 选项中的 [probeType](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#probetype) 是什么意思呢，就是数值是几，对应的scroll触发机制是什么

   - [probeType](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#probetype)  属于选项中的配置，如何使用呢？要在实例中使用

     ```js
     let foodScroll = new BScroll('.foods-wrapper',{
       probeType:2
     })
     ```

   - on出一个scroll事件

   - ```js
     foodScroll.on('scroll',({x,y})=>{
       console.log(y)
     })
     ```

   - 至此右侧滑动可以实时检测Y轴的变化

8. 列表渲染好了之后的标题距离顶部的数值：top

   > tips:回调函数型的方法，可以这样写:  _methods   。  下划线的方法名代表回调函数方法 （方便自己看）



- 找到所有分类的标签li

  > 遇见问题：
  >
  > this.$refs.foodTop.children，报错，找不到含有ref：foodTop表现的ul下面的子元素
  >
  > this.$refs.foodTop[0].children，这样就可以，找到第一个li
  >
  > 解决问题：
  >
  > html结构如下
  >
  > ```html
  > <div class="foods-wrapper">
  >   <div class="content" ref="foodTop">
  >   <ul v-for="(item,index) in shopGoods" :key="index">
  >     <li class="food-list-hook">
  >       <h1 class="title">{{item.name}}</h1>
  > ```
  >
  > 要找到<li class="food-list-hook">这个标签，获取此标签的top值。上面报错是因为把 ref="foodTop" 加在了ul标签上，那么ul是个数组，数组是不能直接获取下面的DOM节点
  >
  > 把ref加在content上就没问题了
  >
  > ------
  >
  > 遇见问题
  >
  > 这样写forEach报错，因为arrLi是伪数组，查阅资料，伪数组是object类型
  >
  > ```js
  > let arrLi = this.$refs.foodTop.getElementsByClassName('food-list-hook')
  > arrLi.forEach((item)=>{
  >   console.log(item)
  > })
  > ```
  >
  > 解决问题
  >
  > 使用 Array.prototype.slice.call(arrLi) 把伪数组转为真数组
  >
  > ```js
  > let arrLi = this.$refs.foodTop.getElementsByClassName('food-list-hook')
  > Array.prototype.slice.call(arrLi).forEach((item)=>{
  >   console.log(item)
  > })
  > ```

- 把找到的所有标签top值push进一个数组

  ```js
  let foodTops = []
  foodTops.push(0)
  
  let arrLi = this.$refs.foodTop.getElementsByClassName('food-list-hook')
  Array.prototype.slice.call(arrLi).forEach((item)=>{
    foodTops.push(item.clientHeight)
  })
  ```

  > 遇到问题：此时打印foodTops：
  >
  > 经过推理，top的值应该是到上一个标签的距离（也就是clientHeight，傻逼视频也没有说清楚）
  >
  > 解决办法：用+=把top值存储进数组
  >
  > ```js
  > Array.prototype.slice.call(arrLi).forEach((item)=>{
  >   top += item.clientHeight
  >   foodTops.push(top)
  >   console.log(foodTops)
  > })
  > ```

- 检测scrollY的变化，来找到scrollY在哪个tops之间

- find（）方法，来找到大于scrollY值的那个li标签top的值

  ```js
  watch:{
    scrollY:function(){
      var a
      a = this.foodTops.find((top)=>{
        return top >= this.scrollY
      })
      console.log(a)
    }
  }
  ```

1. 把检测到的 大于scrollY值的那个li标签top的值 存进data，取名叫current

   ```js
   //data:
   data () {
       return {
           scrollY:Number,
           foodTops:Array,
           current:Number
       }
   }
   ---------------------------------------------------------
   //watch:
   watch:{
     scrollY:function(){
       this.current = this.foodTops.find((top)=>{
         return top >= this.scrollY
       })
     }
   }
   ```

2. 思路：设置一个计算方法，让index===current()的时候给对应的index增加current类名

   - 给标签设置一个绑定的class属性（注意indexCurrent是个计算方法，这里不能加括号）

     ```html
     <li class="menu-item" :class="{current:index===indexCurrent}">
     ```

   - 创建一个计算函数 indexCurrent 

     ```js
     computed:{
       indexCurrent:function () {
           
       }
     }
     ```

     > 遇到问题：想根据 current 找下标，报错：this.foodTops.indexOf is not a function"
     >
     > ```
     > this.foodTops.indexOf(this.current)
     > 
     > ```
     >
     > 解决：把data中的变量类型改为[]
     >
     > ```js
     > data () {
     >     return {
     >         scrollY:Number,
     >         //错误   foodTops:Array,  
     >         foodTops:[],     //正确
     >         current:Number
     >     }
     > }
     > ```

   - 完善计算属性

     ```js
     computed:{
       indexCurrent:function () {
         let a = this.current
         let currentIndex = this.foodTops.indexOf(a)
         return currentIndex
       }
     }
     ```

3. 点击左侧分类导航，右侧直接跳转过去

   - better-scroll有个scrollTo方法

   - 在data中声明一个foodsScroll变量

   - ```js
     data () {
       return {
         foodsScroll:''
       }
     }
     ```

   - 更改实例化bett-scrool的时候付给的let变量

     ```js
     let foodScroll = new BScroll('.foods-wrapper',{
       probeType:2
     })
     ===>
     foodScroll = new BScroll('.foods-wrapper',{
       probeType:2
     })
     ```

   - 在methods中创建moveFood方法

   - ```
     methods:{
       moveFood(index){
           
       }
     }
     
     ```

   - 在htmll标签中给左侧分类导航增加点击方法

   - ```html
     <li class="menu-item" :class="{current:index===indexCurrent}" @click="moveFood(index)">
     ```

   - 通过形参下标，来获取到tops数组中的current值，拿这个值去进行better-scroll中的scrollTo方法来移动，注意time参数的单位是毫秒

   - ```js
     moveFood(index){
       let y = this.foodTops[index]
       this.scrollY = y
       this.foodScroll.scrollTo(0,-y,500)
     }
     ```

   > tips：新增的属性是没有属性绑定的（Vue中是这样的，意思就是一个对象，没有事先声明，.出来的属性，不会进行双向绑定），新增加的属性要用Vue.set内置方法来添加，就会有双向绑定



### CartControl组件——增右侧shopGoods中的加减功能

思路：

1. shopGoods中引入goodsCount组件
2. 加减组件在每一个食物中都有，那么子组件goodsCount就可以在父组件遍历渲染的时候，在v-for范围内拿到每一个food对象（food对象就是vuex中state.shopGoods遍历后的里面的每一个元素，下同）
3. 在goodsCount组件中的加减，通过vuex管理，来给food对象新增Count属性

实施

1. 在components文件夹中新建CartControl组件
2. 将模版复制进去
3. 在shopGoods中挂载CartControl组件

> 遇到问题，加减号不显示，需要阿里icon中在项目里新加图标，并更新链接，然后在项目index.html中重新更改引入字体的链接

1. 给减号增加动画

   ```html
   <transition name="remove">
     <div class="iconfont icon-remove_circle_outline" v-if="flag"></div>
   </transition>
   
   //style
   .remove-enter,.remove-leave-to
       opacity 0
       transform translateX(50px)
   .remove-enter-active,.remove-leave-active
       transition: all 0.2s linear;
   ```

2. 父组件传值给子组件 food对象 

3. 因为food是父组件中遍历shopGoods中的一个元素，现在要给food新增加一个count属性，来计算加减组件的值，food是隶属于state.shopGoods中的，所以要操纵vuex，那么，就需要写一套vuex的更改数据：

   - 在mutations-type中声明常量

     1. 增加food中count的常量
     2. 减少food中count的常量

     > ------------------------------------------------------ 此处开始，始终报错------------------------------
     >
     > - 在mutations中创建变更数据的方法
     >
     >   要使用vue.set来增加food中本身不存在的count属性
     >
     >   ~~~js
     >    ```js
     >   //给食物增加count
     >   [INCREMENT_FOOD_COUNT](state,{food}){
     >     if(!food.count){
     >       Vue.set({food},'food.count',0)
     >       food++
     >     }else{
     >       food++
     >     }
     >     },
     >   //给食物减少count
     >   [DECREMENT_FOOD_COUNT](state,food){
     >     food--
     >   }
     >   ~~~
     >
     > - 在actions中创建分发
     >
     >   ```js
     >   //给食物增加count
     >   food_count({commit},{food,isAdd}){
     >     if(isAdd){
     >       commit(INCREMENT_FOOD_COUNT,food)
     >       console.log(food.count)
     >     }else{
     >       commit(INCREMENT_FOOD_COUNT,food)
     >       console.log(food.count)
     >     }
     >   }
     >   ```
     >
     >
     >
     > ```
     > 7. 要设定一个方法，来控制count变量的增减，在html标签结构中，要给增减标签同时调用这个方法，并给他们传响应的布尔值，来在方法中判断
     >    
     >    ```js
     >    <div class="iconfont icon-add_circle" @click="count(true)"></div>
     >    ```
     >    
     > 8. 增减方法
     >    
     >    ```js
     >    props:[
     >      'food'
     >    ],
     >    methods:{
     >      count(isAdd){
     >        this.$store.dispatch('food_count',{food:this.food,isAdd:isAdd})
     >      }
     >    }
     >    ```
     > 
     > ```
     >
     > - -------------------------------------------------分割线--------------------------------

- 在mutations中创建变更数据的方法

  使用vue.set来增加food中本身不存在的count属性

  ```js
    //给食物增加count
    [INCREMENT_FOOD_COUNT](state,{food}){
      // console.log(food)
      if(!food.count){
        Vue.set(food,'count',1)
      }else{
        food.count++
      }
  },
    //给食物减少count
    [DECREMENT_FOOD_COUNT](state,{food}){
      food.count--
    }
  ```

- 在actions中创建分发

  ```js
    //给食物增加count
    food_count({commit},{food,isAdd}){
      if(isAdd){
        commit(INCREMENT_FOOD_COUNT,{food:food})
      }else{
        commit(DECREMENT_FOOD_COUNT,{food:food})
      }
    }
  ```

1. 要设定一个方法，来控制count变量的增减，在html标签结构中，要给增减标签同时调用这个方法，并给他们传响应的布尔值，来在方法中判断

- js

  ```js
  props:[
      'food'
  ],
      methods:{
          count(isAdd){
              this.$store.dispatch('food_count',{food:this.food,isAdd})
              if(this.food.count>0){
                  this.flag=true
              }else{
                  this.flag=false
                  this.food.count=null
              }
              console.log(this.food.count)
          }
      }
  ```

- html

  ```html
  <template>
  <div class="cartcontrol">
    <transition name="remove">
      <div class="iconfont icon-remove_circle_outline" v-if="flag" @click="count(false)"></div>
    </transition>
    <div class="cart-count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click="count(true)"></div>
  </div>
  </template>
  ```



## ShopCart组件

1. 复制模版
2. Shop.vue中引入并挂载组件



## Food组件

要实现的几个功能：

1. 点击ShopGoods组件中的食物，可以弹出food组件
2. 点击food组件周围的灰色地带，关闭遮罩
3. food组件中要接收父组件ShopGoods传过来的食物对象值，用来渲染内容



实施：

- 基本

  1. 复制模版
  2. 渲染进ShopGoods.vue的模版标签，结构如下

  ```html
   <template>
       <div>
         <div>
   		<div class="goods">
             	<div class="menu-wrapper"></div>
               <div class="foods-wrapper"></div>
            </div>
           <food></food>
         </div>
       </div>
   </template>
  ```

  1. 在Food.vue的模版中，加上隐藏属性，把整个遮罩隐藏

  ```html
   <div class="food" style="display: none">
  ```

- food组件（遮罩）

  1. food.vue

     - data中声明flag：false，让遮罩隐藏

     - 模版中最外层用v-if条件渲染，里面的值为flag

     - 创建一个方法，toggleFood，取反flag

     - 在灰色遮罩地带，也设置点击事件，flag=!flag，隐藏组件

     - 涉及代码如下

       ```js
       //html
       <div class="food" v-if="flag">
        
       <div class="food-cover" @click="flag=!flag"></div>
       //js
       data () {
       	return {
       	flag:false
       	}
       },
       methods: {
       	toggleFood(){
       	this.flag=!this.flag
       	}
       }
       ```

  2. ShopGoods.vue

     - 给子组件设置ref，为了调取子组件的toggleFood()

       ```html
       <food ref="food"></food>
       ```

     - 创建toggleFood()方法，来调用子组件的toggleFood()方法（虽然同名，但是不同）

       ```js
       toggleFood(){
       	this.$refs.food.toggleFood()
       }
       ```

     - 在包裹每一个食物的ul标签设置点击事件触发toggleFood()方法

       ```html
       <ul v-for="(food,index) in item.foods" :key="index" @click="toggleFood">
       ```

  3. 子组件ood.vue还需要拿到父组件的food对象，如何传递过去？在父组件触发点击方法来显示子组件的时候，把food作为参数传进去

     - ShopGoods.vue

       ```js
       //html
       <ul v-for="(food,index) in item.foods" :key="index" @click="toggleFood(food)">
       //js
       toggleFood(food){
       	this.$refs.food.toggleFood(food)
       }
       ```

     - food.vue

       ```js
       data () {
       	return {
       		flag:false,
       		food:{}
       	}
       },
       methods: {
       	toggleFood(food){
       		this.flag=!this.flag
       		this.food=food
       	}
       }
       ```

  4. 把数据渲染到标签（略）

细节修改：

遇到一个问题，就是列表选择了食物，点击图标，Food组件中的CartControl加减数量不对/不显示/减号不显示

1. Food.vue需要传food对象给子组件CartControl

   ```html
   <cartControl :food="food"></cartControl>
   ```

2. CartControl.vue中给减号标签的v-if中做一个三元判断（解决点击Food组件中减号不显示的bug）

   ```js
   v-if="v-if="this.food.count>0?true:false"
   ```





## ShopCart组件

思路：

1. ShopCart需要拿到食物对象中count属性>0的对象，然后组成一个数组，来遍历到模版中——这就需要用到vuex，把数组存储到vuex中
2. 需要显示共计多少件商品，以及购物车总价——要用到vuex的getter

细节

1. 遮罩和购物车上弹出的内容是display：none，要有切换效果
2. 购物车的红色数字从getters中统计
3. 购物车的食物是一个数组，通过state中新声明一个数组来管理
4. 当没有食物选中时，购物车是灰色的（没有highlight这个类名）

实施

1. 复制模版
2. 在Shop.vue中引入并挂载
3. 渲染到标签中

### 使用cartFoods将内容渲染进标签

1. 在vuex的state中声明数组变量cartFoods

   ```
   cartFoods:[]
   
   ```

   > 在表现绑定的属性中，可以是变量，计算属性，如
   >
   > :class="计算属性"

2. 需要把count大于0的食物放进这个数组中，什么时候food的count大于0呢？在mutations中，找到之前增加和减少食物count的方法，在这里操作cartFoods数组内部food的push和splice

   ```js
     //给食物增加count
     [INCREMENT_FOOD_COUNT](state,{food}){
       // console.log(food)
       if(!food.count){
         Vue.set(food,'count',1)
         state.cartFoods.push(food) //这里push进数组，错误写法this.$store.cartFoods.push(food)
       }else{
         food.count++
       }
   },
     //给食物减少count
     [DECREMENT_FOOD_COUNT](state,{food}){
       food.count--
       if(food.count===0){
         state.cartFoods.splice(this.$store.cartFoods.indexOf(food),1)   //这里splice
       }
     }
   ```

3. ShopCart.vue中引入cartFoods

   > ...mapState(['cartFood'])
   >
   > 在组件内部打印不到，因为自己傻逼，应该在computed中映射，自己去conponents中映射了

   ```js
   computed:{
         ...mapState(['cartFoods'])
       }
   ```

4. 至此可以使用cartFoods将内容渲染进标签

### cartControl增减不同食物，红色标记计算总数

1. 接下来，用getters来读取计算所有食物的总数，在getters.js中创建计算总数的方法

   > 注意，要在方法内return，忘记return，所以老是报undefined

   ```js
   export default{
     receive_count(state){
       return state.cartFoods.reduce(function (accumulator,currentValue) {
         return accumulator + currentValue.count
       },0)
     }
   }
   ```

2. 在ShopCart.vue中引入getters的receive_count

   ```
   ...mapGetters(['receive_count'])
   
   ```

3. 想要在红色标记中显示全部食物数量，在标签中增加计算属性，通过计算属性，调用getters的receive_count()方法

   ```js
   <div class="num">{{amount}}</div>
   
   //js
    computed:{
        ...mapState(['cartFoods']),
        ...mapGetters(['receive_count']),
        amount(){
           return this.receive_count
           }
    }
   ```

4. 至此，cartControl增减不同食物，红色标记计算总数



点击购车图标，弹窗和遮罩出现；点击购物车图标和遮罩，弹窗和遮罩消失

1. 在data中声明flag=false

   ```js
       data () {
         return {
           msg: "Hello Vue.js",
           flag:false
         }
       }
   ```

2. 给购物车图标增加标签属性

   ```js
   @click="flag=!flag"
   ```

3. 同样，也给遮罩标签增加此属性

   ```js
   @click="flag=!flag"
   ```



### 当购物车没有食物时，购物车图标是灰的，一旦有食物，就是绿的（用highlight类名来控制）

购物车图标的标签，绑定class属性，用三元表达式，当计算属性amount()的返回值大于0的时候，增加highlight类名，否则为空

```
:class="amount>0?'highlight':''"

```



### 把这段内部盒子，换成CartControl组件

传值（这里的food，是上面循环遍历vuex中cartFoods数组里的food）

```html
<CartControl :food="food"></CartControl>
```

遇到一个bug，在food组件中减为0的食物，在ShopGoods中减号仍然存在，给CartControl.vue的中间数值增加一个v-if判断，v-if="food.count<=0?false:true"

```html
<div class="cart-count" v-if="food.count<=0?false:true">{{food.count}}</div>
```

遇到一个bug，当购物车中食物减为0时，购物车组件应该消失变灰

### 显示总金额

1. 在getters中创建计算总金额的方法，类似计算总数量

   ```js
   receive_price(state){
       return state.cartFoods.reduce(function (accumulator,currentValue) {
         return accumulator + currentValue.price*currentValue.count
       },0)
     }
   ```

2. 在ShopCart.vue中引入

   ```js
   ...mapGetters(['receive_count','receive_price'])
   ```

3. 在标签中使用

   ```html
   <div class="price highlight">￥{{receive_price}}</div>
   ```

### cartShop加减组件 和 shopGoods中的加减组件的细节bug

尽可能的表达这一交互bug：

- 目标效果：

  当食物列表选中好了食物，点击购物车，会弹出选中食物的列表，在此列表中如果把食物减为0，购物车列表及其遮罩要消失。再次选中食物，一切正常。

- 出现的问题：

  当食物列表选中好了食物，点击购物车，会弹出选中食物的列表，在此列表中如果把食物减为0，**购物车和遮罩不会消失**，中途修改代码，又出现了这种情况：在此列表中如果把食物减为0，购物车和遮罩会消失，但是再次选中食物+，购物车列表自动弹出（这是flag值的问题）

- 正确代码如下：

  1. 创建isShow()方法，目的是点击购物车图标时，如果没有食物数量，则无法点击

     ```js
         methods:{
           isShow(){
               //当食物总数为0时，flag为假，无法显示购物车和遮罩效果，否则为真，显示购物车和遮罩效果
             if(this.receive_count===0){
               this.flag = false
             }else {
                 //只要食物数量不是0，那么就是点击购物车取反切换
               this.flag = !this.flag
             }
           }
         }
     ```

  2. 给购物车图标绑定刚刚创建的isShow()方法，来监测食物总数变化时，flag的布尔真假值

     ```html
     <div class="logo" :class="amount>0?'highlight':''" @click="isShow">
     ```

  3. 创建一个计算函数show()

     ```js
     show(){
     //当this.receive_count有变化时判断
         //如果食物总数为0，flag为假（隐藏购物车和遮罩），返回flag
         if(this.receive_count===0){
             //没有这一步 this.flag = false ，就无法实现根据食物总数的变化让自我（购物车和遮罩）消失
         	this.flag = false
         	return this.flag
         }else {
             //如果食物总数不为0，购物车和遮罩的显现由点击购物车图标来控制，所以直接返回flag
         	return this.flag
         }
     }
     ```

  4. 给购物车和遮罩v-if绑定计算函数

     ```html
     //购物车logo
     <div class="shopcart-list" v-if="show">
     
     //遮罩
     <div class="list-mask" v-if="show" @click="flag=!flag"></div>
     ```



### 还差几元起送

代码结构

- 当满足起送金额时，not-enough改为enough

> 注意一点，计算函数的名称不能和data中的变量名相同

1. 在标签结构中，绑定deliveryPrince()计算函数，监测起送价-总金额，把结果赋给delivery

   ```html
   <div class="pay" :class="deliveryPrince">
   	{{delivery}}
   </div>
   ```

2. 计算函数

   ```js
   deliveryPrince(){
       //还差多少配送=起送价-总金额
           this.delivery = this.shopInfo.minPrice-this.receive_price
       //还差多少配送小于等于0了，就可以返回enough类名，并且文字显示立即付款
           if(this.delivery<=0){
             this.delivery ='立即付款'
             return 'enough'
           }else {
             this.delivery = `还差￥${this.delivery}元起送`
             return 'not-enough'
           }
         }
   ```



### shopCart的上下切换动画效果

1. 找到购物车标签

2. 用trasition包裹

   ```html
   <transition name="listMove">
   	xxxxx
   </transition>
   ```

3. 去样式中写动画

   ```css
   .shopcart-list
       transform translateY(-100%)
       &.listMove-enter-active, &.listMove-leave-active
       	transition transform .3s
       &.listMove-enter, &.listMove-leave-to
       	transform translateY(0)
   ```

### shopCart的列表滑动

使用better-scroll插件



1. 引入better-scroll

2. 找到数据渲染的时机——watch数据cartFoods

   ```
   watch:{
         cartFoods:function(){
   //        this.$nextTick(()=>{
   //          new BScroll('.list-content')
   //        })
           new BScroll('.list-content')
         }
       }
   
   ```

   > 始终报错
   >
   > 这个问题的发生，是购物车列表和遮罩的切换用的是v-if，vif有个特点，就是整个元素消失，而v-show则是隐藏，傻逼没有说清楚，这个老是死全家，我日他妈个卖逼

3. 上面找的数据渲染的时机是错的，那么应该去计算函数中的show()中去找，也就是当食物总数不为0的时候，new出一个滑动实例

   ```js
       computed:{
         show(){
           if(this.receive_count===0){
             this.flag = false
             return this.flag
           }else {
             this.$nextTick(()=>{
               new BScroll('.list-content')
             })
             return this.flag
           }
         }
   ```

   - 视频中如此也滑动不了，滑动第二下才可以，原因在于内置性能会分析用户是否想滑动，如果想，就会刷新获取content的高度，因为初始时，不能获取到content高度，因为数据是动态渲染的
   - 视频又出现一个bug，此时在购物车内部增加食物，会点击1次增加好多次，原因在于new出来的实例不是单例，在于触发了滑动插件内部的回调，每次点击都能与新new出.需要声明一个属性来存储实例，用if判断实例是否存在，存在就不用新new

> 此时还不能滑动，原因在于遍历的标签写错了，better-scroll的原理是盒子下面的第一个子元素滑动，我把遍历卸载ul上，那么遍历的是DIV下面的一个ul，所以整体不能滑动，要把v-for卸载ul下面的li中。



### 清空购物车

思路：

1. 使用mui框架点击出现提示弹窗
2. 每一个food的count
3. 把cartFoods清空

实施

1. 引入要用的mint-ui组件

   ```
   import {MessageBox} from 'mint-ui'
   
   ```

2. 给清空二子增加点击方法

   ```js
   <span class="empty" @click="clearCart">清空</span>
   
   clearCart(){
           MessageBox.confirm('Are you sure?').then(action => {
             此处选择确认触发的回调
           },cancel=>{
             此处选择取消触发的回调
           })
         }
   ```

3. mutations-type声明常量

   ```js
   export const CLEAR_FOOD_COUNT = 'clear_food_count' //food的count清零
   ```

4. 将常量引入到mutation和action中

5. mutation中创建修改数据方法

   ```js
    //food的count清零
     [CLEAR_FOOD_COUNT](state){
         //2层forEach看看shopGoods的数据结构就知道为什么这样了
       state.shopGoods.forEach(function (item) {
         item.foods.forEach(function (item) {
           item.count=0
         })
       })
       state.cartFoods=[]
     }
   ```

6. action中设置调用mutation

   ```js
   //food的count清零
     clear_food_count({commit}){
       commit(CLEAR_FOOD_COUNT)
     }
   ```

7. 补充cearlCart方法

   ```js
   clearCart(){
           MessageBox.confirm('Are you sure?').then(action => {
             this.$store.dispatch('clear_food_count')
           },cancel=>{
             console.log(2)
           })
         }
   ```



## shopRating组件

1. 把模版复制过来

2. 钩子函数mounted中分发action

   ```js
   mounted:function () {
       this.$store.dispatch('receive_shop_ratings')
   }
   ```

3. computed中映射state

   - shopInfo不用分发，因为Shop.vue页面分发过了，state中已经有数据，只要映射就行了

   ```js
   ...mapState(['shopInfo','shopRatings'])
   ```

4. 去标签汇总渲染数据

5. 引入better-scroll

   ```js
   import BScroll from 'better-scroll'
   ```

6. 监测shopRatings如果有变动，就new一个滑动实例

   - 类ratings是最外层的div，自己根据标签结构就可以判断抓取哪一个div作为滑动实例

   ```js
   watch:{
         shopRatings(){
           this.$nextTick(()=>{
             new BScroll('.ratings')
             //也可以 new BScroll('this.#refs.ratings')    标签加了ref属性
           })
         }
       } 
   ```

   - 这里还有一个方法，就是再分发receive_shop_ratings，请求ratings的时候，action中增加一个回调，在回调里面new出滑动实例

几个细节：

- 滑动的最下方的底部与屏幕是齐平，所以找到相关div加上padding-bottom，让底部购物车组件不遮挡最后一条评论
- 评论星星和评论内容有错行问题，给星星的盒子加上line-height撑开高度
- 评论标签前面有个icon，是赞和踩，是shopRatings.recommend.rateType的值0和1开控制赞和踩（后期修复）



### 评论筛选

思路

1. 给全部、满意、不满意增加一个点击方法，传入1、2、3来做区分
   - 全部：3
   - 满意：1
   - 不满意：2
2. 满意与否是shopRatings.rateType属性，
   - 0代表满意
   - 1代表不满意

实施

1. 声明变量commentNum，记录满意情况，默认全部

   - 全部：3
   - 满意：1
   - 不满意：2

   ```
   commentNum:3
   
   ```

2. 创建toggleComment()方法

   ```js
   toggleComment(num){
           this.commentNum = num
         }
   ```

3. 给全部、满意、不满意增加对应的点击事件，来改变变量commentNum的值

   ```
   @click="toggleComment(3)
   
   ```

4. 给全部、满意、不满意绑定对应的类，用commentNum等于不同的值，来控制选中效果

   ```
   :class="{active:commentNum===3}
   
   ```

5. 评论的列表v-for渲染，是通过vuex的shopRatings来进行，那么，把shopRatings改为一个计算函数，返回值作为列表渲染的数组，就可以控制满意或者不满意的列表展示

6. 创建一个计算属性，用fliter()函数来控制shopRatings的返回值，所以为什么上面要声明commentNum变量，就是来触发计算属性的运行

   ```js
   filterComment(){
       return this.shopRatings.filter(item=>{
           if(this.commentNum===3){
               return true
           }
           if(this.commentNum===1){
               return item.rateType == 0
           }
           if(this.commentNum===2){
               return item.rateType == 1
           }
       })
   }
   ```

## shopInfo组件

1. 引入shopInfo

   ```
   ...mapState(['shopInfo'])
   
   ```

2. 在表现中渲染数据

3. 在钩子mounted中给相关div创建滑动实例

   ```
   new BScroll('.shop-info')
   
   ```

4. 还需要给商家图片一个横向滑动，但是列表ul的宽和是屏幕的宽度，没有被li撑开

5. 给ul增加一个ref属性，名为ul中操作ul对象，在mounted钩子函数中增加其宽度

   ```js
   let ul = this.$refs.ul
   let width = 126 * this.shopInfo.pics.length
   ul.style.width= width+'px'
   new BScroll('.pic-wrapper', {
       scrollX: true
   })
   ```

   > 这里有个问题，就是刷新此页面，this.shopInfo为unfiend，排查了很久的原因，在于不能刷新此页面来测试，因为this.shopInfo，是直接通过映射来的，因为在shopHead组件已经分发过vuex相关action，所以单单刷新此页面来测试，得不到this.shopInfo的值，要在/shop页面刷新，点击“商家”来进入组件测试



## Search.vue页面

1. 给input输入框增加v-model属性，绑定新声明的变量keyword

   ```html
   keyword:''
   
   <input type="search" placeholder=" 请输入商家名称" class="search_input" v-model="keyword">
   ```

2. 写一个flag布尔值为flase，用来控制刚进页面的时候，一起搜索结果为空

   ```html
   flag:false
   
   //绑定在控制内容的盒子里
   <section class="list" v-if="flag">
   ```

3. 写一套vuex状态管理，把搜索的返回值给State.searchShops

4. 给form表单增加提交方法

   ```js
   <form class="search_form" @submit.prarent="search">
       
   //js
       search(){
       this.$axios.get('/api/search_shops?keyword='+this.keyword+'&geohash=40.10038,116.36867').then((res)=>{
           this.$store.dispatch('receive_searchshops',res.data.data)
           console.log(res.data.data)
       }).catch(function (error) {
           console.log(error);
       })
       this.flag = true
   }
   ```

5. 如果没有数据，就提示后台的错误信息，所以给两个盒子增加v-if属性



## 缓存路由组件

通常外层路由这么做 (就是每一个大组件) 

给组件增加一个

```html
<keep-alive>

</keep-alive>
```

在Shop.vue中给路由增加缓存标签

```
<keep-alive>
        <router-view></router-view>
</keep-alive>

```



## 回退优化

> tips:
>
> 路由组件跳转默认为push方式，到时回退的体验有时很差，可以在标签中加上replace，来让路由默认使用replace方式跳转
>
> ```html
> <router-link to="/index" replace><router-link>
> ```



## 路由组件懒加载

在路由配置文件index.js中4个主页面路由引入改为：

```js
const Msite = ()=> import('../pages/Msite/Msite.vue')
const Order = ()=> import('../pages/Order/Order.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')
const Login = ()=> import('../pages/Login/Login.vue')
const Search = ()=> import('../pages/Search/Search.vue')
```



## 图片懒加载

用到一个插件 vue-lazyload

1. 安装

   ```
   npm i -S vue-lazyload
   
   ```

2. 去main.js中引入

   ```js
   import Vue from 'vue'
   import App from './App.vue'
   import VueLazyload from 'vue-lazyload'
   //使用并配置
   Vue.use(VueLazyload,{
       loading:'dist/loading.gif'   //加载时的loading图片
   })
   
   
   //引入图片也可以如下
   import loading from 'xx/xx/xxx.gif'
   Vue.use(VueLazyload,{
       loading
   })
   ```

3. 实例化之后，vue内部就会多了一个v-lazy指令

4. 可以把img的src属性换位v-lazy就实现了图片懒加载



## 自定义过滤器

1. 安装

   ```
   npm install --save moment
   
   ```

2. 创建自定义过滤器模块文件: filters/index.js

   ```js
   import moment from 'moment'
   import Vue from 'vue'
   
   Vue.filter('dateString', function (value, format) {
   return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
   })
   ```

3. 去main.js中加载模块

   ```js
   import './filters' // 加载自定义过滤器
   ```

4. 找到需要过滤的时间，使用过滤器

   ```html
   <div class="time">{{item.rateTime | dateString}}</div>
   ```



## 打包文件分析与优化

1. vue 脚手架提供了一个用于可视化分析打包文件的包 webpack-bundle-analyzer 和配置

2. 启用打包可视化: npm run build --report

3. 优化: 使用 date-fns 代替 moment

   ```js
   // import moment from 'moment'
   // import {format} from 'date-fns'
   
   import format from 'date-fns/format'
   import Vue from 'vue'
   Vue.filter('dateString', function (value, formatStr) {
   // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
   return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
   })
   ```









