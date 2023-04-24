import{_ as a,c as e,o as s,V as n}from"./chunks/framework.43aca675.js";const m=JSON.parse('{"title":"TextFileView","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/TextFileView.md","lastUpdated":1682328790000}'),l={name:"zh2.0/reference/typescript/classes/TextFileView.md"},t=n('<h1 id="textfileview" tabindex="-1">TextFileView <a class="header-anchor" href="#textfileview" aria-label="Permalink to &quot;TextFileView&quot;">​</a></h1><p>继承自 <code>EditableFileView</code></p><p>该类实现了一个基于纯文本的可编辑文件视图，可以在给定的编辑器中加载以及保存它。</p><p>注意，默认情况下该视图仅在其关闭时被保存。要想自动保存，您的编辑器需要在内容发生变化时调用 <code>this.requestSave()</code>。</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(leaf: WorkspaceLeaf)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>内存数据</p><h3 id="requestsave" tabindex="-1">requestSave <a class="header-anchor" href="#requestsave" aria-label="Permalink to &quot;requestSave&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">requestSave</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>从当前时间开始2s内退出保存</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="onunloadfile" tabindex="-1">onUnloadFile <a class="header-anchor" href="#onunloadfile" aria-label="Permalink to &quot;onUnloadFile&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onUnloadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onloadfile" tabindex="-1">onLoadFile <a class="header-anchor" href="#onloadfile" aria-label="Permalink to &quot;onLoadFile&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onLoadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="save" tabindex="-1">save <a class="header-anchor" href="#save" aria-label="Permalink to &quot;save&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">save</span><span style="color:#A6ACCD;">(clear</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getviewdata" tabindex="-1">getViewData <a class="header-anchor" href="#getviewdata" aria-label="Permalink to &quot;getViewData&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getViewData</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>从编辑器中获取数据。该方法在将编辑器中的内容保存到文件中时被调用。</p><h3 id="setviewdata" tabindex="-1">setViewData <a class="header-anchor" href="#setviewdata" aria-label="Permalink to &quot;setViewData&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">setViewData</span><span style="color:#A6ACCD;">(data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> clear: boolean): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>设置数据到编辑器中。该方法通常用来加载文件内容。</p><p>如果设置了 clear, 浙江意味着我们正在打开一个完全不同的文件。 在情况下，您应该调用 clear() 方法，或者在给定要设置的新数据的情况下实现一个稍微更有效的清除机制。</p><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>清空编辑器。该方法通常在我们需要打开一个完全不同的文件时调用，所以最好清除编辑器的所有状态，比如撤销/重做历史记录，以及任何与之前文件相关的缓存/索引。</p>',30),o=[t];function r(i,p,c,d,h,u){return s(),e("div",null,o)}const F=a(l,[["render",r]]);export{m as __pageData,F as default};
