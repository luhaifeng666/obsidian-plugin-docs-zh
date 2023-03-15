import{_ as a,c as s,o as e,U as n}from"./chunks/framework.064ffc6f.js";const m=JSON.parse('{"title":"ColorComponent","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/ColorComponent.md","lastUpdated":1678847704000}'),l={name:"zh2.0/reference/typescript/classes/ColorComponent.md"},t=n(`<h1 id="colorcomponent" tabindex="-1">ColorComponent <a class="header-anchor" href="#colorcomponent" aria-label="Permalink to &quot;ColorComponent&quot;">​</a></h1><p>继承自 <code>ValueComponent&lt;string&gt;</code></p><p>选择颜色的组件。色值的默认格式是由哈希前缀加上6位16进制数组成的字符串，比如 <code>#000000</code>;</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(containerEl: HTMLElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getvalue" tabindex="-1">getValue <a class="header-anchor" href="#getvalue" aria-label="Permalink to &quot;getValue&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getValue</span><span style="color:#A6ACCD;">(): HexString</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getvaluergb" tabindex="-1">getValueRgb <a class="header-anchor" href="#getvaluergb" aria-label="Permalink to &quot;getValueRgb&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getValueRgb</span><span style="color:#A6ACCD;">(): RGB</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getvaluehsl" tabindex="-1">getValueHsl <a class="header-anchor" href="#getvaluehsl" aria-label="Permalink to &quot;getValueHsl&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getValueHsl</span><span style="color:#A6ACCD;">(): HSL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setvalue" tabindex="-1">setValue <a class="header-anchor" href="#setvalue" aria-label="Permalink to &quot;setValue&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setValue</span><span style="color:#A6ACCD;">(value: HexString): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setvaluergb" tabindex="-1">setValueRgb <a class="header-anchor" href="#setvaluergb" aria-label="Permalink to &quot;setValueRgb&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setValueRgb</span><span style="color:#A6ACCD;">(rgb: RGB): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setvaluehsl" tabindex="-1">setValueHsl <a class="header-anchor" href="#setvaluehsl" aria-label="Permalink to &quot;setValueHsl&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setValueHsl</span><span style="color:#A6ACCD;">(hsl: HSL): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onchange" tabindex="-1">onChange <a class="header-anchor" href="#onchange" aria-label="Permalink to &quot;onChange&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onChange</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,20),o=[t];function r(p,i,c,d,u,h){return e(),s("div",null,o)}const g=a(l,[["render",r]]);export{m as __pageData,g as default};
