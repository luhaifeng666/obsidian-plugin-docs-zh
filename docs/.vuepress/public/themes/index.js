/*
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-09 17:42:05
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-19 14:08:14
 * @Description: 
 */
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
