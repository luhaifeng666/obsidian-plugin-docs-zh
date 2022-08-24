import{_ as s,c as a,o as n,a as e}from"./app.741f1ead.js";const F=JSON.parse('{"title":"Setting","description":"","frontmatter":{},"headers":[{"level":2,"title":"Constructor","slug":"constructor"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"settingEl","slug":"settingel"},{"level":3,"title":"infoEl","slug":"infoel"},{"level":3,"title":"nameEl","slug":"nameel"},{"level":3,"title":"descEl","slug":"descel"},{"level":3,"title":"controlEl","slug":"controlel"},{"level":3,"title":"components","slug":"components"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"setName","slug":"setname"},{"level":3,"title":"setDesc","slug":"setdesc"},{"level":3,"title":"setClass","slug":"setclass"},{"level":3,"title":"setTooltip","slug":"settooltip"},{"level":3,"title":"setHeading","slug":"setheading"},{"level":3,"title":"setDisabled","slug":"setdisabled"},{"level":3,"title":"addButton","slug":"addbutton"},{"level":3,"title":"addExtraButton","slug":"addextrabutton"},{"level":3,"title":"addToggle","slug":"addtoggle"},{"level":3,"title":"addText","slug":"addtext"},{"level":3,"title":"addSearch","slug":"addsearch"},{"level":3,"title":"addTextArea","slug":"addtextarea"},{"level":3,"title":"addMomentFormat","slug":"addmomentformat"},{"level":3,"title":"addDropdown","slug":"adddropdown"},{"level":3,"title":"addSlider","slug":"addslider"},{"level":3,"title":"then","slug":"then"},{"level":3,"title":"clear","slug":"clear"}],"relativePath":"zh/api/classes/Setting.md","lastUpdated":1661305878000}'),l={name:"zh/api/classes/Setting.md"},t=e(`<h1 id="setting" tabindex="-1">Setting <a class="header-anchor" href="#setting" aria-hidden="true">#</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">constructor</span><span style="color:#A6ACCD;">(containerEl: HTMLElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="settingel" tabindex="-1">settingEl <a class="header-anchor" href="#settingel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">settingEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="infoel" tabindex="-1">infoEl <a class="header-anchor" href="#infoel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">infoEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="nameel" tabindex="-1">nameEl <a class="header-anchor" href="#nameel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">nameEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="descel" tabindex="-1">descEl <a class="header-anchor" href="#descel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">descEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="controlel" tabindex="-1">controlEl <a class="header-anchor" href="#controlel" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">controlEl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> HTMLElement</span></span>
<span class="line"></span></code></pre></div><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BaseComponent[]</span></span>
<span class="line"></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="setname" tabindex="-1">setName <a class="header-anchor" href="#setname" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setName</span><span style="color:#A6ACCD;">(name: string </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> DocumentFragment): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="setdesc" tabindex="-1">setDesc <a class="header-anchor" href="#setdesc" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setDesc</span><span style="color:#A6ACCD;">(desc: string </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> DocumentFragment): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="setclass" tabindex="-1">setClass <a class="header-anchor" href="#setclass" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setClass</span><span style="color:#A6ACCD;">(cls: string): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="settooltip" tabindex="-1">setTooltip <a class="header-anchor" href="#settooltip" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setTooltip</span><span style="color:#A6ACCD;">(tooltip: string): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="setheading" tabindex="-1">setHeading <a class="header-anchor" href="#setheading" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setHeading</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="setdisabled" tabindex="-1">setDisabled <a class="header-anchor" href="#setdisabled" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">setDisabled</span><span style="color:#A6ACCD;">(disabled: boolean): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addbutton" tabindex="-1">addButton <a class="header-anchor" href="#addbutton" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addButton</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ButtonComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addextrabutton" tabindex="-1">addExtraButton <a class="header-anchor" href="#addextrabutton" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addExtraButton</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExtraButtonComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addtoggle" tabindex="-1">addToggle <a class="header-anchor" href="#addtoggle" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addToggle</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ToggleComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addtext" tabindex="-1">addText <a class="header-anchor" href="#addtext" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addText</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TextComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addsearch" tabindex="-1">addSearch <a class="header-anchor" href="#addsearch" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addSearch</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addtextarea" tabindex="-1">addTextArea <a class="header-anchor" href="#addtextarea" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addTextArea</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TextAreaComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addmomentformat" tabindex="-1">addMomentFormat <a class="header-anchor" href="#addmomentformat" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addMomentFormat</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MomentFormatComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="adddropdown" tabindex="-1">addDropdown <a class="header-anchor" href="#adddropdown" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addDropdown</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DropdownComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="addslider" tabindex="-1">addSlider <a class="header-anchor" href="#addslider" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">addSlider</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SliderComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><h3 id="then" tabindex="-1">then <a class="header-anchor" href="#then" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(cb: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">setting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">this</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> any): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div><p>Facilitates chaining</p><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">(): </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span></code></pre></div>`,52),o=[t];function p(c,r,d,i,h,y){return n(),a("div",null,o)}const A=s(l,[["render",p]]);export{F as __pageData,A as default};
