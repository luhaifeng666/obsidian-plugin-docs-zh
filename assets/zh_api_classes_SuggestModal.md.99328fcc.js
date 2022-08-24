import{_ as s,c as e,o as a,a as n}from"./app.741f1ead.js";const y=JSON.parse('{"title":"SuggestModal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"limit","slug":"limit"},{"level":3,"title":"emptyStateText","slug":"emptystatetext"},{"level":3,"title":"inputEl","slug":"inputel"},{"level":3,"title":"resultContainerEl","slug":"resultcontainerel"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"setPlaceholder","slug":"setplaceholder"},{"level":3,"title":"setInstructions","slug":"setinstructions"},{"level":3,"title":"onNoSuggestion","slug":"onnosuggestion"},{"level":3,"title":"selectSuggestion","slug":"selectsuggestion"},{"level":3,"title":"getSuggestions","slug":"getsuggestions"},{"level":3,"title":"renderSuggestion","slug":"rendersuggestion"},{"level":3,"title":"onChooseSuggestion","slug":"onchoosesuggestion"}],"relativePath":"zh/api/classes/SuggestModal.md","lastUpdated":1661305878000}'),t={name:"zh/api/classes/SuggestModal.md"},l=n(`<h1 id="suggestmodal" tabindex="-1">SuggestModal <a class="header-anchor" href="#suggestmodal" aria-hidden="true">#</a></h1><p>Extends <code>Modal</code></p><p>Implements <code>ISuggestOwner&lt;T&gt;</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(app: App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="limit" tabindex="-1">limit <a class="header-anchor" href="#limit" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span></span>
<span class="line"></span></code></pre></div><h3 id="emptystatetext" tabindex="-1">emptyStateText <a class="header-anchor" href="#emptystatetext" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">emptyStateText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre></div><h3 id="inputel" tabindex="-1">inputEl <a class="header-anchor" href="#inputel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">inputEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLInputElement</span></span>
<span class="line"></span></code></pre></div><h3 id="resultcontainerel" tabindex="-1">resultContainerEl <a class="header-anchor" href="#resultcontainerel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">resultContainerEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setplaceholder" tabindex="-1">setPlaceholder <a class="header-anchor" href="#setplaceholder" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setPlaceholder</span><span style="color:#A6ACCD;">(placeholder: string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="setinstructions" tabindex="-1">setInstructions <a class="header-anchor" href="#setinstructions" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setInstructions</span><span style="color:#A6ACCD;">(instructions: Instruction[]): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="onnosuggestion" tabindex="-1">onNoSuggestion <a class="header-anchor" href="#onnosuggestion" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onNoSuggestion</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="selectsuggestion" tabindex="-1">selectSuggestion <a class="header-anchor" href="#selectsuggestion" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">selectSuggestion</span><span style="color:#A6ACCD;">(value: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Called when the user makes a selection.</p><h3 id="getsuggestions" tabindex="-1">getSuggestions <a class="header-anchor" href="#getsuggestions" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getSuggestions</span><span style="color:#A6ACCD;">(query: string): T[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">T[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="rendersuggestion" tabindex="-1">renderSuggestion <a class="header-anchor" href="#rendersuggestion" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">renderSuggestion</span><span style="color:#A6ACCD;">(value: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> el: HTMLElement): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Render the suggestion item into DOM.</p><h3 id="onchoosesuggestion" tabindex="-1">onChooseSuggestion <a class="header-anchor" href="#onchoosesuggestion" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">onChooseSuggestion</span><span style="color:#A6ACCD;">(item: T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,31),o=[l];function p(r,c,i,d,u,g){return a(),e("div",null,o)}const A=s(t,[["render",p]]);export{y as __pageData,A as default};
