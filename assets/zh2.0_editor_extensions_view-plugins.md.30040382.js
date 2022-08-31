import{_ as s,c as a,o as n,a as l}from"./app.68deaf42.js";const C=JSON.parse('{"title":"\u89C6\u56FE\u63D2\u4EF6","description":"","frontmatter":{"title":"\u89C6\u56FE\u63D2\u4EF6"},"headers":[{"level":2,"title":"\u524D\u7F6E\u51C6\u5907","slug":"\u524D\u7F6E\u51C6\u5907"},{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6","slug":"\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6"},{"level":2,"title":"\u4E0B\u4E00\u6B65","slug":"\u4E0B\u4E00\u6B65"}],"relativePath":"zh2.0/editor/extensions/view-plugins.md","lastUpdated":1661916903000}'),e={name:"zh2.0/editor/extensions/view-plugins.md"},p=l(`<h1 id="\u89C6\u56FE\u63D2\u4EF6" tabindex="-1">\u89C6\u56FE\u63D2\u4EF6 <a class="header-anchor" href="#\u89C6\u56FE\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>\u89C6\u56FE\u63D2\u4EF6\u662F\u4E00\u4E2A\u53EF\u4EE5\u8BA9\u60A8\u8BBF\u95EE\u7F16\u8F91\u5668<a href="./viewport.html">\u89C6\u7A97</a>\u7684<a href="./">\u7F16\u8F91\u5668\u6269\u5C55</a>\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u9875\u65E8\u5728\u4E3A Obsidian \u63D2\u4EF6\u5F00\u53D1\u8005\u4EEC\u7CBE\u70BC CodeMirror 6 \u7684\u5B98\u65B9\u6587\u6863\u3002\u8981\u60F3\u83B7\u53D6\u66F4\u591A\u5173\u4E8E\u72B6\u6001\u7BA1\u7406\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u67E5\u9605 <a href="https://codemirror.net/docs/guide/#affecting-the-view" target="_blank" rel="noreferrer">Affecting the View</a> \u8FD9\u7BC7\u6587\u6863\u3002</p></div><h2 id="\u524D\u7F6E\u51C6\u5907" tabindex="-1">\u524D\u7F6E\u51C6\u5907 <a class="header-anchor" href="#\u524D\u7F6E\u51C6\u5907" aria-hidden="true">#</a></h2><ul><li>\u5BF9<a href="./viewport.html">\u89C6\u7A97</a>\u6709\u57FA\u672C\u4E86\u89E3\u3002</li></ul><h2 id="\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u89C6\u56FE\u63D2\u4EF6\u662F\u5728\u89C6\u7A97\u88AB\u91CD\u65B0\u8BA1\u7B97 <strong>\u540E</strong> \u6267\u884C\u7684\u7F16\u8F91\u5668\u6269\u5C55\u3002\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u53EF\u4EE5\u8BBF\u95EE\u89C6\u7A97\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u89C6\u56FE\u63D2\u4EF6\u4E0D\u80FD\u5BF9\u89C6\u7A97\u505A\u51FA\u4EFB\u4F55\u6709\u5DE8\u5927\u5F71\u54CD\u7684\u6539\u52A8\u3002\u6BD4\u5982\u5728\u6587\u6863\u4E2D\u63D2\u5165\u5757\u6216\u8005\u6362\u884C\u7B26\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u60A8\u60F3\u505A\u51FA\u5F71\u54CD\u7F16\u8F91\u5668\u5782\u76F4\u5E03\u5C40\u7684\u53D8\u52A8\uFF0C\u6BD4\u5982\u63D2\u5165\u5757\u6216\u8005\u6362\u884C\u7B26\uFF0C\u60A8\u9700\u8981\u4F7F\u7528<a href="./state-fields.html">\u72B6\u6001\u5B57\u6BB5</a>\u3002</p></div><p>\u8981\u60F3\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u63D2\u4EF6\uFF0C\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7EE7\u627F\u81EA <a href="https://codemirror.net/docs/ref/#view.PluginValue" target="_blank" rel="noreferrer">PluginValue</a> \u7684\u7C7B\uFF0C\u5E76\u5C06\u5B83\u4F20\u7ED9 <a href="https://codemirror.net/docs/ref/#view.ViewPlugin%5EfromClass" target="_blank" rel="noreferrer">ViewPlugin.fromClass()</a> \u65B9\u6CD5\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ViewUpdate</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PluginValue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">EditorView</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ViewPlugin</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@codemirror/view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PluginValue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">update</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ViewUpdate</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">destroy</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> examplePlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ViewPlugin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromClass</span><span style="color:#A6ACCD;">(ExamplePlugin)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0B\u4E09\u4E2A\u89C6\u56FE\u63D2\u4EF6\u7684\u65B9\u6CD5\u63A7\u5236\u5B83\u7684\u751F\u547D\u5468\u671F\uFF1A</p><ul><li><code>constructor()</code> \u65B9\u6CD5\u7528\u4E8E\u63D2\u4EF6\u7684\u521D\u59CB\u5316\u3002</li><li><code>update()</code> \u65B9\u6CD5\u5728\u53D1\u751F\u6539\u53D8\u65F6\u66F4\u65B0\u60A8\u7684\u63D2\u4EF6\uFF0C\u6BD4\u5982\u5728\u7528\u6237\u8F93\u5165\u6216\u8005\u9009\u62E9\u4E00\u4E9B\u6587\u672C\u65F6\u3002</li><li><code>destroy()</code> \u65B9\u6CD5\u5728\u63D2\u4EF6\u5378\u8F7D\u540E\u8FDB\u884C\u6E05\u7406\u64CD\u4F5C\u3002</li></ul><p>\u867D\u7136\u4F8B\u5B50\u4E2D\u7684\u89C6\u56FE\u63D2\u4EF6\u751F\u6548\u4E86\uFF0C\u4F46\u662F\u5B83\u505A\u7684\u4E8B\u60C5\u5E76\u4E0D\u591A\u3002\u5982\u679C\u60A8\u60F3\u66F4\u597D\u5730\u7406\u89E3\u5BFC\u81F4\u63D2\u4EF6\u66F4\u65B0\u7684\u539F\u56E0\uFF0C\u60A8\u53EF\u4EE5\u5728 <code>update()</code> \u65B9\u6CD5\u4E2D\u6DFB\u52A0 <code>console.log(update);</code> \u8FD9\u884C\u4EE3\u7801\u4EE5\u5728\u63A7\u5236\u53F0\u4E2D\u6253\u5370\u6240\u6709\u7684\u66F4\u65B0\u5185\u5BB9\u3002</p><h2 id="\u4E0B\u4E00\u6B65" tabindex="-1">\u4E0B\u4E00\u6B65 <a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a></h2><p>\u4ECE\u60A8\u7684\u89C6\u56FE\u63D2\u4EF6\u4E2D\u63D0\u4F9B<a href="./decorations.html">\u88C5\u9970</a>\u4EE5\u66F4\u6539\u6587\u6863\u7684\u663E\u793A\u65B9\u5F0F\u3002</p>`,15),o=[p];function t(r,c,i,D,F,y){return n(),a("div",null,o)}const A=s(e,[["render",t]]);export{C as __pageData,A as default};
