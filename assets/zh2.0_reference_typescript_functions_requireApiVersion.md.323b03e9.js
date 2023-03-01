import{_ as e,c as s,o as a,a as r}from"./app.fbb68172.js";const A=JSON.parse('{"title":"requireApiVersion","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"zh2.0/reference/typescript/functions/requireApiVersion.md","lastUpdated":1677639592000}'),t={name:"zh2.0/reference/typescript/functions/requireApiVersion.md"},n=r(`<h1 id="requireapiversion" tabindex="-1">requireApiVersion <a class="header-anchor" href="#requireapiversion" aria-hidden="true">#</a></h1><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">requireApiVersion</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果 API 的版本大于等于要求的版本，则返回 true。 使用此方法限制需要指定 API 版本的功能，以避免在老版本的 Obsidian 构建时崩溃。</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>version</code></td><td></td></tr></tbody></table>`,5),o=[n];function i(p,l,c,d,h,u){return a(),s("div",null,o)}const y=e(t,[["render",i]]);export{A as __pageData,y as default};