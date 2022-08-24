import{_ as s,c as n,o as a,a as e}from"./app.741f1ead.js";const F=JSON.parse('{"title":"Component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"load","slug":"load"},{"level":3,"title":"onload","slug":"onload"},{"level":3,"title":"unload","slug":"unload"},{"level":3,"title":"onunload","slug":"onunload"},{"level":3,"title":"addChild","slug":"addchild"},{"level":3,"title":"removeChild","slug":"removechild"},{"level":3,"title":"register","slug":"register"},{"level":3,"title":"registerEvent","slug":"registerevent"},{"level":3,"title":"registerDomEvent","slug":"registerdomevent"},{"level":3,"title":"registerDomEvent","slug":"registerdomevent-1"},{"level":3,"title":"registerDomEvent","slug":"registerdomevent-2"},{"level":3,"title":"registerScopeEvent","slug":"registerscopeevent"},{"level":3,"title":"registerInterval","slug":"registerinterval"}],"relativePath":"zh/api/classes/Component.md","lastUpdated":1661305878000}'),l={name:"zh/api/classes/Component.md"},o=e(`<h1 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Load this component and its children</p><h3 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Override this to load your component</p><h3 id="unload" tabindex="-1">unload <a class="header-anchor" href="#unload" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">unload</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Unload this component and its children</p><h3 id="onunload" tabindex="-1">onunload <a class="header-anchor" href="#onunload" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">onunload</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Override this to unload your component</p><h3 id="addchild" tabindex="-1">addChild <a class="header-anchor" href="#addchild" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">addChild</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>Adds a child component, loading it if this component is loaded</p><h3 id="removechild" tabindex="-1">removeChild <a class="header-anchor" href="#removechild" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">removeChild</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>Removes a child component, unloading it</p><h3 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">register</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Registers a callback to be called when unloading</p><h3 id="registerevent" tabindex="-1">registerEvent <a class="header-anchor" href="#registerevent" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerEvent</span><span style="color:#A6ACCD;">(eventRef: EventRef): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Registers an event to be detached when unloading</p><h3 id="registerdomevent" tabindex="-1">registerDomEvent <a class="header-anchor" href="#registerdomevent" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">registerDomEvent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WindowEventMap</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Window</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WindowEventMap</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddEventListenerOptions</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>Registers an DOM event to be detached when unloading</p><h3 id="registerdomevent-1" tabindex="-1">registerDomEvent <a class="header-anchor" href="#registerdomevent-1" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">registerDomEvent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DocumentEventMap</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Document</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DocumentEventMap</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddEventListenerOptions</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>Registers an DOM event to be detached when unloading</p><h3 id="registerdomevent-2" tabindex="-1">registerDomEvent <a class="header-anchor" href="#registerdomevent-2" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">registerDomEvent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElementEventMap</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">this</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElementEventMap</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddEventListenerOptions</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>Registers an DOM event to be detached when unloading</p><h3 id="registerscopeevent" tabindex="-1">registerScopeEvent <a class="header-anchor" href="#registerscopeevent" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerScopeEvent</span><span style="color:#A6ACCD;">(keyHandler: KeymapEventHandler): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><p>Registers an key event to be detached when unloading</p><h3 id="registerinterval" tabindex="-1">registerInterval <a class="header-anchor" href="#registerinterval" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">registerInterval</span><span style="color:#A6ACCD;">(id: number): number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Registers an interval (from setInterval) to be cancelled when unloading Use {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API</p>`,43),p=[o];function t(r,c,d,i,C,y){return a(),n("div",null,p)}const A=s(l,[["render",t]]);export{F as __pageData,A as default};
