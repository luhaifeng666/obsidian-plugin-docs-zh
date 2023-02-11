import{_ as s,c as e,o as a,a as n}from"./app.9c759d01.js";const m=JSON.parse('{"title":"SuggestModal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"limit","slug":"limit","link":"#limit","children":[]},{"level":3,"title":"emptyStateText","slug":"emptystatetext","link":"#emptystatetext","children":[]},{"level":3,"title":"inputEl","slug":"inputel","link":"#inputel","children":[]},{"level":3,"title":"resultContainerEl","slug":"resultcontainerel","link":"#resultcontainerel","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"setPlaceholder","slug":"setplaceholder","link":"#setplaceholder","children":[]},{"level":3,"title":"setInstructions","slug":"setinstructions","link":"#setinstructions","children":[]},{"level":3,"title":"onNoSuggestion","slug":"onnosuggestion","link":"#onnosuggestion","children":[]},{"level":3,"title":"selectSuggestion","slug":"selectsuggestion","link":"#selectsuggestion","children":[]},{"level":3,"title":"getSuggestions","slug":"getsuggestions","link":"#getsuggestions","children":[]},{"level":3,"title":"renderSuggestion","slug":"rendersuggestion","link":"#rendersuggestion","children":[]},{"level":3,"title":"onChooseSuggestion","slug":"onchoosesuggestion","link":"#onchoosesuggestion","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/SuggestModal.md","lastUpdated":1676080393000}'),t={name:"zh2.0/reference/typescript/classes/SuggestModal.md"},l=n(`<h1 id="suggestmodal" tabindex="-1">SuggestModal <a class="header-anchor" href="#suggestmodal" aria-hidden="true">#</a></h1><p>继承自 <code>Modal</code></p><p>实现 <code>ISuggestOwner&lt;T&gt;</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(app: App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="limit" tabindex="-1">limit <a class="header-anchor" href="#limit" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="emptystatetext" tabindex="-1">emptyStateText <a class="header-anchor" href="#emptystatetext" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">emptyStateText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="inputel" tabindex="-1">inputEl <a class="header-anchor" href="#inputel" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">inputEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLInputElement</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="resultcontainerel" tabindex="-1">resultContainerEl <a class="header-anchor" href="#resultcontainerel" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">resultContainerEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setplaceholder" tabindex="-1">setPlaceholder <a class="header-anchor" href="#setplaceholder" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setPlaceholder</span><span style="color:#A6ACCD;">(placeholder: string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setinstructions" tabindex="-1">setInstructions <a class="header-anchor" href="#setinstructions" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">setInstructions</span><span style="color:#A6ACCD;">(instructions: Instruction[]): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onnosuggestion" tabindex="-1">onNoSuggestion <a class="header-anchor" href="#onnosuggestion" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">onNoSuggestion</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="selectsuggestion" tabindex="-1">selectSuggestion <a class="header-anchor" href="#selectsuggestion" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">selectSuggestion</span><span style="color:#A6ACCD;">(value: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当用户选择时调用。</p><h3 id="getsuggestions" tabindex="-1">getSuggestions <a class="header-anchor" href="#getsuggestions" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getSuggestions</span><span style="color:#A6ACCD;">(query: string): T[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">T[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rendersuggestion" tabindex="-1">renderSuggestion <a class="header-anchor" href="#rendersuggestion" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">renderSuggestion</span><span style="color:#A6ACCD;">(value: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> el: HTMLElement): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将建议项渲染到 DOM 中。</p><h3 id="onchoosesuggestion" tabindex="-1">onChooseSuggestion <a class="header-anchor" href="#onchoosesuggestion" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">onChooseSuggestion</span><span style="color:#A6ACCD;">(item: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,31),i=[l];function r(o,p,c,d,u,h){return a(),e("div",null,i)}const b=s(t,[["render",r]]);export{m as __pageData,b as default};