const { defaultTheme } = require('@vuepress/theme-default')
const { path } = require('@vuepress/utils')

module.exports.commentTheme = options => ({
  // 继承默认主题
  extends: defaultTheme(options),

  // 覆盖 `404` 布局
  layouts: {
    Layout: path.resolve(__dirname, "layouts", "Layout.vue"),
  },
})
