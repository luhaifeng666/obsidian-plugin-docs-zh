import{_ as s,c as e,o as a,a as n}from"./app.741f1ead.js";const C=JSON.parse('{"title":"MarkdownPostProcessorContext","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"docId","slug":"docid"},{"level":3,"title":"sourcePath","slug":"sourcepath"},{"level":3,"title":"frontmatter","slug":"frontmatter"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"addChild","slug":"addchild"},{"level":3,"title":"getSectionInfo","slug":"getsectioninfo"}],"relativePath":"zh2.0/reference/typescript/interfaces/MarkdownPostProcessorContext.md","lastUpdated":1661305878000}'),t={name:"zh2.0/reference/typescript/interfaces/MarkdownPostProcessorContext.md"},o=n(`<h1 id="markdownpostprocessorcontext" tabindex="-1">MarkdownPostProcessorContext <a class="header-anchor" href="#markdownpostprocessorcontext" aria-hidden="true">#</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="docid" tabindex="-1">docId <a class="header-anchor" href="#docid" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">docId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre></div><h3 id="sourcepath" tabindex="-1">sourcePath <a class="header-anchor" href="#sourcepath" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">sourcePath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre></div><h3 id="frontmatter" tabindex="-1">frontmatter <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">frontmatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> any</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="addchild" tabindex="-1">addChild <a class="header-anchor" href="#addchild" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">addChild</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownRenderChild</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span>
<span class="line"></span></code></pre></div><p>Adds a child component that will have its lifecycle managed by the renderer.</p><p>Use this to add a dependent child to the renderer such that if the containerEl of the child is ever removed, the component&#39;s unload will be called.</p><h3 id="getsectioninfo" tabindex="-1">getSectionInfo <a class="header-anchor" href="#getsectioninfo" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">getSectionInfo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> MarkdownSectionInformation</span></span>
<span class="line"></span></code></pre></div><p>Gets the section information of this element at this point in time. Only call this function right before you need this information to get the most up-to-date version. This function may also return null in many circumstances; if you use it, you must be prepared to deal with nulls.</p>`,16),l=[o];function r(c,p,d,i,h,u){return a(),e("div",null,l)}const f=s(t,[["render",r]]);export{C as __pageData,f as default};
