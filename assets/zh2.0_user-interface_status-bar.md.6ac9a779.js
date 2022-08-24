import{_ as s,c as a,o as n,a as p}from"./app.741f1ead.js";const l="/obsidian-plugin-docs-zh/images/img/status-bar.png",d=JSON.parse('{"title":"\u72B6\u6001\u680F","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/user-interface/status-bar.md","lastUpdated":1661305878000}'),o={name:"zh2.0/user-interface/status-bar.md"},t=p(`<h1 id="\u72B6\u6001\u680F" tabindex="-1">\u72B6\u6001\u680F <a class="header-anchor" href="#\u72B6\u6001\u680F" aria-hidden="true">#</a></h1><p>\u8981\u60F3\u5728\u72B6\u6001\u680F\u4E2D\u521B\u5EFA\u65B0\u5757\uFF0C\u53EF\u4EE5\u5728 <code>onload()</code> \u4E8B\u4EF6\u4E2D\u8C03\u7528 <a href="./../reference/typescript/classes/Plugin_2.html#addstatusbaritem"><code>addStatusBarItem()</code></a> \u65B9\u6CD5\u3002\u60A8\u53EF\u4EE5\u5C06\u81EA\u5B9A\u4E49\u5143\u7D20\u63D2\u5165\u5230 <code>addStatusBarItem()</code> \u4E8B\u4EF6\u8FD4\u56DE\u7684 <a href="./html-elements.html">HTML \u5143\u7D20</a> \u4E2D\u3002</p><div class="warning custom-block"><p class="custom-block-title">Obsidian \u624B\u673A\u5BA2\u6237\u7AEF</p><p>\u624B\u673A\u7AEF Obsidian App <a href="https://discord.com/channels/686053708261228577/707816848615407697/832321402106544179" target="_blank" rel="noreferrer"><strong>\u4E0D\u652F\u6301</strong></a> \u81EA\u5B9A\u4E49\u72B6\u6001\u680F\u9879\u76EE\u3002</p></div><p>:::: code-group ::: code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addStatusBarItem</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello from the status bar \u{1F44B}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u60F3\u8981\u77E5\u9053\u66F4\u591A\u5173\u4E8E\u5982\u4F55\u4F7F\u7528 <code>createEl()</code> \u4E8B\u4EF6\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u67E5\u9605 <a href="./html-elements.html">HTML \u5143\u7D20</a> \u8FD9\u7BC7\u6587\u6863\u3002</p></div><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u591A\u6B21\u8C03\u7528 <code>addStatusBarItem()</code> \u65B9\u6CD5\u6765\u6DFB\u52A0\u591A\u4E2A\u72B6\u6001\u680F\u9879\u76EE\u3002\u7531\u4E8E Obsidian \u5728\u5B83\u4EEC\u4E4B\u95F4\u6DFB\u52A0\u4E86\u95F4\u9699\uFF0C\u56E0\u6B64\u5982\u679C\u60A8\u9700\u8981\u63A7\u5236\u95F4\u8DDD\uFF0C\u5219\u9700\u8981\u5728\u540C\u4E00\u4E2A\u72B6\u6001\u680F\u9879\u4E0A\u521B\u5EFA\u591A\u4E2A HTML \u5143\u7D20\u3002</p><p>:::: code-group ::: code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fruits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addStatusBarItem</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fruits</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u{1F34E}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fruits</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u{1F34C}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">veggies</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addStatusBarItem</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">veggies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u{1F966}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">veggies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u{1F96C}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><p>\u4E0A\u8FF0\u793A\u4F8B\u5728\u72B6\u6001\u680F\u4E2D\u7684\u663E\u793A\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+l+'" alt="Status bar"></p>',13),e=[t];function c(r,F,D,y,i,A){return n(),a("div",null,e)}const u=s(o,[["render",c]]);export{d as __pageData,u as default};
