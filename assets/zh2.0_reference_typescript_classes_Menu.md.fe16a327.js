import{_ as s,c as a,o as e,a as n}from"./app.9e04c06c.js";const y=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"setNoIcon","slug":"setnoicon"},{"level":3,"title":"setUseNativeMenu","slug":"setusenativemenu"},{"level":3,"title":"addItem","slug":"additem"},{"level":3,"title":"addSeparator","slug":"addseparator"},{"level":3,"title":"showAtMouseEvent","slug":"showatmouseevent"},{"level":3,"title":"showAtPosition","slug":"showatposition"},{"level":3,"title":"hide","slug":"hide"},{"level":3,"title":"close","slug":"close"},{"level":3,"title":"onHide","slug":"onhide"}],"relativePath":"zh2.0/reference/typescript/classes/Menu.md","lastUpdated":1671420118000}'),t={name:"zh2.0/reference/typescript/classes/Menu.md"},o=n(`<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h1><p>\u7EE7\u627F\u81EA <code>Component</code></p><p>\u5B9E\u73B0 <code>CloseableComponent</code></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setnoicon" tabindex="-1">setNoIcon <a class="header-anchor" href="#setnoicon" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setNoIcon</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="setusenativemenu" tabindex="-1">setUseNativeMenu <a class="header-anchor" href="#setusenativemenu" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setUseNativeMenu</span><span style="color:#A6ACCD;">(useNativeMenu: boolean): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><p>Force this menu to use native or DOM. (Only works on the desktop app)</p><h3 id="additem" tabindex="-1">addItem <a class="header-anchor" href="#additem" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addItem</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MenuItem</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><p>Adds a menu item. Only works when menu is not shown yet</p><h3 id="addseparator" tabindex="-1">addSeparator <a class="header-anchor" href="#addseparator" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addSeparator</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><p>Adds a separator. Only works when menu is not shown yet</p><h3 id="showatmouseevent" tabindex="-1">showAtMouseEvent <a class="header-anchor" href="#showatmouseevent" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">showAtMouseEvent</span><span style="color:#A6ACCD;">(evt: MouseEvent): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="showatposition" tabindex="-1">showAtPosition <a class="header-anchor" href="#showatposition" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">showAtPosition</span><span style="color:#A6ACCD;">(position: MenuPositionDef</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> doc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> Document): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="hide" tabindex="-1">hide <a class="header-anchor" href="#hide" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">hide</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h3 id="onhide" tabindex="-1">onHide <a class="header-anchor" href="#onhide" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onHide</span><span style="color:#A6ACCD;">(callback: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div>`,27),l=[o];function p(c,r,i,d,h,u){return e(),a("div",null,l)}const D=s(t,[["render",p]]);export{y as __pageData,D as default};
