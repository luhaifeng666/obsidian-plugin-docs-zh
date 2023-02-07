/*
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2023-02-07 17:03:11
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2023-02-07 17:11:41
 * @Description: 
 */
import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'

var options = {
  previewLength: 62,
  buttonLabel: 'Search',
  placeholder: 'Search docs',
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
})