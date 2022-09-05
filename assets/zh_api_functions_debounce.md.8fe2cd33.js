import{_ as s,c as a,o as n,a as e}from"./app.0177d335.js";const A=JSON.parse('{"title":"debounce","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters"}],"relativePath":"zh/api/functions/debounce.md","lastUpdated":1662340628000}'),o={name:"zh/api/functions/debounce.md"},t=e(`<h1 id="debounce" tabindex="-1">debounce <a class="header-anchor" href="#debounce" aria-hidden="true">#</a></h1><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#82AAFF;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">T</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">timeout</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">resetTimer</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Debouncer</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><p>\u6807\u51C6\u7684\u9632\u6296\u65B9\u6CD5\u3002</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>cb</code></td><td>\u56DE\u8C03\u51FD\u6570</td></tr><tr><td><code>timeout</code></td><td>\u5EF6\u65F6</td></tr><tr><td><code>resetTimer</code></td><td>\u5728\u9632\u6296\u65B9\u6CD5\u88AB\u518D\u6B21\u8C03\u7528\u65F6\u662F\u5426\u9700\u8981\u6E05\u7A7A\u5EF6\u65F6</td></tr></tbody></table>`,5),l=[t];function p(r,c,d,D,y,C){return n(),a("div",null,l)}const i=s(o,[["render",p]]);export{A as __pageData,i as default};