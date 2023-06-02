import{_ as s,o as e,c as a,V as o}from"./chunks/framework.5378c159.js";const A=JSON.parse('{"title":"MarkdownPreviewRenderer","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/MarkdownPreviewRenderer.md","filePath":"zh2.0/reference/typescript/classes/MarkdownPreviewRenderer.md","lastUpdated":1685691620000}'),n={name:"zh2.0/reference/typescript/classes/MarkdownPreviewRenderer.md"},r=o('<h1 id="markdownpreviewrenderer" tabindex="-1">MarkdownPreviewRenderer <a class="header-anchor" href="#markdownpreviewrenderer" aria-label="Permalink to &quot;MarkdownPreviewRenderer&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="registerpostprocessor" tabindex="-1">registerPostProcessor <a class="header-anchor" href="#registerpostprocessor" aria-label="Permalink to &quot;registerPostProcessor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">registerPostProcessor</span><span style="color:#A6ACCD;">(postProcessor: MarkdownPostProcessor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sortOrder</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="unregisterpostprocessor" tabindex="-1">unregisterPostProcessor <a class="header-anchor" href="#unregisterpostprocessor" aria-label="Permalink to &quot;unregisterPostProcessor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">unregisterPostProcessor</span><span style="color:#A6ACCD;">(postProcessor: MarkdownPostProcessor): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="createcodeblockpostprocessor" tabindex="-1">createCodeBlockPostProcessor <a class="header-anchor" href="#createcodeblockpostprocessor" aria-label="Permalink to &quot;createCodeBlockPostProcessor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">createCodeBlockPostProcessor</span><span style="color:#A6ACCD;">(language: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownPostProcessorContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownPostProcessorContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',10),t=[r];function l(p,c,i,d,C,y){return e(),a("div",null,t)}const F=s(n,[["render",l]]);export{A as __pageData,F as default};
