import{_ as e,c as s,o as a,a as n}from"./app.9c759d01.js";const m=JSON.parse('{"title":"View","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"app","slug":"app","link":"#app","children":[]},{"level":3,"title":"icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"navigation","slug":"navigation","link":"#navigation","children":[]},{"level":3,"title":"leaf","slug":"leaf","link":"#leaf","children":[]},{"level":3,"title":"containerEl","slug":"containerel","link":"#containerel","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"onOpen","slug":"onopen","link":"#onopen","children":[]},{"level":3,"title":"onClose","slug":"onclose","link":"#onclose","children":[]},{"level":3,"title":"getViewType","slug":"getviewtype","link":"#getviewtype","children":[]},{"level":3,"title":"getState","slug":"getstate","link":"#getstate","children":[]},{"level":3,"title":"setState","slug":"setstate","link":"#setstate","children":[]},{"level":3,"title":"getEphemeralState","slug":"getephemeralstate","link":"#getephemeralstate","children":[]},{"level":3,"title":"setEphemeralState","slug":"setephemeralstate","link":"#setephemeralstate","children":[]},{"level":3,"title":"getIcon","slug":"geticon","link":"#geticon","children":[]},{"level":3,"title":"onResize","slug":"onresize","link":"#onresize","children":[]},{"level":3,"title":"getDisplayText","slug":"getdisplaytext","link":"#getdisplaytext","children":[]},{"level":3,"title":"onPaneMenu","slug":"onpanemenu","link":"#onpanemenu","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/View.md","lastUpdated":1676080393000}'),l={name:"zh2.0/reference/typescript/classes/View.md"},t=n(`<h1 id="view" tabindex="-1">View <a class="header-anchor" href="#view" aria-hidden="true">#</a></h1><p>继承自 <code>Component</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(leaf: WorkspaceLeaf)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> App</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="navigation" tabindex="-1">navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">navigation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>视图是否用于导航。 如果您的视图是个静态视图，不打算被导航离开，请设置为 false。 （比如：文件搜索，日历等等。） 如果您的视图打开文件或可以以其他方式导航，请将其设置为 true。 （比如：Markdonw 编辑器视图, 看板视图, PDF 视图等等）</p><h3 id="leaf" tabindex="-1">leaf <a class="header-anchor" href="#leaf" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">leaf</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> WorkspaceLeaf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="containerel" tabindex="-1">containerEl <a class="header-anchor" href="#containerel" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">containerEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="onopen" tabindex="-1">onOpen <a class="header-anchor" href="#onopen" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">protected </span><span style="color:#82AAFF;">onOpen</span><span style="color:#A6ACCD;">(): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onclose" tabindex="-1">onClose <a class="header-anchor" href="#onclose" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">protected </span><span style="color:#82AAFF;">onClose</span><span style="color:#A6ACCD;">(): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getviewtype" tabindex="-1">getViewType <a class="header-anchor" href="#getviewtype" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getViewType</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getstate" tabindex="-1">getState <a class="header-anchor" href="#getstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">(): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(state: any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result: ViewStateResult): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getephemeralstate" tabindex="-1">getEphemeralState <a class="header-anchor" href="#getephemeralstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">getEphemeralState</span><span style="color:#A6ACCD;">(): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setephemeralstate" tabindex="-1">setEphemeralState <a class="header-anchor" href="#setephemeralstate" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setEphemeralState</span><span style="color:#A6ACCD;">(state: any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="geticon" tabindex="-1">getIcon <a class="header-anchor" href="#geticon" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">getIcon</span><span style="color:#A6ACCD;">(): IconName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onresize" tabindex="-1">onResize <a class="header-anchor" href="#onresize" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onResize</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在该视图尺寸发生变化时被调用。</p><h3 id="getdisplaytext" tabindex="-1">getDisplayText <a class="header-anchor" href="#getdisplaytext" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getDisplayText</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onpanemenu" tabindex="-1">onPaneMenu <a class="header-anchor" href="#onpanemenu" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onPaneMenu</span><span style="color:#A6ACCD;">(menu: Menu</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">more-options</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tab-header</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>填充窗格菜单。</p><p>(替换之前移除的 <code>onHeaderMenu</code> 和 <code>onMoreOptionsMenu</code> 方法)</p>`,42),i=[t];function p(r,o,c,d,h,u){return a(),s("div",null,i)}const g=e(l,[["render",p]]);export{m as __pageData,g as default};