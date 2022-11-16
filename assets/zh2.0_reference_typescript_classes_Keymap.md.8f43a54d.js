import{_ as s,c as e,o as a,a as n}from"./app.fa4f22b0.js";const A=JSON.parse('{"title":"Keymap","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"pushScope","slug":"pushscope"},{"level":3,"title":"popScope","slug":"popscope"},{"level":3,"title":"isModifier","slug":"ismodifier"},{"level":3,"title":"isModEvent","slug":"ismodevent"}],"relativePath":"zh2.0/reference/typescript/classes/Keymap.md","lastUpdated":1668610599000}'),o={name:"zh2.0/reference/typescript/classes/Keymap.md"},p=n(`<h1 id="keymap" tabindex="-1">Keymap <a class="header-anchor" href="#keymap" aria-hidden="true">#</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="pushscope" tabindex="-1">pushScope <a class="header-anchor" href="#pushscope" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">pushScope</span><span style="color:#A6ACCD;">(scope: Scope): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="popscope" tabindex="-1">popScope <a class="header-anchor" href="#popscope" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">popScope</span><span style="color:#A6ACCD;">(scope: Scope): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="ismodifier" tabindex="-1">isModifier <a class="header-anchor" href="#ismodifier" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">isModifier</span><span style="color:#A6ACCD;">(evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> TouchEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modifier: Modifier): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u68C0\u67E5\u5728\u6B64\u4E8B\u4EF6\u4E2D\u4FEE\u9970\u952E\u662F\u5426\u88AB\u6309\u4E0B\u3002</p><h3 id="ismodevent" tabindex="-1">isModEvent <a class="header-anchor" href="#ismodevent" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">isModEvent</span><span style="color:#A6ACCD;">(evt</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> UserEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u6309\u4E0B Cmd/Ctrl \u952E\u6216\u8005\u9F20\u6807\u4E2D\u952E\u65F6\u8FD4\u56DE true\u3002</p>`,14),t=[p];function l(c,r,i,d,h,u){return a(),e("div",null,t)}const D=s(o,[["render",l]]);export{A as __pageData,D as default};