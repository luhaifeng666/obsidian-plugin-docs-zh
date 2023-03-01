import{_ as e,c as a,o as s,a as n}from"./app.fbb68172.js";const m=JSON.parse('{"title":"FileView","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"allowNoFile","slug":"allownofile","link":"#allownofile","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"navigation","slug":"navigation","link":"#navigation","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"getDisplayText","slug":"getdisplaytext","link":"#getdisplaytext","children":[]},{"level":3,"title":"onload","slug":"onload","link":"#onload","children":[]},{"level":3,"title":"getState","slug":"getstate","link":"#getstate","children":[]},{"level":3,"title":"setState","slug":"setstate","link":"#setstate","children":[]},{"level":3,"title":"onLoadFile","slug":"onloadfile","link":"#onloadfile","children":[]},{"level":3,"title":"onUnloadFile","slug":"onunloadfile","link":"#onunloadfile","children":[]},{"level":3,"title":"onRename","slug":"onrename","link":"#onrename","children":[]},{"level":3,"title":"canAcceptExtension","slug":"canacceptextension","link":"#canacceptextension","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/FileView.md","lastUpdated":1677639592000}'),l={name:"zh2.0/reference/typescript/classes/FileView.md"},t=n(`<h1 id="fileview" tabindex="-1">FileView <a class="header-anchor" href="#fileview" aria-hidden="true">#</a></h1><p>继承自 <code>ItemView</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(leaf: WorkspaceLeaf)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="allownofile" tabindex="-1">allowNoFile <a class="header-anchor" href="#allownofile" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">allowNoFile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> TFile</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="navigation" tabindex="-1">navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">navigation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>视图是否用于导航。 如果您的视图是不被用于导航的静态视图，请将其设置为 false。 （比如：文件搜索，日历等等。） 如果您的视图用于打开文件或者以其他方式导航，请将其设置为 true （比如：Markdown 编辑器视图，Kanban 视图，PDF 视图等等） 文件视图默认是可以被导航的。</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getdisplaytext" tabindex="-1">getDisplayText <a class="header-anchor" href="#getdisplaytext" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">getDisplayText</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>覆盖它以加载您的组件</p><h3 id="getstate" tabindex="-1">getState <a class="header-anchor" href="#getstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">(): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(state: any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result: ViewStateResult): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onloadfile" tabindex="-1">onLoadFile <a class="header-anchor" href="#onloadfile" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onLoadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onunloadfile" tabindex="-1">onUnloadFile <a class="header-anchor" href="#onunloadfile" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onUnloadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onrename" tabindex="-1">onRename <a class="header-anchor" href="#onrename" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onRename</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="canacceptextension" tabindex="-1">canAcceptExtension <a class="header-anchor" href="#canacceptextension" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">canAcceptExtension</span><span style="color:#A6ACCD;">(extension: string): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,30),i=[t];function o(r,p,c,d,h,u){return s(),a("div",null,i)}const g=e(l,[["render",o]]);export{m as __pageData,g as default};