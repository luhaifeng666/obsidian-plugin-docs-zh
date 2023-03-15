import{_ as s,c as a,o as e,U as n}from"./chunks/framework.064ffc6f.js";const C=JSON.parse('{"title":"MarkdownPostProcessorContext","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/interfaces/MarkdownPostProcessorContext.md","lastUpdated":1678847704000}'),o={name:"zh2.0/reference/typescript/interfaces/MarkdownPostProcessorContext.md"},t=n(`<h1 id="markdownpostprocessorcontext" tabindex="-1">MarkdownPostProcessorContext <a class="header-anchor" href="#markdownpostprocessorcontext" aria-label="Permalink to &quot;MarkdownPostProcessorContext&quot;">​</a></h1><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="docid" tabindex="-1">docId <a class="header-anchor" href="#docid" aria-label="Permalink to &quot;docId&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="sourcepath" tabindex="-1">sourcePath <a class="header-anchor" href="#sourcepath" aria-label="Permalink to &quot;sourcePath&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sourcePath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="frontmatter" tabindex="-1">frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;frontmatter&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">frontmatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> any</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addchild" tabindex="-1">addChild <a class="header-anchor" href="#addchild" aria-label="Permalink to &quot;addChild&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">addChild</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownRenderChild</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加一个子组件，其生命周期将由渲染器管理。</p><p>使用该方法在渲渲染器中添加一个子级，这样一来如果子级的 containerEl 一旦被移除， 那么组件的 unload 方法将被调用。</p><h3 id="getsectioninfo" tabindex="-1">getSectionInfo <a class="header-anchor" href="#getsectioninfo" aria-label="Permalink to &quot;getSectionInfo&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">getSectionInfo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> MarkdownSectionInformation</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>获取该元素在该时间点的 section 信息。</p><p>仅在您需要此信息之前调用此方法以获取最新的版本。</p><p>该方法在很多情况下也可能会返回 null；如果您使用了该方法，您必须对返回 null 的情况做兼容。</p>`,18),l=[t];function r(p,c,i,d,h,u){return e(),a("div",null,l)}const y=s(o,[["render",r]]);export{C as __pageData,y as default};
