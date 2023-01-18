import{_ as s,c as e,o as a,a as l}from"./app.f15eeb53.js";const g=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"app","slug":"app","link":"#app","children":[]},{"level":3,"title":"scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"containerEl","slug":"containerel","link":"#containerel","children":[]},{"level":3,"title":"modalEl","slug":"modalel","link":"#modalel","children":[]},{"level":3,"title":"titleEl","slug":"titleel","link":"#titleel","children":[]},{"level":3,"title":"contentEl","slug":"contentel","link":"#contentel","children":[]},{"level":3,"title":"shouldRestoreSelection","slug":"shouldrestoreselection","link":"#shouldrestoreselection","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"open","slug":"open","link":"#open","children":[]},{"level":3,"title":"close","slug":"close","link":"#close","children":[]},{"level":3,"title":"onOpen","slug":"onopen","link":"#onopen","children":[]},{"level":3,"title":"onClose","slug":"onclose","link":"#onclose","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/Modal.md","lastUpdated":1674008423000}'),n={name:"zh2.0/reference/typescript/classes/Modal.md"},t=l(`<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><p>实现 <code>CloseableComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(app: App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> App</span></span>
<span class="line"></span></code></pre></div><h3 id="scope" tabindex="-1">scope <a class="header-anchor" href="#scope" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">scope</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Scope</span></span>
<span class="line"></span></code></pre></div><h3 id="containerel" tabindex="-1">containerEl <a class="header-anchor" href="#containerel" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">containerEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="modalel" tabindex="-1">modalEl <a class="header-anchor" href="#modalel" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">modalEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="titleel" tabindex="-1">titleEl <a class="header-anchor" href="#titleel" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">titleEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="contentel" tabindex="-1">contentEl <a class="header-anchor" href="#contentel" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">contentEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="shouldrestoreselection" tabindex="-1">shouldRestoreSelection <a class="header-anchor" href="#shouldrestoreselection" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">shouldRestoreSelection</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="onopen" tabindex="-1">onOpen <a class="header-anchor" href="#onopen" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">onOpen</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="onclose" tabindex="-1">onClose <a class="header-anchor" href="#onclose" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">onClose</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div>`,28),o=[t];function p(c,i,r,d,h,u){return a(),e("div",null,o)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};
