import{_ as e,o as a,c as s,V as t}from"./chunks/framework.5378c159.js";const F=JSON.parse('{"title":"prepareFuzzySearch","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/functions/prepareFuzzySearch.md","filePath":"zh2.0/reference/typescript/functions/prepareFuzzySearch.md","lastUpdated":1685691620000}'),r={name:"zh2.0/reference/typescript/functions/prepareFuzzySearch.md"},n=t('<h1 id="preparefuzzysearch" tabindex="-1">prepareFuzzySearch <a class="header-anchor" href="#preparefuzzysearch" aria-label="Permalink to &quot;prepareFuzzySearch&quot;">​</a></h1><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">prepareFuzzySearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>构造一个在目标字符串上运行的模糊搜索回调。 如果搜索次数超过数千次，性能可能会出现问题。 如果性能有问题，可以考虑使用 <code>prepareSimpleSearch</code> 来代替。</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code></td><td>the fuzzy query.</td></tr></tbody></table>',5),p=[n];function o(l,c,i,y,d,h){return a(),s("div",null,p)}const C=e(r,[["render",o]]);export{F as __pageData,C as default};
