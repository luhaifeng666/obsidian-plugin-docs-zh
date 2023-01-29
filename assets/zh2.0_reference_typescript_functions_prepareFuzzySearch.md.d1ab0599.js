import{_ as e,c as a,o as s,a as r}from"./app.d1f61182.js";const F=JSON.parse('{"title":"prepareFuzzySearch","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"zh2.0/reference/typescript/functions/prepareFuzzySearch.md","lastUpdated":1675003003000}'),t={name:"zh2.0/reference/typescript/functions/prepareFuzzySearch.md"},n=r(`<h1 id="preparefuzzysearch" tabindex="-1">prepareFuzzySearch <a class="header-anchor" href="#preparefuzzysearch" aria-hidden="true">#</a></h1><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">prepareFuzzySearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchResult</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Construct a fuzzy search callback that runs on a target string. Performance may be an issue if you are running the search for more than a few thousand times. If performance is a problem, consider using <code>prepareSimpleSearch</code> instead.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code></td><td>the fuzzy query.</td></tr></tbody></table>`,5),p=[n];function o(l,c,i,y,d,h){return s(),a("div",null,p)}const C=e(t,[["render",o]]);export{F as __pageData,C as default};