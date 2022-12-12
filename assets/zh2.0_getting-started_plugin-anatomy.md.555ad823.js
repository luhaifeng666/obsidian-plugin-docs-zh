import{_ as s,c as n,o as a,a as l}from"./app.fa4f22b0.js";const A=JSON.parse('{"title":"\u63D2\u4EF6\u5256\u6790","description":"","frontmatter":{"title":"\u63D2\u4EF6\u5256\u6790"},"headers":[{"level":2,"title":"\u63D2\u4EF6\u751F\u547D\u5468\u671F","slug":"\u63D2\u4EF6\u751F\u547D\u5468\u671F"}],"relativePath":"zh2.0/getting-started/plugin-anatomy.md","lastUpdated":1670809204000}'),p={name:"zh2.0/getting-started/plugin-anatomy.md"},o=l(`<h1 id="\u63D2\u4EF6\u5256\u6790" tabindex="-1">\u63D2\u4EF6\u5256\u6790 <a class="header-anchor" href="#\u63D2\u4EF6\u5256\u6790" aria-hidden="true">#</a></h1><p><a href="./../reference/typescript/classes/Plugin_2.html"><code>Plugin</code></a> \u7C7B\u4E2D\u5B9A\u4E49\u4E86\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u5E76\u4E14\u5C06\u64CD\u4F5C\u66B4\u9732\u7ED9\u5176\u4ED6\u63D2\u4EF6\uFF1A</p><div class="language-ts {1,3} main.ts"><button class="copy"></button><span class="lang">ts {1,3} main.ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Configure resources needed by the plugin.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onunload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Release any resources configured by the plugin.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u63D2\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1">\u63D2\u4EF6\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u63D2\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><p><a href="./../reference/typescript/classes/Component.html#onload"><code>onload()</code></a> \u751F\u547D\u5468\u671F\u51FD\u6570\u5728\u7528\u6237\u6FC0\u6D3B Obsidian \u63D2\u4EF6\u65F6\u89E6\u53D1\u3002\u8FD9\u5C06\u662F\u60A8\u8BBE\u7F6E\u63D2\u4EF6\u5927\u90E8\u5206\u529F\u80FD\u7684\u5730\u65B9\u3002</p><p><a href="./../reference/typescript/classes/Component.html#onunload"><code>onunload()</code></a> \u751F\u547D\u5468\u671F\u51FD\u6570\u5728\u63D2\u4EF6\u88AB\u7981\u7528\u65F6\u89E6\u53D1\u3002\u63D2\u4EF6\u6240\u8C03\u7528\u7684\u4EFB\u4F55\u8D44\u6E90\u5FC5\u987B\u5728\u8FD9\u91CC\u5F97\u5230\u91CA\u653E\uFF0C\u4EE5\u9632\u6B62\u5728\u60A8\u7684\u63D2\u4EF6\u88AB\u7981\u7528\u540E\u5BF9 Obsidian \u7684\u6027\u80FD\u4EA7\u751F\u5F71\u54CD\u3002</p><p>\u4E3A\u4E86\u66F4\u597D\u7684\u7406\u89E3\u8FD9\u4E9B\u65B9\u6CD5\u4F1A\u5728\u4F55\u65F6\u88AB\u8C03\u7528\uFF0C\u5F53\u63D2\u4EF6\u88AB\u52A0\u8F7D\u6216\u8005\u88AB\u5378\u8F7D\u65F6\uFF0C\u60A8\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u4E2D\u6253\u5370\u4E00\u6761\u6D88\u606F\u3002\u63A7\u5236\u53F0\u662F\u4E2A\u5F88\u6709\u7528\u7684\u5DE5\u5177\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u4EEC\u76D1\u63A7\u4ED6\u4EEC\u4EE3\u7801\u7684\u72B6\u6001\u3002</p><p>\u8981\u60F3\u6253\u5F00\u63A7\u5236\u53F0:</p><ol><li>\u901A\u8FC7\u5728 Windows \u548C Linux \u7CFB\u7EDF\u4E2D\u6309\u4E0B\u7EC4\u5408\u952E Ctrl+Shift+I\uFF0C\u6216\u8005\u5728 macOS \u7CFB\u7EDF\u4E2D\u6309\u4E0B\u7EC4\u5408\u952E Cmd-Option-I \u7684\u65B9\u5F0F\u6253\u5F00\u6216\u5173\u95ED\u5F00\u53D1\u8005\u5DE5\u5177\u3002</li><li>\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u7684\u7A97\u53E3\u4E2D\u70B9\u51FB Console \u6807\u7B7E\u6253\u5F00\u63A7\u5236\u53F0\u3002</li></ol><div class="language-ts main.ts"><button class="copy"></button><span class="lang">ts main.ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// highlight-next-line</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">loading plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onunload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// highlight-next-line</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unloading plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,y,D,F,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};