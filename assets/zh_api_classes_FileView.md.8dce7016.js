import{_ as a,c as s,o as e,a as n}from"./app.741f1ead.js";const F=JSON.parse('{"title":"FileView","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"allowNoFile","slug":"allownofile"},{"level":3,"title":"file","slug":"file"},{"level":3,"title":"navigation","slug":"navigation"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"getDisplayText","slug":"getdisplaytext"},{"level":3,"title":"onload","slug":"onload"},{"level":3,"title":"getState","slug":"getstate"},{"level":3,"title":"setState","slug":"setstate"},{"level":3,"title":"onLoadFile","slug":"onloadfile"},{"level":3,"title":"onUnloadFile","slug":"onunloadfile"},{"level":3,"title":"onMoreOptionsMenu","slug":"onmoreoptionsmenu"},{"level":3,"title":"onHeaderMenu","slug":"onheadermenu"},{"level":3,"title":"canAcceptExtension","slug":"canacceptextension"}],"relativePath":"zh/api/classes/FileView.md","lastUpdated":1661305878000}'),l={name:"zh/api/classes/FileView.md"},t=n(`<h1 id="fileview" tabindex="-1">FileView <a class="header-anchor" href="#fileview" aria-hidden="true">#</a></h1><p>Extends <code>ItemView</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(leaf: WorkspaceLeaf)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="allownofile" tabindex="-1">allowNoFile <a class="header-anchor" href="#allownofile" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">allowNoFile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre></div><h3 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> TFile</span></span>
<span class="line"></span></code></pre></div><h3 id="navigation" tabindex="-1">navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">navigation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> boolean</span></span>
<span class="line"></span></code></pre></div><p>\u662F\u5426\u5C06\u89C6\u56FE\u7528\u4E8E\u5BFC\u822A\u3002</p><p>\u5982\u679C\u60A8\u7684\u89C6\u56FE\u662F\u4E0D\u7528\u4E8E\u5BFC\u822A\u7684\u9759\u6001\u89C6\u56FE\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3A false\u3002</p><p>\uFF08\u6BD4\u5982\uFF1A\u6587\u4EF6\u641C\u7D22\uFF0C\u65E5\u5386\u7B49\u7B49\u3002\uFF09</p><p>\u5982\u679C\u60A8\u7684\u89C6\u56FE\u6253\u5F00\u4E86\u4E00\u4E2A\u6587\u4EF6\u6216\u8005\u53EF\u4EE5\u4EE5\u5176\u4ED6\u65B9\u5F0F\u8FDB\u884C\u5BFC\u822A\uFF0C\u5C06\u5176\u8BBE\u7F6E\u4E3A true\u3002</p><p>\uFF08\u6BD4\u5982\uFF1AMarkdown \u7F16\u8F91\u5668, Kanban \u89C6\u56FE\uFF0CPDF \u89C6\u56FE\u7B49\u7B49\uFF09\u3002</p><p>\u6587\u4EF6\u89C6\u56FE\u53EF\u4EE5\u9ED8\u8BA4\u4E3A\u5BFC\u822A\u3002</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getdisplaytext" tabindex="-1">getDisplayText <a class="header-anchor" href="#getdisplaytext" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getDisplayText</span><span style="color:#A6ACCD;">(): string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Override this to load your component</p><h3 id="getstate" tabindex="-1">getState <a class="header-anchor" href="#getstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">getState</span><span style="color:#A6ACCD;">(): any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(state: any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result: ViewStateResult): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="onloadfile" tabindex="-1">onLoadFile <a class="header-anchor" href="#onloadfile" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onLoadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="onunloadfile" tabindex="-1">onUnloadFile <a class="header-anchor" href="#onunloadfile" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onUnloadFile</span><span style="color:#A6ACCD;">(file: TFile): </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;void&gt;;</span></span>
<span class="line"></span></code></pre></div><h3 id="onmoreoptionsmenu" tabindex="-1">onMoreOptionsMenu <a class="header-anchor" href="#onmoreoptionsmenu" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onMoreOptionsMenu</span><span style="color:#A6ACCD;">(menu: Menu): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="onheadermenu" tabindex="-1">onHeaderMenu <a class="header-anchor" href="#onheadermenu" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onHeaderMenu</span><span style="color:#A6ACCD;">(menu: Menu): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="canacceptextension" tabindex="-1">canAcceptExtension <a class="header-anchor" href="#canacceptextension" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">canAcceptExtension</span><span style="color:#A6ACCD;">(extension: string): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,37),o=[t];function p(i,c,r,d,h,u){return e(),s("div",null,o)}const y=a(l,[["render",p]]);export{F as __pageData,y as default};
