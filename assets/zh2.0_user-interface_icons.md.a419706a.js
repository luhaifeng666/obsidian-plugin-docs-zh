import{_ as s,c as n,o as a,a as o}from"./app.741f1ead.js";const d=JSON.parse('{"title":"\u56FE\u6807","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D4F\u89C8\u53EF\u7528\u7684 icon","slug":"\u6D4F\u89C8\u53EF\u7528\u7684-icon"},{"level":2,"title":"\u7ED8\u5236 icons","slug":"\u7ED8\u5236-icons"},{"level":2,"title":"\u6DFB\u52A0\u60A8\u81EA\u5DF1\u7684 ico","slug":"\u6DFB\u52A0\u60A8\u81EA\u5DF1\u7684-ico"}],"relativePath":"zh2.0/user-interface/icons.md","lastUpdated":1661305878000}'),l={name:"zh2.0/user-interface/icons.md"},p=o(`<h1 id="\u56FE\u6807" tabindex="-1">\u56FE\u6807 <a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a></h1><p>Obsidian API \u4E2D\u7684\u4E00\u4E9B UI \u7EC4\u4EF6\u5141\u8BB8\u60A8\u914D\u7F6E\u4E0E\u4E4B\u5BF9\u5E94\u7684icon\u3002\u60A8\u53EF\u4EE5\u4ECE\u5185\u7F6E\u7684 icon \u4E2D\u9009\u62E9\u4E00\u4E2A\uFF0C\u6216\u8005\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684icon\u3002</p><h2 id="\u6D4F\u89C8\u53EF\u7528\u7684-icon" tabindex="-1">\u6D4F\u89C8\u53EF\u7528\u7684 icon <a class="header-anchor" href="#\u6D4F\u89C8\u53EF\u7528\u7684-icon" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u60F3\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 icon \u4EE5\u53CA\u5B83\u4EEC\u76F8\u5173\u7684\u540D\u79F0\uFF0C\u60A8\u53EF\u4EE5\u5B89\u88C5\u7531 mgmeyers \u63D0\u4F9B\u7684 <a href="https://github.com/mgmeyers/obsidian-icon-swapper" target="_blank" rel="noreferrer">Icon Swapper</a> \u63D2\u4EF6\u3002\u5C3D\u7BA1\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F\u7528\u81EA\u5B9A\u4E49 icon \u66FF\u6362\u5185\u7F6E icon\uFF0C\u540C\u65F6\u5B83\u4E5F\u662F Obsidian \u4E2D\u53EF\u7528\u56FE\u6807\u7684\u5217\u8868\u3002</p><h2 id="\u7ED8\u5236-icons" tabindex="-1">\u7ED8\u5236 icons <a class="header-anchor" href="#\u7ED8\u5236-icons" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u60F3\u5728\u60A8\u81EA\u5B9A\u4E49\u7684\u63A5\u53E3\u4E2D\u4F7F\u7528 icon\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="./../reference/typescript/functions/setIcon.html"><code>setIcon</code></a> \u65B9\u6CD5\u53BB\u6DFB\u52A0\u4E00\u4E2A icon \u5230 <a href="./html-elements.html">HTML element</a>\u3002\u4E0B\u4F8B\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u5411\u72B6\u6001\u680F\u4E2D\u6DFB\u52A0 icon\uFF1A</p><p>:::: code-group ::: code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setIcon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addStatusBarItem</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setIcon</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">14</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><h2 id="\u6DFB\u52A0\u60A8\u81EA\u5DF1\u7684-ico" tabindex="-1">\u6DFB\u52A0\u60A8\u81EA\u5DF1\u7684 ico <a class="header-anchor" href="#\u6DFB\u52A0\u60A8\u81EA\u5DF1\u7684-ico" aria-hidden="true">#</a></h2><p>\u8981\u60F3\u5728\u63D2\u4EF6\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49 icon\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="./../reference/typescript/functions/addIcon.html"><code>addIcon</code></a> \u65B9\u6CD5\uFF1A</p><p>:::: code-group ::: code-group-item main.ts</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">addIcon</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">onload</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">addIcon</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">circle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;50&quot; fill=&quot;currentColor&quot; /&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">addRibbonIcon</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">circle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Click me</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, you!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><p><code>addIcon</code> \u63A5\u53D7\u4E24\u4E2A\u53C2\u6570:</p><ol><li>\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\u60A8\u7684 icon \u7684\u540D\u79F0\u3002</li><li>\u4E0D\u5305\u542B <code>&lt;svg&gt;</code> \u6807\u7B7E\u7684 icon SVG \u5185\u5BB9\u3002</li></ol><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u60A8\u7684\u56FE\u6807\u9700\u8981\u9002\u5408 <code>0 0 100 100</code> \u89C6\u56FE\u6846\u624D\u80FD\u88AB\u6B63\u786E\u7ED8\u5236\u3002</p><p>\u5728\u8C03\u7528\u5B8C <code>addIcon</code> \u540E\uFF0C\u60A8\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528\u4EFB\u610F\u5185\u7F6E icon \u4E00\u6837\u4F7F\u7528\u8BE5 icon\u3002</p>`,18),e=[p];function c(t,r,F,y,D,i){return a(),n("div",null,e)}const A=s(l,[["render",c]]);export{d as __pageData,A as default};
