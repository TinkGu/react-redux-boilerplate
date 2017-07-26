# {{ name }}

{{ description }}

# dev sop

## pre install

- node >= 4.4.2
- npm >= 3.x<br>
  or `npm i cnpm -g`
- webpack

  ```
  cnpm i -g webpack
  ```

- cross-env

  ```
  cnpm i -g cross-env
  ```

- nodemon

  ```
  cnpm i -g nodemon
  ```

## install repo

- git clone
- `cnpm i`
- `cp config.js.sample config.js`

## mock server

- `cp mock/db.json.sample db.json`<br>

- `npm run mock`

- open `127.0.0.1:3020` in your browser<br>
  根据你本地 `config.js` 设置的 `port` 和 `host` 可能会略有不同。

## run app

- `npm start`
- open `127.0.0.1:3010` in your browser

# build sop

部署流程

## generate bundle

- `npm run build`

# structure

项目结构

```
+ build/
+ mock/
+ src/
  - actions/            # redux action creators
    * types.js          # action types
  - apis/               # api 请求 services
  - components/         # 一般组件
  - constants/
  - containers/         # 分发 props 的组件
  - reducers/
  - static/             # 静态资源文件夹
    * fonts/            # 字体
    * images/           # 图片
  - styles/             # 全局样式
    * antdTheme.less    # 定制 antd 样式
    * reset.less        # 当未引入 antd 时，进行 normalize
    * mixins.less       # 全局公用的 less 工具函数
    * variables.less    # 全局公用的 less 变量，如色彩，字重等
  - utils/
  - index.html          # 入口页面
  - index.js            # 入口文件
  - routes.js           # 路由配置表
  - store.js            # redux store
+ .babelrc
+ config.js
+ config.js.sample
+ package.json
+ README.md
```

`*.sample` 是预置文件，本身不可用，必须以它为模板生成一份目标文件。此类文件常用于 `dev config`，各个人员之间的开发配置不同，修改后会污染 `git status`。<br>
为此，只将 `*.sample` 文件加入 git ，其目标文件会被 gitignore。<br><br>
**如果你确实需要修改 config，并让每一个人都使用（比如添加某个属性），请记得将修改同步到对应的 `.sample`, 并在合并 pr 后提醒同事。**
