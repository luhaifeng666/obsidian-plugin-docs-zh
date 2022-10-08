import{_ as s,c as e,o as t,a as n}from"./app.81c6d9a5.js";const y=JSON.parse('{"title":"EditorSuggest","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"context","slug":"context"},{"level":3,"title":"limit","slug":"limit"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"setInstructions","slug":"setinstructions"},{"level":3,"title":"onTrigger","slug":"ontrigger"},{"level":3,"title":"getSuggestions","slug":"getsuggestions"}],"relativePath":"zh2.0/reference/typescript/classes/EditorSuggest.md","lastUpdated":1665192537000}'),a={name:"zh2.0/reference/typescript/classes/EditorSuggest.md"},o=n(`<h1 id="editorsuggest" tabindex="-1">EditorSuggest <a class="header-anchor" href="#editorsuggest" aria-hidden="true">#</a></h1><p>Extends <code>PopoverSuggest&lt;T&gt;</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(app: App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="context" tabindex="-1">context <a class="header-anchor" href="#context" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> EditorSuggestContext</span></span>
<span class="line"></span></code></pre></div><p>Current suggestion context, containing the result of <code>onTrigger</code>. This will be null any time the EditorSuggest is not supposed to run.</p><h3 id="limit" tabindex="-1">limit <a class="header-anchor" href="#limit" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span></span>
<span class="line"></span></code></pre></div><p>Override this to use a different limit for suggestion items</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setinstructions" tabindex="-1">setInstructions <a class="header-anchor" href="#setinstructions" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setInstructions</span><span style="color:#A6ACCD;">(instructions: Instruction[]): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="ontrigger" tabindex="-1">onTrigger <a class="header-anchor" href="#ontrigger" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">onTrigger</span><span style="color:#A6ACCD;">(cursor: EditorPosition</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> editor: Editor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> file: TFile): EditorSuggestTriggerInfo </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre></div><p>Based on the editor line and cursor position, determine if this EditorSuggest should be triggered at this moment. Typically, you would run a regular expression on the current line text before the cursor. Return null to indicate that this editor suggest is not supposed to be triggered.</p><p>Please be mindful of performance when implementing this function, as it will be triggered very often (on each keypress). Keep it simple, and return null as early as possible if you determine that it is not the right time.</p><h3 id="getsuggestions" tabindex="-1">getSuggestions <a class="header-anchor" href="#getsuggestions" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getSuggestions</span><span style="color:#A6ACCD;">(context: EditorSuggestContext): T[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">T[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><p>Generate suggestion items based on this context. Can be async, but preferably sync. When generating async suggestions, you should pass the context along.</p>`,21),r=[o];function l(i,p,c,d,g,u){return t(),e("div",null,r)}const A=s(a,[["render",l]]);export{y as __pageData,A as default};