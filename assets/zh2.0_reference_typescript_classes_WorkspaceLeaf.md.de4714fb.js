import{_ as s,c as a,o as e,a as n}from"./app.0177d335.js";const F=JSON.parse('{"title":"WorkspaceLeaf","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"view","slug":"view"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"openFile","slug":"openfile"},{"level":3,"title":"open","slug":"open"},{"level":3,"title":"getViewState","slug":"getviewstate"},{"level":3,"title":"setViewState","slug":"setviewstate"},{"level":3,"title":"getEphemeralState","slug":"getephemeralstate"},{"level":3,"title":"setEphemeralState","slug":"setephemeralstate"},{"level":3,"title":"togglePinned","slug":"togglepinned"},{"level":3,"title":"setPinned","slug":"setpinned"},{"level":3,"title":"setGroupMember","slug":"setgroupmember"},{"level":3,"title":"setGroup","slug":"setgroup"},{"level":3,"title":"detach","slug":"detach"},{"level":3,"title":"getIcon","slug":"geticon"},{"level":3,"title":"getDisplayText","slug":"getdisplaytext"},{"level":3,"title":"onResize","slug":"onresize"},{"level":3,"title":"on","slug":"on"},{"level":3,"title":"on","slug":"on-1"}],"relativePath":"zh2.0/reference/typescript/classes/WorkspaceLeaf.md","lastUpdated":1662340628000}'),l={name:"zh2.0/reference/typescript/classes/WorkspaceLeaf.md"},t=n(`<h1 id="workspaceleaf" tabindex="-1">WorkspaceLeaf <a class="header-anchor" href="#workspaceleaf" aria-hidden="true">#</a></h1><p>Extends <code>WorkspaceItem</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> View</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="openfile" tabindex="-1">openFile <a class="header-anchor" href="#openfile" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">openFile</span><span style="color:#A6ACCD;">(file: TFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> openState</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> OpenViewState): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><p>By default, <code>openFile</code> will also make the leaf active. Pass in <code>{ active: false }</code> to override.</p><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(view: View): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">View</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="getviewstate" tabindex="-1">getViewState <a class="header-anchor" href="#getviewstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getViewState</span><span style="color:#A6ACCD;">(): ViewState</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="setviewstate" tabindex="-1">setViewState <a class="header-anchor" href="#setviewstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setViewState</span><span style="color:#A6ACCD;">(viewState: ViewState</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> eState</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="getephemeralstate" tabindex="-1">getEphemeralState <a class="header-anchor" href="#getephemeralstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getEphemeralState</span><span style="color:#A6ACCD;">(): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="setephemeralstate" tabindex="-1">setEphemeralState <a class="header-anchor" href="#setephemeralstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setEphemeralState</span><span style="color:#A6ACCD;">(state: any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="togglepinned" tabindex="-1">togglePinned <a class="header-anchor" href="#togglepinned" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">togglePinned</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="setpinned" tabindex="-1">setPinned <a class="header-anchor" href="#setpinned" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setPinned</span><span style="color:#A6ACCD;">(pinned: boolean): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="setgroupmember" tabindex="-1">setGroupMember <a class="header-anchor" href="#setgroupmember" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setGroupMember</span><span style="color:#A6ACCD;">(other: WorkspaceLeaf): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="setgroup" tabindex="-1">setGroup <a class="header-anchor" href="#setgroup" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setGroup</span><span style="color:#A6ACCD;">(group: string): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="detach" tabindex="-1">detach <a class="header-anchor" href="#detach" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">detach</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="geticon" tabindex="-1">getIcon <a class="header-anchor" href="#geticon" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getIcon</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="getdisplaytext" tabindex="-1">getDisplayText <a class="header-anchor" href="#getdisplaytext" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getDisplayText</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="onresize" tabindex="-1">onResize <a class="header-anchor" href="#onresize" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onResize</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinned-change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pinned</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="on-1" tabindex="-1">on <a class="header-anchor" href="#on-1" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">group-change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> any): EventRef</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,41),p=[t];function o(c,r,i,d,h,y){return e(),a("div",null,p)}const u=s(l,[["render",o]]);export{F as __pageData,u as default};