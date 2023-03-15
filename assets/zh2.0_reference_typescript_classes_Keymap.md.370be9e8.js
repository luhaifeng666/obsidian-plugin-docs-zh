import{_ as s,c as e,o as a,U as n}from"./chunks/framework.064ffc6f.js";const y=JSON.parse('{"title":"Keymap","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/Keymap.md","lastUpdated":1678847704000}'),o={name:"zh2.0/reference/typescript/classes/Keymap.md"},t=n(`<h1 id="keymap" tabindex="-1">Keymap <a class="header-anchor" href="#keymap" aria-label="Permalink to &quot;Keymap&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="pushscope" tabindex="-1">pushScope <a class="header-anchor" href="#pushscope" aria-label="Permalink to &quot;pushScope&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pushScope</span><span style="color:#A6ACCD;">(scope: Scope): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="popscope" tabindex="-1">popScope <a class="header-anchor" href="#popscope" aria-label="Permalink to &quot;popScope&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">popScope</span><span style="color:#A6ACCD;">(scope: Scope): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ismodifier" tabindex="-1">isModifier <a class="header-anchor" href="#ismodifier" aria-label="Permalink to &quot;isModifier&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">isModifier</span><span style="color:#A6ACCD;">(evt: MouseEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> TouchEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> KeyboardEvent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modifier: Modifier): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>检查在此事件中修饰键是否被按下。</p><h3 id="ismodevent" tabindex="-1">isModEvent <a class="header-anchor" href="#ismodevent" aria-label="Permalink to &quot;isModEvent&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">isModEvent</span><span style="color:#A6ACCD;">(evt</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> UserEvent </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">): PaneType </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Translates an event into the type of pane that should open. Returns &#39;tab&#39; if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent. Returns &#39;split&#39; if Cmd/Ctrl+Alt is pressed. Returns &#39;window&#39; if Cmd/Ctrl+Alt+Shift is pressed.</p>`,14),l=[t];function p(r,i,c,d,h,u){return a(),e("div",null,l)}const b=s(o,[["render",p]]);export{y as __pageData,b as default};
