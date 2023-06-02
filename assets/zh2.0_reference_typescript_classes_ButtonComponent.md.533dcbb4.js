import{_ as s,o as a,c as e,V as n}from"./chunks/framework.5378c159.js";const m=JSON.parse('{"title":"ButtonComponent","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/ButtonComponent.md","filePath":"zh2.0/reference/typescript/classes/ButtonComponent.md","lastUpdated":1685691620000}'),t={name:"zh2.0/reference/typescript/classes/ButtonComponent.md"},l=n('<h1 id="buttoncomponent" tabindex="-1">ButtonComponent <a class="header-anchor" href="#buttoncomponent" aria-label="Permalink to &quot;ButtonComponent&quot;">​</a></h1><p>继承自 <code>BaseComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(containerEl: HTMLElement)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="buttonel" tabindex="-1">buttonEl <a class="header-anchor" href="#buttonel" aria-label="Permalink to &quot;buttonEl&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">buttonEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLButtonElement</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="setdisabled" tabindex="-1">setDisabled <a class="header-anchor" href="#setdisabled" aria-label="Permalink to &quot;setDisabled&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setDisabled</span><span style="color:#A6ACCD;">(disabled: boolean): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setcta" tabindex="-1">setCta <a class="header-anchor" href="#setcta" aria-label="Permalink to &quot;setCta&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setCta</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="removecta" tabindex="-1">removeCta <a class="header-anchor" href="#removecta" aria-label="Permalink to &quot;removeCta&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">removeCta</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setwarning" tabindex="-1">setWarning <a class="header-anchor" href="#setwarning" aria-label="Permalink to &quot;setWarning&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setWarning</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="settooltip" tabindex="-1">setTooltip <a class="header-anchor" href="#settooltip" aria-label="Permalink to &quot;setTooltip&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setTooltip</span><span style="color:#A6ACCD;">(tooltip: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> TooltipOptions): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setbuttontext" tabindex="-1">setButtonText <a class="header-anchor" href="#setbuttontext" aria-label="Permalink to &quot;setButtonText&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setButtonText</span><span style="color:#A6ACCD;">(name: string): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="seticon" tabindex="-1">setIcon <a class="header-anchor" href="#seticon" aria-label="Permalink to &quot;setIcon&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setIcon</span><span style="color:#A6ACCD;">(icon: IconName): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setclass" tabindex="-1">setClass <a class="header-anchor" href="#setclass" aria-label="Permalink to &quot;setClass&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setClass</span><span style="color:#A6ACCD;">(cls: string): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onclick" tabindex="-1">onClick <a class="header-anchor" href="#onclick" aria-label="Permalink to &quot;onClick&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onClick</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">evt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MouseEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',26),o=[l];function r(i,p,c,d,h,u){return a(),e("div",null,o)}const C=s(t,[["render",r]]);export{m as __pageData,C as default};
