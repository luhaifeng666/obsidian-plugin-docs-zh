import{_ as e,c as a,o as s,a as t}from"./app.81c6d9a5.js";const y=JSON.parse('{"title":"MarkdownView","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"editor","slug":"editor"},{"level":3,"title":"previewMode","slug":"previewmode"},{"level":3,"title":"currentMode","slug":"currentmode"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"getViewType","slug":"getviewtype"},{"level":3,"title":"getMode","slug":"getmode"},{"level":3,"title":"getViewData","slug":"getviewdata"},{"level":3,"title":"clear","slug":"clear"},{"level":3,"title":"setViewData","slug":"setviewdata"},{"level":3,"title":"showSearch","slug":"showsearch"}],"relativePath":"zh2.0/reference/typescript/classes/MarkdownView.md","lastUpdated":1665192537000}'),n={name:"zh2.0/reference/typescript/classes/MarkdownView.md"},l=t(`<h1 id="markdownview" tabindex="-1">MarkdownView <a class="header-anchor" href="#markdownview" aria-hidden="true">#</a></h1><p>Extends <code>TextFileView</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(leaf: WorkspaceLeaf)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="editor" tabindex="-1">editor <a class="header-anchor" href="#editor" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">editor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Editor</span></span>
<span class="line"></span></code></pre></div><h3 id="previewmode" tabindex="-1">previewMode <a class="header-anchor" href="#previewmode" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">previewMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> MarkdownPreviewView</span></span>
<span class="line"></span></code></pre></div><h3 id="currentmode" tabindex="-1">currentMode <a class="header-anchor" href="#currentmode" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">currentMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> MarkdownSubView</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getviewtype" tabindex="-1">getViewType <a class="header-anchor" href="#getviewtype" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getViewType</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="getmode" tabindex="-1">getMode <a class="header-anchor" href="#getmode" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getMode</span><span style="color:#A6ACCD;">(): MarkdownViewModeType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="getviewdata" tabindex="-1">getViewData <a class="header-anchor" href="#getviewdata" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getViewData</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Gets the data from the editor. This will be called to save the editor contents to the file.</p><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Clear the editor. This is usually called when we&#39;re about to open a completely different file, so it&#39;s best to clear any editor states like undo-redo history, and any caches/indexes associated with the previous file contents.</p><h3 id="setviewdata" tabindex="-1">setViewData <a class="header-anchor" href="#setviewdata" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setViewData</span><span style="color:#A6ACCD;">(data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> clear: boolean): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Set the data to the editor. This is used to load the file contents.</p><p>If clear is set, then it means we&#39;re opening a completely different file. In that case, you should call clear(), or implement a slightly more efficient clearing mechanism given the new data to be set.</p><h3 id="showsearch" tabindex="-1">showSearch <a class="header-anchor" href="#showsearch" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">showSearch</span><span style="color:#A6ACCD;">(replace</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div>`,28),o=[l];function r(c,p,i,d,h,u){return s(),a("div",null,o)}const v=e(n,[["render",r]]);export{y as __pageData,v as default};