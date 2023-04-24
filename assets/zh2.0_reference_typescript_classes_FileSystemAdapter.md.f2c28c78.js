import{_ as a,c as s,o as e,V as n}from"./chunks/framework.43aca675.js";const y=JSON.parse('{"title":"FileSystemAdapter","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/FileSystemAdapter.md","lastUpdated":1682328790000}'),l={name:"zh2.0/reference/typescript/classes/FileSystemAdapter.md"},t=n('<h1 id="filesystemadapter" tabindex="-1">FileSystemAdapter <a class="header-anchor" href="#filesystemadapter" aria-label="Permalink to &quot;FileSystemAdapter&quot;">​</a></h1><p>实现 <code>DataAdapter</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getname" tabindex="-1">getName <a class="header-anchor" href="#getname" aria-label="Permalink to &quot;getName&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getbasepath" tabindex="-1">getBasePath <a class="header-anchor" href="#getbasepath" aria-label="Permalink to &quot;getBasePath&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getBasePath</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="mkdir" tabindex="-1">mkdir <a class="header-anchor" href="#mkdir" aria-label="Permalink to &quot;mkdir&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">mkdir</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="trashsystem" tabindex="-1">trashSystem <a class="header-anchor" href="#trashsystem" aria-label="Permalink to &quot;trashSystem&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">trashSystem</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">boolean</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="trashlocal" tabindex="-1">trashLocal <a class="header-anchor" href="#trashlocal" aria-label="Permalink to &quot;trashLocal&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">trashLocal</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rmdir" tabindex="-1">rmdir <a class="header-anchor" href="#rmdir" aria-label="Permalink to &quot;rmdir&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">rmdir</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> recursive: boolean): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="read" tabindex="-1">read <a class="header-anchor" href="#read" aria-label="Permalink to &quot;read&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="readbinary" tabindex="-1">readBinary <a class="header-anchor" href="#readbinary" aria-label="Permalink to &quot;readBinary&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">readBinary</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ArrayBuffer</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="write" tabindex="-1">write <a class="header-anchor" href="#write" aria-label="Permalink to &quot;write&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="writebinary" tabindex="-1">writeBinary <a class="header-anchor" href="#writebinary" aria-label="Permalink to &quot;writeBinary&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">writeBinary</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: ArrayBuffer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-label="Permalink to &quot;append&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">process</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fn: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getresourcepath" tabindex="-1">getResourcePath <a class="header-anchor" href="#getresourcepath" aria-label="Permalink to &quot;getResourcePath&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getResourcePath</span><span style="color:#A6ACCD;">(normalizedPath: string): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getfilepath" tabindex="-1">getFilePath <a class="header-anchor" href="#getfilepath" aria-label="Permalink to &quot;getFilePath&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getFilePath</span><span style="color:#A6ACCD;">(normalizedPath: string): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns the file:// path of this file</p><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rename" tabindex="-1">rename <a class="header-anchor" href="#rename" aria-label="Permalink to &quot;rename&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">rename</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> normalizedNewPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="copy" tabindex="-1">copy <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">copy</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> normalizedNewPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="exists" tabindex="-1">exists <a class="header-anchor" href="#exists" aria-label="Permalink to &quot;exists&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">exists</span><span style="color:#A6ACCD;">(normalizedPath: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sensitive</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">boolean</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="stat" tabindex="-1">stat <a class="header-anchor" href="#stat" aria-label="Permalink to &quot;stat&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">stat</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Stat </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">list</span><span style="color:#A6ACCD;">(normalizedPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ListedFiles</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getfullpath" tabindex="-1">getFullPath <a class="header-anchor" href="#getfullpath" aria-label="Permalink to &quot;getFullPath&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getFullPath</span><span style="color:#A6ACCD;">(normalizedPath: string): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="readlocalfile" tabindex="-1">readLocalFile <a class="header-anchor" href="#readlocalfile" aria-label="Permalink to &quot;readLocalFile&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">readLocalFile</span><span style="color:#A6ACCD;">(path: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ArrayBuffer</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="mkdir-1" tabindex="-1">mkdir <a class="header-anchor" href="#mkdir-1" aria-label="Permalink to &quot;mkdir&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">mkdir</span><span style="color:#A6ACCD;">(path: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',52),r=[t];function o(p,i,c,d,h,m){return e(),s("div",null,r)}const F=a(l,[["render",o]]);export{y as __pageData,F as default};
