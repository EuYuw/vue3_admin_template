# vue3_admin_template

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Husky + lint-staged + commitlint

husky： 是一个 Git Hook 工具，借助 husky 我们可以在 git 提交的不同生命周期进行一些自动化操作
lint-staged: 用于实现每次提交只检查本次提交所修改的文件
commitlint: 提交时 commit 信息规范校验配置流程，每次提交时就会去检查你的 commit-msg 是否合规

### 下载依赖

```
npm i husky lint-staged @commitlint/cli @commitlint/config-conventional -D
```

### package.json 文件中添加 scripts

```
"scripts": {
  "prepare": "husky install",
  "lint": "eslint src",
  "lint-staged": "lint-staged",
  "commitlint": "commitlint --config commitlint.config.js -e -V"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint  --fix"
  ]
},
```

执行 npm run prepare，生成了.husky 文件夹

### 添加 pre-commit 钩子

```
npx husky add .husky/pre-commit "npm run lint-staged"
```

### 创建 .lintstagedrc 配置文件

```
{
  "src/**/*.{js,vue}": "npm run lint"
}
```

### 添加 commit-msg 钩子

```
npx husky add .husky/commit-msg "npm run commitlint"
```

### 创建 commitlint.config.js 配置文件

```
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```
