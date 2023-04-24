import{_ as s,c as a,o as e,V as n}from"./chunks/framework.43aca675.js";const y=JSON.parse('{"title":"Editor","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/Editor.md","lastUpdated":1682328790000}'),l={name:"zh2.0/reference/typescript/classes/Editor.md"},o=n(`<h1 id="editor" tabindex="-1">Editor <a class="header-anchor" href="#editor" aria-label="Permalink to &quot;Editor&quot;">​</a></h1><p>连接CodeMirror 5和CodeMirror 6之间的通用接口。</p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getdoc" tabindex="-1">getDoc <a class="header-anchor" href="#getdoc" aria-label="Permalink to &quot;getDoc&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getDoc</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="refresh" tabindex="-1">refresh <a class="header-anchor" href="#refresh" aria-label="Permalink to &quot;refresh&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">refresh</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getvalue" tabindex="-1">getValue <a class="header-anchor" href="#getvalue" aria-label="Permalink to &quot;getValue&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getValue</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setvalue" tabindex="-1">setValue <a class="header-anchor" href="#setvalue" aria-label="Permalink to &quot;setValue&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">setValue</span><span style="color:#A6ACCD;">(content: string): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getline" tabindex="-1">getLine <a class="header-anchor" href="#getline" aria-label="Permalink to &quot;getLine&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getLine</span><span style="color:#A6ACCD;">(line: number): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Get the text at line (0-indexed)</p><h3 id="setline" tabindex="-1">setLine <a class="header-anchor" href="#setline" aria-label="Permalink to &quot;setLine&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setLine</span><span style="color:#A6ACCD;">(n: number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> text: string): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="linecount" tabindex="-1">lineCount <a class="header-anchor" href="#linecount" aria-label="Permalink to &quot;lineCount&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">lineCount</span><span style="color:#A6ACCD;">(): number</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Gets the number of lines in the document</p><h3 id="lastline" tabindex="-1">lastLine <a class="header-anchor" href="#lastline" aria-label="Permalink to &quot;lastLine&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">lastLine</span><span style="color:#A6ACCD;">(): number</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getselection" tabindex="-1">getSelection <a class="header-anchor" href="#getselection" aria-label="Permalink to &quot;getSelection&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getSelection</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="somethingselected" tabindex="-1">somethingSelected <a class="header-anchor" href="#somethingselected" aria-label="Permalink to &quot;somethingSelected&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">somethingSelected</span><span style="color:#A6ACCD;">(): boolean</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getrange" tabindex="-1">getRange <a class="header-anchor" href="#getrange" aria-label="Permalink to &quot;getRange&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getRange</span><span style="color:#A6ACCD;">(from: EditorPosition</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> to: EditorPosition): string</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="replaceselection" tabindex="-1">replaceSelection <a class="header-anchor" href="#replaceselection" aria-label="Permalink to &quot;replaceSelection&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">replaceSelection</span><span style="color:#A6ACCD;">(replacement: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> origin</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="replacerange" tabindex="-1">replaceRange <a class="header-anchor" href="#replacerange" aria-label="Permalink to &quot;replaceRange&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">replaceRange</span><span style="color:#A6ACCD;">(replacement: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> from: EditorPosition</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> to</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> EditorPosition</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> origin</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getcursor" tabindex="-1">getCursor <a class="header-anchor" href="#getcursor" aria-label="Permalink to &quot;getCursor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getCursor</span><span style="color:#A6ACCD;">(string</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">to</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">head</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">anchor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">): EditorPosition</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="listselections" tabindex="-1">listSelections <a class="header-anchor" href="#listselections" aria-label="Permalink to &quot;listSelections&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">listSelections</span><span style="color:#A6ACCD;">(): EditorSelection[]</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setcursor" tabindex="-1">setCursor <a class="header-anchor" href="#setcursor" aria-label="Permalink to &quot;setCursor&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setCursor</span><span style="color:#A6ACCD;">(pos: EditorPosition </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ch</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setselection" tabindex="-1">setSelection <a class="header-anchor" href="#setselection" aria-label="Permalink to &quot;setSelection&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">setSelection</span><span style="color:#A6ACCD;">(anchor: EditorPosition</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> head</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> EditorPosition): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setselections" tabindex="-1">setSelections <a class="header-anchor" href="#setselections" aria-label="Permalink to &quot;setSelections&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">setSelections</span><span style="color:#A6ACCD;">(ranges: EditorSelectionOrCaret[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> main</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="focus" tabindex="-1">focus <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;focus&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">focus</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="blur" tabindex="-1">blur <a class="header-anchor" href="#blur" aria-label="Permalink to &quot;blur&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">blur</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hasfocus" tabindex="-1">hasFocus <a class="header-anchor" href="#hasfocus" aria-label="Permalink to &quot;hasFocus&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">hasFocus</span><span style="color:#A6ACCD;">(): boolean</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="getscrollinfo" tabindex="-1">getScrollInfo <a class="header-anchor" href="#getscrollinfo" aria-label="Permalink to &quot;getScrollInfo&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">getScrollInfo</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number;</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: number;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="scrollto" tabindex="-1">scrollTo <a class="header-anchor" href="#scrollto" aria-label="Permalink to &quot;scrollTo&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="scrollintoview" tabindex="-1">scrollIntoView <a class="header-anchor" href="#scrollintoview" aria-label="Permalink to &quot;scrollIntoView&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">scrollIntoView</span><span style="color:#A6ACCD;">(range: EditorRange</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="undo" tabindex="-1">undo <a class="header-anchor" href="#undo" aria-label="Permalink to &quot;undo&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">undo</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="redo" tabindex="-1">redo <a class="header-anchor" href="#redo" aria-label="Permalink to &quot;redo&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">redo</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="exec" tabindex="-1">exec <a class="header-anchor" href="#exec" aria-label="Permalink to &quot;exec&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(command: EditorCommandName): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="transaction" tabindex="-1">transaction <a class="header-anchor" href="#transaction" aria-label="Permalink to &quot;transaction&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">transaction</span><span style="color:#A6ACCD;">(tx: EditorTransaction</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> origin</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="wordat" tabindex="-1">wordAt <a class="header-anchor" href="#wordat" aria-label="Permalink to &quot;wordAt&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">wordAt</span><span style="color:#A6ACCD;">(pos: EditorPosition): EditorRange </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="postooffset" tabindex="-1">posToOffset <a class="header-anchor" href="#postooffset" aria-label="Permalink to &quot;posToOffset&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">posToOffset</span><span style="color:#A6ACCD;">(pos: EditorPosition): number</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="offsettopos" tabindex="-1">offsetToPos <a class="header-anchor" href="#offsettopos" aria-label="Permalink to &quot;offsetToPos&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract </span><span style="color:#82AAFF;">offsetToPos</span><span style="color:#A6ACCD;">(offset: number): EditorPosition</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="processlines" tabindex="-1">processLines <a class="header-anchor" href="#processlines" aria-label="Permalink to &quot;processLines&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">processLines</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(read: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">lineText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> T </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> write: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">lineText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> EditorChange </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void,</span><span style="color:#A6ACCD;"> ignoreEmpty</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,71),t=[o];function r(p,i,c,d,u,h){return e(),a("div",null,t)}const b=s(l,[["render",r]]);export{y as __pageData,b as default};