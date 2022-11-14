import{_ as s,c as a,o as n,a as l}from"./app.fa4f22b0.js";const i=JSON.parse('{"title":"\u72B6\u6001\u5B57\u6BB5","description":"","frontmatter":{"title":"\u72B6\u6001\u5B57\u6BB5"},"headers":[{"level":2,"title":"\u524D\u7F6E\u51C6\u5907","slug":"\u524D\u7F6E\u51C6\u5907"},{"level":2,"title":"\u5B9A\u4E49 state effect","slug":"\u5B9A\u4E49-state-effect"},{"level":2,"title":"\u5B9A\u4E49\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5","slug":"\u5B9A\u4E49\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5"},{"level":2,"title":"\u6D3E\u53D1 state effects","slug":"\u6D3E\u53D1-state-effects"},{"level":2,"title":"\u4E0B\u4E00\u6B65","slug":"\u4E0B\u4E00\u6B65"}],"relativePath":"zh2.0/editor/extensions/state-fields.md","lastUpdated":1668437546000}'),p={name:"zh2.0/editor/extensions/state-fields.md"},o=l(`<h1 id="\u72B6\u6001\u5B57\u6BB5" tabindex="-1">\u72B6\u6001\u5B57\u6BB5 <a class="header-anchor" href="#\u72B6\u6001\u5B57\u6BB5" aria-hidden="true">#</a></h1><p>\u72B6\u6001\u5B57\u6BB5\u662F\u4E00\u4E2A\u53EF\u4EE5\u8BA9\u60A8\u7BA1\u7406\u81EA\u5B9A\u4E49\u7F16\u8F91\u5668\u72B6\u6001\u7684 <a href="./">\u7F16\u8F91\u5668\u6269\u5C55</a>\u3002\u6B64\u9875\u9762\u5C06\u5F15\u5BFC\u60A8\u901A\u8FC7\u5B9E\u73B0\u8BA1\u7B97\u5668\u6269\u5C55\u6765\u6784\u5EFA\u72B6\u6001\u5B57\u6BB5\u3002</p><p>\u8BE5\u8BA1\u7B97\u5668\u9700\u8981\u652F\u6301\u4ECE\u5F53\u524D\u72B6\u6001\u4E2D\u52A0\u51CF\u6570\u5B57\uFF0C\u5E76\u5728\u60A8\u60F3\u8981\u91CD\u65B0\u5F00\u59CB\u65F6\u91CD\u7F6E\u72B6\u6001\u3002</p><p>\u5728\u672C\u9875\u6700\u540E\uFF0C\u60A8\u5C06\u4F1A\u7406\u89E3\u6784\u5EFA\u72B6\u6001\u5B57\u6BB5\u7684\u57FA\u672C\u6982\u5FF5\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u9875\u65E8\u5728\u4E3A Obsidian \u63D2\u4EF6\u5F00\u53D1\u8005\u4EEC\u7CBE\u70BC CodeMirror 6 \u7684\u5B98\u65B9\u6587\u6863\u3002\u8981\u60F3\u83B7\u53D6\u66F4\u591A\u5173\u4E8E\u72B6\u6001\u5B57\u6BB5\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="https://codemirror.net/docs/guide/#state-fields" target="_blank" rel="noreferrer">State Fields</a> \u8FD9\u7BC7\u6587\u6863\u3002</p></div><h2 id="\u524D\u7F6E\u51C6\u5907" tabindex="-1">\u524D\u7F6E\u51C6\u5907 <a class="header-anchor" href="#\u524D\u7F6E\u51C6\u5907" aria-hidden="true">#</a></h2><ul><li>Basic understanding of <a href="./state-management.html">State management</a>.</li><li>\u5BF9\u4E8E <a href="./state-management.html">\u72B6\u6001\u7BA1\u7406</a> \u6709\u57FA\u672C\u4E86\u89E3\u3002</li></ul><h2 id="\u5B9A\u4E49-state-effect" tabindex="-1">\u5B9A\u4E49 state effect <a class="header-anchor" href="#\u5B9A\u4E49-state-effect" aria-hidden="true">#</a></h2><p>State effect \u63CF\u8FF0\u4E86\u60A8\u60F3\u8981\u505A\u51FA\u7684\u72B6\u6001\u53D8\u5316\u3002\u60A8\u53EF\u4EE5\u5C06\u5B83\u4EEC\u60F3\u8C61\u6210 class \u4E2D\u7684 \u65B9\u6CD5\u3002</p><p>\u5728\u8BA1\u7B97\u5668\u7684\u4F8B\u5B50\u4E2D\uFF0C\u60A8\u9700\u8981\u4E3A\u6BCF\u4E2A\u8BA1\u7B97\u64CD\u4F5C\u5B9A\u4E49\u4E00\u4E2A state effect:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> addEffect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StateEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> subtractEffect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StateEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> resetEffect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StateEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><code>&lt;&gt;</code> \u4E4B\u95F4\u7684\u7C7B\u578B\u5B9A\u4E49\u4E86 effect \u7684\u8F93\u5165\u7C7B\u578B\u3002\u6BD4\u5982\u60A8\u60F3\u8981\u52A0\u6216\u51CF\u7684\u6570\u5B57\u3002Reset effect \u4E0D\u9700\u8981\u4EFB\u4F55\u8F93\u5165\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u4E0D\u7528\u7BA1\u5B83\u3002</p><h2 id="\u5B9A\u4E49\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5" tabindex="-1">\u5B9A\u4E49\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5 <a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5" aria-hidden="true">#</a></h2><p>\u4E0E\u9884\u6599\u76F8\u53CD\u7684\u662F\uFF0C\u72B6\u6001\u5B57\u6BB5\u5B9E\u9645\u4E0A\u5E76\u4E0D <strong>\u5B58\u50A8</strong> \u72B6\u6001\u3002\u800C\u662F <strong>\u7BA1\u7406</strong> \u72B6\u6001\u3002\u72B6\u6001\u5B57\u6BB5\u83B7\u53D6\u5F53\u524D\u72B6\u6001\uFF0C\u5E94\u7528\u4EFB\u4F55 state effects, \u5E76\u8FD4\u56DE\u65B0\u7684\u72B6\u6001\u3002</p><p>\u72B6\u6001\u5B57\u6BB5\u5305\u542B\u6839\u636E transaction \u4E2D\u7684\u6548\u679C\u5E94\u7528\u6570\u5B66\u64CD\u4F5C\u7684\u8BA1\u7B97\u5668\u903B\u8F91\u3002\u4E00\u4E2A transaction \u53EF\u4EE5\u5305\u542B\u591A\u4E2A effects, \u6BD4\u5982\u4E24\u6B21\u76F8\u52A0\uFF0C\u72B6\u6001\u5B57\u6BB5\u9700\u8981\u4E00\u4E2A\u63A5\u4E00\u4E2A\u7684\u5E94\u7528\u5B83\u4EEC\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> calculatorField </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> StateField</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorState</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">oldState</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">transaction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Transaction</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldState</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transaction</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">effects</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">effect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">addEffect</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">newState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">effect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">subtractEffect</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">newState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">effect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resetEffect</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">newState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newState</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>create</code> \u65B9\u6CD5\u8FD4\u56DE\u8BA1\u7B97\u5668\u7684\u521D\u59CB\u503C\u3002</li><li><code>update</code> \u5305\u542B\u5E94\u7528 effects \u7684\u903B\u8F91\u3002</li><li><code>effect.is()</code> \u4F7F\u60A8\u53EF\u4EE5\u5728\u4F7F\u7528 effect \u4E4B\u524D\u68C0\u67E5\u5B83\u7684\u7C7B\u578B\u3002</li></ul><h2 id="\u6D3E\u53D1-state-effects" tabindex="-1">\u6D3E\u53D1 state effects <a class="header-anchor" href="#\u6D3E\u53D1-state-effects" aria-hidden="true">#</a></h2><p>\u8981\u60F3\u5C06 state effect \u5E94\u7528\u5230\u4E00\u4E2A\u72B6\u6001\u5B57\u6BB5\u4E2D\uFF0C\u60A8\u9700\u8981\u5C06\u5B83\u4F5C\u4E3A transaction \u7684\u4E00\u90E8\u5206\u6D3E\u53D1\u5230\u7F16\u8F91\u5668\u7A97\u53E3\u3002</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">effects</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [addEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#A6ACCD;">(num)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u60A8\u751A\u81F3\u53EF\u4EE5\u5B9A\u4E49\u4E00\u7EC4\u63D0\u4F9B\u66F4\u719F\u6089\u7684 API \u7684\u8F85\u52A9\u51FD\u6570:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    effects</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">addEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">subtract</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    effects</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">subtractEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reset</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorView</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    effects</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">resetEffect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0B\u4E00\u6B65" tabindex="-1">\u4E0B\u4E00\u6B65 <a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a></h2><p>\u4ECE\u60A8\u7684\u72B6\u6001\u5B57\u6BB5\u4E2D\u63D0\u4F9B <a href="./decorations.html">Decorations</a> \u4EE5\u66F4\u6539\u6587\u6863\u7684\u663E\u793A\u65B9\u5F0F\u3002</p>`,24),e=[o];function t(c,r,F,D,y,A){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{i as __pageData,f as default};