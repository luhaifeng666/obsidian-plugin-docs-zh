import{_ as s,c as a,o as n,a as o}from"./app.2f7f52ee.js";const i=JSON.parse('{"title":"\u72B6\u6001\u7BA1\u7406","description":"","frontmatter":{"title":"\u72B6\u6001\u7BA1\u7406"},"headers":[{"level":2,"title":"\u72B6\u6001\u53D8\u5316","slug":"\u72B6\u6001\u53D8\u5316"},{"level":2,"title":"Transactions","slug":"transactions"},{"level":2,"title":"\u4E0B\u4E00\u6B65","slug":"\u4E0B\u4E00\u6B65"}],"relativePath":"zh2.0/editor/extensions/state-management.md","lastUpdated":1661829227000}'),p={name:"zh2.0/editor/extensions/state-management.md"},l=o(`<h1 id="\u72B6\u6001\u7BA1\u7406" tabindex="-1">\u72B6\u6001\u7BA1\u7406 <a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a></h1><p>\u672C\u9875\u65E8\u5728\u4ECB\u7ECD<a href="./">\u7F16\u8F91\u5668\u6269\u5C55</a>\u7684\u72B6\u6001\u7BA1\u7406\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u9875\u65E8\u5728\u4E3A Obsidian \u63D2\u4EF6\u5F00\u53D1\u8005\u4EEC\u7CBE\u70BC CodeMirror 6 \u5B98\u65B9\u6587\u6863\u3002\u8981\u60F3\u83B7\u53D6\u66F4\u591A\u5173\u4E8E\u72B6\u6001\u7BA1\u7406\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u67E5\u9605 <a href="https://codemirror.net/docs/guide/#state-and-updates" target="_blank" rel="noreferrer">State and Updates</a> \u8FD9\u7BC7\u6587\u6863\u3002</p></div><h2 id="\u72B6\u6001\u53D8\u5316" tabindex="-1">\u72B6\u6001\u53D8\u5316 <a class="header-anchor" href="#\u72B6\u6001\u53D8\u5316" aria-hidden="true">#</a></h2><p>\u5728\u5927\u90E8\u5206\u7684\u5E94\u7528\u4E2D\uFF0C\u60A8\u53EF\u80FD\u4F1A\u901A\u8FC7\u4E3A\u4E00\u4E2A\u5C5E\u6027\u6216\u8005\u53D8\u91CF\u5206\u914D\u4E00\u4E2A\u65B0\u503C\u7684\u65B9\u5F0F\u6765\u66F4\u65B0\u72B6\u6001\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u539F\u5148\u7684\u503C\u5C31\u4F1A\u6C38\u8FDC\u4E22\u5931\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># Heading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">note </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">## Heading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// How to undo this?</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u4E86\u652F\u6301\u5BF9\u7528\u6237\u5DE5\u4F5C\u533A\u7684\u7C7B\u4F3C\u64A4\u9500\u4EE5\u53CA\u91CD\u7F6E\u66F4\u6539\u7684\u529F\u80FD\uFF0C\u8BF8\u5982 Obsidian \u7684\u5E94\u7528\u4F1A\u4FDD\u7559\u6240\u6709\u7684\u5386\u53F2\u6539\u52A8\u3002\u8981\u64A4\u56DE\u6539\u52A8\uFF0C\u60A8\u53EF\u4EE5\u8FD4\u56DE\u6539\u52A8\u524D\u7684\u65F6\u95F4\u70B9\u3002</p><table><thead><tr><th></th><th>State</th></tr></thead><tbody><tr><td>0</td><td></td></tr><tr><td>1</td><td>Heading</td></tr><tr><td>2</td><td># Heading</td></tr><tr><td>3</td><td>## Heading</td></tr></tbody></table><p>\u5728 TypeScript \u4E2D\uFF0C\u60A8\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u7ED3\u679C\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> changes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChangeSpec</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heading</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">changes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="transactions" tabindex="-1">Transactions <a class="header-anchor" href="#transactions" aria-hidden="true">#</a></h2><p>\u8BD5\u60F3\u4E00\u4E2A\u5728\u6309\u4E0B\u53CC\u5F15\u53F7 <code>&quot;</code> \u540E\u4F1A\u5728\u9009\u4E2D\u6587\u672C\u524D\u540E\u52A0\u4E0A\u8BE5\u6807\u70B9\u7B26\u53F7\u7684\u529F\u80FD\u3002\u5B9E\u73B0\u8BE5\u529F\u80FD\u7684\u4E00\u79CD\u65B9\u5F0F\u662F\uFF1A</p><ol><li>\u5728\u9009\u4E2D\u7684\u6587\u672C\u524D\u6DFB\u52A0 <code>&quot;</code>\u3002</li><li>\u5728\u9009\u4E2D\u7684\u6587\u672C\u540E\u6DFB\u52A0 <code>&quot;</code>\u3002</li></ol><p>\u6CE8\u610F\u8FD9\u79CD\u5B9E\u73B0\u5305\u542B\u4E86 <strong>\u4E24\u6B21</strong> \u64CD\u4F5C\u3002\u5982\u679C\u60A8\u5C06\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u6DFB\u52A0\u5230\u4E86\u64A4\u9500\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u90A3\u4E48\u7528\u6237\u5C06\u9700\u8981\u64A4\u56DE <strong>\u4E24\u6B21</strong>\uFF0C\u6BCF\u6B21\u64A4\u56DE\u4E00\u4E2A\u53CC\u5F15\u53F7\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\uFF0C\u662F\u5426\u53EF\u4EE5\u5C06\u8FD9\u4E24\u6B21\u6539\u52A8\u5408\u5E76\u6210\u4E00\u6B21\uFF1F</p><p>\u5728\u7F16\u8F91\u5668\u6269\u5C55\u4E2D\uFF0C\u4E00\u7EC4\u53D1\u751F\u5728\u4E00\u8D77\u7684\u72B6\u6001\u53D8\u5316\u88AB\u79F0\u4E4B\u4E3A <strong>transaction</strong>\u3002</p><p>\u5982\u679C\u7ED3\u5408\u60A8\u5230\u76EE\u524D\u4E3A\u6B62\u6240\u5B66\u7684\u77E5\u8BC6\uFF0C\u5982\u679C\u5141\u8BB8 transaction \u53EA\u5305\u542B\u5355\u4E2A\u72B6\u6001\u66F4\u6539, \u90A3\u4E48\u53EF\u4EE5\u5C06\u72B6\u6001\u89C6\u4E3A transaction \u7684 <em>\u5386\u53F2</em>\u3002</p><p>\u5728\u7F16\u8F91\u5668\u6269\u5C55\u4E2D\uFF0C\u5C06\u6240\u6709\u8FD9\u4E9B\u529F\u80FD\u653E\u5728\u4E00\u8D77\u6765\u5B9E\u73B0\u73AF\u7ED5\u7279\u6027\uFF0C\u4E0B\u9762\u662F\u4F60\u5982\u4F55\u6DFB\u52A0\u6216\u5206\u6D3E\u4E8B\u52A1\u5230\u7F16\u8F91\u5668\u89C6\u56FE\u7684\u65B9\u6CD5:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">changes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> selectionStart</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> selectionEnd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0B\u4E00\u6B65" tabindex="-1">\u4E0B\u4E00\u6B65 <a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a></h2><p>\u5728\u672C\u9875\u4E2D\uFF0C\u60A8\u4E86\u89E3\u4E86\u5982\u4F55\u5C06\u72B6\u6001\u5EFA\u6A21\u4E3A\u4E00\u7CFB\u5217\u72B6\u6001\u66F4\u6539\uFF0C\u4EE5\u53CA\u5982\u4F55\u5C06\u5B83\u4EEC\u5206\u7EC4\u5230\u4E8B\u52A1\u4E2D\u3002</p><p>\u8981\u60F3\u77E5\u9053\u5982\u4F55\u7BA1\u7406\u60A8\u7F16\u8F91\u5668\u4E2D\u7684\u81EA\u5B9A\u4E49\u72B6\u6001\uFF0C\u8BF7\u67E5\u9605 <a href="./state-fields.html">\u72B6\u6001\u5B57\u6BB5</a> \u8FD9\u7BC7\u6587\u6863\u3002</p>`,21),t=[l];function e(r,c,D,y,F,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
