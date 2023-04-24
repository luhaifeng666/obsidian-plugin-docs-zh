import{_ as e,c as r,o as s,V as o}from"./chunks/framework.43aca675.js";const P=JSON.parse('{"title":"MarkdownPostProcessor","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/interfaces/MarkdownPostProcessor.md","lastUpdated":1682328790000}'),a={name:"zh2.0/reference/typescript/interfaces/MarkdownPostProcessor.md"},t=o('<h1 id="markdownpostprocessor" tabindex="-1">MarkdownPostProcessor <a class="header-anchor" href="#markdownpostprocessor" aria-label="Permalink to &quot;MarkdownPostProcessor&quot;">​</a></h1><p>后处理器接收一个 element，它是预览的一部分。</p><p>后处理器可以改变 DOM 以呈现各种事物，例如 mermaid 图、乳胶方程式或自定义控件。</p><p>如果您的后处理器需要生命周期的管理，比如在当前 element 从应用中被移除时清除一个，杀死子进程等等, 查看 {@link MarkdownPostProcessorContext#addChild}。</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="sortorder" tabindex="-1">sortOrder <a class="header-anchor" href="#sortorder" aria-label="Permalink to &quot;sortOrder&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sortOrder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可选的排序顺序数值。默认值为0。数值越小，优先级越高。</p>',8),n=[t];function c(p,d,i,l,h,_){return s(),r("div",null,n)}const u=e(a,[["render",c]]);export{P as __pageData,u as default};