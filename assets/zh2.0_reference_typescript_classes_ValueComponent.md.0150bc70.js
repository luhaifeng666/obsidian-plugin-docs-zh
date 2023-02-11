import{_ as e,c as s,o as a,a as n}from"./app.9c759d01.js";const m=JSON.parse('{"title":"ValueComponent","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"registerOptionListener","slug":"registeroptionlistener","link":"#registeroptionlistener","children":[]},{"level":3,"title":"getValue","slug":"getvalue","link":"#getvalue","children":[]},{"level":3,"title":"setValue","slug":"setvalue","link":"#setvalue","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/ValueComponent.md","lastUpdated":1676080393000}'),t={name:"zh2.0/reference/typescript/classes/ValueComponent.md"},l=n(`<h1 id="valuecomponent" tabindex="-1">ValueComponent <a class="header-anchor" href="#valuecomponent" aria-hidden="true">#</a></h1><p>继承自 <code>BaseComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="registeroptionlistener" tabindex="-1">registerOptionListener <a class="header-anchor" href="#registeroptionlistener" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">registerOptionListener</span><span style="color:#A6ACCD;">(listeners: Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> T</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> key: string): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getvalue" tabindex="-1">getValue <a class="header-anchor" href="#getvalue" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getValue</span><span style="color:#A6ACCD;">(): T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setvalue" tabindex="-1">setValue <a class="header-anchor" href="#setvalue" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">setValue</span><span style="color:#A6ACCD;">(value: T): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,11),r=[l];function o(p,i,c,d,u,h){return a(),s("div",null,r)}const y=e(t,[["render",o]]);export{m as __pageData,y as default};