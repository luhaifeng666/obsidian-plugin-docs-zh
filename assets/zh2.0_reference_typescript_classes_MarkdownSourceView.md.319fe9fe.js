import{_ as a,c as e,o as s,U as n}from"./chunks/framework.064ffc6f.js";const b=JSON.parse('{"title":"MarkdownSourceView","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/MarkdownSourceView.md","lastUpdated":1678847704000}'),l={name:"zh2.0/reference/typescript/classes/MarkdownSourceView.md"},r=n(`<h1 id="markdownsourceview" tabindex="-1">MarkdownSourceView <a class="header-anchor" href="#markdownsourceview" aria-label="Permalink to &quot;MarkdownSourceView&quot;">​</a></h1><p>实现 <code>MarkdownSubView</code>, <code>HoverParent</code>, <code>MarkdownFileInfo</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(view: MarkdownView)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-label="Permalink to &quot;app&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> App</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="cmeditor" tabindex="-1">cmEditor <a class="header-anchor" href="#cmeditor" aria-label="Permalink to &quot;cmEditor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cmEditor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> any</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hoverpopover" tabindex="-1">hoverPopover <a class="header-anchor" href="#hoverpopover" aria-label="Permalink to &quot;hoverPopover&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">hoverPopover</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HoverPopover</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> clear: boolean): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getselection" tabindex="-1">getSelection <a class="header-anchor" href="#getselection" aria-label="Permalink to &quot;getSelection&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getSelection</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getscroll" tabindex="-1">getScroll <a class="header-anchor" href="#getscroll" aria-label="Permalink to &quot;getScroll&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getScroll</span><span style="color:#A6ACCD;">(): number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="applyscroll" tabindex="-1">applyScroll <a class="header-anchor" href="#applyscroll" aria-label="Permalink to &quot;applyScroll&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">applyScroll</span><span style="color:#A6ACCD;">(scroll: number): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,24),o=[r];function t(p,i,c,d,h,u){return s(),e("div",null,o)}const v=a(l,[["render",t]]);export{b as __pageData,v as default};
