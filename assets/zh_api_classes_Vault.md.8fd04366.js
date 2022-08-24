import{_ as s,c as a,o as n,a as e}from"./app.741f1ead.js";const A=JSON.parse('{"title":"Vault","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"adapter","slug":"adapter"},{"level":3,"title":"configDir","slug":"configdir"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"getName","slug":"getname"},{"level":3,"title":"getAbstractFileByPath","slug":"getabstractfilebypath"},{"level":3,"title":"getRoot","slug":"getroot"},{"level":3,"title":"create","slug":"create"},{"level":3,"title":"createBinary","slug":"createbinary"},{"level":3,"title":"createFolder","slug":"createfolder"},{"level":3,"title":"read","slug":"read"},{"level":3,"title":"cachedRead","slug":"cachedread"},{"level":3,"title":"readBinary","slug":"readbinary"},{"level":3,"title":"getResourcePath","slug":"getresourcepath"},{"level":3,"title":"delete","slug":"delete"},{"level":3,"title":"trash","slug":"trash"},{"level":3,"title":"rename","slug":"rename"},{"level":3,"title":"modify","slug":"modify"},{"level":3,"title":"modifyBinary","slug":"modifybinary"},{"level":3,"title":"append","slug":"append"},{"level":3,"title":"copy","slug":"copy"},{"level":3,"title":"getAllLoadedFiles","slug":"getallloadedfiles"},{"level":3,"title":"recurseChildren","slug":"recursechildren"},{"level":3,"title":"getMarkdownFiles","slug":"getmarkdownfiles"},{"level":3,"title":"getFiles","slug":"getfiles"},{"level":3,"title":"on","slug":"on"},{"level":3,"title":"on","slug":"on-1"},{"level":3,"title":"on","slug":"on-2"},{"level":3,"title":"on","slug":"on-3"},{"level":3,"title":"on","slug":"on-4"}],"relativePath":"zh/api/classes/Vault.md","lastUpdated":1661305878000}'),l={name:"zh/api/classes/Vault.md"},o=e(`<h1 id="vault" tabindex="-1">Vault <a class="header-anchor" href="#vault" aria-hidden="true">#</a></h1><p>Extends <code>Events</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="adapter" tabindex="-1">adapter <a class="header-anchor" href="#adapter" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">adapter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> DataAdapter</span></span>
<span class="line"></span></code></pre></div><h3 id="configdir" tabindex="-1">configDir <a class="header-anchor" href="#configdir" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">configDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"></span></code></pre></div><p>Gets the path to the config folder. This value is typically <code>.obsidian</code> but it could be different.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getname" tabindex="-1">getName <a class="header-anchor" href="#getname" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Gets the name of the vault</p><h3 id="getabstractfilebypath" tabindex="-1">getAbstractFileByPath <a class="header-anchor" href="#getabstractfilebypath" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getAbstractFileByPath</span><span style="color:#A6ACCD;">(path: string): TAbstractFile </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre></div><h3 id="getroot" tabindex="-1">getRoot <a class="header-anchor" href="#getroot" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getRoot</span><span style="color:#A6ACCD;">(): TFolder</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(path: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TFile</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="createbinary" tabindex="-1">createBinary <a class="header-anchor" href="#createbinary" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createBinary</span><span style="color:#A6ACCD;">(path: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: ArrayBuffer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TFile</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="createfolder" tabindex="-1">createFolder <a class="header-anchor" href="#createfolder" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">createFolder</span><span style="color:#A6ACCD;">(path: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="read" tabindex="-1">read <a class="header-anchor" href="#read" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="cachedread" tabindex="-1">cachedRead <a class="header-anchor" href="#cachedread" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">cachedRead</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="readbinary" tabindex="-1">readBinary <a class="header-anchor" href="#readbinary" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">readBinary</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ArrayBuffer</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="getresourcepath" tabindex="-1">getResourcePath <a class="header-anchor" href="#getresourcepath" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getResourcePath</span><span style="color:#A6ACCD;">(file: TFile): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="delete" tabindex="-1">delete <a class="header-anchor" href="#delete" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">delete(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">force</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="trash" tabindex="-1">trash <a class="header-anchor" href="#trash" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">trash</span><span style="color:#A6ACCD;">(file: TAbstractFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> system: boolean): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><p>Tries to move to system trash. If that isn&#39;t successful/allowed, use local trash</p><h3 id="rename" tabindex="-1">rename <a class="header-anchor" href="#rename" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">rename</span><span style="color:#A6ACCD;">(file: TAbstractFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="modify" tabindex="-1">modify <a class="header-anchor" href="#modify" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">modify</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="modifybinary" tabindex="-1">modifyBinary <a class="header-anchor" href="#modifybinary" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">modifyBinary</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: ArrayBuffer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DataWriteOptions): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="copy" tabindex="-1">copy <a class="header-anchor" href="#copy" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">copy</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newPath: string): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TFile</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="getallloadedfiles" tabindex="-1">getAllLoadedFiles <a class="header-anchor" href="#getallloadedfiles" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getAllLoadedFiles</span><span style="color:#A6ACCD;">(): TAbstractFile[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="recursechildren" tabindex="-1">recurseChildren <a class="header-anchor" href="#recursechildren" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">static </span><span style="color:#82AAFF;">recurseChildren</span><span style="color:#A6ACCD;">(root: TFolder</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="getmarkdownfiles" tabindex="-1">getMarkdownFiles <a class="header-anchor" href="#getmarkdownfiles" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getMarkdownFiles</span><span style="color:#A6ACCD;">(): TFile[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="getfiles" tabindex="-1">getFiles <a class="header-anchor" href="#getfiles" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getFiles</span><span style="color:#A6ACCD;">(): TFile[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">create</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on-1" tabindex="-1">on <a class="header-anchor" href="#on-1" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">modify</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on-2" tabindex="-1">on <a class="header-anchor" href="#on-2" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on-3" tabindex="-1">on <a class="header-anchor" href="#on-3" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rename</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAbstractFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">oldPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on-4" tabindex="-1">on <a class="header-anchor" href="#on-4" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">closed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,65),t=[o];function p(r,c,i,d,y,F){return n(),a("div",null,t)}const h=s(l,[["render",p]]);export{A as __pageData,h as default};
