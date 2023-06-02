import{_ as s,o as a,c as e,V as n}from"./chunks/framework.5378c159.js";const b=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"zh2.0/reference/typescript/classes/Menu.md","filePath":"zh2.0/reference/typescript/classes/Menu.md","lastUpdated":1685691620000}'),t={name:"zh2.0/reference/typescript/classes/Menu.md"},o=n('<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-label="Permalink to &quot;Menu&quot;">​</a></h1><p>继承自 <code>Component</code></p><p>实现 <code>CloseableComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="setnoicon" tabindex="-1">setNoIcon <a class="header-anchor" href="#setnoicon" aria-label="Permalink to &quot;setNoIcon&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setNoIcon</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setusenativemenu" tabindex="-1">setUseNativeMenu <a class="header-anchor" href="#setusenativemenu" aria-label="Permalink to &quot;setUseNativeMenu&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setUseNativeMenu</span><span style="color:#A6ACCD;">(useNativeMenu: boolean): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Force this menu to use native or DOM. (Only works on the desktop app)</p><h3 id="additem" tabindex="-1">addItem <a class="header-anchor" href="#additem" aria-label="Permalink to &quot;addItem&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">addItem</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MenuItem</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Adds a menu item. Only works when menu is not shown yet</p><h3 id="addseparator" tabindex="-1">addSeparator <a class="header-anchor" href="#addseparator" aria-label="Permalink to &quot;addSeparator&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">addSeparator</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Adds a separator. Only works when menu is not shown yet</p><h3 id="showatmouseevent" tabindex="-1">showAtMouseEvent <a class="header-anchor" href="#showatmouseevent" aria-label="Permalink to &quot;showAtMouseEvent&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">showAtMouseEvent</span><span style="color:#A6ACCD;">(evt: MouseEvent): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="showatposition" tabindex="-1">showAtPosition <a class="header-anchor" href="#showatposition" aria-label="Permalink to &quot;showAtPosition&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">showAtPosition</span><span style="color:#A6ACCD;">(position: MenuPositionDef</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> doc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> Document): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hide" tabindex="-1">hide <a class="header-anchor" href="#hide" aria-label="Permalink to &quot;hide&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">hide</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onhide" tabindex="-1">onHide <a class="header-anchor" href="#onhide" aria-label="Permalink to &quot;onHide&quot;">​</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onHide</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',27),l=[o];function r(p,i,c,d,h,u){return a(),e("div",null,l)}const y=s(t,[["render",r]]);export{b as __pageData,y as default};
