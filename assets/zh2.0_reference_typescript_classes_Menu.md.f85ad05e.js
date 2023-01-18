import{_ as s,c as e,o as a,a as n}from"./app.f15eeb53.js";const y=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"setNoIcon","slug":"setnoicon","link":"#setnoicon","children":[]},{"level":3,"title":"setUseNativeMenu","slug":"setusenativemenu","link":"#setusenativemenu","children":[]},{"level":3,"title":"addItem","slug":"additem","link":"#additem","children":[]},{"level":3,"title":"addSeparator","slug":"addseparator","link":"#addseparator","children":[]},{"level":3,"title":"showAtMouseEvent","slug":"showatmouseevent","link":"#showatmouseevent","children":[]},{"level":3,"title":"showAtPosition","slug":"showatposition","link":"#showatposition","children":[]},{"level":3,"title":"hide","slug":"hide","link":"#hide","children":[]},{"level":3,"title":"close","slug":"close","link":"#close","children":[]},{"level":3,"title":"onHide","slug":"onhide","link":"#onhide","children":[]}]}],"relativePath":"zh2.0/reference/typescript/classes/Menu.md","lastUpdated":1674021968000}'),l={name:"zh2.0/reference/typescript/classes/Menu.md"},t=n(`<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h1><p>继承自 <code>Component</code></p><p>实现 <code>CloseableComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setnoicon" tabindex="-1">setNoIcon <a class="header-anchor" href="#setnoicon" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">setNoIcon</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="setusenativemenu" tabindex="-1">setUseNativeMenu <a class="header-anchor" href="#setusenativemenu" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">setUseNativeMenu</span><span style="color:#A6ACCD;">(useNativeMenu: boolean): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Force this menu to use native or DOM. (Only works on the desktop app)</p><h3 id="additem" tabindex="-1">addItem <a class="header-anchor" href="#additem" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">addItem</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MenuItem</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Adds a menu item. Only works when menu is not shown yet</p><h3 id="addseparator" tabindex="-1">addSeparator <a class="header-anchor" href="#addseparator" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">addSeparator</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Adds a separator. Only works when menu is not shown yet</p><h3 id="showatmouseevent" tabindex="-1">showAtMouseEvent <a class="header-anchor" href="#showatmouseevent" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">showAtMouseEvent</span><span style="color:#A6ACCD;">(evt: MouseEvent): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="showatposition" tabindex="-1">showAtPosition <a class="header-anchor" href="#showatposition" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">showAtPosition</span><span style="color:#A6ACCD;">(position: MenuPositionDef</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> doc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> Document): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hide" tabindex="-1">hide <a class="header-anchor" href="#hide" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">hide</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="onhide" tabindex="-1">onHide <a class="header-anchor" href="#onhide" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">onHide</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,27),o=[t];function i(p,r,c,d,h,u){return a(),e("div",null,o)}const b=s(l,[["render",i]]);export{y as __pageData,b as default};
