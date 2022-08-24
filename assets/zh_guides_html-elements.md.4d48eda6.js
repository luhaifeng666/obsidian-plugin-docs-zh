import{_ as s,c as a,o as n,a as l}from"./app.741f1ead.js";const o="/obsidian-plugin-docs-zh/images/styles.png",d=JSON.parse('{"title":"HTML \u5143\u7D20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 createEl() \u521B\u5EFA HTML \u5143\u7D20","slug":"\u4F7F\u7528-createel-\u521B\u5EFA-html-\u5143\u7D20"},{"level":2,"title":"\u7ED9\u60A8\u7684\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F","slug":"\u7ED9\u60A8\u7684\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F"},{"level":3,"title":"\u52A8\u6001\u6837\u5F0F","slug":"\u52A8\u6001\u6837\u5F0F"}],"relativePath":"zh/guides/html-elements.md","lastUpdated":1661305878000}'),p={name:"zh/guides/html-elements.md"},e=l(`<h1 id="html-\u5143\u7D20" tabindex="-1">HTML \u5143\u7D20 <a class="header-anchor" href="#html-\u5143\u7D20" aria-hidden="true">#</a></h1><p>Obsidian API \u4E2D\u7684\u4E00\u4E9B\u7EC4\u4EF6\uFF0C\u6BD4\u5982 <a href="./settings.html">settings tab</a>\uFF0C\u4F1A\u66B4\u9732 <em>container elements\uFF08\u5BB9\u5668\u5143\u7D20\uFF09</em>:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PluginSettingTab</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obsidian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleSettingTab</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PluginSettingTab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExamplePlugin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">plugin</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">plugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">display</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">containerEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Container elements\uFF08\u5BB9\u5668\u5143\u7D20\uFF09 \u662F <code>HTMLElement</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728 Obsidian \u4E2D\u521B\u5EFA\u81EA\u5B9A\u4E49\u754C\u9762\u3002</p><h2 id="\u4F7F\u7528-createel-\u521B\u5EFA-html-\u5143\u7D20" tabindex="-1">\u4F7F\u7528 <code>createEl()</code> \u521B\u5EFA HTML \u5143\u7D20 <a class="header-anchor" href="#\u4F7F\u7528-createel-\u521B\u5EFA-html-\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A <code>HTMLElement</code>\uFF0C\u5176\u4E2D\u4E5F\u5305\u542B container element\uFF08\u5BB9\u5668\u5143\u7D20\uFF09\uFF0C\u5BF9\u5916\u66B4\u9732\u51FA <code>createEl()</code> \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u5728\u539F\u59CB\u5143\u7D20\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>HTMLElement</code>\u3002</p><p>\u4E0B\u4F8B\u4E2D\u5C55\u793A\u4E86\u60A8\u8BE5\u5982\u4F55\u5728 container element\uFF08\u5BB9\u5668\u5143\u7D20\uFF09\u4E2D\u6DFB\u52A0\u4E00\u4E2A <code>&lt;h1&gt;</code> \u6807\u7B7E\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">containerEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heading 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><code>createEl()</code> \u65B9\u6CD5\u8FD4\u56DE\u65B0\u5143\u7D20\u7684\u5F15\u7528\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> book </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> containerEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">How to Take Smart Notes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S\xF6nke Ahrens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7ED9\u60A8\u7684\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F" tabindex="-1">\u7ED9\u60A8\u7684\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F <a class="header-anchor" href="#\u7ED9\u60A8\u7684\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728\u63D2\u4EF6\u7684\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0 <code>styles.css</code> \u6587\u4EF6\u6765\u7ED9\u60A8\u7684\u63D2\u4EF6\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002\u73B0\u5728\u6765\u7ED9\u4E0A\u9762\u7684 book \u793A\u4F8B\u6DFB\u52A0\u4E00\u4E9B\u6837\u5F0F\uFF1A</p><p>:::: code-group ::: code-group-item styles.css</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">book</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--background-modifier-border</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">book__title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">book__author</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--text-muted</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>::: ::::</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>--background-modifier-border</code> \u4EE5\u53CA <code>--text-muted</code> \u90FD\u662F Obsidian \u6765\u5B9A\u4E49\u4EE5\u53CA\u4F7F\u7528\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noreferrer">CSS\u53D8\u91CF</a>\u3002\u5982\u679C\u60A8\u5C06\u8FD9\u4E9B\u53D8\u91CF\u5E94\u7528\u5230\u60A8\u7684\u6837\u5F0F\u4E2D\uFF0C\u90A3\u4E48\u5373\u4F7F\u7528\u6237\u4F7F\u7528\u4E0D\u540C\u7684\u4E3B\u9898\uFF0C\u60A8\u7684\u63D2\u4EF6\u770B\u8D77\u6765\u4E5F\u4F1A\u5F88\u68D2\uFF01\u{1F308}</p></div><p>\u8981\u60F3\u5728 HTML \u5143\u7D20\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u6837\u5F0F\uFF0C\u53EF\u4EE5\u7ED9\u5B83\u4EEC\u8BBE\u7F6E <code>cls</code> \u5C5E\u6027\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> book </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> containerEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">cls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">book</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">How to Take Smart Notes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">cls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">book__title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createEl</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S\xF6nke Ahrens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">cls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">book__author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\u5B83\u5DF2\u7ECF\u6BD4\u4E4B\u524D\u597D\u770B\u591A\u4E86! \u{1F389}</p><p><img src="`+o+`" alt="Styled book item"></p><h3 id="\u52A8\u6001\u6837\u5F0F" tabindex="-1">\u52A8\u6001\u6837\u5F0F <a class="header-anchor" href="#\u52A8\u6001\u6837\u5F0F" aria-hidden="true">#</a></h3><p>\u5982\u679C\u60A8\u60F3\u57FA\u4E8E\u7528\u6237\u7684\u8BBE\u7F6E\u6216\u8005\u5176\u4ED6\u503C\u6765\u6539\u53D8\u5143\u7D20\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>toggleClass</code> \u65B9\u6CD5\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toggleClass</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> status </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,23),t=[e];function c(r,D,F,y,C,A){return n(),a("div",null,t)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
